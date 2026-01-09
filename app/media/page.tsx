"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <Navbar />
      </div>

      <section className="container mx-auto px-6 pt-32 pb-20">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-zinc-900 rounded-full px-6 py-3 mb-6">
            <svg className="w-5 h-5 text-[#cfc493]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-medium tracking-wide text-[#cfc493]">Media + Pics</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">MEDIA + PICS</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-12">
            Check back soon for our photo gallery and media resources.
          </p>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-12 max-w-2xl mx-auto">
            <div className="mb-6 flex justify-center">
              <Image src="/Color Logo.svg" alt="SOAR Logo" width={96} height={96} className="w-24 h-24" />
            </div>
            <h3 className="text-2xl font-bold mb-3">COMING SOON</h3>
            <p className="text-zinc-400">
              We're preparing an amazing collection of photos, videos, and media resources to share with you.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
