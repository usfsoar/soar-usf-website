import { chromium } from "playwright";
import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const membersPageUrl =
  "https://bullsconnect.usf.edu/feeds?type=club&type_id=58509&tab=members";
const membersApiUrl =
  "https://bullsconnect.usf.edu/mobile_ws/v17/mobile_group_page_members?range=0&limit=10&order=&search_word=&param=58509";
const storagePath =
  process.env.BULLSCONNECT_STORAGE_PATH ?? ".auth/bullsconnect-storage.json";

async function ensureDirectory(filePath) {
  await mkdir(path.dirname(filePath), { recursive: true });
}

function extractCount(payload) {
  const raw = Array.isArray(payload) ? payload?.[0]?.counter : undefined;
  const count = Number.parseInt(String(raw ?? ""), 10);

  if (!Number.isFinite(count) || count < 0) {
    throw new Error("Unable to parse counter from BullsConnect response.");
  }

  return count;
}

async function main() {
  await ensureDirectory(storagePath);

  const browser = await chromium.launch({ headless: false });

  try {
    const context = await browser.newContext();
    const page = await context.newPage();

    console.log("Opening BullsConnect members page...");
    await page.goto(membersPageUrl, { waitUntil: "domcontentloaded" });

    const rl = createInterface({ input, output });
    await rl.question(
      "Complete the USF login in the browser, then press Enter here to save session... "
    );
    rl.close();

    const response = await context.request.get(membersApiUrl);

    if (!response.ok()) {
      throw new Error(
        `Session test failed: ${response.status()} ${response.statusText()}`
      );
    }

    const payload = await response.json();
    const count = extractCount(payload);

    await context.storageState({ path: storagePath });

    console.log(`Saved authenticated session to ${storagePath}`);
    console.log(`Verified session. Current member count: ${count}`);
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
