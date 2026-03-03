"use client"

import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"

export function Hero() {
  return (
    <section className="relative">
      <Navbar />
      <div className="relative h-[100vh] min-h-[600px] md:h-[600px] overflow-hidden">
        <img
          src="/hero.jpg"
          alt="Rocket in front of bull statue"
          className="w-full h-full object-cover object-center brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950" />
      </div>
    </section>
  )
}
