import { NextResponse } from 'next/server'

type CacheEntry = { count: number; expiresAt: number }

const CACHE_TTL = 1000 * 60 * 5 // 5 minutes

async function fetchDiscordCount() {
  const res = await fetch('https://discord.com/api/invites/7qjAHzrnHz?with_counts=true')
  if (!res.ok) throw new Error('Discord API error')
  const data = await res.json()
  // The API returns approximate_member_count
  return typeof data.approximate_member_count === 'number' ? data.approximate_member_count : null
}

export async function GET() {
  try {
    // simple in-memory cache on the global object
    const cacheKey = '__discord_invite_cache_v1'
    // @ts-ignore
    const existing: CacheEntry | undefined = global[cacheKey]
    const now = Date.now()
    if (existing && existing.expiresAt > now) {
      return NextResponse.json({ members: existing.count })
    }

    const count = await fetchDiscordCount()
    if (count == null) return NextResponse.json({ members: null }, { status: 502 })

    const entry: CacheEntry = { count, expiresAt: now + CACHE_TTL }
    // @ts-ignore
    global[cacheKey] = entry

    return NextResponse.json({ members: count })
  } catch (err) {
    return NextResponse.json({ members: null, error: String(err) }, { status: 500 })
  }
}
