"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <Navbar />
      </div>

      {/* Hero Image */}
      <div className="relative h-screen">
        <Image 
          src="/certificationshero.JPG" 
          alt="TRA Certifications" 
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
              <span className="text-sm font-medium tracking-wide text-[#cfc493]">Member Development</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">TRA CERTIFICATIONS</h1>
            <p className="text-zinc-200 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-lg">
              Tripoli Rocketry Association High-Power Certifications
            </p>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">

          <div className="space-y-8">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">About TRA Certifications</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                The Tripoli Rocketry Association (TRA) certification program allows SOAR members to legally fly high-powered rockets and gain hands-on experience with increasingly complex rocket systems.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Certifications are divided into three levels (Level 1, Level 2, and Level 3), each requiring progressively more sophisticated rocket designs and greater technical knowledge.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Certification Levels</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-[#cfc493] pl-6">
                  <h4 className="text-xl font-bold mb-2">Level 1 (L1)</h4>
                  <p className="text-zinc-400 text-sm mb-2">
                    <strong className="text-white">Motor Range:</strong> H and I impulse motors
                  </p>
                  <p className="text-zinc-400 text-sm mb-2">
                    <strong className="text-white">Requirements:</strong> Successful flight with stable ascent and safe recovery
                  </p>
                  <p className="text-zinc-400 text-sm">
                    Entry-level certification for rockets typically 3-5 feet tall reaching altitudes around 1,000-2,000 feet
                  </p>
                </div>

                <div className="border-l-4 border-[#cfc493] pl-6">
                  <h4 className="text-xl font-bold mb-2">Level 2 (L2)</h4>
                  <p className="text-zinc-400 text-sm mb-2">
                    <strong className="text-white">Motor Range:</strong> J, K, and L impulse motors
                  </p>
                  <p className="text-zinc-400 text-sm mb-2">
                    <strong className="text-white">Requirements:</strong> Successful flight + written exam covering high-power rocketry theory
                  </p>
                  <p className="text-zinc-400 text-sm">
                    Intermediate certification requiring dual-deployment recovery and more complex electronics
                  </p>
                </div>

                <div className="border-l-4 border-[#cfc493] pl-6">
                  <h4 className="text-xl font-bold mb-2">Level 3 (L3)</h4>
                  <p className="text-zinc-400 text-sm mb-2">
                    <strong className="text-white">Motor Range:</strong> M impulse and above (unlimited)
                  </p>
                  <p className="text-zinc-400 text-sm mb-2">
                    <strong className="text-white">Requirements:</strong> Written proposal, oral exam with TAP committee, successful complex build and flight
                  </p>
                  <p className="text-zinc-400 text-sm">
                    Advanced certification demonstrating mastery of high-power rocketry, often including custom electronics and advanced recovery systems
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Why Get Certified?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold mb-1">Hands-On Experience</h4>
                    <p className="text-sm text-zinc-400">Design and build your own rocket from scratch</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold mb-1">Legal Flight Authority</h4>
                    <p className="text-sm text-zinc-400">Legally fly high-powered rockets at sanctioned launches</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold mb-1">Technical Skills</h4>
                    <p className="text-sm text-zinc-400">Learn aerodynamics, propulsion, and recovery systems</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold mb-1">Resume Builder</h4>
                    <p className="text-sm text-zinc-400">Demonstrate practical aerospace engineering skills</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">SOAR Support</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                SOAR provides comprehensive support for members pursuing TRA certifications, including:
              </p>
              <ul className="space-y-2 text-zinc-400">
                <li className="flex items-start gap-2">
                  <span className="text-[#cfc493] mt-1">•</span>
                  <span>Mentorship from experienced certified members</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#cfc493] mt-1">•</span>
                  <span>Access to tools, workspace, and fabrication equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#cfc493] mt-1">•</span>
                  <span>Technical guidance on design and construction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#cfc493] mt-1">•</span>
                  <span>Transportation to launch sites and certification attempts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
