"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import Link from "next/link"

export default function IRECPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <Navbar />
      </div>

      <PageHeader title="IREC" subtitle="International Rocket Engineering Competition" />

      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Status / Under Development Banner */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 relative overflow-hidden">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#cfc493]/10 border border-[#cfc493]/30 text-xs font-semibold text-[#cfc493] mb-4">
                <span className="w-2 h-2 rounded-full bg-[#cfc493] animate-pulse" />
                Next Season In Development
              </div>
              <h3 className="text-2xl font-bold mb-4">Upcoming Cycle</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Our engineering teams are currently developing the architecture, mission objectives, and vehicle designs for the upcoming International Rocket Engineering Competition (IREC).
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Full vehicle specifications, CAD renders, subsystem breakdowns, and flight timelines will be announced as preliminary design reviews are finalized. Check back soon for updates!
              </p>
            </div>

            {/* About the Competition */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">About IREC</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                The International Rocket Engineering Competition is an annual competition hosted by the Experimental Sounding Rocket Association (ESRA), a 501(c)(3) non-profit dedicated to fostering and promoting engineering knowledge and experience in the field of rocketry.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Student teams from hundreds of international universities design, manufacture, and fly high-powered rockets carrying scientific and technological payloads to target altitudes of 10,000, 30,000, or 45,000 ft using solid, liquid, and hybrid propulsion systems.
              </p>
            </div>

            {/* Preliminary Specifications (Placeholder) */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <h3 className="text-2xl font-bold">Rocket Specifications</h3>
                <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Preliminary / To Be Announced</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-zinc-700">
                      <th className="py-3 px-4 font-semibold text-white">Specification</th>
                      <th className="py-3 px-4 font-semibold text-white">Status / Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-zinc-800">
                      <td className="py-3 px-4 text-zinc-400">Target Altitude</td>
                      <td className="py-3 px-4 text-zinc-500 italic">To be announced</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-3 px-4 text-zinc-400">Total Mass</td>
                      <td className="py-3 px-4 text-zinc-500 italic">In design phase</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-3 px-4 text-zinc-400">Vehicle Length</td>
                      <td className="py-3 px-4 text-zinc-500 italic">In design phase</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-3 px-4 text-zinc-400">Propulsion System</td>
                      <td className="py-3 px-4 text-zinc-500 italic">Evaluating motor options</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-3 px-4 text-zinc-400">Payload Experiment</td>
                      <td className="py-3 px-4 text-zinc-500 italic">Concept definition in progress</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-zinc-400">Recovery System</td>
                      <td className="py-3 px-4 text-zinc-500 italic">Dual deployment architecture</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sub-Teams Working on This Project */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Development Sub-Teams</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Our IREC development effort is organized into seven specialized engineering branches:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-zinc-950/60 rounded-xl border border-zinc-800/80">
                  <h4 className="font-bold text-white mb-1">Aerostructures</h4>
                  <p className="text-sm text-zinc-400">Airframe optimization, fin flutter analysis, nose cone aerodynamics, and composite manufacturing.</p>
                </div>
                <div className="p-4 bg-zinc-950/60 rounded-xl border border-zinc-800/80">
                  <h4 className="font-bold text-white mb-1">Avionics & Telemetry</h4>
                  <p className="text-sm text-zinc-400">Flight computers, redundant sensor buses, long-range telemetry, and ground control integration.</p>
                </div>
                <div className="p-4 bg-zinc-950/60 rounded-xl border border-zinc-800/80">
                  <h4 className="font-bold text-white mb-1">Payload EE/CS</h4>
                  <p className="text-sm text-zinc-400">Autonomous science experiment and deployment payload design and firmware development.</p>
                </div>
                <div className="p-4 bg-zinc-950/60 rounded-xl border border-zinc-800/80">
                  <h4 className="font-bold text-white mb-1">Payload Mechanical</h4>
                  <p className="text-sm text-zinc-400">Autonomous science experiment and deployment payload mechanical design and fabrication.</p>
                </div>
                <div className="p-4 bg-zinc-950/60 rounded-xl border border-zinc-800/80">
                  <h4 className="font-bold text-white mb-1">Controls EE/CS</h4>
                  <p className="text-sm text-zinc-400">Flight control systems, guidance, navigation, and control algorithms for rocket stability and maneuverability.</p>
                </div>
                <div className="p-4 bg-zinc-950/60 rounded-xl border border-zinc-800/80">
                  <h4 className="font-bold text-white mb-1">Controls Mechanical</h4>
                  <p className="text-sm text-zinc-400">Flight control systems, guidance, navigation, and control mechanisms for rocket stability and maneuverability.</p>
                </div>
                <div className="p-4 bg-zinc-950/60 rounded-xl border border-zinc-800/80">
                  <h4 className="font-bold text-white mb-1">Safety</h4>
                  <p className="text-sm text-zinc-400">Ensuring the safety of the team, the public, and the environment during all aspects of the project.</p>
                </div>
              </div>
            </div>

            {/* Past Competition Reference */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Looking for previous IREC rockets?</h4>
                <p className="text-sm text-zinc-400">Review specifications, technical highlights, and documentation from past seasons.</p>
              </div>
              <Link
                href="/past-projects/past-irec"
                className="px-5 py-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-medium transition-colors whitespace-nowrap cursor-pointer"
              >
                View Past IREC Project →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
