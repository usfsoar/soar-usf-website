"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function IRECPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <Navbar />
      </div>

      {/* Hero Image */}
      <div className="relative h-screen">
        <Image 
          src="/currirechero.png" 
          alt="IREC" 
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-[#006747]/30" />
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-zinc-900/80 rounded-full px-6 py-3 mb-6">
              <svg className="w-5 h-5 text-[#cfc493]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>
              </svg>
              <span className="text-sm font-medium tracking-wide text-[#cfc493]">Current Project</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">IREC</h1>
            <p className="text-zinc-200 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-lg">
              International Rocket Engineering Competition
            </p>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">

          <div className="space-y-8">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">About IREC</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                The International Rocket Engineering Competition (IREC) is the world's largest rocket competition, held annually at Spaceport America in New Mexico until 2025.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Teams from universities around the globe design, build, and launch high-powered rockets to achieve specific altitude targets and demonstrate successful recovery systems.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Rocket Specifications</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-zinc-700">
                      <th className="py-3 px-4 font-semibold text-white">Specification</th>
                      <th className="py-3 px-4 font-semibold text-white">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-zinc-800">
                      <td className="py-3 px-4 text-zinc-400">Mass</td>
                      <td className="py-3 px-4 text-white">62.3 lb</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-3 px-4 text-zinc-400">Height</td>
                      <td className="py-3 px-4 text-white">114 in</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-3 px-4 text-zinc-400">Payload</td>
                      <td className="py-3 px-4 text-white">Deployable Rover</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-3 px-4 text-zinc-400">Altitude</td>
                      <td className="py-3 px-4 text-white">10,000 ft</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-zinc-400">Max Velocity</td>
                      <td className="py-3 px-4 text-white">0.92 Mach</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Project Goals</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold mb-1">Altitude Target</h4>
                    <p className="text-sm text-zinc-400">Reach target apogee of 10,000 feet</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold mb-1">Recovery System</h4>
                    <p className="text-sm text-zinc-400">Dual deployment parachute system</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold mb-1">Payload</h4>
                    <p className="text-sm text-zinc-400">Custom scientific payload integration</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold mb-1">Data Acquisition</h4>
                    <p className="text-sm text-zinc-400">Real-time telemetry and flight data</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Team Structure</h3>
              <p className="text-zinc-400 leading-relaxed">
                Our IREC team is divided into specialized sub-teams including Propulsion, Structures, Avionics, Recovery, and Payload. Each team works collaboratively to ensure mission success.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Competition Schedule</h3>
              <p className="text-zinc-400 leading-relaxed mb-2">
                <strong className="text-white">Competition Date:</strong> June 2026
              </p>
              <p className="text-zinc-400 leading-relaxed mb-2">
                <strong className="text-white">Location:</strong> Spaceport Midland, Texas
              </p>
              <p className="text-zinc-400 leading-relaxed">
                <strong className="text-white">Launch Window:</strong> Multiple launch opportunities throughout competition week
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
