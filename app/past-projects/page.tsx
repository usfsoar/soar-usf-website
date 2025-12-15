import { Rocket } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PastProjectsPage() {
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
