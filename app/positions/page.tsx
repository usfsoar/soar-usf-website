"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function PositionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <Navbar />
      </div>

      {/* Hero Image */}
      <div className="relative h-screen">
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
            <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">POSITIONS</h1>
            <p className="text-zinc-200 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-lg">
              Coming soon, stay tuned!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
