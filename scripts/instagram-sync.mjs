import { chromium } from "playwright";
import { mkdir, readFile, writeFile } from "node:fs/promises";
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

async function readExistingSnapshot(filePath) {
  try {
    const text = await readFile(filePath, "utf-8");
    const payload = JSON.parse(text);
    const count = Number.parseInt(String(payload?.count ?? ""), 10);
    if (!Number.isFinite(count) || count < 0) return null;
    return {
      count,
      updatedAt:
        typeof payload?.updatedAt === "string" ? payload.updatedAt : null,
      source: typeof payload?.source === "string" ? payload.source : "unknown",
    };
  } catch {
    return null;
  }
}

async function fetchCountViaBrowserPage(context) {
  const page = await context.newPage();

  const pageRes = await page.goto(
    `https://blastup.com/instagram-follower-count?${encodeURIComponent(username)}`,
    {
      waitUntil: "domcontentloaded",
    }
  );

  if (!pageRes || !pageRes.ok()) {
    throw new Error(
      `Browser page request failed: ${pageRes?.status() ?? "NO_RESPONSE"}`
    );
  }

  await page.waitForTimeout(1500);

  const tokenFromWindow = await page.evaluate(() => {
    return globalThis?.window?.__config?.token ?? null;
  });

  const html = await page.content();
  const token = tokenFromWindow ?? parseToken(html);

  if (!token) {
    throw new Error("Could not extract Blastup token in browser context.");
  }

  const result = await page.evaluate(async ({ user, tk }) => {
    const res = await fetch("/instagram-follower-count", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json, text/plain, */*",
      },
      body: JSON.stringify({ _token: tk, username: user }),
    });

    const text = await res.text();
    return {
      ok: res.ok,
      status: res.status,
      text,
    };
  }, { user: username, tk: token });

  if (!result.ok) {
    throw new Error(`Browser API request failed: ${result.status}`);
  }

  const payload = JSON.parse(result.text);
  return parseCount(payload?.followers);
}

async function fetchCountViaRequestApi(context) {
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
    throw new Error(
      `Request page fetch failed: ${pageRes.status()} ${pageRes.statusText()}`
    );
  }

  const html = await pageRes.text();
  const token = parseToken(html);
  if (!token) {
    throw new Error("Could not extract Blastup token from request response.");
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
    throw new Error(`Request API fetch failed: ${apiRes.status()} ${apiRes.statusText()}`);
  }

  const payload = await apiRes.json();
  return parseCount(payload?.followers);
}

async function main() {
  const browser = await chromium.launch({
    headless: true,
    args: ["--disable-blink-features=AutomationControlled"],
  });

  try {
    const context = await browser.newContext({ userAgent: "Mozilla/5.0" });

    const errors = [];
    let count = null;

    try {
      count = await fetchCountViaBrowserPage(context);
    } catch (error) {
      errors.push(`browser-flow: ${error instanceof Error ? error.message : String(error)}`);
    }

    if (count == null) {
      try {
        count = await fetchCountViaRequestApi(context);
      } catch (error) {
        errors.push(`request-flow: ${error instanceof Error ? error.message : String(error)}`);
      }
    }

    if (count == null) {
      const existing = await readExistingSnapshot(outputPath);
      if (existing) {
        console.warn("Blastup was blocked; keeping previous instagram snapshot.");
        console.warn(`Existing count=${existing.count}, updatedAt=${existing.updatedAt}, source=${existing.source}`);
        console.warn(`Errors: ${errors.join(" | ")}`);
        return;
      }

      throw new Error(`Unable to sync instagram count. ${errors.join(" | ")}`);
    }

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
