"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"

export default function HybridPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <Navbar />
      </div>

      <PageHeader title="HYBRID ROCKET PROJECT" subtitle="Experimental Hybrid Propulsion Research" />

      <section className="container mx-auto px-6 pt-20 pb-20">
        <div className="max-w-4xl mx-auto">

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
