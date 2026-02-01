"use client"

export function Sponsors() {
const sponsors = [
    { name: "Five Star Pizza", logo: "/5starpizza.webp", url: "https://www.fivestarpizza.com/" },
    { name: "Joe Register", logo: "/joeregister.png", url: "https://www.linkedin.com/in/joeregister/" },
    { name: "Aevex Aerospace", logo: "/aevex.png", url: "https://aevex.com/" },
    { name: "CAE", logo: "/cae.png", url: "https://www.cae.com/" },
    { name: "Monster Energy", logo: "/monster.png", url: "https://www.monsterenergy.com/" },
    { name: "Ansys", logo: "/ansys.png", url: "https://www.ansys.com/" },
    { name: "JBS", logo: "/jbs.png", url: "https://jimsbodyshop.com/" },
    { name: "Kenesto", logo: "/Kenesto.png", url: "https://kenesto.com/" }
  ]

  return (
    <section className="bg-zinc-950 py-16 md:py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-3xl">
        <p className="text-center text-zinc-400 text-sm md:text-base mb-10 md:mb-12">Thank you to our Sponsors</p>
        <div className="sponsor-slider-container">
          {/* Gradient masks on the edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />
          
          <div className="sponsor-slider-track">
            {/* First set */}
            {sponsors.map((sponsor, index) => (
              <a
                key={`first-${index}`}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="sponsor-slide"
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
        }
        
        .sponsor-slider-track {
          display: flex;
          gap: 64px;
          animation: sponsorScroll 25s linear infinite;
        }
        
        .sponsor-slider-track:hover {
          animation-play-state: paused;
        }
        
        .sponsor-slide {
          flex-shrink: 0;
          width: 140px;
          height: 48px;
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
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        
        @keyframes sponsorScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-204px * 8));
          }
        }
      `}</style>
    </section>
  )
}
