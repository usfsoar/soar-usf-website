"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentProjectsOpen, setCurrentProjectsOpen] = useState(false)
  const [pastProjectsOpen, setPastProjectsOpen] = useState(false)
  
  const isActive = (path: string) => pathname === path

  return (
    <nav className="absolute top-4 left-4 right-4 z-20 px-8 py-4 flex items-center justify-between bg-black/30 backdrop-blur-sm rounded-full">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image src="/White Logo.svg" alt="SOAR Logo" width={32} height={32} className="w-8 h-8" />
      </Link>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex items-center gap-8">
        <Link href="/" className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-[#D0C495]' : 'text-white hover:text-[#D0C495]'}`}>
          Home
        </Link>
        <Link href="/about" className={`text-sm font-medium transition-colors ${isActive('/about') ? 'text-[#D0C495]' : 'text-white hover:text-[#D0C495]'}`}>
          About
        </Link>
        <div
          className="relative"
          onMouseEnter={() => setCurrentProjectsOpen(true)}
          onMouseLeave={() => setCurrentProjectsOpen(false)}
        >
          <button className={`flex items-center gap-1 text-sm font-medium transition-colors py-2 ${isActive('/current-projects') ? 'text-[#D0C495]' : 'text-white hover:text-[#D0C495]'}`}>
            Current Projects
            <ChevronDown className="w-4 h-4" />
          </button>
          {currentProjectsOpen && (
            <div className="absolute top-full left-0 pt-0 bg-zinc-900 border border-white/10 rounded-md shadow-lg py-2 min-w-[160px]">
              <Link
                href="/current-projects#irec"
                className="block px-4 py-2 text-sm text-white hover:bg-zinc-800 hover:text-[#D0C495] transition-colors"
              >
                IREC
              </Link>
              <Link
                href="/current-projects#torito"
                className="block px-4 py-2 text-sm text-white hover:bg-zinc-800 hover:text-[#D0C495] transition-colors"
              >
                Torito
              </Link>
              <Link
                href="/current-projects#tra"
                className="block px-4 py-2 text-sm text-white hover:bg-zinc-800 hover:text-[#D0C495] transition-colors"
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
          <button className={`flex items-center gap-1 text-sm font-medium transition-colors py-2 ${isActive('/past-projects') ? 'text-[#D0C495]' : 'text-white hover:text-[#D0C495]'}`}>
            Past Projects
            <ChevronDown className="w-4 h-4" />
          </button>
          {pastProjectsOpen && (
            <div className="absolute top-full left-0 pt-0 bg-zinc-900 border border-white/10 rounded-md shadow-lg py-2 min-w-[160px]">
              <Link
                href="/past-projects#past-irec"
                className="block px-4 py-2 text-sm text-white hover:bg-zinc-800 hover:text-[#D0C495] transition-colors"
              >
                Past IREC
              </Link>
            </div>
          )}
        </div>
        <Link href="/events" className={`text-sm font-medium transition-colors ${isActive('/events') ? 'text-[#D0C495]' : 'text-white hover:text-[#D0C495]'}`}>
          Events
        </Link>
        <Link href="/positions" className={`text-sm font-medium transition-colors ${isActive('/positions') ? 'text-[#D0C495]' : 'text-white hover:text-[#D0C495]'}`}>
          Positions
        </Link>
        <Link href="/#contact">
          <Button
            style={{ backgroundColor: "#D0C495", color: "#0f0f0f" }}
            className="hidden lg:flex font-medium px-6 py-2 rounded-full text-sm hover:opacity-90"
          >
            Contact Us
          </Button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden w-10 h-10 rounded-full bg-zinc-800/80 backdrop-blur-sm hover:bg-zinc-700/80"
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

      {/* Mobile Menu Popup */}
      {mobileMenuOpen && (
        <div className="absolute top-[76px] right-0 z-50 lg:hidden w-[200px]">
          {/* Menu Content */}
          <div className="bg-[#3d3d3d] rounded-lg shadow-lg overflow-hidden">
            {/* Menu Items */}
            <div className="py-2">
              <Link
                href="/"
                className={`block px-6 py-2.5 text-sm transition-colors ${isActive('/') ? 'text-[#D0C495] bg-black/20' : 'text-white hover:bg-black/20'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`block px-6 py-2.5 text-sm transition-colors ${isActive('/about') ? 'text-[#D0C495] bg-black/20' : 'text-white hover:bg-black/20'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/current-projects"
                className={`block px-6 py-2.5 text-sm transition-colors ${isActive('/current-projects') ? 'text-[#D0C495] bg-black/20' : 'text-white hover:bg-black/20'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Current Projects
              </Link>
              <Link
                href="/past-projects"
                className={`block px-6 py-2.5 text-sm transition-colors ${isActive('/past-projects') ? 'text-[#D0C495] bg-black/20' : 'text-white hover:bg-black/20'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Past Projects
              </Link>
              <Link
                href="/events"
                className={`block px-6 py-2.5 text-sm transition-colors ${isActive('/events') ? 'text-[#D0C495] bg-black/20' : 'text-white hover:bg-black/20'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                href="/positions"
                className={`block px-6 py-2.5 text-sm transition-colors ${isActive('/positions') ? 'text-[#D0C495] bg-black/20' : 'text-white hover:bg-black/20'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Positions
              </Link>
              <Link
                href="/#contact"
                className="block px-6 py-2.5 text-white text-sm hover:bg-black/20 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
