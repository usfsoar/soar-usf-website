"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"

export default function PastNSLPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <Navbar />
      </div>

      <PageHeader title="PAST NSL" subtitle="Our history in the NASA Student Launch program" />

      <section className="container mx-auto px-6 pt-20 pb-20">
        <div className="max-w-4xl mx-auto">

          <div className="space-y-8">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">About NASA Student Launch</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                NASA Student Launch is a research-based, competitive rocketry challenge for college and university-level students. Teams design, build, and launch high-powered rockets carrying science or engineering payloads to a target altitude.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                SOAR has participated in multiple NASA Student Launch competitions, with each year presenting unique challenges and opportunities for innovation.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Competition History</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-[#cfc493] pl-6">
                  <h4 className="text-xl font-bold mb-2">2023-2024 Season</h4>
                  <p className="text-zinc-400 text-sm mb-2">
                    <strong className="text-white">Challenge:</strong> Deploy autonomous rover payload
                  </p>
                  <p className="text-zinc-400 text-sm">
                    Team developed rocket with custom payload bay and deployment mechanism for autonomous ground vehicle
                  </p>
                </div>

                <div className="border-l-4 border-[#cfc493] pl-6">
                  <h4 className="text-xl font-bold mb-2">2022-2023 Season</h4>
                  <p className="text-zinc-400 text-sm mb-2">
                    <strong className="text-white">Challenge:</strong> Precise altitude targeting with scientific payload
                  </p>
                  <p className="text-zinc-400 text-sm">
                    Achieved successful launch and recovery with altitude within target parameters
                  </p>
                </div>

                <div className="border-l-4 border-[#cfc493] pl-6">
                  <h4 className="text-xl font-bold mb-2">2021-2022 Season</h4>
                  <p className="text-zinc-400 text-sm mb-2">
                    <strong className="text-white">Challenge:</strong> Return to competition after pandemic hiatus
                  </p>
                  <p className="text-zinc-400 text-sm">
                    Rebuilt team infrastructure and competed with redesigned rocket system
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Technical Achievements</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold mb-1">Autonomous Systems</h4>
                    <p className="text-sm text-zinc-400">Payload deployment and autonomous vehicle operation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold mb-1">Altitude Control</h4>
                    <p className="text-sm text-zinc-400">Precise motor selection and flight simulation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold mb-1">Data Collection</h4>
                    <p className="text-sm text-zinc-400">Comprehensive flight data and telemetry systems</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold mb-1">Recovery Systems</h4>
                    <p className="text-sm text-zinc-400">Dual deployment with GPS tracking</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Lessons Learned</h3>
              <div className="space-y-3 text-zinc-400">
                <p className="leading-relaxed">
                  Each NASA Student Launch season provided valuable experience in:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-[#cfc493] mt-1">•</span>
                    <span>Project management and milestone-driven development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cfc493] mt-1">•</span>
                    <span>Technical writing and formal documentation for NASA review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cfc493] mt-1">•</span>
                    <span>Safety protocols and risk mitigation strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cfc493] mt-1">•</span>
                    <span>Integration testing and system-level verification</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Launch Locations</h3>
              <p className="text-zinc-400 leading-relaxed mb-2">
                <strong className="text-white">Primary Site:</strong> Huntsville, Alabama
              </p>
              <p className="text-zinc-400 leading-relaxed mb-2">
                <strong className="text-white">Host:</strong> NASA Marshall Space Flight Center
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Teams gather annually in Huntsville for launch week, presenting their projects to NASA engineers and competing against universities nationwide.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Team Impact</h3>
              <p className="text-zinc-400 leading-relaxed">
                NASA Student Launch has been instrumental in developing SOAR members' technical skills, teamwork abilities, and professional presentation capabilities. The rigorous review process and complex challenges have prepared many members for careers in aerospace engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
