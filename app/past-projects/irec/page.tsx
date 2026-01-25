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
      <div className="relative h-screen">
        <Image 
          src="/pastirec.jpg" 
          alt="Past IREC Projects" 
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-[#006747]/30" />
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">PAST IREC</h1>
            <p className="text-zinc-200 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-lg">
              Previous Intercollegiate Rocket Engineering Competition Entries
            </p>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-6 pt-20 pb-20">
        <div className="max-w-4xl mx-auto">

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
