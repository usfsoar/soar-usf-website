"use client"

import { Button } from "@/components/ui/button"
import { Rocket, ChevronDown, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentProjectsOpen, setCurrentProjectsOpen] = useState(false)
  const [pastProjectsOpen, setPastProjectsOpen] = useState(false)
  const [mobileCurrentOpen, setMobileCurrentOpen] = useState(false)
  const [mobilePastOpen, setMobilePastOpen] = useState(false)

  return (
    <section className="relative">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-8 py-4 flex items-center justify-between bg-black/30 backdrop-blur-sm">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Rocket className="w-6 h-6 text-white" strokeWidth={2} />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-white text-sm font-medium hover:text-amber-500 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-white text-sm font-medium hover:text-amber-500 transition-colors">
            About
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setCurrentProjectsOpen(true)}
            onMouseLeave={() => setCurrentProjectsOpen(false)}
          >
            <button className="flex items-center gap-1 text-white text-sm font-medium hover:text-amber-500 transition-colors py-2">
              Current Projects
              <ChevronDown className="w-4 h-4" />
            </button>
            {currentProjectsOpen && (
              <div className="absolute top-full left-0 pt-0 bg-zinc-900 border border-white/10 rounded-md shadow-lg py-2 min-w-[160px]">
                <Link
                  href="/current-projects#irec"
                  className="block px-4 py-2 text-sm text-white hover:bg-zinc-800 hover:text-amber-500 transition-colors"
                >
                  IREC
                </Link>
                <Link
                  href="/current-projects#torito"
                  className="block px-4 py-2 text-sm text-white hover:bg-zinc-800 hover:text-amber-500 transition-colors"
                >
                  Torito
                </Link>
                <Link
                  href="/current-projects#tra"
                  className="block px-4 py-2 text-sm text-white hover:bg-zinc-800 hover:text-amber-500 transition-colors"
                >
                  TRA
                </Link>
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => setPastProjectsOpen(true)}
            onMouseLeave={() => setPastProjectsOpen(false)}
          >
            <button className="flex items-center gap-1 text-white text-sm font-medium hover:text-amber-500 transition-colors py-2">
              Past Projects
              <ChevronDown className="w-4 h-4" />
            </button>
            {pastProjectsOpen && (
              <div className="absolute top-full left-0 pt-0 bg-zinc-900 border border-white/10 rounded-md shadow-lg py-2 min-w-[160px]">
                <Link
                  href="/past-projects#past-irec"
                  className="block px-4 py-2 text-sm text-white hover:bg-zinc-800 hover:text-amber-500 transition-colors"
                >
                  Past IREC
                </Link>
              </div>
            )}
          </div>
          <Link href="/events" className="text-white text-sm font-medium hover:text-amber-500 transition-colors">
            Events
          </Link>
          <Link href="/positions" className="text-white text-sm font-medium hover:text-amber-500 transition-colors">
            Positions
          </Link>
          <Link href="/#contact">
            <Button
              style={{ backgroundColor: "#D0C495", color: "#0f0f0f" }}
              className="hidden md:flex font-medium px-6 py-2 rounded-full text-sm hover:opacity-90"
            >
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden w-10 h-10 rounded-full bg-zinc-800/80 backdrop-blur-sm hover:bg-zinc-700/80"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 text-white" />
          ) : (
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </Button>
      </nav>

      {/* Mobile Menu Popup */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />

          {/* Menu Content */}
          <div className="absolute top-0 right-0 bottom-0 w-[280px] bg-zinc-900 border-l border-white/10 overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <Rocket className="w-6 h-6 text-white" strokeWidth={2} />
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} className="w-10 h-10">
                <X className="w-5 h-5 text-white" />
              </Button>
            </div>

            {/* Menu Items */}
            <div className="p-4 space-y-2">
              <Link
                href="/"
                className="block px-4 py-3 text-white text-sm font-medium hover:bg-zinc-800 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-4 py-3 text-white text-sm font-medium hover:bg-zinc-800 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>

              {/* Current Projects Dropdown */}
              <div>
                <button
                  className="w-full flex items-center justify-between px-4 py-3 text-white text-sm font-medium hover:bg-zinc-800 rounded-md transition-colors"
                  onClick={() => setMobileCurrentOpen(!mobileCurrentOpen)}
                >
                  Current Projects
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileCurrentOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileCurrentOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    <Link
                      href="/current-projects#irec"
                      className="block px-4 py-2 text-white text-sm hover:bg-zinc-800 rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      IREC
                    </Link>
                    <Link
                      href="/current-projects#torito"
                      className="block px-4 py-2 text-white text-sm hover:bg-zinc-800 rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Torito
                    </Link>
                    <Link
                      href="/current-projects#tra"
                      className="block px-4 py-2 text-white text-sm hover:bg-zinc-800 rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      TRA
                    </Link>
                  </div>
                )}
              </div>

              {/* Past Projects Dropdown */}
              <div>
                <button
                  className="w-full flex items-center justify-between px-4 py-3 text-white text-sm font-medium hover:bg-zinc-800 rounded-md transition-colors"
                  onClick={() => setMobilePastOpen(!mobilePastOpen)}
                >
                  Past Projects
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobilePastOpen ? "rotate-180" : ""}`} />
                </button>
                {mobilePastOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    <Link
                      href="/past-projects#past-irec"
                      className="block px-4 py-2 text-white text-sm hover:bg-zinc-800 rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Past IREC
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/events"
                className="block px-4 py-3 text-white text-sm font-medium hover:bg-zinc-800 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                href="/positions"
                className="block px-4 py-3 text-white text-sm font-medium hover:bg-zinc-800 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Positions
              </Link>

              {/* Contact Button */}
              <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  style={{ backgroundColor: "#D0C495", color: "#0f0f0f" }}
                  className="w-full mt-4 font-medium px-6 py-3 rounded-full text-sm hover:opacity-90"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
