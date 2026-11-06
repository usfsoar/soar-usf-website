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
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#cfc493] mb-2">Vertical Static Fire System</p>
                  <h3 className="text-2xl font-bold">About BEL</h3>
                </div>
                
              </div>
              <p className="text-zinc-400 leading-relaxed mb-4">
                BEL (Bulls Experimental Liquids Team) is developing the Stoic I liquid bi-propellant engine and its vertical static fire test stand for the Society of Aeronautics and Rocketry at the University of South Florida.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-6">
                The system uses nitrous oxide and ethanol to target 4.9 kN (1,100 lbf) of nominal thrust for at least 16 seconds at a 4 MPa chamber pressure. Its fuel-rich 3.5 O/F mixture ratio is designed to reduce combustion instability and flame temperature while preserving performance.
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="bg-zinc-950/70 border border-zinc-800/80 p-4 rounded-xl">
                  <span className="text-xs text-zinc-500 block mb-1">Nominal thrust</span>
                  <span className="text-lg font-bold text-white">4.9 kN</span>
                </div>
                <div className="bg-zinc-950/70 border border-zinc-800/80 p-4 rounded-xl">
                  <span className="text-xs text-zinc-500 block mb-1">Burn duration</span>
                  <span className="text-lg font-bold text-white">≥ 16 seconds</span>
                </div>
                <div className="bg-zinc-950/70 border border-zinc-800/80 p-4 rounded-xl">
                  <span className="text-xs text-zinc-500 block mb-1">Chamber pressure</span>
                  <span className="text-lg font-bold text-white">4 MPa</span>
                </div>
              </div>
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
              <p className="text-zinc-400 leading-relaxed mb-6">
                The CDR-defined objectives cover the Stoic I engine, propellant feed system, vertical test stand, and controls architecture required for safe, repeatable hot-fire testing.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-1">Stoic I Engine Performance</h4>
                    <p className="text-sm text-zinc-400">Develop a nitrous oxide and ethanol engine targeting 4.9 kN nominal thrust, at least 16 seconds of continuous burn, and a 4 MPa chamber pressure.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-1">Injector, Chamber & Nozzle Integration</h4>
                    <p className="text-sm text-zinc-400">Validate the triple-impinging injector, C-C ablative liner and nozzle, 15° conical nozzle, and 7.013 expansion ratio for efficient and thermally protected combustion.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-1">Pressurized Feed System</h4>
                    <p className="text-sm text-zinc-400">Integrate the concentric nitrous oxide and ethanol tanks, EPDM pistons, Valworx solenoid valves, stainless tubing, pneumatic actuators, and fill, vent, and run-line quick disconnects.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-1">Vertical Test Stand & EECS</h4>
                    <p className="text-sm text-zinc-400">Build a 17-foot guided-sled stand rated above 1,100 lbf and operate it with LabJack T7 data acquisition, Teensy 4.1 controls, fiber or Ethernet UDP communication, and redundant ignition.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-1">Safe, Repeatable Test Operations</h4>
                    <p className="text-sm text-zinc-400">Use FMEA, SOPs, emergency action plans, pre-test checklists, pressure relief, dual-operator verification, software arming controls, and an emergency stop sequence.</p>
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
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <h3 className="text-2xl font-bold">Current Development Phase</h3>
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#cfc493] bg-[#cfc493]/10 border border-[#cfc493]/30 px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#cfc493]" />
                  Critical Design Review complete
                </span>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                As of the October 23, 2026 Critical Design Review, BEL has defined the Stoic I engine and Vertical Static Fire System architecture. Current work is focused on finalizing the 17-foot test stand, validating the concentric tank and valve network, and integrating the EECS controls and data pipeline ahead of hot-fire testing.
              </p>
              <p className="text-zinc-400 leading-relaxed mt-4">
                The control interface is being developed around a LabJack T7 with at least 50 Hz sampling and a Teensy 4.1 controller for six solenoid valves and dual-redundant ignition. The operator GUI will provide P&amp;ID visualization, 10-second rolling charts, look-but-don&apos;t-touch safeguards, dual-key confirmations, and a spacebar emergency stop.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
