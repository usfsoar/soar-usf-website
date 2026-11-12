"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { Users, Rocket, Zap, Megaphone, Wrench } from "lucide-react"

// Position data structure
const positions = {
  eboard: [
    { title: "President", isOpen: false },
    { title: "Vice President", isOpen: false },
    { title: "BEL Chief Engineer", isOpen: false },
    { title: "IREC Chief Engineer", isOpen: false },
    { title: "Chief of Marketing", isOpen: false },
    { title: "Chief of Operations", isOpen: false },
    { title: "Chief of Finance", isOpen: false },
    { title: "Secretary", isOpen: false },
  ],
  irec: [
    { title: "Program Manager", isOpen: false },
    { title: "Project Coordinator", isOpen: false },
    { title: "Avionics Lead", isOpen: false },
    { title: "Aerostructures Lead", isOpen: false },
    { title: "Payload Mechanical Lead", isOpen: false },
    { title: "Payload EE/CS Lead", isOpen: false },
    { title: "Guidance Navigation & Controls Mechanical Lead", isOpen: false },
    { title: "Guidance Navigation & Controls EE/CS Lead", isOpen: false },
    { title: "Safety Lead", isOpen: false },
  ],
  torito: [
    { title: "Program Manager", isOpen: false },
    { title: "Aerostructures Lead", isOpen: false },
    { title: "Ground Stations EE/CS Lead", isOpen: false },
    { title: "Ground Station Mechanical Lead", isOpen: false },
    { title: "Propulsion Lead", isOpen: false },
    { title: "Safety Lead", isOpen: false },
  ],
  marketing: [
    { title: "Marketing Officer", isOpen: false },
    { title: "Web Developer", isOpen: false },
    { title: "Historian", isOpen: false },
    { title: "IREC Marketing Lead", isOpen: true}
  ],
  operations: [
    { title: "Fundraising Lead 1", isOpen: false },
    { title: "Fundraising Lead 2", isOpen: false },
    { title: "Professional Development Lead", isOpen: false },

  ]
}

const applicationUrl = "https://docs.google.com/forms/d/e/1FAIpQLSciLyKS2Od3-UtgxDr1xXFQx_CUaCZP2aSCQEnzCH6aXVe7ZA/viewform?usp=dialog" // Replace with actual application link

function PositionCard({ title, isOpen }: { title: string; isOpen: boolean }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <div className="flex items-center gap-2">
            {isOpen ? (
              <>
                <span className="inline-flex items-center gap-1.5 text-sm text-green-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Open
                </span>
                <span className="text-zinc-600">•</span>
                <a
                  href={applicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#cfc493] hover:text-[#b8ae7d] transition-colors underline"
                >
                  Apply Now
                </a>
              </>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-sm text-zinc-500">
                <div className="w-2 h-2 bg-zinc-600 rounded-full" />
                Position Filled
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function PositionSection({
  title,
  icon,
  description,
  positions,
}: {
  title: string
  icon: React.ReactNode
  description: string
  positions: { title: string; isOpen: boolean }[]
}) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-zinc-900 rounded-lg">
          {icon}
        </div>
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-zinc-400 text-sm mt-1">{description}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {positions.map((position, index) => (
          <PositionCard key={index} title={position.title} isOpen={position.isOpen} />
        ))}
      </div>
    </div>
  )
}

export default function PositionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <Navbar />
      </div>

      <PageHeader title="OPEN POSITIONS" subtitle="Join our team and help shape the future of aerospace engineering" />

      {/* Positions Content */}
      <section className="py-16 md:py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* SOAR Eboard Section */}
          <PositionSection
            title="SOAR Eboard"
            icon={<Users className="w-6 h-6 text-[#cfc493]" />}
            description="Leadership positions guiding the organization's direction and operations"
            positions={positions.eboard}
          />

          {/* IREC Team Section */}
          <PositionSection
            title="IREC Team"
            icon={<Rocket className="w-6 h-6 text-[#cfc493]" />}
            description="Competition team developing high-powered rockets for international events"
            positions={positions.irec}
          />

          {/* Torito Team Section */}
          <PositionSection
            title="Torito Team"
            icon={<Zap className="w-6 h-6 text-[#cfc493]" />}
            description="Research and development team working on advanced propulsion systems"
            positions={positions.torito}
          />

          {/* Marketing Team Section */}
          <PositionSection
            title="Marketing Team"
            icon={<Megaphone className="w-6 h-6 text-[#cfc493]" />}
            description="Creative team managing brand, outreach, and digital presence"
            positions={positions.marketing}
          />
          <PositionSection
            title="Operations Team"
            icon={<Wrench className="w-6 h-6 text-[#cfc493]" />}
            description="Team focused on outreach and fundraising efforts"
            positions={positions.operations}
          />

          {/* Call to Action */}
          <div className="mt-16 bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Don't See Your Fit?</h2>
            <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
              We're always looking for passionate individuals to join our team. Reach out to us to discuss how you can contribute to SOAR.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#cfc493] hover:bg-[#b8ae7d] text-black rounded-full py-3 px-8 font-medium transition-colors"
            >
              Get in Touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
