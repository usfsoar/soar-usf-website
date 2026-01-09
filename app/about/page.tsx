"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <Navbar />
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <Image 
          src="/abouthero.jpg" 
          alt="About SOAR" 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <section className="container mx-auto px-6 pt-20 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-zinc-900 rounded-full px-6 py-3 mb-6">
              <Image src="/Color Logo.svg" alt="SOAR Logo" width={24} height={24} className="w-6 h-6" />
              <span className="text-sm font-medium tracking-wide text-[#cfc493]">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">ABOUT SOAR</h2>
            <p className="text-zinc-400 text-lg">
              Learn more about our organization, mission, and vision.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                The Society of Aeronautics and Rocketry (SOAR) at USF promotes aerospace engineering education and academic performance through participation in projects and competitions dedicated to rocketry and aerospace technologies. SOAR provides an opportunity for students from all majors and fields to enhance their knowledge in research, engineering, and other tangential skills pertinent to the industry. 
              </p>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Here at SOAR, we utilize engineering principles to solve challenging problems that occur in our projects. Through the use of engineering tools and machinery, SOAR strives to create an engineering environment that better prepares its members for the real world challenges that may occur when working in the job force. Develop your CAD software skills such as Solidworks and Siemens to further refine your design process in projects. Become familiar with hand tools and different machinery to increase your manufacturing capabilities. 
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Build your team working skills through current projects while optimizing your designing skills through feedback from team members and leaders. Apply for leadership roles when they are available and grow your knowledge of the field of engineering and computer science.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-zinc-400 leading-relaxed">
                As an organization we seek to contribute to the development of new and innovative systems that further human deep space exploration efforts. We view ourselves as a professional research organization that produces data and innovations relevant to the aerospace industry. In the mindset of professional organization we adhere to strict timelines, budget restrictions, management, teamwork, and fostering collaborations between the academic, commercial and government space industries in mission technology design. And as is necessary for a professional organization to effectively operate, SOAR utilize the skills of members from a broad range of fields of study, from finance, to engineering, to graphic arts, and everything in between.
              </p>
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
                    Our teams work on cutting-edge propulsion systems, avionics, recovery systems, and structural design.
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
