import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const username = process.env.INSTAGRAM_USERNAME ?? "usfsoar";
const outputPath =
  process.env.INSTAGRAM_COUNT_OUTPUT ?? "data/instagram-follower-count.json";

function parseToken(html) {
  const match = html.match(/token:\s*"([^"]+)"/);
  return match?.[1] ?? null;
}

function extractCookieHeader(headersArray) {
  const cookieValues = headersArray
    .filter((header) => header.name.toLowerCase() === "set-cookie")
    .map((header) => header.value.split(";")[0].trim())
    .filter(Boolean);

  return cookieValues.join("; ");
}

function parseCount(value) {
  const parsed = Number.parseInt(String(value ?? "").replace(/,/g, ""), 10);
  if (!Number.isFinite(parsed) || parsed < 0) {
    throw new Error("Unable to parse Instagram follower count from Blastup response.");
  }

  return parsed;
}

async function main() {
  const browser = await chromium.launch({ headless: true });

  try {
    const context = await browser.newContext();

    const pageRes = await context.request.get(
      `https://blastup.com/instagram-follower-count?${encodeURIComponent(username)}`,
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        },
      }
    );

    if (!pageRes.ok()) {
      throw new Error(`Blastup page request failed: ${pageRes.status()} ${pageRes.statusText()}`);
    }

    const html = await pageRes.text();
    const token = parseToken(html);
    if (!token) {
      throw new Error("Could not extract Blastup token from HTML.");
    }

    const cookieHeader = extractCookieHeader(pageRes.headersArray());

    const apiRes = await context.request.post(
      "https://blastup.com/instagram-follower-count",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json, text/plain, */*",
          Origin: "https://blastup.com",
          Referer: "https://blastup.com/instagram-follower-count",
          ...(cookieHeader ? { Cookie: cookieHeader } : {}),
        },
        data: {
          _token: token,
          username,
        },
      }
    );

    if (!apiRes.ok()) {
      throw new Error(`Blastup API request failed: ${apiRes.status()} ${apiRes.statusText()}`);
    }

    const payload = await apiRes.json();
    const count = parseCount(payload?.followers);

    const result = {
      count,
      updatedAt: new Date().toISOString(),
      source: "blastup-playwright-sync",
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
