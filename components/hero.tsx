"use client"
import { Navbar } from "@/components/navbar"

export function Hero() {
  return (
    <section className="relative">
      <Navbar />
      <div className="relative h-[70vh] min-h-[300px] md:h-[600px] overflow-hidden">
        <img
          src="/hero.jpg"
          alt="Rocket in front of bull statue"
          className="w-full h-full object-cover brightness-50 md:object-center object-left"
          style={{ objectPosition: '55% center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950" />
      </div>
    </section>
  )
}
