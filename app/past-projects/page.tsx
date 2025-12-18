import { Navbar } from "@/components/navbar"

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
        <div id="past-irec" className="scroll-mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Past IREC</h2>
          <p className="text-zinc-400 max-w-3xl">Content coming soon...</p>
        </div>
      </div>
    </div>
  )
}
