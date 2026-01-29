import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function LogoMotto() {
  return (
    <section className="relative bg-[#0f0f0f] border-b border-white/10">
      {/* Logo Section */}
      <div className="bg-[#0f0f0f] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center justify-center">
            {/* SOAR Logo */}
            <div className="relative flex-shrink-0">
              <Image src="/soar hero.png" alt="SOAR Logo" width={800} height={200} className="w-full max-w-2xl md:max-w-4xl h-auto" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10 md:mt-12">
            <Link href="/sponsorships" className="w-full sm:w-auto">
              <Button
                size="lg"
                style={{ backgroundColor: "#cfc493", color: "#0f0f0f" }}
                className="rounded-full px-8 py-6 text-base font-medium hover:opacity-90 cursor-pointer w-full sm:w-auto"
              >
                Support Us!
              </Button>
            </Link>
            <Link href="/#contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                style={{ backgroundColor: "#cfc493", color: "#0f0f0f" }}
                className="rounded-full px-8 py-6 text-base font-medium hover:opacity-90 cursor-pointer w-full sm:w-auto"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
