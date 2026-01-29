import { Hero } from "@/components/hero"
import { LogoMotto } from "@/components/logo-motto"
import { Sponsors } from "@/components/sponsors"
import { About } from "@/components/about"
import dynamic from "next/dynamic"

// Lazy load components that are below the fold
const Stats = dynamic(() => import("@/components/stats").then(mod => ({ default: mod.Stats })), { ssr: true })
const IREC = dynamic(() => import("@/components/irec").then(mod => ({ default: mod.IREC })), { ssr: true })
const Torito = dynamic(() => import("@/components/torito").then(mod => ({ default: mod.Torito })), { ssr: true })
const TRACertifications = dynamic(() => import("@/components/tra-certifications").then(mod => ({ default: mod.TRACertifications })), { ssr: true })
const Blogs = dynamic(() => import("@/components/blogs").then(mod => ({ default: mod.Blogs })), { ssr: true })
const Sponsorships = dynamic(() => import("@/components/sponsorships").then(mod => ({ default: mod.Sponsorships })), { ssr: true })
const Contact = dynamic(() => import("@/components/contact").then(mod => ({ default: mod.Contact })), { ssr: true })
const Footer = dynamic(() => import("@/components/footer").then(mod => ({ default: mod.Footer })), { ssr: true })

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Hero />
      <LogoMotto />
      <Sponsors />
      <About />
      <Stats />
      <IREC />
      <Torito />
      <TRACertifications />
      <Blogs />
      <Sponsorships />
      <Contact />
      <Footer />
    </main>
  )
}
