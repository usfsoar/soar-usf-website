"use client"

import { Users } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

function Counter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const current = Math.floor(progress * end)
      
      setCount(current)
      
      if (progress === 1) {
        clearInterval(timer)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isVisible, end, duration])

  return (
    <div ref={ref} className="text-4xl md:text-6xl font-bold text-white mb-2 md:mb-3">
      {count}+
    </div>
  )
}

export function Stats() {
  const [instagramCount] = useState(2200)
  const [discordCount, setDiscordCount] = useState<number>(1000)
  const [linkedinCount] = useState(750)
  const [registeredCount] = useState(500)
  

  useEffect(() => {
    let mounted = true
    async function loadDiscord() {
      try {
        const res = await fetch('/api/socials/discord')
        if (!res.ok) return
        const data = await res.json()
        if (mounted && typeof data.members === 'number') {
          setDiscordCount(data.members)
        }
      } catch (e) {
        // ignore, keep fallback
      }
    }
    loadDiscord()
    return () => { mounted = false }
  }, [])

  return (
    <section className="bg-zinc-950 py-12 md:py-16 px-4 md:px-6 pb-16 md:pb-24">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Instagram Stats */}
          <a href="https://www.instagram.com/usfsoar/" target="_blank" rel="noopener noreferrer" className="block bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 md:p-8 text-center hover:border-zinc-700 transition-colors">
            <Counter end={instagramCount} />
            <p className="text-sm md:text-base text-zinc-400 mb-3 md:mb-4">Instagram Followers</p>
            <Image src="/instagram.png" alt="Instagram" width={32} height={32} className="w-6 h-6 md:w-8 md:h-8 mx-auto" />
          </a>

          {/* Discord Stats */}
          <a href="https://discord.gg/7qjAHzrnHz" target="_blank" rel="noopener noreferrer" className="block bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 md:p-8 text-center hover:border-zinc-700 transition-colors">
            <Counter end={discordCount} />
            <p className="text-sm md:text-base text-zinc-400 mb-3 md:mb-4">Discord Members</p>
            <Image src="/discord.png" alt="Discord" width={32} height={32} className="w-6 h-6 md:w-8 md:h-8 mx-auto" />
          </a>

          {/* LinkedIn Stats */}
          <a href="https://www.linkedin.com/in/usfsoaradmin/" target="_blank" rel="noopener noreferrer" className="block bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 md:p-8 text-center hover:border-zinc-700 transition-colors">
            <Counter end={linkedinCount} />
            <p className="text-sm md:text-base text-zinc-400 mb-3 md:mb-4">LinkedIn Followers</p>
            <Image src="/linkedin.png" alt="LinkedIn" width={32} height={32} className="w-6 h-6 md:w-8 md:h-8 mx-auto" />
          </a>

          {/* Registered Members (BullsConnect) */}
          <a href="https://bullsconnect.usf.edu/feeds?type=club&type_id=58509&tab=about" target="_blank" rel="noopener noreferrer" className="block bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 md:p-8 text-center hover:border-zinc-700 transition-colors">
            <Counter end={registeredCount} />
            <p className="text-sm md:text-base text-zinc-400 mb-3 md:mb-4">Registered Members</p>
            <Users className="w-6 h-6 md:w-8 md:h-8 mx-auto" style={{ color: "#D0C495" }} />
          </a>
        </div>
      </div>
    </section>
  )
}
