"use client"

import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-16 px-6 bg-background border-t border-secondary">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16">
          <div className="mb-8">
            <p className="text-sm text-muted-foreground mb-4">What are you waiting for?</p>
            <Link href="/#contact" className="cursor-pointer">
              <Button
                style={{ backgroundColor: "#f5f5f5", color: "#0f0f0f" }}
                className="gap-2 hover:opacity-90 rounded-full px-6 cursor-pointer"
              >
                Get In Touch
                <span>→</span>
              </Button>
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="bg-[#5865F2] rounded-lg overflow-hidden w-full lg:w-80 flex-shrink-0">
              <iframe
                src="https://discord.com/widget?id=974767181717995580&theme=dark"
                width="100%"
                height="320"
                allowTransparency={true}
                frameBorder="0"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
              <div>
                <h3 className="font-bold mb-4">About</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <Link href="/about#eboard" className="hover:text-foreground transition-colors cursor-pointer">
                      Eboard
                    </Link>
                  </li>
                  <li>
                    <Link href="/about#sponsorship" className="hover:text-foreground transition-colors cursor-pointer">
                      Sponsorship
                    </Link>
                  </li>
                  <li>
                    <Link href="/about#media" className="hover:text-foreground transition-colors cursor-pointer">
                      Media + Pics
                    </Link>
                  </li>
                  <li>
                    <Link href="/about#branding" className="hover:text-foreground transition-colors cursor-pointer">
                      Branding
                    </Link>
                  </li>
                  <li>
                    <Link href="/about#shop" className="hover:text-foreground transition-colors cursor-pointer">
                      The Shop
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4">Current Projects</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <Link href="/current-projects#irec" className="hover:text-foreground transition-colors cursor-pointer">
                      IREC
                    </Link>
                  </li>
                  <li>
                    <Link href="/current-projects#torito" className="hover:text-foreground transition-colors cursor-pointer">
                      Torito
                    </Link>
                  </li>
                  <li>
                    <Link href="/current-projects#certifications" className="hover:text-foreground transition-colors cursor-pointer">
                      Certifications
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4">Past Projects</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <Link href="/past-projects#irec" className="hover:text-foreground transition-colors cursor-pointer">
                      IREC
                    </Link>
                  </li>
                  <li>
                    <Link href="/past-projects#nsl" className="hover:text-foreground transition-colors cursor-pointer">
                      Past NSL
                    </Link>
                  </li>
                  <li>
                    <Link href="/past-projects#hybrid" className="hover:text-foreground transition-colors cursor-pointer">
                      Hybrid
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4">Other</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <Link href="/" className="hover:text-foreground transition-colors cursor-pointer">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/events" className="hover:text-foreground transition-colors cursor-pointer">
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link href="/positions" className="hover:text-foreground transition-colors cursor-pointer">
                      Positions
                    </Link>
                  </li>
                  <li>
                    <Link href="/#contact" className="hover:text-foreground transition-colors cursor-pointer">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          Back to top
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>
    </footer>
  )
}
