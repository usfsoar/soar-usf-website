import { Button } from "@/components/ui/button"
import { Rocket, Building, PackageOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function IREC() {
  const mainTeams = [
    {
      icon: Building,
      title: "Aerostructures Team",
      description:
        "Responsible for designing, manufacturing and assembling the rocket's main structural components, including the body tube, nose cone, fins, and couplers.",
    },
    {
      icon: PackageOpen,
      title: "Payload EE/CS Team",
      description: "Integrates all electrical systems, sensors, and onboard payloads inside the rocket.",
    },
    {
      icon: Building,
      title: "Vehicle MECH/EE Team",
      description:
        "Focuses on integrating the rocket's propulsion, deployment, and mechanical systems alongside the necessary electrical wiring, circuits, and power management.",
    },
    {
      icon: Rocket,
      title: "Telemetry Team",
      description:
        "Designs and manages the real-time communication systems that relay flight data from the rocket to the ground.",
    },
  ]

  return (
    <section id="irec" className="py-16 md:py-24 px-4 md:px-6 bg-background scroll-mt-20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 bg-zinc-900 rounded-full px-6 py-3 mb-6">
            <Image src="/Color Logo.svg" alt="SOAR Logo" width={20} height={20} className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wide uppercase" style={{ color: "#EDEBD4" }}>Current Projects</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">LEARN ABOUT IREC</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            IREC, or the International Rocket Engineering Competition, is a large-scale, annual university-level
            competition hosted by the Experimental Sounding Rocket Association (ESRA).
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:gap-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mainTeams.map((team, index) => (
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

            <div className="border border-zinc-800 rounded-xl p-6 hover:border-[#D0C495] transition-colors">
              <div className="w-14 h-14 bg-zinc-900 rounded-xl flex items-center justify-center mb-4">
                <PackageOpen className="h-7 w-7 text-[#D0C495]" />
              </div>
              <h4 className="text-lg font-bold mb-3">Recovery Team</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Responsible for the recovery of the rocket in its entirety including payload.
              </p>
            </div>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Join our teams!</h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              The competition requires nearly 1,000 pages of reports and documentation, and three team presentations to
              NASA prior to launch week.
            </p>

            <div className="flex flex-wrap justify-between gap-y-4 gap-x-2 mb-6">
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
                <span className="text-sm font-medium">Go to Huntsville with us!</span>
              </div>
            </div>

            <Link href="/current-projects#irec" className="block">
              <Button
                style={{ backgroundColor: "#1F1F1F", color: "#ffffff" }}
                className="w-full gap-2 hover:opacity-90 rounded-full px-4 py-5 text-sm font-medium"
              >
                Learn more about IREC
                <span>→</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
