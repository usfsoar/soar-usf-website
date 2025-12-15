import { Button } from "@/components/ui/button"
import { Rocket } from "lucide-react"
import Link from "next/link"

export function Sponsorships() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Rocket className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Let&apos;s Work Together</span>
        </div>

        <h2 className="text-5xl font-bold mb-4">LET&apos;S TALK ABOUT SPONSORSHIPS</h2>
        <p className="text-muted-foreground mb-8">Become a Sponsor</p>

        <Link href="/events" className="block">
          <Button
            size="lg"
            style={{ backgroundColor: "#1F1F1F", color: "#ffffff" }}
            className="gap-2 hover:opacity-90 rounded-full px-6 w-full"
          >
            Learn more about Sponsorship
            <span>→</span>
          </Button>
        </Link>
      </div>
    </section>
  )
}
