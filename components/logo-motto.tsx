"use client"

import Image from "next/image"
import Link from "next/link"
import { useMemo } from "react"

const sponsors = [
  { logo: "/joeregister.png", width: 75, url: "https://www.linkedin.com/in/joeregister/" },
  { logo: "/aevex.png", width: 157, url: "https://aevex.com/" },
  { logo: "/cae.png", width: 100, url: "https://www.cae.com/" },
  { logo: "/monster.png", width: 47, url: "https://www.monsterenergy.com/" },
  { logo: "/ansys.png", width: 135, url: "https://www.ansys.com/" },
  { logo: "/jbs.png", width: 100, url: "https://jimsbodyshop.com/" },
  { logo: "/epsilon3.png", width: 100, url: "https://www.epsilon3.io/" },
  { logo: "/Kenesto.png", width: 130, url: "https://kenesto.com/" },
  { logo: "/5starpizza.webp", width: 100, url: "https://fivestarpizza.com/" }
]

export function LogoMotto() {
  const gap = 40
  const totalWidth = useMemo(() => sponsors.reduce((sum, s) => sum + s.width, 0) + (sponsors.length * gap), [])

  return (
    <section className="bg-zinc-950 border-b border-white/10">
      {/* Logo Section */}
      <div className="bg-zinc-950 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between gap-6">
            {/* Left: Logo and sponsor slider */}
            <div className="flex flex-col items-center md:flex-row md:items-center gap-6 md:gap-8 md:pl-6 w-full md:w-auto">
              <div className="flex-shrink-0">
                <Image
                  src="/soar hero.png"
                  alt="SOAR Logo"
                  width={420}
                  height={100}
                  className="w-80 md:w-96 h-auto"
                />
              </div>

              {/* Mobile sponsor slider (visible under logo on small screens) */}
              <div className="md:hidden w-full mt-6">
                <div className="sponsor-slider-container">
                  <div className="sponsor-slider-track">
                    {sponsors.map((sponsor, index) => (
                      <a
                        key={`m-first-${index}`}
                        href={sponsor.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sponsor-slide"
                        style={{ width: sponsor.width, height: 65 }}
                      >
                        <img src={sponsor.logo} alt={sponsor.logo} />
                      </a>
                    ))}
                    {sponsors.map((sponsor, index) => (
                      <a
                        key={`m-second-${index}`}
                        href={sponsor.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sponsor-slide"
                        style={{ width: sponsor.width, height: 65 }}
                      >
                        <img src={sponsor.logo} alt={sponsor.logo} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sponsor slider - fluid on md+ (fills remaining space) */}
              <div className="hidden md:flex flex-1 min-w-0">
                <div className="sponsor-slider-container">
                  <div className="sponsor-slider-track">
                    {sponsors.map((sponsor, index) => (
                      <a
                        key={`first-${index}`}
                        href={sponsor.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sponsor-slide"
                        style={{ width: sponsor.width, height: 56 }}
                      >
                        <img src={sponsor.logo} alt={sponsor.logo} />
                      </a>
                    ))}
                    {sponsors.map((sponsor, index) => (
                      <a
                        key={`second-${index}`}
                        href={sponsor.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sponsor-slide"
                        style={{ width: sponsor.width, height: 56 }}
                      >
                        <img src={sponsor.logo} alt={sponsor.logo} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: kept empty on purpose (buttons removed per request) */}
            
          </div>
        </div>
      </div>

      <style jsx>{`
        .sponsor-slider-container {
          width: 100%;
          height: 80px;
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
        }

        /* Fading masks (restore globally) */
        .sponsor-slider-container {
          mask-image: linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 15%, rgb(0,0,0) 85%, rgba(0,0,0,0) 100%);
          -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 15%, rgb(0,0,0) 85%, rgba(0,0,0,0) 100%);
        }

        .sponsor-slider-track {
          display: flex;
          gap: ${gap}px;
          align-items: center;
          animation: sponsorScroll 25s linear infinite;
          will-change: transform;
        }
        .sponsor-slider-track:hover { animation-play-state: paused; }
        .sponsor-slide { flex-shrink: 0; position: relative; opacity: 0.9; transition: opacity 300ms, transform 300ms; cursor: pointer; display: flex; align-items: center; justify-content: center; }
        .sponsor-slide:hover { opacity: 1; transform: scale(1.05); }
        .sponsor-slide :global(img) { display: block; width: 100%; height: 100%; object-fit: contain; object-position: center; }

        @keyframes sponsorScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${totalWidth}px); }
        }
      `}</style>
    </section>
  )
}
