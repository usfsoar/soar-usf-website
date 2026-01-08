"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState, useEffect, useRef } from "react"

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

  return (
    <div id="eboard" className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-6 p-6">
        {/* Left side - Image and buttons */}
        <div className="lg:w-[280px] flex flex-col flex-shrink-0">
          {/* Main image placeholder with overlaid thumbnails */}
          <div className="relative aspect-[3/4] bg-zinc-700/50 rounded-lg mb-3 flex items-center justify-center text-zinc-500">
            <span>Image {selectedImage + 1}</span>
            
            {/* Image selector thumbnails overlaid at bottom */}
            <div className="absolute bottom-3 left-3 right-3 flex gap-2">
              <button
                onClick={() => setSelectedImage(0)}
                className={`flex-1 aspect-video rounded-md transition-colors ${
                  selectedImage === 0 ? 'bg-zinc-600 border-2 border-zinc-500' : 'bg-zinc-700/50 border-2 border-zinc-700'
                } hover:bg-zinc-600`}
              />
              <button
                onClick={() => setSelectedImage(1)}
                className={`flex-1 aspect-video rounded-md transition-colors ${
                  selectedImage === 1 ? 'bg-zinc-600 border-2 border-zinc-500' : 'bg-zinc-700/50 border-2 border-zinc-700'
                } hover:bg-zinc-600`}
              />
              <button
                onClick={() => setSelectedImage(2)}
                className={`flex-1 aspect-video rounded-md transition-colors ${
                  selectedImage === 2 ? 'bg-zinc-600 border-2 border-zinc-500' : 'bg-zinc-700/50 border-2 border-zinc-700'
                } hover:bg-zinc-600`}
              />
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
        <div className="flex-1">
          {/* Header with profile picture */}
          <div className="flex items-start gap-3 mb-4">
            <div className="w-28 h-28 rounded-lg bg-zinc-700/50 flex items-center justify-center text-zinc-500 text-xs flex-shrink-0">
              Profile
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <span className="bg-zinc-800 text-zinc-300 text-xs px-3 py-1 rounded-full">{member.title}</span>
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

export default function AboutPage() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollWidth = scrollContainer.scrollWidth / 2

    let position = 0
    const speed = 0.5 // pixels per frame
    let animationId: number

    const animate = () => {
      position += speed
      if (position >= scrollWidth) {
        position = position - scrollWidth
      }
      scrollContainer.style.transform = `translateX(-${position}px)`
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <Navbar />
      </div>

      {/* Eboard Section */}
      <section className="container mx-auto px-6 pt-32 pb-20">
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

      {/* Hall of Fame Section */}
      <section className="container mx-auto px-6 pb-20">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-3 bg-zinc-900 rounded-full px-6 py-3 mb-6">
            <svg className="w-5 h-5 text-[#cfc493]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
            </svg>
            <span className="text-sm font-medium tracking-wide text-[#cfc493]">Executive Board</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">HALL OF FAME</h2>
          <p className="text-zinc-400 text-lg">Former Eboard [PENDING]</p>
        </div>
      </section>

      {/* Sponsorships Section */}
      <section id="sponsorship" className="bg-zinc-950 py-12 md:py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-3 bg-zinc-900 rounded-full px-6 py-3 mb-6">
              <svg className="w-5 h-5 text-[#cfc493]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
              </svg>
              <span className="text-sm font-medium tracking-wide text-[#cfc493]">Sponsorships</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">CURRENT SPONSORS</h2>
            <p className="text-zinc-400 text-lg max-w-4xl mx-auto">
              SOAR cannot be where we are without the support of our sponsors and supporters. Our success is a product of our generous community!
            </p>
          </div>

          {/* Scrolling sponsor logos */}
          <div className="relative overflow-hidden">
            {/* Gradient masks on the edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />
            
            <div 
              ref={scrollRef}
              className="flex items-center gap-16"
              style={{ width: 'max-content' }}
            >
              {/* First set */}
              {[
                { name: "Five Star Pizza", logo: "/5starpizza.webp" },
                { name: "Joe Kegister", logo: "/joekegister.png" },
                { name: "Aevex Aerospace", logo: "/aevex.png" },
                { name: "CAE", logo: "/cae.svg" },
                { name: "Monster Energy", logo: "/monster.png" },
                { name: "Ansys", logo: "/ansys.png" },
                { name: "JBS", logo: "/jbs.png" }
              ].map((sponsor, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 opacity-90">
                  <img src={sponsor.logo} alt={sponsor.name} className="h-12 w-auto object-contain" />
                </div>
              ))}
              {/* Second set for seamless loop */}
              {[
                { name: "Five Star Pizza", logo: "/5starpizza.webp" },
                { name: "Joe Kegister", logo: "/joekegister.png" },
                { name: "Aevex Aerospace", logo: "/aevex.png" },
                { name: "CAE", logo: "/cae.svg" },
                { name: "Monster Energy", logo: "/monster.png" },
                { name: "Ansys", logo: "/ansys.png" },
                { name: "JBS", logo: "/jbs.png" }
              ].map((sponsor, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 opacity-90">
                  <img src={sponsor.logo} alt={sponsor.name} className="h-12 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
