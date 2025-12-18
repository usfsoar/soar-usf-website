import { Navbar } from "@/components/navbar"

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="relative">
        <Navbar />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8">Events</h1>
        <p className="text-zinc-400 text-center max-w-2xl mx-auto">Content coming soon...</p>
      </div>
    </div>
  )
}
