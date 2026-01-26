"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState, useEffect, useRef } from "react"
import { Rocket } from "lucide-react"
import Image from "next/image"

export default function SponsorshipsPage() {
  const [showBenefits, setShowBenefits] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (!scrollElement) return

    let animationId: number
    let position = 0
    const speed = 0.5

    const animate = () => {
      position -= speed
      const maxScroll = scrollElement.scrollWidth / 2

      if (Math.abs(position) >= maxScroll) {
        position = 0
      }

      scrollElement.style.transform = `translateX(${position}px)`
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <Navbar />
      </div>

      {/* Hero Image */}
      <div className="relative h-screen">
        <Image 
          src="/sponsorhero.jpg" 
          alt="SOAR Sponsorships" 
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-[#006747]/30" />
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">BECOME A SPONSOR</h1>
            <p className="text-zinc-200 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-lg">
              Support the future of aerospace engineering and innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Current Sponsors Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-3 bg-zinc-900 rounded-full px-6 py-3 mb-6">
              <svg className="w-5 h-5 text-[#cfc493]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
              </svg>
              <span className="text-sm font-medium tracking-wide text-[#cfc493]">Our Sponsors</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">CURRENT SPONSORS</h2>
            <p className="text-zinc-400 text-lg max-w-4xl mx-auto">
              SOAR cannot be where we are without the support of our sponsors and supporters. Our success is a product of our generous community!
            </p>
          </div>

          {/* Scrolling sponsor logos */}
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
              {[
                { name: "Five Star Pizza", logo: "/5starpizza.webp" },
                { name: "Joe Kegister", logo: "/joekegister.png" },
                { name: "Aevex Aerospace", logo: "/aevex.png" },
                { name: "CAE", logo: "/cae.png" },
                { name: "Monster Energy", logo: "/monster.png" },
                { name: "Ansys", logo: "/ansys.png" },
                { name: "JBS", logo: "/jbs.png" },
                { name: "Kenesto", logo: "/Kenesto.png"}
              ].map((sponsor, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 opacity-90">
                  <img src={sponsor.logo} alt={sponsor.name} className="h-12 w-auto object-contain" />
                </div>
              ))}
              {/* Second set for seamless loop */}
              {[
                { name: "Five Star Pizza", logo: "/5starpizza.webp" },
                { name: "Joe Kegister", logo: "/joekegister.png" },
                { name: "Aevex Aerospace", logo: "/aevex.png" },
                { name: "CAE", logo: "/cae.png" },
                { name: "Monster Energy", logo: "/monster.png" },
                { name: "Ansys", logo: "/ansys.png" },
                { name: "JBS", logo: "/jbs.png" },
                { name: "Kenesto", logo: "/Kenesto.png"}
              ].map((sponsor, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 opacity-90">
                  <img src={sponsor.logo} alt={sponsor.name} className="h-12 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Let's Talk Business Section */}
        <div className="container mx-auto max-w-6xl mt-20 px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-3 bg-zinc-900 rounded-full px-6 py-3 mb-6">
              <Image src="/briefcase.png" alt="briefcase" width={20} height={20} className="w-5 h-5" style={{ filter: "brightness(0) saturate(100%) invert(82%) sepia(13%) saturate(743%) hue-rotate(3deg) brightness(92%) contrast(85%)" }} />
              <span className="text-sm font-medium tracking-wide text-[#cfc493]">Sponsor Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-8">LET'S TALK BUSINESS</h2>
          </div>

          <div className="flex flex-col gap-6 md:gap-8">
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-stretch">
              {/* Image */}
              <div className="lg:w-2/5 flex-shrink-0">
                <img src="/sponsors.jpg" alt="SOAR Sponsorships" className="w-full h-full object-cover rounded-lg aspect-[4/3]" />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-4 md:mb-6">
                    <Rocket className="h-5 w-5 md:h-6 md:w-6 text-[#cfc493]" />
                    <h3 className="text-xl md:text-2xl font-bold">SOAR Sponsorships</h3>
                  </div>

                  <p className="text-sm md:text-base text-zinc-400 mb-4 md:mb-6 leading-relaxed">
                    SOAR is a Registered Student Organization under USF Policy 6.0.17. With this, an account with the USF Foundation, the primary method of contributing money to specific causes at USF, has been set up as a form of payment for USF SOAR sponsorship. Sponsorship payments to the chapter are tax exempt through the USF Foundation, due to the USF Foundation being a 501(c)(3) non-profit.
                  </p>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 md:p-6">
                  <div className="grid grid-cols-3 gap-0 text-center divide-x divide-zinc-700">
                    <div className="px-2 md:px-4">
                      <div className="text-2xl md:text-3xl font-bold text-[#cfc493] mb-1 md:mb-2">4</div>
                      <div className="text-xs md:text-sm text-zinc-400">Tiers</div>
                    </div>
                    <div className="px-2 md:px-4">
                      <div className="text-sm md:text-lg font-bold text-[#cfc493] mb-1 md:mb-2">USF Foundations</div>
                      <div className="text-xs md:text-sm text-zinc-400">501(c)(3) non-profit</div>
                    </div>
                    <div className="px-2 md:px-4">
                      <div className="text-2xl md:text-3xl font-bold text-[#cfc493] mb-1 md:mb-2">Est.</div>
                      <div className="text-xs md:text-sm text-zinc-400">2013</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons spanning full width */}
            <div className="space-y-3">
              <a href="https://www.canva.com/design/DAGpJ3F9dUA/S9FSMYHr-4xPUul7PPdXmg/view?utm_content=DAGpJ3F9dUA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h6462622fbe" target="_blank" rel="noopener noreferrer" className="w-full bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg py-3 md:py-4 px-4 md:px-6 flex items-center justify-center gap-2 transition-colors group cursor-pointer text-sm md:text-base">
                <span className="font-medium text-center">View the Sponsorship Packet</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>


              <a href="https://bullsconnect.usf.edu/student_community?club_id=58509" target="_blank" rel="noopener noreferrer" className="w-full bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg py-3 md:py-4 px-4 md:px-6 flex items-center justify-center gap-2 transition-colors group cursor-pointer text-sm md:text-base">
                <span className="font-medium text-center">Sponsor Us at USF Foundations</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers Section */}
      <section className="pb-16 md:pb-24 px-4 md:px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
          {/* Toggle Switch */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center bg-zinc-900 rounded-full p-1">
              <button
                onClick={() => setShowBenefits(false)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  !showBenefits ? 'bg-white text-black' : 'text-white hover:text-zinc-300'
                }`}
              >
                Cost
              </button>
              <button
                onClick={() => setShowBenefits(true)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  showBenefits ? 'bg-[#cfc493] text-black' : 'text-white hover:text-zinc-300'
                }`}
              >
                Benefits
              </button>
            </div>
          </div>

          {/* Pricing Tiers */}
          {!showBenefits && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Bronze */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col">
                <h3 className="text-xl font-bold mb-3">Bronze</h3>
                <p className="text-sm text-zinc-400 mb-6 flex-grow">
                  Perfect for first-time supporters looking to engage with SOAR through branding, recruitment access, and branding.
                </p>
                <div className="mb-6">
                  <div className="text-3xl font-bold mb-1">$250<span className="text-base font-normal text-zinc-400">/year</span></div>
                </div>
                <div className="space-y-3 mb-8 flex-grow">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Basic Benefits</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">SOAR EOY Thanks</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Online Recruitment Opportunities</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Branding Opportunities</span>
                  </div>
                </div>
                <a href="https://bullsconnect.usf.edu/student_community?club_id=58509" target="_blank" rel="noopener noreferrer" className="w-full bg-zinc-800 hover:bg-zinc-700 text-white rounded-full py-3 px-6 text-center font-medium transition-colors group flex items-center justify-center gap-2">
                  Get Started
                  <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>

              {/* Silver */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col">
                <h3 className="text-xl font-bold mb-3">Silver</h3>
                <p className="text-sm text-zinc-400 mb-6 flex-grow">
                  Ideal for companies seeking consistent exposure and professional recruitment outreach, with featured logos and end-of-year recognition.
                </p>
                <div className="mb-6">
                  <div className="text-3xl font-bold mb-1">$500<span className="text-base font-normal text-zinc-400">/year</span></div>
                </div>
                <div className="space-y-3 mb-8 flex-grow">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">General Benefits</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">SOAR EOY Thanks</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Online Recruitment Opportunities</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Professional Opportunities</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Branding Opportunities</span>
                  </div>
                </div>
                <a href="https://bullsconnect.usf.edu/student_community?club_id=58509" target="_blank" rel="noopener noreferrer" className="w-full bg-zinc-800 hover:bg-zinc-700 text-white rounded-full py-3 px-6 text-center font-medium transition-colors group flex items-center justify-center gap-2">
                  Get Started
                  <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>

              {/* Gold */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col">
                <h3 className="text-xl font-bold mb-3">Gold</h3>
                <p className="text-sm text-zinc-400 mb-6 flex-grow">
                  Premium Price comes with Premium Benefits! Designed for companies aiming to stand out with deeper collaboration, premium benefits including a Private Recruitment Event and Company Tour.
                </p>
                <div className="mb-6">
                  <div className="text-3xl font-bold mb-1">$1000<span className="text-base font-normal text-zinc-400">/year</span></div>
                </div>
                <div className="space-y-3 mb-8 flex-grow">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Premium Benefits</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Invitations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">SOAR EOY Thanks</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Online Recruitment Opportunities</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Private Recruiting Events</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Organized Company Tours</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Branding Opportunities</span>
                  </div>
                </div>
                <a href="https://bullsconnect.usf.edu/student_community?club_id=58509" target="_blank" rel="noopener noreferrer" className="w-full bg-zinc-800 hover:bg-zinc-700 text-white rounded-full py-3 px-6 text-center font-medium transition-colors group flex items-center justify-center gap-2">
                  Get Started
                  <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>

              {/* Platinum */}
              <div className="bg-zinc-900 border-2 border-[#cfc493] rounded-2xl p-6 flex flex-col">
                <h3 className="text-xl font-bold mb-3">Platinum</h3>
                <p className="text-sm text-zinc-400 mb-6 flex-grow">
                  Our most exclusive package, tailored to bring forth maximum collaboration. Includes exclusive branding, unique end-of-year gifts, and the best access and priority compared to all of the tiers.
                </p>
                <div className="mb-6">
                  <div className="text-3xl font-bold mb-1">$3000<span className="text-base font-normal text-zinc-400">/year</span></div>
                </div>
                <div className="space-y-3 mb-8 flex-grow">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Exclusive Benefits</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Premium Invitations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">SOAR EOY Thanks</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Online Recruitment Opportunities</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Private Recruiting Events</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Organized Company Tours</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Branding Opportunities</span>
                  </div>
                </div>
                <a href="https://bullsconnect.usf.edu/student_community?club_id=58509" target="_blank" rel="noopener noreferrer" className="w-full bg-[#cfc493] hover:bg-[#b8ae82] text-black rounded-full py-3 px-6 text-center font-medium transition-colors group flex items-center justify-center gap-2">
                  Get Started
                  <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          )}

          {/* Benefits View */}
          {showBenefits && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Bronze Benefits */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col">
                <h3 className="text-xl font-bold mb-4">Bronze</h3>
                <div className="space-y-4 mb-8 flex-grow text-sm">
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Basic Benefits</span>
                  </div>
                  <p className="text-zinc-400 text-xs">+ Digital Thank-you Letter from Eboard</p>
                  <p className="text-zinc-400 text-xs">+ Invitation to rocket launches and testing</p>
                  <p className="text-zinc-400 text-xs">+ SMALL logo featured on SOAR website and club shirt</p>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>SOAR EOY Thanks</span>
                  </div>
                  <p className="text-zinc-400 text-xs">+ End of Year Thank You Letter from Team</p>
                  <p className="text-zinc-400 text-xs">+ Framed and Signed Team Photograph</p>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Recruitment Opportunities</span>
                  </div>
                  <p className="text-zinc-400 text-xs">+ Job Board on Discord</p>
                  <p className="text-zinc-400 text-xs">+ Student Resume Database Access</p>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Branding Opportunities</span>
                  </div>
                  <p className="text-zinc-400 text-xs">+ End of Year Shout-out</p>
                  <p className="text-zinc-400 text-xs">+ SMALL logo on SOAR website</p>
                  <p className="text-zinc-400 text-xs">+ SMALL logo on Newsletter</p>
                  <p className="text-zinc-400 text-xs">+ SMALL logo on team shirts</p>
                  <p className="text-zinc-400 text-xs">+ SMALL logo on Sponsors Banner</p>
                  <p className="text-zinc-400 text-xs">+ SMALL logo on rocket</p>
                  <p className="text-zinc-400 text-xs">+ Mid-Year Shout-out</p>
                </div>
                <a href="https://bullsconnect.usf.edu/student_community?club_id=58509" target="_blank" rel="noopener noreferrer" className="w-full bg-zinc-800 hover:bg-zinc-700 text-white rounded-full py-3 px-6 text-center font-medium transition-colors group flex items-center justify-center gap-2">
                  Get Started
                  <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>

              {/* Silver Benefits */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col">
                <h3 className="text-xl font-bold mb-4">Silver</h3>
                <div className="space-y-4 mb-8 flex-grow text-sm">
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>General Benefits</span>
                  </div>
                  <p className="text-zinc-400 text-xs">+ Digital Thank-you Letter from Eboard</p>
                  <p className="text-zinc-400 text-xs">+ Invitation to rocket launches and testing</p>
                  <p className="text-zinc-400 text-xs">+ SMALL logo featured on SOAR website and club shirt</p>
                  <p className="text-zinc-400 text-xs">+ Invitation to All NSL and Torito Design Reviews (once per semester)</p>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>SOAR EOY Thanks</span>
                  </div>
                  <p className="text-zinc-400 text-xs">+ End of Year Thank You Letter from Team</p>
                  <p className="text-zinc-400 text-xs">+ Framed and Signed Team Photograph</p>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Recruitment Opportunities</span>
                  </div>
                  <p className="text-zinc-400 text-xs">+ Job Board on Discord</p>
                  <p className="text-zinc-400 text-xs">+ Student Resume Database Access</p>
                  <p className="text-zinc-400 text-xs">+ Professional Workshop Collaboration</p>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Branding Opportunities</span>
                  </div>
                  <p className="text-zinc-400 text-xs">+ End of Year Shout-out</p>
                  <p className="text-zinc-400 text-xs">+ SMALL logo on SOAR website</p>
                  <p className="text-zinc-400 text-xs">+ SMALL logo on Newsletter</p>
                  <p className="text-zinc-400 text-xs">+ SMALL logo on team shirts</p>
                  <p className="text-zinc-400 text-xs">+ SMALL logo on Sponsors Banner</p>
                  <p className="text-zinc-400 text-xs">+ SMALL logo on rocket</p>
                  <p className="text-zinc-400 text-xs">+ Mid-Year Shout-out</p>
                </div>
                <a href="https://bullsconnect.usf.edu/student_community?club_id=58509" target="_blank" rel="noopener noreferrer" className="w-full bg-zinc-800 hover:bg-zinc-700 text-white rounded-full py-3 px-6 text-center font-medium transition-colors group flex items-center justify-center gap-2">
                  Get Started
                  <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>

              {/* Gold Benefits */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col">
                <h3 className="text-xl font-bold mb-4">Gold</h3>
                <div className="space-y-4 mb-8 flex-grow text-sm">
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Premium Benefits</span>
                  </div>
                  <p className="text-zinc-400 text-xs">+ Digital Thank-you Letter from Eboard</p>
                  <p className="text-zinc-400 text-xs">+ Invitation to rocket launches and testing</p>
                  <p className="text-zinc-400 text-xs">+ MEDIUM logo featured on SOAR website and club shirt</p>
                  <p className="text-zinc-400 text-xs">+ Invitation to All NSL and Torito Design Reviews (once per semester)</p>
                  <p className="text-zinc-400 text-xs">+ Framed Team Photography</p>
                  <p className="text-zinc-400 text-xs">+ Invitation to the Advisory Council</p>
                  <p className="text-zinc-400 text-xs">+ Custom SOAR Plaque</p>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>SOAR EOY Thanks</span>
                  </div>
                  <p className="text-zinc-400 text-xs">+ End of Year Thank You Letter from Team</p>
                  <p className="text-zinc-400 text-xs">+ Framed and Signed Team Photograph</p>
                  <p className="text-zinc-400 text-xs">+ SOAR Merchandise</p>
                  <p className="text-zinc-400 text-xs">+ Signed SOAR Apparel from the Entire Team</p>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Recruitment Opportunities</span>
                  </div>
                  <p className="text-zinc-400 text-xs">+ Job Board on Discord</p>
                  <p className="text-zinc-400 text-xs">+ Student Resume Database Access</p>
                  <p className="text-zinc-400 text-xs">+ Private Recruiting Workshop</p>
                  <p className="text-zinc-400 text-xs">+ Organized Company Tour for Members</p>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Branding Opportunities</span>
                  </div>
                  <p className="text-zinc-400 text-xs">+ End of Year Shout-out</p>
                  <p className="text-zinc-400 text-xs">+ MEDIUM logo on SOAR website</p>
                  <p className="text-zinc-400 text-xs">+ MEDIUM logo on Newsletter</p>
                  <p className="text-zinc-400 text-xs">+ MEDIUM logo on team shirts</p>
                  <p className="text-zinc-400 text-xs">+ MEDIUM logo on Sponsors Banner</p>
                  <p className="text-zinc-400 text-xs">+ MEDIUM logo on rocket</p>
                  <p className="text-zinc-400 text-xs">+ Mid-Year Shout-out</p>
                </div>
                <a href="https://bullsconnect.usf.edu/student_community?club_id=58509" target="_blank" rel="noopener noreferrer" className="w-full bg-zinc-800 hover:bg-zinc-700 text-white rounded-full py-3 px-6 text-center font-medium transition-colors group flex items-center justify-center gap-2">
                  Get Started
                  <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>

              {/* Platinum Benefits */}
              <div className="bg-zinc-900 border-2 border-[#cfc493] rounded-2xl p-6 flex flex-col">
                <h3 className="text-xl font-bold mb-4">Platinum</h3>
                <div className="space-y-4 mb-8 flex-grow text-sm">
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Exclusive Benefits</span>
                  </div>
                  <p className="text-zinc-400 text-xs">+ Digital Thank-you Letter from Eboard</p>
                  <p className="text-zinc-400 text-xs">+ Invitation to rocket launches and testing</p>
                  <p className="text-zinc-400 text-xs">+ MEDIUM logo featured on SOAR website and club shirt</p>
                  <p className="text-zinc-400 text-xs">+ Invitation to All NSL and Torito Design Reviews (once per semester)</p>
                  <p className="text-zinc-400 text-xs">+ Framed Team Photography</p>
                  <p className="text-zinc-400 text-xs">+ Invitation to the Advisory Council</p>
                  <p className="text-zinc-400 text-xs">+ Custom SOAR Plaque</p>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>SOAR EOY Thanks</span>
                  </div>
                  <p className="text-zinc-400 text-xs">+ End of Year Thank You Letter from Team</p>
                  <p className="text-zinc-400 text-xs">+ Framed and Signed Team Photograph</p>
                  <p className="text-zinc-400 text-xs">+ SOAR Merchandise</p>
                  <p className="text-zinc-400 text-xs">+ Signed SOAR Apparel from the Entire Team</p>
                  <p className="text-zinc-400 text-xs">+ Mini 3D Model of the Rocket</p>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Recruitment Opportunities</span>
                  </div>
                  <p className="text-zinc-400 text-xs">+ Job Board on Discord</p>
                  <p className="text-zinc-400 text-xs">+ Student Resume Database Access</p>
                  <p className="text-zinc-400 text-xs">+ Private Recruiting Workshop</p>
                  <p className="text-zinc-400 text-xs">+ Organized Company Tour for Members</p>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Branding Opportunities</span>
                  </div>
                  <p className="text-zinc-400 text-xs">+ End of Year Shout-out</p>
                  <p className="text-zinc-400 text-xs">+ LARGE logo on SOAR website</p>
                  <p className="text-zinc-400 text-xs">+ LARGE logo on Newsletter</p>
                  <p className="text-zinc-400 text-xs">+ LARGE logo on team shirts</p>
                  <p className="text-zinc-400 text-xs">+ LARGE logo on Sponsors Banner</p>
                  <p className="text-zinc-400 text-xs">+ LARGE logo on rocket</p>
                  <p className="text-zinc-400 text-xs">+ Mid-Year Shout-out</p>
                  <p className="text-zinc-400 text-xs">+ Solo Company Spotlight</p>
                </div>
                <a href="https://bullsconnect.usf.edu/student_community?club_id=58509" target="_blank" rel="noopener noreferrer" className="w-full bg-[#cfc493] hover:bg-[#b8ae82] text-black rounded-full py-3 px-6 text-center font-medium transition-colors group flex items-center justify-center gap-2">
                  Get Started
                  <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
