import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Rocket } from "lucide-react"

export function Blogs() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Rocket className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Our Blogs</span>
        </div>

        <h2 className="text-5xl font-bold mb-4 text-balance">SOAR UPDATES</h2>
        <p className="text-muted-foreground mb-12">Be updated on all things SOAR.</p>

        <Card className="bg-[#1a3a52] border-none p-12 mb-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Collection List</h3>
            <p className="text-sm text-muted-foreground">No items added Collection</p>
          </div>
        </Card>

        <Button variant="secondary" className="gap-2">
          View All Blogs
          <span>→</span>
        </Button>
      </div>
    </section>
  )
}
