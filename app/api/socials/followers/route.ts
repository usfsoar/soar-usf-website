import { NextResponse } from "next/server"

export const runtime = "nodejs"

type SocialFollowersResponse = {
  instagram: number | null
  linkedin: number | null
  discord: number | null
  updatedAt: string
  fallbackUsed: boolean
}

type CacheEntry = {
  data: SocialFollowersResponse
  expiresAt: number
}

type RefreshResult = SocialFollowersResponse | null

const CACHE_TTL = 1000 * 60 * 60 * 24 // 24 hours
const RESPONSE_CACHE_CONTROL = "public, max-age=300, stale-while-revalidate=86400"

const CACHE_KEY = "__soar_social_followers_cache_v1"
const REFRESH_KEY = "__soar_social_followers_refresh_v1"

function normalizeNumber(value: unknown): number | null {
  if (typeof value === "number" && Number.isFinite(value) && value >= 0) {
    return Math.floor(value)
  }

  if (typeof value === "string") {
    const cleaned = value.trim()
    if (!/^\d[\d,]*$/.test(cleaned)) return null
    const normalized = cleaned.replace(/,/g, "")
    const parsed = Number.parseInt(normalized, 10)
    if (Number.isFinite(parsed) && parsed >= 0) return parsed
  }

  return null
}

function extractLinkedinFromRowsItems(payload: unknown): number | null {
  if (typeof payload !== "object" || payload == null) return null

  const items = (payload as { items?: unknown }).items
  if (!Array.isArray(items) || items.length < 2) return null

  const headerRow = items[0]
  if (!Array.isArray(headerRow)) return null

  const linkedinCol = headerRow.findIndex(
    (cell) => typeof cell === "string" && cell.trim().toLowerCase() === "linkedin"
  )

  if (linkedinCol < 0) return null

  for (let i = 1; i < items.length; i += 1) {
    const row = items[i]
    if (!Array.isArray(row)) continue
    const value = normalizeNumber(row[linkedinCol])
    if (value != null) return value
  }

  return null
}

function findFirstNumericValue(payload: unknown, keys: string[]): number | null {
  if (payload == null) return null

  if (Array.isArray(payload)) {
    for (const item of payload) {
      const found = findFirstNumericValue(item, keys)
      if (found != null) return found
    }
    return null
  }

  if (typeof payload !== "object") return null

  const record = payload as Record<string, unknown>

  for (const key of keys) {
    const direct = normalizeNumber(record[key])
    if (direct != null) return direct
  }

  for (const value of Object.values(record)) {
    const nested = findFirstNumericValue(value, keys)
    if (nested != null) return nested
  }

  return null
}

async function fetchDiscordCount(): Promise<number | null> {
  const res = await fetch("https://discord.com/api/invites/7qjAHzrnHz?with_counts=true")
  if (!res.ok) return null

  const data = await res.json()
  return normalizeNumber(data?.approximate_member_count)
}

function extractCookieHeader(headers: Headers): string {
  const getSetCookie = (headers as Headers & { getSetCookie?: () => string[] }).getSetCookie
  const cookieList = typeof getSetCookie === "function" ? getSetCookie.call(headers) : []

  if (Array.isArray(cookieList) && cookieList.length > 0) {
    return cookieList.map((cookie) => cookie.split(";")[0]).join("; ")
  }

  const raw = headers.get("set-cookie")
  if (!raw) return ""

  const parts = raw.split(/,(?=\s*[^;,=\s]+=[^;,]+)/g)
  return parts.map((cookie) => cookie.split(";")[0].trim()).filter(Boolean).join("; ")
}

async function fetchInstagramCountFromBlastup(username: string): Promise<number | null> {
  const pageRes = await fetch(`https://blastup.com/instagram-follower-count?${encodeURIComponent(username)}`, {
    headers: {
      "User-Agent": "Mozilla/5.0",
      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    },
  })
  if (!pageRes.ok) return null

  const html = await pageRes.text()
  const tokenMatch = html.match(/token:\s*"([^"]+)"/)
  const token = tokenMatch?.[1]

  if (!token) return null

  const cookieHeader = extractCookieHeader(pageRes.headers)

  const apiRes = await fetch("https://blastup.com/instagram-follower-count", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text/plain, */*",
      Origin: "https://blastup.com",
      Referer: "https://blastup.com/instagram-follower-count",
      ...(cookieHeader ? { Cookie: cookieHeader } : {}),
    },
    body: JSON.stringify({
      _token: token,
      username,
    }),
  })

  if (!apiRes.ok) return null

  const data = await apiRes.json()
  return normalizeNumber(data?.followers)
}

async function fetchLinkedinCountFromRows(): Promise<number | null> {
  const spreadsheetId = process.env.ROWS_SPREADSHEET_ID ?? "1qKB0cnHZzLZmU4mrwHQlm"
  const tableId = process.env.ROWS_TABLE_ID ?? "8451b1c8-9216-443d-8ed5-44cdb2f653e8"
  const range = process.env.ROWS_RANGE ?? "A1:E20"
  const rowsUrl =
    process.env.ROWS_LINKEDIN_URL ||
    `https://api.rows.com/v1/spreadsheets/${spreadsheetId}/tables/${tableId}/values/${range}`

  const token = process.env.ROWS_API_KEY ?? process.env.ROWS_KEY
  const bearer = token?.trim()

  if (!bearer) return null

  const headers: HeadersInit = {
    Accept: "application/json",
  }

  if (bearer) {
    headers.Authorization = `Bearer ${bearer}`
  }

  const res = await fetch(rowsUrl, { headers })
  if (!res.ok) return null

  const payload = await res.json()

  const fromItems = extractLinkedinFromRowsItems(payload)
  if (fromItems != null) return fromItems

  const keyHints = [
    process.env.ROWS_LINKEDIN_FIELD ?? "linkedin",
    "linkedin_followers",
    "linkedinFollowers",
    "followers",
    "count",
    "value",
  ]

  return findFirstNumericValue(payload, keyHints)
}

async function loadFreshFollowers(): Promise<SocialFollowersResponse> {
  const instagramUsername = process.env.INSTAGRAM_USERNAME ?? "usfsoar"

  const [instagram, linkedin, discord] = await Promise.all([
    fetchInstagramCountFromBlastup(instagramUsername),
    fetchLinkedinCountFromRows(),
    fetchDiscordCount(),
  ])

  return {
    instagram,
    linkedin,
    discord,
    updatedAt: new Date().toISOString(),
    fallbackUsed: false,
  }
}

async function refreshCache(existing?: CacheEntry): Promise<RefreshResult> {
  try {
    const fresh = await loadFreshFollowers()
    const hasAnyData = fresh.instagram != null || fresh.linkedin != null || fresh.discord != null

    if (!hasAnyData) {
      if (existing) {
        return {
          ...existing.data,
          fallbackUsed: true,
        }
      }
      return null
    }

    const entry: CacheEntry = {
      data: fresh,
      expiresAt: Date.now() + CACHE_TTL,
    }

    // @ts-ignore
    global[CACHE_KEY] = entry

    return fresh
  } catch {
    if (existing) {
      return {
        ...existing.data,
        fallbackUsed: true,
      }
    }
    return null
  }
}

function refreshInBackground(existing?: CacheEntry) {
  // @ts-ignore
  const inFlight: Promise<RefreshResult> | undefined = global[REFRESH_KEY]
  if (inFlight) return

  // @ts-ignore
  global[REFRESH_KEY] = refreshCache(existing)
    .catch(() => null)
    .finally(() => {
      // @ts-ignore
      delete global[REFRESH_KEY]
    })
}

function jsonResponse(data: SocialFollowersResponse, status = 200) {
  return NextResponse.json(data, {
    status,
    headers: {
      "Cache-Control": RESPONSE_CACHE_CONTROL,
    },
  })
}

export async function GET() {
  // @ts-ignore
  const existing: CacheEntry | undefined = global[CACHE_KEY]
  const now = Date.now()

  if (existing && existing.expiresAt > now) {
    return jsonResponse(existing.data)
  }

  // Stale-while-revalidate: serve stale data immediately, refresh asynchronously.
  if (existing) {
    refreshInBackground(existing)
    return jsonResponse({
      ...existing.data,
      fallbackUsed: true,
    })
  }

  const fresh = await refreshCache(undefined)

  if (fresh) {
    return jsonResponse(fresh)
  }

  return jsonResponse(
    {
      instagram: null,
      linkedin: null,
      discord: null,
      updatedAt: new Date().toISOString(),
      fallbackUsed: true,
    } satisfies SocialFollowersResponse,
    503
  )
}
