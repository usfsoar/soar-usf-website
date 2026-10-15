"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"

export default function PastIRECPage() {
  const highlights = [
    {
      title: "Live Telemetry",
      description: "Real-time transmission of critical flight data, altitude, and sensor telemetry to ground station monitoring systems.",
    },
    {
      title: "Live Video Downlink",
      description: "Real-time onboard camera stream downlinked directly during flight for mission monitoring and visual tracking.",
    },
    {
      title: "Deployable Payload Rover",
      description: "Autonomous ground rover integrated inside the payload bay, engineered for ground deployment after landing.",
    },
    {
      title: "Bolted Fin Structure with Carbon Fiber fins",
      description: "Precision-machined bolted fin can structure utilizing high-strength, lightweight carbon fiber fins for aerodynamic stability.",
    },
    {
      title: "Active Airbrakes",
      description: "Actuated dynamic drag system designed to precisely control vehicle velocity and target the 10,000 ft target apogee.",
    },
    {
      title: "Dual Deployment Recovery",
      description: "Two-stage parachute deployment system deploying a drogue parachute at apogee and main parachute at lower altitude for safe recovery.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <Navbar />
      </div>

      <PageHeader title="PAST IREC" subtitle="IREC 2025-2026 Competition Entry & Project Overview" />

      <section className="container mx-auto px-6 pt-20 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Vehicle Showcase */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sm:p-8 overflow-hidden relative shadow-xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#cfc493]/15 border border-[#cfc493]/40 text-xs font-bold text-[#cfc493] mb-4">
                    <span>2025–2026 Competition Vehicle</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-white">IREC Launch Vehicle</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    Our 2025–2026 IREC vehicle was designed and manufactured to compete at Spaceport Midland, Texas in the 10,000 ft commercial solid motor category. It features active drag airbrakes, live telemetry and video downlinks, carbon fiber fin structures, and an autonomous deployable payload rover.
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-zinc-950/70 border border-zinc-800/80 p-3 rounded-xl">
                      <span className="text-zinc-400 block mb-0.5">Target Apogee</span>
                      <span className="text-white font-semibold text-sm">10,000 ft</span>
                    </div>
                    <div className="bg-zinc-950/70 border border-zinc-800/80 p-3 rounded-xl">
                      <span className="text-zinc-400 block mb-0.5">Max Velocity</span>
                      <span className="text-white font-semibold text-sm">Mach 0.92</span>
                    </div>
                    <div className="bg-zinc-950/70 border border-zinc-800/80 p-3 rounded-xl">
                      <span className="text-zinc-400 block mb-0.5">Length</span>
                      <span className="text-white font-semibold text-sm">114 in</span>
                    </div>
                    <div className="bg-zinc-950/70 border border-zinc-800/80 p-3 rounded-xl">
                      <span className="text-zinc-400 block mb-0.5">Payload</span>
                      <span className="text-white font-semibold text-sm">Deployable Rover</span>
                    </div>
                  </div>
                </div>

                <div className="order-1 md:order-2 flex justify-center">
                  <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden bg-zinc-950/70 border border-zinc-800/80 p-6 flex items-center justify-center group shadow-xl shadow-black/40">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#cfc493]/10 via-transparent to-transparent pointer-events-none" />
                    <Image
                      src="/currirechero.png"
                      alt="IREC 2025-2026 Competition Rocket"
                      width={600}
                      height={600}
                      className="object-contain w-full h-full drop-shadow-[0_15px_30px_rgba(207,196,147,0.2)] transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* About IREC / History */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">About the IREC Project</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                The International Rocket Engineering Competition (IREC) is the world's largest intercollegiate rocket engineering competition. Teams from universities around the globe design, build, and launch high-powered rockets to achieve specific altitude targets and demonstrate successful recovery and payload operations.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Our 2025-2026 IREC project marked SOAR's return to the international competition stage, competing in the 10,000 ft apogee commercial solid motor category at Spaceport Midland, Texas.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                The vehicle incorporated advanced multi-discipline engineering across structures, aerodynamics, active flight control, and payload robotics.
              </p>
            </div>

            {/* Rocket Specifications */}
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
                      <td className="py-3 px-4 text-zinc-400">Target Altitude</td>
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

            {/* Technical System Highlights */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-2">Technical System Highlights</h3>
              <p className="text-zinc-400 text-sm mb-6">
                Key engineering innovations and systems developed for this competition entry:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-zinc-950/60 rounded-xl border border-zinc-800/80">
                    <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-bold text-white text-base mb-1">{highlight.title}</h4>
                      <p className="text-sm text-zinc-400 leading-relaxed">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Goals */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Project Goals & Outcomes</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold mb-1">Altitude Target</h4>
                    <p className="text-sm text-zinc-400">Reach target apogee of 10,000 feet utilizing active drag control</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold mb-1">Recovery System</h4>
                    <p className="text-sm text-zinc-400">Dual deployment parachute system with electronic redundancy</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold mb-1">Payload Mission</h4>
                    <p className="text-sm text-zinc-400">Successful integration and ground deployment of autonomous rover</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold mb-1">Data Acquisition</h4>
                    <p className="text-sm text-zinc-400">Comprehensive real-time telemetry and high-resolution video streaming</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Structure */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Team Structure</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                The IREC team was organized into specialized sub-teams working in tight cross-disciplinary collaboration:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-zinc-400">
                <div className="p-4 bg-zinc-950/40 rounded-xl border border-zinc-800/60">
                  <h4 className="font-bold text-white mb-1">Aerostructures</h4>
                  <p>Airframe integration, composite fin manufacturing, nose cone, and bolted fin can assembly.</p>
                </div>
                <div className="p-4 bg-zinc-950/40 rounded-xl border border-zinc-800/60">
                  <h4 className="font-bold text-white mb-1">Avionics & Telemetry</h4>
                  <p>Flight computer systems, RF communications, real-time live telemetry, and live video downlink.</p>
                </div>
                <div className="p-4 bg-zinc-950/40 rounded-xl border border-zinc-800/60">
                  <h4 className="font-bold text-white mb-1">Payload EE/CS</h4>
                  <p>Deployable autonomous rover design, drive mechanics, onboard sensors, and release actuation.</p>
                </div>
                <div className="p-4 bg-zinc-950/40 rounded-xl border border-zinc-800/60">
                  <h4 className="font-bold text-white mb-1">Recovery & Airbrakes</h4>
                  <p>Dual deployment ejection charges, parachute rigging, and active airbrake control actuation.</p>
                </div>
              </div>
            </div>

            {/* Competition Details */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Competition Information</h3>
              <p className="text-zinc-400 leading-relaxed mb-2">
                <strong className="text-white">Competition Season:</strong> 2025-2026
              </p>
              <p className="text-zinc-400 leading-relaxed mb-2">
                <strong className="text-white">Location:</strong> Spaceport Midland, Texas
              </p>
              <p className="text-zinc-400 leading-relaxed">
                <strong className="text-white">Host:</strong> Experimental Sounding Rocket Association (ESRA)
              </p>
            </div>

          {/* Technical Report */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Technical Report</h3>
              <iframe src = "/Team024_University of South Florida_Project Technical Report.pdf" width="100%" height="600px" title="Technical Report"></iframe>
            </div>  
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}