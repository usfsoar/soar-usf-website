import { Button } from "@/components/ui/button"
import { Rocket, Building, TestTube, Flame, Radio } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Torito() {
  const teams = [
    {
      icon: Building,
      title: "Aerostructures Team",
      description: "Responsible for fabricating the rocket's airframe, nose cone, fins, and key structural interfaces.",
    },
    {
      icon: TestTube,
      title: "Test Stand Structures Team",
      description: "Designs, builds, and maintains the ground support needed for static fire tests.",
    },
    {
      icon: Flame,
      title: "Propulsions Team",
      description:
        "Designs and implements the liquid propulsion system, including engine design, plumbing, propellant feed systems, and integration.",
    },
    {
      icon: Radio,
      title: "Ground Station Team",
      description: "Oversees all remote-control systems and their operations.",
    },
  ]

  return (
    <section id="torito" className="py-16 md:py-24 px-4 md:px-6 bg-background scroll-mt-20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 bg-zinc-900 rounded-full px-6 py-3 mb-6">
            <Image src="/Color Logo.svg" alt="SOAR Logo" width={20} height={20} className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wide" style={{ color: "#cfc493" }}>Current Projects</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">LEARN ABOUT TORITO</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The goal of this team is to launch a liquid-propulsion rocket using nitrous oxide as high as possible. The
            engine of the propulsion rocket will be entirely student-researched and built.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-8">
          {/* Join Card - Left Side on Desktop */}
          <div className="lg:w-[380px] flex-shrink-0">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4">Join our teams!</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                So far, this team has focused on propulsion system development, ground test systems, and developed an
                engine design, along with data acquisition systems for development, and manufactured engine components.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#D0C495]/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-[#D0C495]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Learn How to Build a Rocket</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#D0C495]/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-[#D0C495]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Technical Skills</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#D0C495]/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-[#D0C495]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Leadership Opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#D0C495]/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-[#D0C495]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Journey to the Static Fire!</span>
                </div>
              </div>

              <Link href="/current-projects#torito" className="block">
                <Button
                  style={{ backgroundColor: "#303434", color: "#ffffff" }}
                  className="w-full gap-2 hover:opacity-90 rounded-full px-4 py-5 text-sm font-medium"
                >
                  Learn more about Torito
                  <span>→</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Team Cards - Right Side on Desktop */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teams.map((team, index) => (
              <div
                key={index}
                className="border border-zinc-800 rounded-xl p-6 hover:border-[#D0C495] transition-colors"
              >
                <div className="w-14 h-14 bg-zinc-900 rounded-xl flex items-center justify-center mb-4">
                  <team.icon className="h-7 w-7 text-[#D0C495]" />
                </div>
                <h4 className="text-lg font-bold mb-3">{team.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{team.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
