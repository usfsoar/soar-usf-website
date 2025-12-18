import { Button } from "@/components/ui/button"
import { Rocket } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function TRACertifications() {
  return (
    <section id="tra" className="py-16 md:py-24 px-4 md:px-6 bg-background scroll-mt-20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-3 bg-zinc-900 rounded-full px-6 py-3 mb-6">
            <Image src="/Color Logo.svg" alt="SOAR Logo" width={20} height={20} className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wide uppercase" style={{ color: "#EDEBD4" }}>Current Projects</span>
          </div>

          <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 text-balance max-w-4xl mx-auto">
            TRIPOLI ROCKETRY ASSOCIATION CERTIFICATIONS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/rocket-assembly.jpg"
              alt="Team member working on rocket assembly"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <Rocket className="h-5 w-5 md:h-6 md:w-6" />
              <h3 className="text-xl md:text-2xl font-bold">TRA Certifications</h3>
            </div>

            <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              We conduct Level I and Level II Certification courses to help members learn the basics of rocketry and
              build a strong base of knowledgeable members. We believe this endeavor is paramount to the success of our
              organization and to transmitting knowledge that might otherwise be lost as members graduate.
            </p>

            <div className="grid grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
              <div>
                <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color: "#D0C495" }}>
                  100%
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">Graduation</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color: "#D0C495" }}>
                  60+
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">Certifications Attained</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color: "#D0C495" }}>
                  Est.
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">2013</div>
              </div>
            </div>

            <Link href="/current-projects#tra" className="block">
              <Button
                style={{ backgroundColor: "#1F1F1F", color: "#ffffff" }}
                className="gap-2 text-sm md:text-base hover:opacity-90 rounded-full px-6 w-full"
              >
                Learn more about TRA Certifications
                <span>→</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
