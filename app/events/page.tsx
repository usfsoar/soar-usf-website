"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <Navbar />
      </div>

      {/* Hero Image */}
      <div className="relative h-screen">
        <Image 
          src="/eventshero.jpg" 
          alt="SOAR Events" 
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-[#006747]/30" />
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">EVENTS AND MEETINGS</h1>
            <p className="text-zinc-200 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-lg">
              I know what WE'RE doing today, tomorrow, in fact, for the whole year.
            </p>
          </div>
        </div>
      </div>

      {/* Events Header */}
      <section className="container mx-auto px-6 pt-20 pb-12">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-zinc-900 rounded-full px-6 py-3 mb-6">
            <svg className="w-5 h-5 text-[#edebd1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-medium tracking-wide text-[#cfc493]">SOAR Calendar</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">CALENDAR</h2>
          <p className="text-zinc-400 text-lg">I know what WE'RE doing today, tomorrow, in fact, for the whole year.</p>
        </div>
      </section>

      {/* Google Calendar Section */}
      <section className="container mx-auto px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-zinc-900/50 border-2 border-[#cfc493]/20 rounded-xl overflow-hidden">
            <style jsx>{`
              .calendar-container iframe {
                filter: sepia(0.15) hue-rotate(15deg) brightness(0.95);
              }
            `}</style>
            <div className="calendar-container">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=942jatunguv08jrcr3ver7t9kc%40group.calendar.google.com&ctz=America%2FNew_York"
                className="w-full h-[600px]"
                frameBorder="0"
                scrolling="no"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}