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

async function main() {
  await access(storagePath).catch(() => {
    throw new Error(
      `Missing auth state at ${storagePath}. Run \"npm run bullsconnect:auth\" first.`
    );
  });

  const browser = await chromium.launch({ headless: true });

  try {
    const context = await browser.newContext({ storageState: storagePath });

    const response = await context.request.get(membersApiUrl);

    if (!response.ok()) {
      throw new Error(
        `BullsConnect request failed: ${response.status()} ${response.statusText()}`
      );
    }

    const payload = await response.json();
    const count = extractCount(payload);

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
