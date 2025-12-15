import { Hero } from "@/components/hero"
import { LogoMotto } from "@/components/logo-motto"
import { Sponsors } from "@/components/sponsors"
import { About } from "@/components/about"
import { Stats } from "@/components/stats"
import { IREC } from "@/components/irec"
import { Torito } from "@/components/torito"
import { TRACertifications } from "@/components/tra-certifications"
import { Blogs } from "@/components/blogs"
import { Sponsorships } from "@/components/sponsorships"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
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
