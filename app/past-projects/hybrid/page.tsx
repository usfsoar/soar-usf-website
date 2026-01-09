"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function HybridPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <Navbar />
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <Image 
          src="/hybridhero.JPG" 
          alt="Hybrid Rocket Project" 
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
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"/>
              </svg>
              <span className="text-sm font-medium tracking-wide text-[#cfc493]">Past Project</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">HYBRID ROCKET PROJECT</h2>
            <p className="text-zinc-400 text-lg">
              Experimental Hybrid Propulsion Research
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">About Hybrid Rockets</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Hybrid rocket engines use a combination of solid and liquid propellants, typically with a solid fuel grain and liquid oxidizer. This design offers advantages in safety, throttleability, and restart capability compared to traditional solid or liquid systems.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                SOAR's hybrid rocket project explored the fundamentals of hybrid propulsion technology, providing hands-on experience with alternative rocket propulsion methods.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Project Objectives</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold mb-1">Fuel Grain Development</h4>
                    <p className="text-sm text-zinc-400">Design and cast solid fuel grains with optimal geometry</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold mb-1">Oxidizer Injection</h4>
                    <p className="text-sm text-zinc-400">Create efficient liquid oxidizer injection systems</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold mb-1">Static Testing</h4>
                    <p className="text-sm text-zinc-400">Conduct controlled burn tests to measure performance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold mb-1">Safety Procedures</h4>
                    <p className="text-sm text-zinc-400">Develop comprehensive safety protocols for hybrid testing</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Technical Details</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-[#cfc493] pl-6">
                  <h4 className="text-xl font-bold mb-2">Propellant Combination</h4>
                  <p className="text-zinc-400 text-sm mb-2">
                    <strong className="text-white">Fuel:</strong> Hydroxyl-terminated polybutadiene (HTPB) or paraffin-based solid fuel
                  </p>
                  <p className="text-zinc-400 text-sm">
                    <strong className="text-white">Oxidizer:</strong> Nitrous oxide (N₂O) or gaseous oxygen
                  </p>
                </div>

                <div className="border-l-4 border-[#cfc493] pl-6">
                  <h4 className="text-xl font-bold mb-2">Engine Design</h4>
                  <p className="text-zinc-400 text-sm mb-2">
                    Custom combustion chamber with replaceable fuel grains
                  </p>
                  <p className="text-zinc-400 text-sm">
                    Pressure-fed oxidizer delivery system for controlled flow rates
                  </p>
                </div>

                <div className="border-l-4 border-[#cfc493] pl-6">
                  <h4 className="text-xl font-bold mb-2">Test Infrastructure</h4>
                  <p className="text-zinc-400 text-sm mb-2">
                    Vertical test stand with load cell for thrust measurement
                  </p>
                  <p className="text-zinc-400 text-sm">
                    Data acquisition system monitoring pressure, temperature, and thrust
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Key Achievements</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold mb-1">Successful Burns</h4>
                    <p className="text-sm text-zinc-400">Multiple successful static fire tests</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold mb-1">Fuel Casting</h4>
                    <p className="text-sm text-zinc-400">Developed fuel grain casting procedures</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold mb-1">Performance Data</h4>
                    <p className="text-sm text-zinc-400">Collected thrust and pressure data</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold mb-1">Safety Record</h4>
                    <p className="text-sm text-zinc-400">Zero incidents during testing phase</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Challenges Encountered</h3>
              <div className="space-y-3 text-zinc-400">
                <p className="leading-relaxed">
                  The team faced several technical challenges throughout the project:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-[#cfc493] mt-1">•</span>
                    <span>Achieving consistent fuel grain quality and geometry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cfc493] mt-1">•</span>
                    <span>Managing oxidizer flow rates for optimal combustion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cfc493] mt-1">•</span>
                    <span>Thermal management of the combustion chamber</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cfc493] mt-1">•</span>
                    <span>Scaling from small test motors to flight-weight engines</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Educational Impact</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                The hybrid rocket project provided team members with unique exposure to alternative propulsion technologies and hands-on experience with:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-zinc-400">
                <div>
                  <h4 className="text-lg font-bold text-[#cfc493] mb-2">Chemistry</h4>
                  <p className="text-sm">Propellant formulation and combustion chemistry</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#cfc493] mb-2">Fluid Dynamics</h4>
                  <p className="text-sm">Oxidizer flow and injection systems</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#cfc493] mb-2">Thermodynamics</h4>
                  <p className="text-sm">Heat transfer and combustion efficiency</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#cfc493] mb-2">Instrumentation</h4>
                  <p className="text-sm">Sensor integration and data analysis</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Project Legacy</h3>
              <p className="text-zinc-400 leading-relaxed">
                While the hybrid rocket project has concluded, the knowledge and experience gained continue to influence current propulsion research efforts. The safety protocols, testing procedures, and technical documentation produced during this project serve as valuable resources for future propulsion teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
