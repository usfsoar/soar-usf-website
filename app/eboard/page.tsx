"use client"

import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import dynamic from "next/dynamic"
import EboardYearbook from "@/components/eboard-yearbook"

const Footer = dynamic(() => import("@/components/footer").then(mod => ({ default: mod.Footer })), {
  ssr: false
})

type EboardMember = {
  name: string
  title: string
  description: string
  dates: string
  involvement: string
  link: string
  year?: string
  major?: string
}

const eboardMembers: EboardMember[] = [
  {
    name: "Kyle Shum",
    title: "President",
    description: "Serving as the President, Kyle is currently a Senior in Mechanical Engineering.",
    year: "Senior",
    major: "Mechanical Engineering",
    dates: "October 2023 - Present",
    involvement: "I am responsible for making sure SOAR and its rocketry team's have good representation and resources on campus in order to complete their missions and provide the next generation of passionate engineers. I am a massive star wars fan, collect jazz records, dance salsa, and love learning about aerospace and aviation history!",
    link: "https://www.linkedin.com/in/kyle-shum-/"
  },
  {
    name: "Emily Ho",
    title: "Vice President",
    description: "Serving as the Vice President, Emily is currently a Senior in Chemical Engineering.",
    year: "Senior",
    major: "Chemical Engineering",
    dates: "May 2023 - Present",
    involvement: "Starting Summer 2023, I joined Torito's Liquid Propulsion and Chemical Team to help researching propellants, injector designs, and P&ID. As a Torito Junior Engineer, I presented my propellant and chemical research alongside the Torito Leads in Spring 2024. With the help of the 2023-2024 Eboard, the role of Chief of Marketing was established, marking me as the first Chief of Marketing. Later, I would take a Lead position in Torito as a Safety Officer.",
    link: "https://www.linkedin.com/in/emilyhoo/"
  },
  {
    name: "Drew Brickell",
    title: "Torito Chief Engineer",
    description: "Serving as the Torito Chief Engineer, Drew is currently a Sophomore in Mechanical Engineering.",
    year: "Sophomore",
    major: "Mechanical Engineering",
    dates: "August 2024 - Present",
    involvement: "I am currently a second year Mechanical Engineering student, with the goal of going into the field of aerospace after college.  I am a massive fan of all things rocketry, and have my Tripoli Level 1 and 2 high power rocketry certifications. I started out in SOAR as Aerostructures Lead for Torito, and now as Chief Engineer of Torito, it is my duty to oversee all design, build, and testing of all elements of a liquid propulsion system ranging from test stand to electronics.",
    link: "https://www.linkedin.com/in/drewbrickell/"
  },
  {
    name: "Cesar Briones",
    title: "IREC Chief Engineer",
    description: "Serving as the IREC Chief Engineer, Cesar is currently a Senior in Mechanical Engineering.",
    year: "Senior",
    major: "Mechanical Engineering",
    dates: "August 2022 - Present",
    involvement: "I first joined SOAR in Fall 2022 and I have loved every single moment of it. I have been the Aerostructures Lead for the 2023 and 2024 season. I lead the design of the first airbrakes system, and pushed for more in house CNC metal manufacturing. Now I am the Chief Engineer for the IREC team. Additionally, I have been working on developing a bipropellant liquid engine.",
    link: "https://www.linkedin.com/in/cesar-briones-aranda/"
  },
  {
    name: "Sage Bundhund",
    title: "Chief of Marketing",
    description: "Serving as the Chief of Marketing, Sage is currently a Sophomore in Mechanical Engineering.",
    year: "Sophomore",
    major: "Mechanical Engineering",
    dates: "August 2024 - Present",
    involvement: "I am a sophomore Mechanical Engineering student, with an Aerospace Engineering minor, as I hope to pursue a career in Aerospace after graduation. I joined SOAR in Fall of 2024, during my first semester! As Chief of Marketing, I am responsible for promoting the club and gaining new student interest, as well as running our great marketing team. I love reading books, collecting records, and learning about space exploration.",
    link: "mailto:sbundhund@usf.edu"
  },
  {
    name: "Joshua Garcia",
    title: "Chief of Operations",
    description: "Serving as the Chief of Operations, Joshua is currently a Sophomore in Mechanical Engineering.",
    year: "Sophomore",
    major: "Mechanical Engineering",
    dates: "August 2024 - Present",
    involvement: "Joshua's involvement description will go here.",
    link: "https://www.linkedin.com/in/joshuagarciaeng/"
  },
  {
    name: "Matthew Messing",
    title: "Chief of Finance",
    description: "Serving as the Chief of Finance, Matthew is currently a Sophomore in Mechanical Engineering.",
    year: "Sophomore",
    major: "Mechanical Engineering",
    dates: "January 2024 - Present",
    involvement: "Matthew's involvement description will go here.",
    link: "https://www.linkedin.com/in/matthew-messing-755930326/"
  },
  {
    name: "Conner Schilaty",
    title: "Secretary",
    description: "Serving as the Secretary, Conner is a Junior in Aerospace Engineering.",
    year: "Junior",
    major: "Aerospace Engineering",
    dates: "August 2025 - Present",
    involvement:
      "I'm a third-year Aerospace Engineering student, and joined SOAR last fall. As Secretary, it's my job to keep notes, keep tabs on what we need to get done, manage our calendars, monitor our BullsConnect page, and maintain the general organization of our files.",
    link: "https://www.linkedin.com/in/conner-schilaty-474452337/"
  }
]

export default function EboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <Navbar />
      </div>

      <PageHeader title="EXECUTIVE BOARD AND LEADS" subtitle="Meet the leaders driving SOAR's mission forward." />

      {/* Yearbook Section */}
      <section className="container mx-auto px-6 pt-20 pb-20">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#006747] mb-4">EBOARD</h2>
          <EboardYearbook members={eboardMembers} />
        </div>

        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#cfc493] mb-6">LEADS</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-[#cfc493] mb-2">IREC</h3>
              <p className="text-zinc-400">Team leads and responsibilities for IREC go here. Add member cards or links as needed.</p>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-[#cfc493] mb-2">Torito</h3>
              <p className="text-zinc-400">Torito leads and role descriptions go here. Include contact or LinkedIn links where appropriate.</p>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-[#cfc493] mb-2">Marketing</h3>
              <p className="text-zinc-400">Marketing leads (Chief of Marketing and team) information and responsibilities.</p>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-[#cfc493] mb-2">Operations</h3>
              <p className="text-zinc-400">Operations leads and logistics contact details go here.</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#006747] mb-4">HALL OF FAME</h2>
          <div className="text-zinc-500">(Hall of Fame section — content to be added)</div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
