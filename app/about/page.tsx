"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { Trophy, Flame, GraduationCap, Users, ArrowRight, Sparkles, Rocket } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="relative">
        <Navbar />
      </div>

      <PageHeader
        title="ABOUT SOAR"
        subtitle="Learn more about our organization, mission, and vision."
      />

      <section className="container mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">

          {/* Section 1: Who We Are with Official Color Logo */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#006747]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
              {/* Emblem Showcase */}
              <div className="shrink-0 flex flex-col items-center justify-center p-6 sm:p-8 bg-zinc-950/80 border border-zinc-800/90 rounded-2xl shadow-inner group transition-all duration-300 hover:border-[#cfc493]/50">
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center">
                  <Image
                    src="/Color Logo.svg"
                    alt="Society of Aeronautics and Rocketry Emblem"
                    width={144}
                    height={144}
                    className="w-full h-full object-contain filter drop-shadow-[0_4px_16px_rgba(207,196,147,0.15)] group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </div>
                <span className="mt-3 text-[11px] font-semibold uppercase tracking-widest text-[#cfc493]/80 text-center">
                  Official Emblem
                </span>
              </div>

              {/* Text Narrative */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#cfc493]/10 border border-[#cfc493]/30 text-xs font-semibold text-[#cfc493] mb-3">
                  <Rocket className="w-3.5 h-3.5" />
                  Founded at USF in 2013
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
                  Who We Are
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-4 text-sm sm:text-base">
                  The Society of Aeronautics and Rocketry (SOAR) at USF promotes aerospace engineering education and academic performance through projects and competitions dedicated to amateur rocketry & aerospace. SOAR provides an opportunity for students from all majors and fields to enhance their knowledge in research, engineering, and various tangential skills pertinent to the industry.
                </p>
                <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                  Here at SOAR, we utilize engineering principles to solve challenging problems that occur in our projects. Through the use of industry-level engineering principles, SOAR strives to create an environment that prepares members for the real world challenges that are faced in engineering. Develop your CAD software skills with SolidWorks, work with embedded systems, or even manufacture components with CNC machines, the sky is not the limit with what you can learn through SOAR.
                </p>

                {/* Key Highlights */}
                <div className="mt-6 flex flex-wrap gap-2.5 justify-center md:justify-start">
                  <span className="px-3 py-1 rounded-full bg-zinc-950/70 border border-zinc-800 text-xs font-medium text-zinc-300">
                    100+ Active Members
                  </span>
                  <span className="px-3 py-1 rounded-full bg-zinc-950/70 border border-zinc-800 text-xs font-medium text-zinc-300">
                    Multidisciplinary Majors
                  </span>
                  <span className="px-3 py-1 rounded-full bg-zinc-950/70 border border-zinc-800 text-xs font-medium text-zinc-300">
                    Hands-On Fabrication
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Team Action Panorama Banner (positionhero.JPG) */}
          <div className="relative rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl group bg-zinc-950">
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
              <Image
                src="/positionhero.JPG"
                alt="SOAR USF Team Collaboration and Engineering Operations"
                fill
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              {/* Gradient Vignette & Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 text-white">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#cfc493] font-semibold mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Team Culture & Heritage
                  </div>
                  <p className="text-base sm:text-lg font-bold text-zinc-100">
                    Student-Led Collegiate Aerospace Innovation
                  </p>
                </div>
                <span className="text-xs text-zinc-400 font-mono bg-zinc-950/70 border border-zinc-800/80 px-2.5 py-1 rounded-md">
                  Tampa, FL • University of South Florida
                </span>
              </div>
            </div>
          </div>

          {/* Section 3: Our Mission paired with Flight Operations Photo (nsl2425 pic14.JPG) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Mission Statement Card */}
            <div className="lg:col-span-7 bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#006747]/20 border border-[#006747]/50 text-xs font-semibold text-[#cfc493] mb-3">
                  Our Mission & Vision
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
                  Pushing the Boundaries of Deep Space Exploration
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-4 text-sm sm:text-base">
                  At the organizational level, we seek to contribute to the development of new and innovative systems that further human deep space exploration efforts. We view ourselves as a professional research & engineering organization that produces data and innovations relevant to the aerospace industry.
                </p>
                <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                  To meet our goals, we employ management practices found in industry, robust leadership methods, systems engineering principles, and active engagement with our student members and the USF community. SOAR strives to foster a culture built on teamwork & collaboration, not just inside the active member body, but inclusive of alumni, corporate sponsors, and competition officials. We value inclusivity, with members representing a diverse academic spectrum ranging from finance and business to engineering, computer science, and graphic arts.
                </p>
              </div>

              {/* Core Values Badges */}
              <div className="pt-6 mt-6 border-t border-zinc-800/80 grid grid-cols-3 gap-3 text-center">
                <div className="bg-zinc-950/60 p-3 rounded-xl border border-zinc-800/60">
                  <div className="text-xs font-bold text-[#cfc493]">Systems</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">Engineering</div>
                </div>
                <div className="bg-zinc-950/60 p-3 rounded-xl border border-zinc-800/60">
                  <div className="text-xs font-bold text-[#cfc493]">Inclusivity</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">& Growth</div>
                </div>
                <div className="bg-zinc-950/60 p-3 rounded-xl border border-zinc-800/60">
                  <div className="text-xs font-bold text-[#cfc493]">Real-World</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">Experience</div>
                </div>
              </div>
            </div>

            {/* Flight Operations Photo Card */}
            <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950 min-h-[380px] lg:min-h-full shadow-xl group">
              <Image
                src="/nsl2425 pic14.JPG"
                alt="SOAR Launch Vehicle on the Launch Rail"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 right-5 text-left text-white">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#cfc493] mb-1">
                  Flight Operations & Field Verification
                </div>
                <p className="text-xs text-zinc-300 leading-snug">
                  High-power launch operations testing student-designed telemetry, active airbrakes, and deployable payload architectures.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: What We Do (The Four Pillars) */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl">
            <div className="text-center md:text-left mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                What We Do
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base">
                Bridging the gap between theoretical coursework and flight-proven aerospace hardware.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Competitions */}
              <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-2xl p-6 hover:border-[#cfc493]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#cfc493]/10 border border-[#cfc493]/30 flex items-center justify-center text-[#cfc493] mb-4">
                  <Trophy className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Competitions</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  We compete in premier national rocketry competitions, including NASA's Student Launch Initiative and the International Rocket Engineering Competition (IREC), designing vehicles targeting 4,000 to 10,000+ ft apogee.
                </p>
              </div>

              {/* Research & Development */}
              <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-2xl p-6 hover:border-[#cfc493]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#cfc493]/10 border border-[#cfc493]/30 flex items-center justify-center text-[#cfc493] mb-4">
                  <Flame className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Research & Development</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Our teams work on cutting-edge liquid bipropellant propulsion (Bulls Engine Laboratory - BEL), autonomous airbrake drag modulation, SRAD avionics telemetry, and deployable atmospheric payloads.
                </p>
              </div>

              {/* Education */}
              <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-2xl p-6 hover:border-[#cfc493]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#cfc493]/10 border border-[#cfc493]/30 flex items-center justify-center text-[#cfc493] mb-4">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Education & Certifications</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  We provide hands-on workshops, CAD modeling training, machine shop tool certification, and Tripoli Rocketry Association (TRA) Level 1 & Level 2 high-power rocketry certification mentorship.
                </p>
              </div>

              {/* Community Outreach */}
              <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-2xl p-6 hover:border-[#cfc493]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#cfc493]/10 border border-[#cfc493]/30 flex items-center justify-center text-[#cfc493] mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Community Outreach</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  We inspire the next generation of engineers through K-12 STEM education, interactive rocketry demonstrations at local schools, the annual USF Engineering Expo, and public launch days.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5: Call to Action */}
          <div className="bg-gradient-to-r from-emerald-950/40 via-zinc-900 to-zinc-900/60 border border-zinc-800 rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Ready to Build the Future with Us?
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Whether you are an aspiring aerospace engineer, programmer, business major, or maker, there is a place for you on our launch pad.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 justify-center">
                <Link
                  href="/eboard"
                  className="inline-flex items-center gap-2 bg-[#cfc493] hover:bg-[#b8af7e] text-black font-semibold px-6 py-3 rounded-full transition-all hover:scale-105 active:scale-95 text-sm"
                >
                  <span>Meet Our Leadership</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/current-projects/irec"
                  className="inline-flex items-center gap-2 bg-zinc-950 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 px-6 py-3 rounded-full transition-all text-sm font-medium"
                >
                  <span>Explore Projects</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}