"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState, useEffect, useRef } from "react"
import { Rocket } from "lucide-react"
import Image from "next/image"

interface EboardMember {
  name: string
  title: string
  description: string
  dates: string
  involvement: string
}

const eboardMembers: EboardMember[] = [
  {
    name: "Adam Raynard",
    title: "Eboard",
    description: "Serving as the President, Adam leads the organization.",
    dates: "May 2024 - October 2026",
    involvement: "Adam's involvement description will go here."
  },
  {
    name: "Kyle Shum",
    title: "Eboard",
    description: "Serving as the Vice President, Kyle supports the organization.",
    dates: "May 2024 - October 2026",
    involvement: "Kyle's involvement description will go here."
  },
  {
    name: "Matthew Messing",
    title: "Eboard",
    description: "Serving as the Treasurer, Matthew manages finances.",
    dates: "May 2024 - October 2026",
    involvement: "Matthew's involvement description will go here."
  },
  {
    name: "Emily Ho",
    title: "Eboard",
    description: "Serving as the Chief of Marketing, Emily is currently a Senior in Chemical Engineering.",
    dates: "May 2024 - October 2026",
    involvement: "Starting Summer 2023, Emily joined Torito's Liquid Propulsion and Chemical Team to help researching propellants, injector designs, and P&ID. As a Torito Junior Engineer, she presented her propellant and chemical research alongside the Torito Leads in Spring 2024. With the help of the 2023-2024 Eboard, the role of Chief of Marketing was established, marking Emily as the first Chief of Marketing. Later, she would take a Lead position in Torito as a Safety Officer."
  },
  {
    name: "Joshua Garcia",
    title: "Eboard",
    description: "Joshua's role description will go here.",
    dates: "May 2024 - October 2026",
    involvement: "Joshua's involvement description will go here."
  },
  {
    name: "Cesar Briones",
    title: "Eboard",
    description: "Cesar's role description will go here.",
    dates: "May 2024 - October 2026",
    involvement: "Cesar's involvement description will go here."
  },
  {
    name: "Ramy Ismal",
    title: "Eboard",
    description: "Ramy's role description will go here.",
    dates: "May 2024 - October 2026",
    involvement: "Ramy's involvement description will go here."
  }
]

function EboardCard({ member }: { member: EboardMember }) {
  const [selectedImage, setSelectedImage] = useState(0)

  // Define images for Emily Ho
  const emilyImages = member.name === "Emily Ho" ? [
    "/emily1.jpg",
    "/emily2.jpg",
    "/emily3.png"
  ] : null

  const emilyProfileImage = member.name === "Emily Ho" ? "/emilyheadshot.jpg" : null

  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-6 p-6">
        {/* Left side - Image and buttons */}
        <div className="lg:w-[280px] flex flex-col flex-shrink-0">
          {/* Main image placeholder with overlaid thumbnails */}
          <div className="relative aspect-[3/4] bg-zinc-700/50 rounded-lg mb-3 flex items-center justify-center text-zinc-500 overflow-hidden">
            {emilyImages ? (
              <Image
                src={emilyImages[selectedImage]}
                alt={`${member.name} - Image ${selectedImage + 1}`}
                fill
                className="object-cover"
                style={selectedImage === 1 ? { objectPosition: '70% center' } : selectedImage === 2 ? { objectPosition: '85% center' } : undefined}
              />
            ) : (
              <span>Image {selectedImage + 1}</span>
            )}
            
            {/* Image selector thumbnails overlaid at bottom */}
            <div className="absolute bottom-3 left-3 right-3 flex gap-2">
              <button
                onClick={() => setSelectedImage(0)}
                className={`relative flex-1 aspect-video rounded-md transition-colors cursor-pointer overflow-hidden ${
                  selectedImage === 0 ? 'bg-zinc-600 border-2 border-zinc-500' : 'bg-zinc-700/50 border-2 border-zinc-700'
                } hover:bg-zinc-600`}
              >
                {emilyImages && (
                  <Image
                    src={emilyImages[0]}
                    alt="Thumbnail 1"
                    fill
                    className="object-cover"
                  />
                )}
              </button>
              <button
                onClick={() => setSelectedImage(1)}
                className={`relative flex-1 aspect-video rounded-md transition-colors cursor-pointer overflow-hidden ${
                  selectedImage === 1 ? 'bg-zinc-600 border-2 border-zinc-500' : 'bg-zinc-700/50 border-2 border-zinc-700'
                } hover:bg-zinc-600`}
              >
                {emilyImages && (
                  <Image
                    src={emilyImages[1]}
                    alt="Thumbnail 2"
                    fill
                    className="object-cover"
                    style={{ objectPosition: '70% center' }}
                  />
                )}
              </button>
              <button
                onClick={() => setSelectedImage(2)}
                className={`relative flex-1 aspect-video rounded-md transition-colors cursor-pointer overflow-hidden ${
                  selectedImage === 2 ? 'bg-zinc-600 border-2 border-zinc-500' : 'bg-zinc-700/50 border-2 border-zinc-700'
                } hover:bg-zinc-600`}
              >
                {emilyImages && (
                  <Image
                    src={emilyImages[2]}
                    alt="Thumbnail 3"
                    fill
                    className="object-cover"
                    style={{ objectPosition: '85% center' }}
                  />
                )}
              </button>
            </div>
          </div>
          
          {/* Name link button */}
          <button className="w-full bg-zinc-800/50 hover:bg-zinc-800 transition-colors rounded-lg py-2.5 px-4 flex items-center justify-center gap-2 text-[#cfc493] cursor-pointer">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            <span className="text-sm font-medium">{member.name}</span>
          </button>
        </div>

        {/* Right side - Info */}
        <div className="flex-1 min-w-0">
          {/* Header with profile picture */}
          <div className="flex items-start gap-3 mb-4">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-lg bg-zinc-700/50 flex items-center justify-center text-zinc-500 text-xs flex-shrink-0 overflow-hidden relative">
              {emilyProfileImage ? (
                <Image
                  src={emilyProfileImage}
                  alt={`${member.name} profile`}
                  fill
                  className="object-cover"
                />
              ) : (
                <span>Profile</span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
                <h3 className="text-xl md:text-2xl font-bold">{member.name}</h3>
                <span className="bg-zinc-800 text-zinc-300 text-xs px-3 py-1 rounded-full whitespace-nowrap">{member.title}</span>
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed">{member.description}</p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-zinc-800/50 rounded-full px-4 py-2 mb-6">
            <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm text-zinc-300">{member.dates}</span>
          </div>

          <div className="bg-zinc-800/30 border border-zinc-700 rounded-lg p-4">
            <h4 className="text-lg font-bold mb-3">SOAR Involvement</h4>
            <p className="text-zinc-400 text-sm leading-relaxed">{member.involvement}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function EboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <Navbar />
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <Image 
          src="/emily2.jpg" 
          alt="SOAR Eboard" 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Eboard Section */}
      <section className="container mx-auto px-6 pt-20 pb-20">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-3 bg-zinc-900 rounded-full px-6 py-3 mb-6">
            <svg className="w-5 h-5 text-[#cfc493]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
            </svg>
            <span className="text-sm font-medium tracking-wide text-[#cfc493]">Executive Board</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">INTRODUCING OUR EBOARD</h2>
          <p className="text-zinc-400 text-lg">Leadership behind SOAR.</p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {eboardMembers.map((member, index) => (
            <EboardCard key={index} member={member} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
