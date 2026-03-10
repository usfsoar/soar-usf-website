"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, X, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [currentProjectsOpen, setCurrentProjectsOpen] = useState(false)
  const [pastProjectsOpen, setPastProjectsOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)
  const [mobileCurrentProjectsOpen, setMobileCurrentProjectsOpen] = useState(false)
  const [mobilePastProjectsOpen, setMobilePastProjectsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  
  const isActive = (path: string) => pathname === path

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <>
      {/* Original Navbar - Hidden when mobile menu is open */}
      {!mobileMenuOpen && (
        <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 px-8 md:px-12 py-4 md:py-5 flex items-center justify-between bg-black/40 backdrop-blur-sm rounded-full w-[calc(100vw-2rem)] sm:w-[95vw] max-w-[1200px] border border-zinc-800 shadow-lg transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-[calc(100%+2rem)]'
        }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 cursor-pointer">
            <Image src="/White Logo.svg" alt="SOAR Logo" width={32} height={32} className="w-8 h-8" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
        <Link href="/" className={`text-sm font-medium transition-colors cursor-pointer pb-1 border-b-2 border-transparent ${isActive('/') ? 'text-[#cfc493] border-[#cfc493]' : 'text-white hover:text-[#cfc493] hover:border-zinc-700'}`}>
          Home
        </Link>
        <div
          className="relative"
          onMouseEnter={() => setAboutOpen(true)}
          onMouseLeave={() => setAboutOpen(false)}
        >
          <button className={`flex items-center gap-1 text-sm font-medium transition-colors pb-1 border-b-2 border-transparent ${isActive('/about') ? 'text-[#cfc493] border-[#cfc493]' : 'text-white hover:text-[#cfc493] hover:border-zinc-700'}`}>
            About
            <ChevronDown className="w-4 h-4" />
          </button>
          {aboutOpen && (
            <div className="absolute top-full left-0 pt-0 bg-zinc-900 border border-white/10 rounded-md shadow-lg py-2 min-w-[160px]">
              <Link
                href="/about"
                className="block px-4 py-2 text-sm text-white hover:bg-zinc-800 hover:text-[#cfc493] transition-colors cursor-pointer"
              >
                About Us
              </Link>
              <Link
                href="/eboard"
                className="block px-4 py-2 text-sm text-white hover:bg-zinc-800 hover:text-[#cfc493] transition-colors cursor-pointer"
              >
                Eboard
              </Link>
              {/* <Link
                href="/sponsorships"
                className="block px-4 py-2 text-sm text-white hover:bg-zinc-800 hover:text-[#cfc493] transition-colors cursor-pointer"
              >
                Sponsorship
              </Link> */}
              <Link
                href="/media"
                className="block px-4 py-2 text-sm text-white hover:bg-zinc-800 hover:text-[#cfc493] transition-colors cursor-pointer"
              >
                Media + Pics
              </Link>
              <Link
                href="/branding"
                className="block px-4 py-2 text-sm text-white hover:bg-zinc-800 hover:text-[#cfc493] transition-colors cursor-pointer"
              >
                Branding
              </Link>
              <Link
                href="/shop"
                className="block px-4 py-2 text-sm text-white hover:bg-zinc-800 hover:text-[#cfc493] transition-colors cursor-pointer"
              >
                The Shop
              </Link>
            </div>
          )}
        </div>
        <div
          className="relative"
          onMouseEnter={() => setCurrentProjectsOpen(true)}
          onMouseLeave={() => setCurrentProjectsOpen(false)}
        >
          <button className={`flex items-center gap-1 text-sm font-medium transition-colors pb-1 border-b-2 border-transparent ${isActive('/current-projects') ? 'text-[#cfc493] border-[#cfc493]' : 'text-white hover:text-[#cfc493] hover:border-zinc-700'}`}>
            Current Projects
            <ChevronDown className="w-4 h-4" />
          </button>
          {currentProjectsOpen && (
            <div className="absolute top-full left-0 pt-0 bg-zinc-900 border border-white/10 rounded-md shadow-lg py-2 min-w-[160px]">
              <Link
                href="/current-projects/irec"
                className="block px-4 py-2 text-sm text-white hover:bg-zinc-800 hover:text-[#cfc493] transition-colors cursor-pointer"
              >
                IREC
              </Link>
              <Link
                href="/current-projects/torito"
                className="block px-4 py-2 text-sm text-white hover:bg-zinc-800 hover:text-[#cfc493] transition-colors cursor-pointer"
              >
                Torito
              </Link>
              <Link
                href="/current-projects/certifications"
                className="block px-4 py-2 text-sm text-white hover:bg-zinc-800 hover:text-[#cfc493] transition-colors cursor-pointer"
              >
                Certifications
              </Link>
            </div>
          )}
        </div>
        <div
          className="relative"
          onMouseEnter={() => setPastProjectsOpen(true)}
          onMouseLeave={() => setPastProjectsOpen(false)}
        >
          <button className={`flex items-center gap-1 text-sm font-medium transition-colors pb-1 border-b-2 border-transparent ${isActive('/past-projects') ? 'text-[#cfc493] border-[#cfc493]' : 'text-white hover:text-[#cfc493] hover:border-zinc-700'}`}>
            Past Projects
            <ChevronDown className="w-4 h-4" />
          </button>
          {pastProjectsOpen && (
            <div className="absolute top-full left-0 pt-0 bg-zinc-900 border border-white/10 rounded-md shadow-lg py-2 min-w-[160px]">
              {/* <Link
                href="/past-projects/irec"
                className="block px-4 py-2 text-sm text-white hover:bg-zinc-800 hover:text-[#cfc493] transition-colors cursor-pointer"
              >
                IREC
              </Link> */}
              <Link
                href="/past-projects/past-nsl"
                className="block px-4 py-2 text-sm text-white hover:bg-zinc-800 hover:text-[#cfc493] transition-colors cursor-pointer"
              >
                Past NSL
              </Link>
              <Link
                href="/past-projects/hybrid"
                className="block px-4 py-2 text-sm text-white hover:bg-zinc-800 hover:text-[#cfc493] transition-colors cursor-pointer"
              >
                Hybrid
              </Link>
            </div>
          )}
        </div>
        <Link href="/events" className={`text-sm font-medium transition-colors cursor-pointer pb-1 border-b-2 border-transparent ${isActive('/events') ? 'text-[#cfc493] border-[#cfc493]' : 'text-white hover:text-[#cfc493] hover:border-zinc-700'}`}>
          Events
        </Link>
        <Link href="/blogs" className={`text-sm font-medium transition-colors cursor-pointer pb-1 border-b-2 border-transparent ${isActive('/blogs') ? 'text-[#cfc493] border-[#cfc493]' : 'text-white hover:text-[#cfc493] hover:border-zinc-700'}`}>
          Blogs
        </Link>
        <Link href="/positions" className={`text-sm font-medium transition-colors cursor-pointer pb-1 border-b-2 border-transparent ${isActive('/positions') ? 'text-[#cfc493] border-[#cfc493]' : 'text-white hover:text-[#cfc493] hover:border-zinc-700'}`}>
          Positions
        </Link>
        <Link href="/#contact" className="cursor-pointer">
          <Button
            style={{ backgroundColor: "#D0C495", color: "#0f0f0f" }}
            className="hidden lg:flex relative z-10 font-medium px-8 py-2.5 rounded-full text-sm hover:opacity-100 cursor-pointer shadow-[0_10px_36px_rgba(207,196,149,0.30)] hover:shadow-[0_0_48px_rgba(207,196,149,0.65)] focus:shadow-[0_0_56px_rgba(207,196,149,0.75)] transition-shadow focus:outline-none focus:ring-4 focus:ring-[#D0C495]/30"
          >
            Contact Us
          </Button>
        </Link>
        <Link href="https://giving.usf.edu/online/gift/f/220111/" className="cursor-pointer">
          <Button
            style={{ backgroundColor: "#D0C495", color: "#0f0f0f" }}
            className="hidden lg:flex relative z-10 font-medium px-8 py-2.5 rounded-full text-sm hover:opacity-100 cursor-pointer shadow-[0_10px_36px_rgba(207,196,149,0.30)] hover:shadow-[0_0_48px_rgba(207,196,149,0.65)] focus:shadow-[0_0_56px_rgba(207,196,149,0.75)] transition-shadow focus:outline-none focus:ring-4 focus:ring-[#D0C495]/30"
          >
            Support Us
          </Button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden w-10 h-10 rounded-full bg-zinc-800/80 backdrop-blur-sm hover:bg-zinc-700/80"
        onClick={() => setMobileMenuOpen(true)}
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </Button>
        </nav>
      )}

      {/* Mobile Menu Popup - Right Side Panel with SOLID background */}
      <AnimatePresence>
        {mobileMenuOpen && (
            <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-y-0 right-0 w-[200px] z-50 lg:hidden bg-[#0f0f0f]"
            style={{ boxShadow: '-4px 0 20px rgba(0,0,0,0.5)' }}
          >
          {/* Close Button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-white hover:text-zinc-400 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Menu Items - Centered in panel */}
          <div className="flex flex-col items-center pt-16 space-y-4">
            <Link
              href="/"
              className={`text-sm font-normal transition-colors cursor-pointer ${isActive('/') ? 'text-[#cfc493]' : 'text-white hover:text-[#cfc493]'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            {/* About Dropdown */}
            <div className="text-center">
              <button
                className="text-sm font-normal text-white hover:text-[#cfc493] transition-colors flex items-center gap-1"
                onClick={() => {
                  setMobileAboutOpen(!mobileAboutOpen)
                  if (!mobileAboutOpen) {
                    setMobileCurrentProjectsOpen(false)
                    setMobilePastProjectsOpen(false)
                  }
                }}
              >
                About
                <ChevronDown className={`w-3 h-3 transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileAboutOpen && (
                <div className="mt-3 space-y-3">
                  <Link
                    href="/about"
                    className="block text-xs text-zinc-400 hover:text-[#cfc493] transition-colors cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/eboard"
                    className="block text-xs text-zinc-400 hover:text-[#cfc493] transition-colors cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Eboard
                  </Link>
                  {/* <Link
                    href="/sponsorships"
                    className="block text-xs text-zinc-400 hover:text-[#cfc493] transition-colors cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sponsorship
                  </Link> */}
                  <Link
                    href="/media"
                    className="block text-xs text-zinc-400 hover:text-[#cfc493] transition-colors cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Media + Pics
                  </Link>
                  <Link
                    href="/branding"
                    className="block text-xs text-zinc-400 hover:text-[#cfc493] transition-colors cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Branding
                  </Link>
                  <Link
                    href="/shop"
                    className="block text-xs text-zinc-400 hover:text-[#cfc493] transition-colors cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    The Shop
                  </Link>
                </div>
              )}
            </div>

            {/* Current Projects Dropdown */}
            <div className="text-center">
              <button
                className="text-sm font-normal text-white hover:text-[#cfc493] transition-colors flex items-center gap-1"
                onClick={() => {
                  setMobileCurrentProjectsOpen(!mobileCurrentProjectsOpen)
                  if (!mobileCurrentProjectsOpen) {
                    setMobileAboutOpen(false)
                    setMobilePastProjectsOpen(false)
                  }
                }}
              >
                Current Projects
                <ChevronDown className={`w-3 h-3 transition-transform ${mobileCurrentProjectsOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileCurrentProjectsOpen && (
                <div className="mt-3 space-y-3">
                  <Link
                    href="/current-projects/irec"
                    className="block text-xs text-zinc-400 hover:text-[#cfc493] transition-colors cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    IREC
                  </Link>
                  <Link
                    href="/current-projects/torito"
                    className="block text-xs text-zinc-400 hover:text-[#cfc493] transition-colors cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Torito
                  </Link>
                  <Link
                    href="/current-projects/certifications"
                    className="block text-xs text-zinc-400 hover:text-[#cfc493] transition-colors cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Certifications
                  </Link>
                </div>
              )}
            </div>

            {/* Past Projects Dropdown */}
            <div className="text-center">
              <button
                className="text-sm font-normal text-white hover:text-[#cfc493] transition-colors flex items-center gap-1"
                onClick={() => {
                  setMobilePastProjectsOpen(!mobilePastProjectsOpen)
                  if (!mobilePastProjectsOpen) {
                    setMobileAboutOpen(false)
                    setMobileCurrentProjectsOpen(false)
                  }
                }}
              >
                Past Projects
                <ChevronDown className={`w-3 h-3 transition-transform ${mobilePastProjectsOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobilePastProjectsOpen && (
                <div className="mt-3 space-y-3">
                  {/* <Link
                    href="/past-projects/irec"
                    className="block text-xs text-zinc-400 hover:text-[#cfc493] transition-colors cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    IREC
                  </Link> */}
                  <Link
                    href="/past-projects/past-nsl"
                    className="block text-xs text-zinc-400 hover:text-[#cfc493] transition-colors cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Past NSL
                  </Link>
                  <Link
                    href="/past-projects/hybrid"
                    className="block text-xs text-zinc-400 hover:text-[#cfc493] transition-colors cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Hybrid
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/events"
              className={`text-sm font-normal transition-colors cursor-pointer ${isActive('/events') ? 'text-[#cfc493]' : 'text-white hover:text-[#cfc493]'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/blogs"
              className={`text-sm font-normal transition-colors cursor-pointer ${isActive('/blogs') ? 'text-[#cfc493]' : 'text-white hover:text-[#cfc493]'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Blogs
            </Link>
            <Link
              href="/positions"
              className={`text-sm font-normal transition-colors cursor-pointer ${isActive('/positions') ? 'text-[#cfc493]' : 'text-white hover:text-[#cfc493]'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Positions
            </Link>
            
            {/* Contact Button - SOAR Gold */}
            <Link href="/#contact" className="mt-3" onClick={() => setMobileMenuOpen(false)}>
              <Button
                style={{ backgroundColor: "#D0C495", color: "#0f0f0f" }}
                className="rounded-full relative z-10 px-6 py-2 text-xs font-medium hover:opacity-100 cursor-pointer flex items-center gap-1 shadow-[0_10px_28px_rgba(207,196,149,0.22)] hover:shadow-[0_0_40px_rgba(207,196,149,0.50)] transition-shadow focus:outline-none focus:ring-4 focus:ring-[#D0C495]/22"
              >
                Contact
                <span className="text-sm">↗</span>
              </Button>
            </Link>
            <Link href="https://giving.usf.edu/online/gift/f/220111/" className="mt-3" onClick={() => setMobileMenuOpen(false)}>
              <Button
                style={{ backgroundColor: "#D0C495", color: "#0f0f0f" }}
                className="rounded-full relative z-10 px-6 py-2 text-xs font-medium hover:opacity-100 cursor-pointer flex items-center gap-2 shadow-[0_10px_28px_rgba(207,196,149,0.22)] hover:shadow-[0_0_40px_rgba(207,196,149,0.50)] transition-shadow focus:outline-none focus:ring-4 focus:ring-[#D0C495]/22"
              >
                Donate
                <span className="text-sm">↗</span>
              </Button>
            </Link>
            <Link href="https://giving.usf.edu/online/gift/f/220111/" className="cursor-pointer">
              <Button
                style={{ backgroundColor: "#D0C495", color: "#0f0f0f" }}
                className="hidden lg:flex font-medium px-6 py-2 rounded-full text-sm hover:opacity-95 cursor-pointer shadow-[0_6px_20px_rgba(208,196,149,0.12)] hover:shadow-[0_0_28px_rgba(207,196,149,0.35)] transition-shadow focus:outline-none focus:ring-4 focus:ring-[#D0C495]/25"
              >
                Donate
              </Button>
            </Link>
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
