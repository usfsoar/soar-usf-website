"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"

export default function ToritoPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <Navbar />
      </div>

      <PageHeader title="TORITO" subtitle="Liquid Propulsion Research Project" />

      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">

          <div className="space-y-8">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">About Torito</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Torito is SOAR's ambitious liquid propulsion research project, focusing on the development of a liquid-fueled rocket engine and vehicle.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                This project pushes the boundaries of student rocketry by exploring advanced propulsion technologies and complex fluid systems.
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
                    <h4 className="font-bold mb-1">Liquid Engine Development</h4>
                    <p className="text-sm text-zinc-400">Design and test a liquid bipropellant rocket engine</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold mb-1">Propellant Research</h4>
                    <p className="text-sm text-zinc-400">Study and optimize fuel-oxidizer combinations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold mb-1">Feed System Design</h4>
                    <p className="text-sm text-zinc-400">Develop pressurized propellant delivery systems</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold mb-1">Test Stand Operations</h4>
                    <p className="text-sm text-zinc-400">Build and operate static test infrastructure</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Technical Teams</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-lg font-bold text-[#cfc493] mb-2">Propulsion Team</h4>
                  <p className="text-zinc-400 text-sm">Engine design, injector development, and combustion analysis</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#cfc493] mb-2">Fluids Team</h4>
                  <p className="text-zinc-400 text-sm">Propellant feed systems, plumbing, and fluid dynamics</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#cfc493] mb-2">Safety Team</h4>
                  <p className="text-zinc-400 text-sm">Safety protocols, hazard analysis, and test procedures</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#cfc493] mb-2">Test Operations</h4>
                  <p className="text-zinc-400 text-sm">Test stand design, data acquisition, and test execution</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Current Development Phase</h3>
              <p className="text-zinc-400 leading-relaxed">
                The team is currently in the design and testing phase, conducting static fire tests of engine components and validating propellant feed system designs before full-scale integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
