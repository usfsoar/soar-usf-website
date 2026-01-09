"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function PastIRECPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <Navbar />
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <Image 
          src="/pastirec.jpg" 
          alt="Past IREC Projects" 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <section className="container mx-auto px-6 pt-20 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-zinc-900 rounded-full px-6 py-3 mb-6">
              <svg className="w-5 h-5 text-[#cfc493]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>
              </svg>
              <span className="text-sm font-medium tracking-wide text-[#cfc493]">Past Competition</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">PAST IREC</h2>
            <p className="text-zinc-400 text-lg">
              Previous Intercollegiate Rocket Engineering Competition Entries
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Competition History</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                SOAR has competed in the Intercollegiate Rocket Engineering Competition multiple times, with each year bringing new challenges, innovations, and lessons learned.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Our teams have developed increasingly sophisticated rockets, pushing the boundaries of student rocketry through creative engineering solutions and collaborative teamwork.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Notable Achievements</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-[#cfc493] pl-6">
                  <h4 className="text-xl font-bold mb-2">2024 IREC</h4>
                  <p className="text-zinc-400 text-sm mb-2">
                    <strong className="text-white">Achievement:</strong> Successful launch and recovery
                  </p>
                  <p className="text-zinc-400 text-sm">
                    Competed in the 10,000 ft COTS category with improved avionics and recovery systems
                  </p>
                </div>

                <div className="border-l-4 border-[#cfc493] pl-6">
                  <h4 className="text-xl font-bold mb-2">2023 IREC</h4>
                  <p className="text-zinc-400 text-sm mb-2">
                    <strong className="text-white">Achievement:</strong> First competition entry in several years
                  </p>
                  <p className="text-zinc-400 text-sm">
                    Marked SOAR's return to national competition after organizational restructuring
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Lessons Learned</h3>
              <div className="space-y-3 text-zinc-400">
                <p className="leading-relaxed">
                  Each competition has provided invaluable learning experiences, from airframe design optimization to avionics integration challenges.
                </p>
                <p className="leading-relaxed">
                  Our teams have refined their approach to project management, testing procedures, and launch operations through these competitions.
                </p>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Technical Highlights</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-lg font-bold text-[#cfc493] mb-2">Avionics Systems</h4>
                  <p className="text-zinc-400 text-sm">Custom flight computers with dual-deployment recovery</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#cfc493] mb-2">Airframe Design</h4>
                  <p className="text-zinc-400 text-sm">Fiberglass and carbon fiber composite construction</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#cfc493] mb-2">Recovery Systems</h4>
                  <p className="text-zinc-400 text-sm">Parachute deployment mechanisms and GPS tracking</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#cfc493] mb-2">Payload Integration</h4>
                  <p className="text-zinc-400 text-sm">Scientific and engineering payload experiments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
