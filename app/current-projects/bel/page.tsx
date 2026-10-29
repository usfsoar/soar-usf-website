"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { Flame, Calendar, Sparkles, CheckCircle2 } from "lucide-react"

export default function BELPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <Navbar />
      </div>

      <PageHeader title="BEL" subtitle="Liquid Propulsion Research Project" />

      <section className="container mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 md:space-y-10">

            {/* About BEL */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sm:p-8">
              <h3 className="text-2xl font-bold mb-4">About BEL</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                BEL (Bulls Experimental Liquids Team) is SOAR's ambitious liquid propulsion research project, focusing on the development of a liquid-fueled rocket engine and vehicle.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                This project pushes the boundaries of student rocketry by exploring advanced propulsion technologies and complex fluid systems.
              </p>
            </div>

            {/* Recent Static Fire Milestone Banner */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xl overflow-hidden relative">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold text-amber-400">
                  <Flame className="w-3.5 h-3.5" />
                  <span>Recent Static Fire Milestone</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 bg-zinc-950/70 border border-zinc-800 px-3 py-1 rounded-full">
                  <Calendar className="w-3.5 h-3.5 text-[#cfc493]" />
                  <span>October 18th</span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
                Hot-Fire Testing & Propulsion Validation
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                On October 18th, the Bulls Experimental Liquids Team conducted its most recent static fire test, marking a major milestone in SOAR's liquid propulsion campaign. The test verified ignition sequence timing, chamber pressure, and propellant feed dynamics on the test stand as the team advances toward integrated vehicle flight operations.
              </p>

              {/* Static Fire Photo */}
              <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-zinc-800 shadow-2xl group bg-zinc-950">
                <a href="https://www.youtube.com/live/lWZP1cSXUcw?si=10_KnKCd0ZNaLvGO" target="_blank" rel="noopener noreferrer" title="BEL Static Fire Test held on October 18th">
                <Image
                  src="/bel static fire.jpg"
                  alt="BEL Static Fire Test held on October 18th"
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out cursor-pointer"
                  sizes="(max-width: 1024px) 100vw, 896px"
                  priority
                />
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 text-white">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#cfc493] flex items-center gap-1 mb-0.5">
                      <Sparkles className="w-3 h-3" />
                      Static Test Stand Operations
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-zinc-100">
                      Bulls Experimental Liquids Team Liquid Propulsion Static Fire
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400 bg-zinc-950/80 border border-zinc-800/80 px-2.5 py-1 rounded-md">
                    October 18th
                  </span>
                </div>
              </div>
            </div>

            {/* Project Objectives */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sm:p-8">
              <h3 className="text-2xl font-bold mb-4">Project Objectives</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-1">Liquid Engine Development</h4>
                    <p className="text-sm text-zinc-400">Design and test a liquid bipropellant rocket engine</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-1">Propellant Research</h4>
                    <p className="text-sm text-zinc-400">Study and optimize fuel-oxidizer combinations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-1">Feed System Design</h4>
                    <p className="text-sm text-zinc-400">Develop pressurized propellant delivery systems</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-1">Test Stand Operations</h4>
                    <p className="text-sm text-zinc-400">Build and operate static test infrastructure</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Teams */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sm:p-8">
              <h3 className="text-2xl font-bold mb-4">Technical Teams</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-lg font-bold text-[#cfc493] mb-2">Propulsion Team</h4>
                  <p className="text-zinc-400 text-sm">Engine design, injector development, and combustion analysis</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#cfc493] mb-2">Ground Station EE/CS Team</h4>
                  <p className="text-zinc-400 text-sm">Electrical, electronic, and computer systems design</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#cfc493] mb-2">Ground Station Mechanical Team</h4>
                  <p className="text-zinc-400 text-sm">Mechanical aspects of the ground station, including structural integrity, mechanical systems, and maintenance</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#cfc493] mb-2">Avionics Team</h4>
                  <p className="text-zinc-400 text-sm">Design, development, and maintenance of avionics systems for the rocket, including navigation, communication, and control systems</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#cfc493] mb-2">Aerostructures Team</h4>
                  <p className="text-zinc-400 text-sm">Design, development, and maintenance of the rocket's aerostructures, including structural integrity, aerodynamic performance, and material selection</p>
                </div>
              </div>
            </div>

            {/* Current Development Phase */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sm:p-8">
              <h3 className="text-2xl font-bold mb-4">Current Development Phase</h3>
              <p className="text-zinc-400 leading-relaxed">
                Following the successful static fire test on October 18th, the team continues hot-fire data reduction, refining injector geometry, and performing structural validation on the ground support and feed systems as preparation begins for subsequent test campaigns and full-scale vehicle integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
