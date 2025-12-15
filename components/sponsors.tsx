export function Sponsors() {
  const sponsors = [
    { name: "Aevex Aerospace", logo: "/aerospace-company-logo.jpg" },
    { name: "CAE", logo: "/cae-technology-logo.jpg" },
    { name: "Monster Energy", logo: "/monster-energy-logo.jpg" },
    { name: "Ansys", logo: "/ansys-engineering-software-logo.jpg" },
    { name: "Partner", logo: "/engineering-partner-logo.jpg" },
  ]

  return (
    <section className="bg-zinc-950 py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-zinc-400 text-xs md:text-sm mb-8 md:mb-12">Thank you to our Sponsors</p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            >
              <img src={sponsor.logo || "/placeholder.svg"} alt={sponsor.name} className="h-8 md:h-12 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
