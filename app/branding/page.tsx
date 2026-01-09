"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function BrandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <Navbar />
      </div>

      <section className="container mx-auto px-6 pt-32 pb-20">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-zinc-900 rounded-full px-6 py-3 mb-6">
            <svg className="w-5 h-5 text-[#cfc493]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
            <span className="text-sm font-medium tracking-wide text-[#cfc493]">Branding</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">BRANDING</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-12">
            Check back soon for our brand guidelines and assets.
          </p>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-12 max-w-2xl mx-auto">
            <div className="text-6xl mb-6">🎨</div>
            <h3 className="text-2xl font-bold mb-3">COMING SOON</h3>
            <p className="text-zinc-400">
              We're preparing comprehensive branding guidelines, logos, and assets for your use.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
