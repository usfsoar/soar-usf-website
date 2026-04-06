import { chromium } from "playwright";
import { access, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const membersApiUrl =
  "https://bullsconnect.usf.edu/mobile_ws/v17/mobile_group_page_members?range=0&limit=10&order=&search_word=&param=58509";
const storagePath =
  process.env.BULLSCONNECT_STORAGE_PATH ?? ".auth/bullsconnect-storage.json";
const outputPath =
  process.env.BULLSCONNECT_COUNT_OUTPUT ?? "data/soar-member-count.json";

function extractCount(payload) {
  const raw = Array.isArray(payload) ? payload?.[0]?.counter : undefined;
  const count = Number.parseInt(String(raw ?? ""), 10);

  if (!Number.isFinite(count) || count < 0) {
    throw new Error("Unable to parse counter from BullsConnect response.");
  }

  return count;
}

function extractCountFromText(responseText) {
  const match = responseText.match(/"counter"\s*:\s*"?(\d+)"?/i);
  if (!match) return null;

  const count = Number.parseInt(match[1], 10);
  return Number.isFinite(count) && count >= 0 ? count : null;
}

function parsePayloadFromText(responseText) {
  try {
    return JSON.parse(responseText);
  } catch {
    // Some upstream responses occasionally append extra characters after valid JSON.
    const arrayStart = responseText.indexOf("[");
    const arrayEnd = responseText.lastIndexOf("]");
    if (arrayStart !== -1 && arrayEnd > arrayStart) {
      return JSON.parse(responseText.slice(arrayStart, arrayEnd + 1));
    }

    const objectStart = responseText.indexOf("{");
    const objectEnd = responseText.lastIndexOf("}");
    if (objectStart !== -1 && objectEnd > objectStart) {
      return JSON.parse(responseText.slice(objectStart, objectEnd + 1));
    }

    throw new Error("Response body is not valid JSON.");
  }
}

async function main() {
  await access(storagePath).catch(() => {
    throw new Error(
      `Missing auth state at ${storagePath}. Run \"npm run bullsconnect:auth\" first.`
    );
  });

  const browser = await chromium.launch({ headless: true });

  try {
    const context = await browser.newContext({ storageState: storagePath });

    const response = await context.request.get(membersApiUrl, {
      headers: {
        Accept: "application/json, text/plain, */*",
      },
    });

    if (!response.ok()) {
      throw new Error(
        `BullsConnect request failed: ${response.status()} ${response.statusText()}`
      );
    }

    const responseText = await response.text();

    if (/"logout"\s*:\s*true/i.test(responseText)) {
      throw new Error(
        "BullsConnect session is expired in CI (response contains logout=true). Re-run npm run bullsconnect:auth locally and update the BULLSCONNECT_STORAGE_STATE_B64 GitHub secret."
      );
    }

    const countFromText = extractCountFromText(responseText);

    let count = countFromText;
    if (count == null) {
      const payload = parsePayloadFromText(responseText);

      if (!Array.isArray(payload)) {
        const compact = responseText.slice(0, 200).replace(/\s+/g, " ").trim();
        if (compact.toLowerCase().includes("mobile_auto_login") || compact.toLowerCase().includes("login")) {
          throw new Error(
            "BullsConnect session appears expired in CI. Refresh BULLSCONNECT_STORAGE_STATE_B64 from a new local auth session."
          );
        }

        throw new Error(`Unexpected BullsConnect response format. Body preview: ${compact}`);
      }

      count = extractCount(payload);
    }

    if (count == null) {
      const compact = responseText.slice(0, 200).replace(/\s+/g, " ").trim();
      throw new Error(`Unable to extract member count from BullsConnect response. Body preview: ${compact}`);
    }

    const result = {
      count,
      updatedAt: new Date().toISOString(),
      source: "bullsconnect",
    };

    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, `${JSON.stringify(result, null, 2)}\n`, "utf-8");

    console.log(`Updated ${outputPath} with count=${count}`);
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
