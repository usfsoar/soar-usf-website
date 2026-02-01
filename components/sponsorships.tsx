import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Sponsorships() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-3 bg-zinc-900 rounded-full px-6 py-3 mb-4">
          <Image src="/Color Logo.svg" alt="SOAR Logo" width={20} height={20} className="w-5 h-5" />
          <span className="text-sm font-medium tracking-wide" style={{ color: "#cfc493" }}>Let&apos;s Work Together</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-4">LET&apos;S TALK ABOUT SPONSORSHIPS</h2>
        <p className="text-muted-foreground mb-8">Become a Sponsor</p>

        <Link href="/sponsorships" className="block cursor-pointer">
          <Button
            size="lg"
            style={{ backgroundColor: "#303434", color: "#ffffff" }}
            className="gap-2 hover:opacity-90 rounded-full px-8 md:px-15 py-3 w-full sm:w-auto sm:min-w-[300px] cursor-pointer group"
          >
            Learn more about Sponsorship
            <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
          </Button>
        </Link>
      </div>
    </section>
  )
}
