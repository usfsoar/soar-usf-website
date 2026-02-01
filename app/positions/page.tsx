"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Users, Rocket, Zap, Megaphone } from "lucide-react"

// Position data structure
const positions = {
  eboard: [
    { title: "President", isOpen: false },
    { title: "Vice President", isOpen: false },
    { title: "Torito Chief Engineer", isOpen: false },
    { title: "IREC Chief Engineer", isOpen: false },
    { title: "Chief of Marketing", isOpen: false },
    { title: "Chief of Operations", isOpen: false },
    { title: "Chief of Finance", isOpen: false },
    { title: "Secretary", isOpen: false },
  ],
  irec: [
    { title: "Project Manager", isOpen: false },
    { title: "Vehicle Mechanical Lead", isOpen: false },
    { title: "Vehicle EE/CS Lead", isOpen: false },
    { title: "Aerostructures Lead", isOpen: false },
    { title: "Payload Mechanical Lead", isOpen: false },
    { title: "Payload EE/CS Lead", isOpen: false },
    { title: "Telemetry Lead", isOpen: false },
    { title: "Recovery/Flight Dynamics", isOpen: false },
  ],
  torito: [
    { title: "Project Manager", isOpen: false },
    { title: "Data Acquisition Lead", isOpen: false },
    { title: "Aerostructures Lead", isOpen: false },
    { title: "Propulsion Lead", isOpen: false },
    { title: "Test Stand Lead", isOpen: false },
    { title: "Safety Officer", isOpen: false },
    { title: "Ground Station Control Mechanical Lead", isOpen: false },
    { title: "Ground Station Control Electrical Lead", isOpen: false },
    { title: "Electronics Researcher", isOpen: false },
  ],
  marketing: [
    { title: "Marketing Officer", isOpen: false },
    { title: "Public Relations", isOpen: false },
    { title: "Multimedia Chair", isOpen: false },
    { title: "Web Developer", isOpen: false },
    { title: "Historian", isOpen: false },
  ],
}

const applicationUrl = "https://forms.gle/yourApplicationLink" // Replace with actual application link

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

      {/* Hero Image */}
      <div className="relative h-[60vh] md:h-screen">
        <Image 
          src="/positionhero.JPG" 
          alt="Positions" 
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-[#006747]/30" />
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">OPEN POSITIONS</h1>
            <p className="text-zinc-200 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-lg">
              Join our team and help shape the future of aerospace engineering
            </p>
          </div>
        </div>
      </div>

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
