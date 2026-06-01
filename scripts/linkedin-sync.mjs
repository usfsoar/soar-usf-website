import { chromium } from "playwright";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const LINKEDIN_COMPANY_URL = process.env.LINKEDIN_COMPANY_URL ?? "https://www.linkedin.com/company/usfsoar/";
const OUTPUT = process.env.LINKEDIN_COUNT_OUTPUT ?? "data/linkedin-follower-count.json";
const TIMEOUT = 30000;

function parseCountText(text) {
  if (!text) return null
  const m = String(text).match(/([0-9][0-9,\.]*)/)
  if (!m) return null
  const n = Number.parseInt(m[1].replace(/[,.]/g, ""), 10)
  return Number.isFinite(n) && n >= 0 ? n : null
}

async function readExisting(filePath) {
  try {
    const txt = await readFile(filePath, "utf-8")
    const p = JSON.parse(txt)
    const c = Number.parseInt(String(p?.count ?? ""), 10)
    if (!Number.isFinite(c) || c < 0) return null
    return { count: c, updatedAt: p.updatedAt ?? null, source: p.source ?? "existing" }
  } catch {
    return null
  }
}

async function scrape() {
  let browser
  try {
    browser = await chromium.launch({ headless: true, args: ["--disable-blink-features=AutomationControlled"] })
    const context = await browser.newContext({ userAgent: "Mozilla/5.0" })
    const page = await context.newPage()

    const res = await page.goto(LINKEDIN_COMPANY_URL, { waitUntil: "domcontentloaded", timeout: TIMEOUT })
    if (!res || !res.ok()) throw new Error(`Page failed: ${res?.status() ?? "NO_RESPONSE"}`)

    await page.waitForTimeout(1500)

    const domText = await page.evaluate(() => {
      // Prefer text nodes containing a number directly followed by 'followers'
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false)
      let node = walker.nextNode()
      while (node) {
        const t = (node.textContent || "").trim()
        if (t) {
          const m = t.match(/([0-9][0-9,\.]*)\s*(?=followers?\b)/i)
          if (m) return m[1]
        }
        node = walker.nextNode()
      }

      // Fallback: look for element text that contains 'followers' and extract number before it
      const nodes = Array.from(document.querySelectorAll('div,span,p,a'))
      for (const n of nodes) {
        const txt = (n.textContent || '').trim()
        const m = txt.match(/([0-9][0-9,\.]*)\s*(?=followers?\b)/i)
        if (m) return m[1]
      }

      return null
    })

    const candidate = domText ?? (await page.content())
    const count = parseCountText(candidate)
    await page.close()
    return count
  } catch (err) {
    console.error("LinkedIn scrape error:", err)
    return null
  } finally {
    if (browser) await browser.close()
  }
}

async function save(count) {
  const payload = { count, updatedAt: new Date().toISOString(), source: "github-action-playwright" }
  await mkdir(path.dirname(OUTPUT), { recursive: true })
  await writeFile(OUTPUT, JSON.stringify(payload, null, 2) + "\n", "utf-8")
}

(async function main() {
  try {
    const count = await scrape()
    if (count == null) {
      const existing = await readExisting(OUTPUT)
      if (existing) {
        console.warn("Could not scrape LinkedIn; keeping previous snapshot:", existing)
        return
      }
      throw new Error("Failed to extract LinkedIn follower count and no snapshot exists.")
    }
    await save(count)
    console.log("Saved LinkedIn follower count:", count)
  } catch (e) {
    console.error("LinkedIn sync failed:", e)
    process.exit(1)
  }
})()
