"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function BrandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <Navbar />
      </div>

      {/* Hero Image */}
      <div className="relative h-screen">
        <Image 
          src="/brandinghero.png" 
          alt="Branding" 
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-[#006747]/30" />
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">BRANDING</h1>
            <p className="text-zinc-200 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-lg">
              Download our comprehensive branding guide to learn about our visual identity, logo usage, and brand standards.
            </p>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-6 py-20">
        <div className="text-center">

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">SOAR LITE Branding Guide</h3>
              <a
                href="/SOAR LITE Branding Guide.pdf"
                download
                className="inline-flex items-center gap-2 bg-[#cfc493] hover:bg-[#b8af7e] text-black font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </a>
            </div>
            
            {/* PDF Preview */}
            <div className="bg-zinc-950 rounded-lg overflow-hidden border border-zinc-800">
              <iframe
                src="/SOAR LITE Branding Guide.pdf"
                className="w-full h-[600px]"
                title="SOAR LITE Branding Guide Preview"
              />
            </div>
            
            <p className="text-zinc-500 text-sm mt-4 text-center">
              Preview the branding guide above or download it for offline access
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
