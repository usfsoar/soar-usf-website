import { Button } from "@/components/ui/button"
import { Rocket, Building, TestTube, Flame, Radio } from "lucide-react"

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
    <section className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Rocket className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs md:text-sm text-muted-foreground">Current Projects</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">LEARN ABOUT TORITO</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
            The goal of this team is to launch a liquid-propulsion rocket using nitrous oxide as high as possible. The
            engine of the propulsion rocket will be entirely student-researched and built.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Join our teams!</h3>
            <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
              So far, this team has focused on propulsion system development, ground test systems, and developed an
              engine design, along with data acquisition systems for development, and manufactured engine components.
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
                <span className="text-sm md:text-base font-medium">Journey to the Static Fire!</span>
              </div>
            </div>

            <Button className="gap-2 text-sm md:text-base">
              Learn more about Torito
              <span>→</span>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {teams.map((team, index) => (
              <div key={index} className="border border-secondary rounded-lg p-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-3">
                  <team.icon className="h-6 w-6" />
                </div>
                <h4 className="text-sm md:text-base font-bold mb-2">{team.title}</h4>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{team.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
