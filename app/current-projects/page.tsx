import { Navbar } from "@/components/navbar"

export default function CurrentProjectsPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="relative">
        <Navbar />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-12">Current Projects</h1>

        {/* IREC Section */}
        <div id="irec" className="mb-20 scroll-mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">IREC</h2>
          <p className="text-zinc-400 max-w-3xl">Content coming soon...</p>
        </div>

        {/* Torito Section */}
        <div id="torito" className="mb-20 scroll-mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Torito</h2>
          <p className="text-zinc-400 max-w-3xl">Content coming soon...</p>
        </div>

        {/* TRA Section */}
        <div id="tra" className="scroll-mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">TRA Certifications</h2>
          <p className="text-zinc-400 max-w-3xl">Content coming soon...</p>
        </div>
      </div>
    </div>
  )
}
