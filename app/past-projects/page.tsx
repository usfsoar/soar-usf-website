import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PastProjectsPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="relative">
        <Navbar />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-12">Past Projects</h1>

        {/* Past IREC Section */}
        <section id="irec" className="scroll-mt-20 mb-20">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-3 bg-zinc-900 rounded-full px-6 py-3 mb-6">
              <svg className="w-5 h-5 text-[#cfc493]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>
              </svg>
              <span className="text-sm font-medium tracking-wide text-[#cfc493]">Past Competition</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">PAST IREC</h2>
            <p className="text-zinc-400 text-lg">Coming Soon</p>
          </div>
        </section>

        {/* Past NSL Section */}
        <section id="nsl" className="scroll-mt-20 mb-20">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-3 bg-zinc-900 rounded-full px-6 py-3 mb-6">
              <svg className="w-5 h-5 text-[#cfc493]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>
              </svg>
              <span className="text-sm font-medium tracking-wide text-[#cfc493]">Past Competition</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">PAST NSL</h2>
            <p className="text-zinc-400 text-lg">Coming Soon</p>
          </div>
        </section>

        {/* Hybrid Section */}
        <section id="hybrid" className="scroll-mt-20 mb-20">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-3 bg-zinc-900 rounded-full px-6 py-3 mb-6">
              <svg className="w-5 h-5 text-[#cfc493]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"/>
              </svg>
              <span className="text-sm font-medium tracking-wide text-[#cfc493]">Past Project</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">HYBIRD</h2>
            <p className="text-zinc-400 text-lg">Coming Soon</p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
