"use client"

import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"

export function Hero() {
  return (
    <section className="relative">
      <Navbar />
      <div className="relative h-[500px] md:h-[600px] overflow-hidden">
        <img
          src="/modern-university-engineering-building-with-palm-t.jpg"
          alt="Campus Building"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0" />
      </div>
    </section>
  )
}
