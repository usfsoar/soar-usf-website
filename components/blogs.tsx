import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export function Blogs() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-3 bg-zinc-900 rounded-full px-6 py-3 mb-4">
          <Image src="/Color Logo.svg" alt="SOAR Logo" width={20} height={20} className="w-5 h-5" />
          <span className="text-sm font-medium tracking-wide" style={{ color: "#cfc493" }}>Our Blogs</span>
        </div>

        <h2 className="text-5xl font-bold mb-4 text-balance">SOAR UPDATES</h2>
        <p className="text-muted-foreground mb-12">Be updated on all things SOAR.</p>

        <Card className="bg-[#1a3a52] border-none p-12 mb-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Collection List</h3>
            <p className="text-sm text-muted-foreground">No items added Collection</p>
          </div>
        </Card>

        <div className="flex justify-center items-center gap-4">
          <Link href="/events" className="cursor-pointer">
            <Button
              variant="secondary"
              style={{ backgroundColor: "#303434", color: "#ffffff" }}
              className="gap-2 rounded-full px-10 py-3w-48 cursor-pointer hover:opacity-90 group"
            >
              View All Events
              <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </Button>
          </Link>

          <Link href="/blogs" className="cursor-pointer">
            <Button
              variant="secondary"
              style={{ backgroundColor: "#303434", color: "#ffffff" }}
              className="gap-2 rounded-full px-10 py-3 w-48 cursor-pointer hover:opacity-90 group"
            >
              View All Blogs
              <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
