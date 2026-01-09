import Image from "next/image"
import Link from "next/link"

export function About() {
  return (
    <section className="bg-zinc-950 py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-3 bg-zinc-900 rounded-full px-6 py-3 mb-6">
          <Image src="/Color Logo.svg" alt="SOAR Logo" width={24} height={24} className="w-6 h-6" />
          <p className="text-sm font-medium tracking-wide" style={{ color: "#cfc493" }}>About Us</p>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase text-balance">
          The Society of Aeronautics and Rocketry
        </h2>

        <p className="text-zinc-400 text-lg leading-relaxed mb-8">
          The Society of Aeronautics and Rocketry (SOAR) at the University of South Florida is a student-led, non-profit
          organization established in 2013 by a group of passionate and driven undergraduate engineering students.
        </p>

        <Link href="/about" className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white rounded-full py-3 px-6 transition-colors group">
          <span className="font-medium">Learn More About Us</span>
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
