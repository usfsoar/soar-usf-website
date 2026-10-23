"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <Navbar />
      </div>

      <PageHeader title="ABOUT SOAR" subtitle="Learn more about our organization, mission, and vision." />

      <section className="container mx-auto px-6 pt-20 pb-20">
        <div className="max-w-4xl mx-auto">

          <div className="space-y-8">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                The Society of Aeronautics and Rocketry (SOAR) at USF promotes aerospace engineering education and academic performance through projects and competitions dedicated to amateur rocketry & aerospace. SOAR provides an opportunity for students from all majors and fields to enhance their knowledge in research, engineering, and various tangential skills pertinent to the industry.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Here at SOAR, we utilize engineering principles to solve challenging problems that occur in our projects. Through the use of industry-level engineering principles, SOAR strives to create an environment that prepares members for the real world challenges that are faced in engineering. Develop your CAD software skills with SolidWorks, work with embedded systems, or even manufacture components with CNC machines, the sky is not the limit with what you can learn through SOAR.
              </p>
              
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-zinc-400 leading-relaxed">
                At the organizational level, we seek to contribute to the development of new and innovative systems that further human deep space exploration efforts. We view ourselves as a professional research & engineering organization that produces data and innovations relevant to the aerospace industry. To meet our goals, we employ management practices found in industry, robust leadership methods, systems engineering principles, and engaging our student members and the USF community. SOAR strives to foster a culture built on teamwork & collaboration not just inside the active member body, but inclusive of alumni, corporate sponsors, and competition officials. We value inclusivity, with the members of SOAR having a diverse academic background, ranging from finance, to engineering, graphic arts, and everything in between.              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">What We Do</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-bold text-[#cfc493] mb-2">Competitions</h4>
                  <p className="text-zinc-400 text-sm">
                    We compete in national rocketry competitions, including NASA's Student Launch Initiative and the International Rocket Engineering Competition.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#cfc493] mb-2">Research & Development</h4>
                  <p className="text-zinc-400 text-sm">
                    Our teams work on cutting-edge liquid propulsion systems, avionics, recovery systems, and structural design.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#cfc493] mb-2">Education</h4>
                  <p className="text-zinc-400 text-sm">
                    We provide workshops, training sessions, and mentorship opportunities for students at all experience levels.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#cfc493] mb-2">Community Outreach</h4>
                  <p className="text-zinc-400 text-sm">
                    We engage with the local community through STEM education initiatives and public launch events.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
