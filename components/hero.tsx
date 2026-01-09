"use client"

import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"

export function Hero() {
  return (
    <section className="relative">
      <Navbar />
      <div className="relative h-[500px] md:h-[600px] overflow-hidden">
        <img
          src="/hero.jpg"
          alt="Rocket in front of bull statue"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0" />
      </div>
    </section>
  )
}
