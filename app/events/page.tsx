import { Rocket } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="px-8 py-4 flex items-center justify-between bg-black/90 backdrop-blur-sm border-b border-white/10">
        <Link href="/" className="flex items-center">
          <Rocket className="w-6 h-6 text-white" strokeWidth={2} />
        </Link>
        <Link href="/">
          <Button variant="ghost" className="text-white hover:text-amber-500">
            Back to Home
          </Button>
        </Link>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8">Events</h1>
        <p className="text-zinc-400 text-center max-w-2xl mx-auto">Content coming soon...</p>
      </div>
    </div>
  )
}
