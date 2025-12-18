import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export function Blogs() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-3 bg-zinc-900 rounded-full px-6 py-3 mb-4">
          <Image src="/Color Logo.svg" alt="SOAR Logo" width={20} height={20} className="w-5 h-5" />
          <span className="text-sm font-medium tracking-wide" style={{ color: "#EDEBD4" }}>Our Blogs</span>
        </div>

        <h2 className="text-5xl font-bold mb-4 text-balance">SOAR UPDATES</h2>
        <p className="text-muted-foreground mb-12">Be updated on all things SOAR.</p>

        <Card className="bg-[#1a3a52] border-none p-12 mb-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Collection List</h3>
            <p className="text-sm text-muted-foreground">No items added Collection</p>
          </div>
        </Card>

        <Button variant="secondary" className="gap-2 rounded-full px-6 w-full">
          View All Blogs
          <span>→</span>
        </Button>
      </div>
    </section>
  )
}
