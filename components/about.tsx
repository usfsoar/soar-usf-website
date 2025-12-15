import { Rocket } from "lucide-react"

export function About() {
  return (
    <section className="bg-zinc-950 py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Rocket className="w-4 h-4 text-amber-600" />
          <p className="text-amber-600 text-sm font-medium uppercase tracking-wider">About us</p>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase text-balance">
          The Society of Aeronautics and Rocketry
        </h2>

        <p className="text-zinc-400 text-lg leading-relaxed">
          The Society of Aeronautics and Rocketry (SOAR) at the University of South Florida is a student-led, non-profit
          organization established in 2013 by a group of passionate and driven undergraduate engineering students.
        </p>
      </div>
    </section>
  )
}
