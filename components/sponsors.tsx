"use client"

export function Sponsors() {
  // Each sponsor has a custom width based on their logo's aspect ratio
  const sponsors = [
    { name: "Joe Register", logo: "/joeregister.png", url: "https://www.linkedin.com/in/joeregister/", width: 75 },
    { name: "Aevex Aerospace", logo: "/aevex.png", url: "https://aevex.com/", width: 157 },
    { name: "CAE", logo: "/cae.png", url: "https://www.cae.com/", width: 100 },
    { name: "Monster Energy", logo: "/monster.png", url: "https://www.monsterenergy.com/", width: 47 },
    { name: "Ansys", logo: "/ansys.png", url: "https://www.ansys.com/", width: 135 },
    { name: "JBS", logo: "/jbs.png", url: "https://jimsbodyshop.com/", width: 100 },
    { name: "EPSILON3", logo: "/epsilon3.png", url: "https://www.epsilon3.io/", width: 120 },
    { name: "Kenesto", logo: "/Kenesto.png", url: "https://kenesto.com/", width: 130 },
  ]

  // Calculate total width for one set: sum of all widths + gaps
  const gap = 40
  const totalWidth = sponsors.reduce((sum, s) => sum + s.width, 0) + (sponsors.length * gap)

  return (
    <section className="bg-zinc-950 py-16 md:py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-3xl">
        <p className="text-center text-zinc-400 text-sm md:text-base mb-10 md:mb-12">Thank you to our Sponsors</p>
        <div className="sponsor-slider-container">
          <div className="sponsor-slider-track">
            {/* First set */}
            {sponsors.map((sponsor, index) => (
              <a
                key={`first-${index}`}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="sponsor-slide"
                style={{ width: sponsor.width, height: 65 }}
              >
                <img src={sponsor.logo} alt={sponsor.name} />
              </a>
            ))}
            {/* Second set for seamless loop */}
            {sponsors.map((sponsor, index) => (
              <a
                key={`second-${index}`}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="sponsor-slide"
                style={{ width: sponsor.width, height: 65 }}
              >
                <img src={sponsor.logo} alt={sponsor.name} />
              </a>
            ))}
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
        
        .sponsor-slider-track:hover {
          animation-play-state: paused;
        }
        
        .sponsor-slide {
          flex-shrink: 0;
          position: relative;
          opacity: 0.9;
          transition: opacity 300ms, transform 300ms;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .sponsor-slide:hover {
          opacity: 1;
          transform: scale(1.1);
        }
        
        .sponsor-slide :global(img) {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
        }
        
        @keyframes sponsorScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${totalWidth}px);
          }
        }
      `}</style>
    </section>
  )
}
