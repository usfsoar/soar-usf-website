"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <Navbar />
      </div>

      <PageHeader title="TRA CERTIFICATIONS" subtitle="Tripoli Rocketry Association High-Power Certifications" />

      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">

          <div className="space-y-8">
            {/* About Section */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">About TRA Certifications</h3>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Image 
                  src="/tralogo.png" 
                  alt="TRA Logo" 
                  width={200} 
                  height={200}
                  className="shrink-0 object-contain" 
                />
                <div className="space-y-4 text-zinc-400 leading-relaxed">
                  <p>
                    Tripoli Rocketry Association provides a rigorous certification program that validates rocketry knowledge, construction quality, and safety practices, for members ascending the levels—building skills, earning credentials, and preparing for more advanced and powerful flights.
                  </p>
                  <p>
                    Certifications are divided into three levels (Level 1, Level 2, and Level 3), each requiring progressively more sophisticated rocket designs and greater technical knowledge.
                  </p>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">How the Certification Process Works</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                At each level, you design and build a high-power rocket, fly it, and recover it
                in one piece. You then present it to a certifying authority at the launch site, who inspects the rocket
                and signs off on your certification.
              </p>
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <h4 className="font-bold text-[#cfc493] mb-3">Typical Certification Kit Includes</h4>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#cfc493] mt-1">•</span>
                    <span>3 × 36 inch shipping tube body</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cfc493] mt-1">•</span>
                    <span>Bolted fin assembly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cfc493] mt-1">•</span>
                    <span>Shock cord and parachute recovery system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cfc493] mt-1">•</span>
                    <span>3D-printed nose cone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#cfc493] mt-1">•</span>
                    <span>Provided rocket motor</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Certification Levels */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Certification Levels</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-[#cfc493] pl-6">
                  <h4 className="text-xl font-bold mb-2">Level 1 (L1) — Basic Certification</h4>
                  <p className="text-zinc-400 text-sm mb-2">
                    <strong className="text-white">Motor Range:</strong> H and I impulse motors
                  </p>
                  <p className="text-zinc-400 text-sm mb-2">
                    <strong className="text-white">Requirements:</strong> Successful flight with stable ascent and safe recovery
                  </p>
                  <p className="text-zinc-400 text-sm">
                    Entry-level certification covering foundational knowledge of rocketry and safety. Rockets are
                    typically 3–5 feet tall, reaching altitudes around 1,000–2,000 feet.
                  </p>
                </div>

                <div className="border-l-4 border-[#cfc493] pl-6">
                  <h4 className="text-xl font-bold mb-2">Level 2 (L2) — Advanced Certification</h4>
                  <p className="text-zinc-400 text-sm mb-2">
                    <strong className="text-white">Motor Range:</strong> J, K, and L impulse motors
                  </p>
                  <p className="text-zinc-400 text-sm mb-2">
                    <strong className="text-white">Requirements:</strong> Successful flight + written exam covering high-power rocketry theory
                  </p>
                  <p className="text-zinc-400 text-sm">
                    Demonstrates advanced building and safety practices. Requires dual-deployment recovery and more
                    complex electronics integration.
                  </p>
                </div>

                <div className="border-l-4 border-[#cfc493] pl-6">
                  <h4 className="text-xl font-bold mb-2">Level 3 (L3) — Senior Certification</h4>
                  <p className="text-zinc-400 text-sm mb-2">
                    <strong className="text-white">Motor Range:</strong> M impulse and above (unlimited)
                  </p>
                  <p className="text-zinc-400 text-sm mb-2">
                    <strong className="text-white">Requirements:</strong> Written proposal, oral exam with TAP committee, successful complex build and flight on an M-class or higher motor with dual-deploy recovery
                  </p>
                  <p className="text-zinc-400 text-sm">
                    Expert-level rocketry and leadership capabilities. Demonstrates mastery of high-power rocketry,
                    often including custom electronics and advanced recovery systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Certification Progress */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Our Certification Progress</h3>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-zinc-800/60 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-[#cfc493] mb-2">20</div>
                  <div className="text-sm font-semibold mb-1">L1 Certified</div>
                  <div className="text-xs text-zinc-400">Basic Certification</div>
                </div>
                <div className="bg-zinc-800/60 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-[#cfc493] mb-2">4</div>
                  <div className="text-sm font-semibold mb-1">L2 Certified</div>
                  <div className="text-xs text-zinc-400">Advanced Certification</div>
                </div>
                <div className="bg-zinc-800/60 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-[#cfc493] mb-2">2</div>
                  <div className="text-sm font-semibold mb-1">L3 Certified</div>
                  <div className="text-xs text-zinc-400">Senior Certification</div>
                </div>
              </div>

              <div className="bg-zinc-800/40 border border-zinc-700 rounded-xl p-6">
  {/* Header Badge */}
  <div className="flex items-center gap-2 mb-4">
    <span className="text-xs font-bold uppercase tracking-widest text-[#cfc493]">
      Member Highlight
    </span>
  </div>

                {/* Flex layout for Image and Text */}
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <Image
                    src="/drewheadshot.jpg"
                    alt="Drew Brickell"
                    width={100}
                    height={100}
                    className="rounded-md shrink-0 object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-bold mb-2">Drew Brickell</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Drew is passionate about aerospace and has earned his Tripoli Level 2 certification through SOAR&apos;s
                      mentorship program. He is currently working toward his L3, which requires designing and flying on an
                      M-class or higher motor with dual-deploy recovery.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Get Certified */}
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

            {/* SOAR Support */}
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
