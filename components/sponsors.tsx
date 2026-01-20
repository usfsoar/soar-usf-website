"use client"

import { useEffect, useRef } from "react"

export function Sponsors() {
  const sponsors = [
    { name: "Five Star Pizza", logo: "/5starpizza.webp" },
    { name: "Joe Kegister", logo: "/joekegister.png" },
    { name: "Aevex Aerospace", logo: "/aevex.png" },
    { name: "CAE", logo: "/cae.png" },
    { name: "Monster Energy", logo: "/monster.png" },
    { name: "Ansys", logo: "/ansys.png" },
    { name: "JBS", logo: "/jbs.png" },
    { name: "Kenesto", logo: "/Kenesto.png"}
  ]

  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollWidth = scrollContainer.scrollWidth / 2

    let position = 0
    const speed = 0.5 // pixels per frame
    let animationId: number

    const animate = () => {
      position += speed
      if (position >= scrollWidth) {
        position = position - scrollWidth
      }
      scrollContainer.style.transform = `translateX(-${position}px)`
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section className="bg-zinc-950 py-12 md:py-16 px-4 md:px-6">
      <div className="container mx-auto max-w-3xl">
        <p className="text-center text-zinc-400 text-xs md:text-sm mb-8 md:mb-12">Thank you to our Sponsors</p>
        <div className="relative overflow-hidden">
          {/* Gradient masks on the edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />
          
          <div 
            ref={scrollRef}
            className="flex items-center gap-16"
            style={{ width: 'max-content' }}
          >
            {/* First set */}
            {sponsors.map((sponsor, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 opacity-90"
              >
                <img src={sponsor.logo || "/placeholder.svg"} alt={sponsor.name} className="h-12 w-auto object-contain" />
              </div>
            ))}
            {/* Second set for seamless loop */}
            {sponsors.map((sponsor, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 opacity-90"
              >
                <img src={sponsor.logo || "/placeholder.svg"} alt={sponsor.name} className="h-12 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
