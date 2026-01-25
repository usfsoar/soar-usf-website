"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <Navbar />
      </div>

      {/* Hero Image */}
      <div className="relative h-screen">
        <Image 
          src="/shophero.png" 
          alt="The Shop" 
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-[#006747]/30" />
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">THE SHOP</h1>
            <p className="text-zinc-200 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-lg">
              Check back soon for exclusive SOAR merchandise.
            </p>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-6 py-20">
        <div className="text-center">

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-12 max-w-2xl mx-auto">
            <div className="text-6xl mb-6">🛒</div>
            <h3 className="text-2xl font-bold mb-3">COMING SOON</h3>
            <p className="text-zinc-400">
              We're setting up our merchandise shop with exclusive SOAR apparel and gear.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
