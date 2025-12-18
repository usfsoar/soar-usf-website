import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Sponsorships() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-3 bg-zinc-900 rounded-full px-6 py-3 mb-4">
          <Image src="/Color Logo.svg" alt="SOAR Logo" width={20} height={20} className="w-5 h-5" />
          <span className="text-sm font-medium tracking-wide" style={{ color: "#EDEBD4" }}>Let&apos;s Work Together</span>
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
