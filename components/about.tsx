import Image from "next/image"

export function About() {
  return (
    <section className="bg-zinc-950 py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-3 bg-zinc-900 rounded-full px-6 py-3 mb-6">
          <Image src="/Color Logo.svg" alt="SOAR Logo" width={24} height={24} className="w-6 h-6" />
          <p className="text-sm font-medium tracking-wide" style={{ color: "#EDEBD4" }}>About us</p>
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
