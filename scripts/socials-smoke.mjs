const baseUrl = process.env.SOCIALS_BASE_URL ?? "http://localhost:3000"

async function main() {
  const url = `${baseUrl.replace(/\/$/, "")}/api/socials/followers`
  const started = Date.now()

  const res = await fetch(url)
  const elapsed = Date.now() - started

  if (!res.ok) {
    throw new Error(`followers endpoint failed: ${res.status}`)
  }

  const body = await res.json()

  const issues = []
  if (typeof body.linkedin !== "number") {
    issues.push("linkedin is not a number")
  }
  if (typeof body.instagram !== "number") {
    issues.push("instagram is not a number")
  }

  console.log(`GET ${url}`)
  console.log(`status=${res.status} timeMs=${elapsed}`)
  console.log(JSON.stringify(body, null, 2))

  if (issues.length > 0) {
    throw new Error(`smoke check failed: ${issues.join(", ")}`)
  }
}

main().catch((err) => {
  console.error(err.message)
  process.exit(1)
})
