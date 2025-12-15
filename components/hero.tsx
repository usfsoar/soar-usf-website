import { Button } from "@/components/ui/button"
import { Rocket, ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/modern-university-engineering-building-with-palm-t.jpg"
          alt="Campus Building"
          className="w-full h-full object-cover brightness-50"
        />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-8 py-4 flex items-center justify-between bg-black/30 backdrop-blur-sm">
        {/* Logo */}
        <div className="flex items-center">
          <Rocket className="w-6 h-6 text-white" strokeWidth={2} />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-white text-sm font-medium hover:text-amber-500 transition-colors">
            Home
          </a>
          <button className="flex items-center gap-1 text-white text-sm font-medium hover:text-amber-500 transition-colors">
            About
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-1 text-white text-sm font-medium hover:text-amber-500 transition-colors">
            Current Projects
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-1 text-white text-sm font-medium hover:text-amber-500 transition-colors">
            Past Projects
            <ChevronDown className="w-4 h-4" />
          </button>
          <a href="#events" className="text-white text-sm font-medium hover:text-amber-500 transition-colors">
            Events
          </a>
          <a href="#positions" className="text-white text-sm font-medium hover:text-amber-500 transition-colors">
            Positions
          </a>
        </div>

        {/* Contact Us Button */}
        <Button className="hidden md:flex bg-amber-600 hover:bg-amber-700 text-black font-medium px-6 py-2 rounded-full text-sm">
          Contact Us
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden w-10 h-10 rounded-full bg-zinc-800/80 backdrop-blur-sm hover:bg-zinc-700/80"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-8">
          <Rocket className="w-12 h-12 text-white" strokeWidth={1.5} />
          <div className="w-px h-16 bg-white/30" />
          <div className="text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight text-balance">
              USF Society of Aeronautics and Rocketry
            </h1>
            <p className="text-zinc-300 text-sm md:text-base mt-1">THE SKY IS NOT THE LIMIT.</p>
          </div>
        </div>

        <Button
          size="lg"
          className="mt-12 bg-amber-600 hover:bg-amber-700 text-white rounded-full px-8 py-6 text-base font-medium"
        >
          Support Us!
        </Button>
      </div>
    </section>
  )
}
