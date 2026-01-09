"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <Navbar />
      </div>

      <section className="container mx-auto px-6 pt-32 pb-20">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-zinc-900 rounded-full px-6 py-3 mb-6">
            <svg className="w-5 h-5 text-[#cfc493]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="text-sm font-medium tracking-wide text-[#cfc493]">The Shop</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">THE SHOP</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-12">
            Check back soon for exclusive SOAR merchandise.
          </p>

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
