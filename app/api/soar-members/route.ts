import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

type StoredMemberCount = {
  count: number | null;
  updatedAt: string | null;
  source: string;
};

export const runtime = "nodejs";

export async function GET() {
  const filePath = path.join(process.cwd(), "data", "soar-member-count.json");

  try {
    const fileText = await readFile(filePath, "utf-8");
    const payload = JSON.parse(fileText) as StoredMemberCount;

    return NextResponse.json(payload, {
      headers: {
        "Cache-Control": "s-maxage=60, stale-while-revalidate=300",
      },
    });
  } catch {
    return NextResponse.json(
      {
        count: null,
        updatedAt: null,
        source: "missing",
      } satisfies StoredMemberCount,
      { status: 503 }
    );
  }
}
