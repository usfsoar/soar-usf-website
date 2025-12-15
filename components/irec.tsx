import { Button } from "@/components/ui/button"
import { Rocket, Building, PackageOpen } from "lucide-react"

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
      description: "Integrates various electrical systems, sensors, and onboard payloads inside the rocket.",
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
    <section className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Rocket className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs md:text-sm text-muted-foreground">Current Projects</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">LEARN ABOUT IREC</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
            IREC, or the International Rocket Engineering Competition, is a large-scale, annual university-level
            competition hosted by the Experimental Sounding Rocket Association (ESRA).
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Join our teams!</h3>
            <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
              The competition requires nearly 1,000 pages of reports and documentation, and a three team presentation to
              NASA prior to launch week.
            </p>

            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <span className="text-sm md:text-base font-medium">Learn How to Build a Rocket</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <span className="text-sm md:text-base font-medium">Technical Skills</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <span className="text-sm md:text-base font-medium">Leadership Opportunities</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <span className="text-sm md:text-base font-medium">Go to Huntsville with us!</span>
              </div>
            </div>

            <Button className="gap-2 text-sm md:text-base">
              Learn more about IREC
              <span>→</span>
            </Button>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {mainTeams.map((team, index) => (
                <div key={index} className="border border-secondary rounded-lg p-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-3">
                    <team.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-sm md:text-base font-bold mb-2">{team.title}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{team.description}</p>
                </div>
              ))}
            </div>

            <div className="border border-secondary rounded-lg p-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <PackageOpen className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold mb-2">Recovery Team</h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    Responsible for the recovery of the rocket in its entirety including payload.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
