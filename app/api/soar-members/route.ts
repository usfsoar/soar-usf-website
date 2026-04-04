import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

type StoredMemberCount = {
  count: number | null;
  updatedAt: string | null;
  source: string;
};

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

function isValidPayload(payload: unknown): payload is StoredMemberCount {
  if (typeof payload !== "object" || payload == null) return false;

  const data = payload as Partial<StoredMemberCount>;

  return (
    (typeof data.count === "number" || data.count === null) &&
    (typeof data.updatedAt === "string" || data.updatedAt === null) &&
    typeof data.source === "string"
  );
}

async function readLocalPayload(): Promise<StoredMemberCount | null> {
  const filePath = path.join(process.cwd(), "data", "soar-member-count.json");

  try {
    const fileText = await readFile(filePath, "utf-8");
    const payload = JSON.parse(fileText);
    return isValidPayload(payload) ? payload : null;
  } catch {
    return null;
  }
}

async function readGithubPayload(): Promise<StoredMemberCount | null> {
  const owner =
    process.env.BULLSCONNECT_GITHUB_OWNER ?? process.env.VERCEL_GIT_REPO_OWNER;
  const repo =
    process.env.BULLSCONNECT_GITHUB_REPO ?? process.env.VERCEL_GIT_REPO_SLUG;
  const branch = process.env.BULLSCONNECT_GITHUB_BRANCH ?? "main";

  if (!owner || !repo) return null;

  const url = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/data/soar-member-count.json?ts=${Date.now()}`;

  try {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) return null;

    const payload = await response.json();
    return isValidPayload(payload) ? payload : null;
  } catch {
    return null;
  }
}

export async function GET() {
  const githubPayload = await readGithubPayload();

  if (githubPayload) {
    return NextResponse.json(githubPayload, {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    });
  }

  const localPayload = await readLocalPayload();

  if (localPayload) {
    return NextResponse.json(localPayload, {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    });
  }

  return NextResponse.json(
    {
      count: null,
      updatedAt: null,
      source: "missing",
    } satisfies StoredMemberCount,
    {
      status: 503,
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    }
  );
}
