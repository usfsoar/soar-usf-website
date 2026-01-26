"use client"

import { Navbar } from "@/components/navbar"
import { useState, useEffect, useRef } from "react"
import { Rocket } from "lucide-react"
import Image from "next/image"
import dynamic from "next/dynamic"

const Footer = dynamic(() => import("@/components/footer").then(mod => ({ default: mod.Footer })), {
  ssr: false
})

interface EboardMember {
  name: string
  title: string
  description: string
  dates: string
  involvement: string
  link: string
}

const eboardMembers: EboardMember[] = [
  {
    name: "Kyle Shum",
    title: "President",
    description: "Serving as the President, Kyle is currently a Senior in Mechanical Engineering.",
    dates: "October 2023 - Present",
    involvement: "I am responsible for making sure SOAR and its rocketry team's have good representation and resources on campus in order to complete their missions and provide the next generation of passionate engineers. I am a massive star wars fan, collect jazz records, dance salsa, and love learning about aerospace and aviation history!",
    link: "https://www.linkedin.com/in/kyle-shum-/"
  },
  {
    name: "Emily Ho",
    title: "Vice President",
    description: "Serving as the Vice President, Emily is currently a Senior in Chemical Engineering.",
    dates: "May 2023 - Present",
    involvement: "Starting Summer 2023, I joined Torito's Liquid Propulsion and Chemical Team to help researching propellants, injector designs, and P&ID. As a Torito Junior Engineer, I presented my propellant and chemical research alongside the Torito Leads in Spring 2024. With the help of the 2023-2024 Eboard, the role of Chief of Marketing was established, marking me as the first Chief of Marketing. Later, I would take a Lead position in Torito as a Safety Officer.",
    link: "https://www.linkedin.com/in/emilyhoo/"
  },
  {
    name: "Drew Brickell",
    title: "Torito Chief Engineer",
    description: "Serving as the Torito Chief Engineer, Drew is currently a Sophomore in Mechanical Engineering.",
    dates: "August 2024 - Present",
    involvement: "I am currently a second year Mechanical Engineering student, with the goal of going into the field of aerospace after college.  I am a massive fan of all things rocketry, and have my Tripoli Level 1 and 2 high power rocketry certifications. I started out in SOAR as Aerostructures Lead for Torito, and now as Chief Engineer of Torito, it is my duty to oversee all design, build, and testing of all elements of a liquid propulsion system ranging from test stand to electronics.",
    link: "https://www.linkedin.com/in/drewbrickell/"
  },
  {
    name: "Cesar Briones",
    title: "IREC Chief Engineer",
    description: "Serving as the IREC Chief Engineer, Cesar is currently a Senior in Mechanical Engineering.",
    dates: "August 2022 - Present",
    involvement: "I first joined SOAR in Fall 2022 and I have loved every single moment of it. I have been the Aerostructures Lead for the 2023 and 2024 season. I lead the design of the first airbrakes system, and pushed for more in house CNC metal manufacturing. Now I am the Chief Engineer for the IREC team. Additionally, I have been working on developing a bipropellant liquid engine.",
    link: "https://www.linkedin.com/in/cesar-briones-aranda/"
  },
  {
    name: "Sage Bundhund",
    title: "Chief of Marketing",
    description: "Serving as the Chief of Marketing, Sage is currently a Sophomore in Mechanical Engineering.",
    dates: "August 2024 - Present",
    involvement: "I am a sophomore Mechanical Engineering student, with an Aerospace Engineering minor, as I hope to pursue a career in Aerospace after graduation. I joined SOAR in Fall of 2024, during my first semester! As Chief of Marketing, I am responsible for promoting the club and gaining new student interest, as well as running our great marketing team. I love reading books, collecting records, and learning about space exploration.",
    link: "mailto:sbundhund@usf.edu"
  },
  {
    name: "Joshua Garcia",
    title: "Chief of Operations",
    description: "Serving as the Chief of Operations, Joshua is currently a Sophomore in Mechanical Engineering.",
    dates: "August 2024 - Present",
    involvement: "Joshua's involvement description will go here.",
    link: "https://www.linkedin.com/in/joshuagarciaeng/"
  },
  {
    name: "Matthew Messing",
    title: "Chief of Finance",
    description: "Serving as the Chief of Finance, Matthew is currently a Sophomore in Mechanical Engineering.",
    dates: "January 2024 - Present",
    involvement: "Matthew's involvement description will go here.",
    link: "https://www.linkedin.com/in/matthew-messing-755930326/"
  },
  {
    name: "Conner Schilaty",
    title: "Secretary",
    description: "Serving as the Secretary, Conner is a Junior in Aerospace Engineering.",
    dates: "August 2025 - Present",
    involvement: "I'm a third-year Aerospace Engineering student, and joined SOAR last fall. As Secretary, it's my job to keep notes, keep tabs on what we need to get done, manage our calendars, monitor our BullsConnect page, and maintain the general organization of our files.",
    link: "https://www.linkedin.com/in/conner-schilaty-474452337/"
  }
]

function EboardCard({ member }: { member: EboardMember }) {
  const [selectedImage, setSelectedImage] = useState(0)

  // Define images for members with galleries
  const memberImages: { [key: string]: string[] } = {
    "Emily Ho": ["/emily1.jpg", "/emily2.jpg", "/emily3.png"],
    "Drew Brickell": ["/drew1.jpg", "/drew2.jpg", "/drew3.jpg"],
    "Cesar Briones": ["/cesar1.JPG", "/cesar2.JPG", "/cesar3.JPG"],
    "Kyle Shum": ["/kyle1.jpg", "/kyle2.jpg", "/kyle3.jpg"]
  }

  const imagesRaw: string[] = memberImages[member.name] || []
  const images: string[] = imagesRaw.filter(Boolean)

  useEffect(() => {
    if (images.length > 0 && selectedImage >= images.length) {
      setSelectedImage(0)
    }
  }, [images.length, selectedImage])

  // Define profile images for each member
  const profileImages: { [key: string]: string } = {
    "Emily Ho": "/emilyheadshot.jpg",
    "Cesar Briones": "/cesarheadshot.jpg",
    "Kyle Shum": "/kyleheadshot.jpeg",
    "Drew Brickell": "/drewheadshot.jpg",
    "Sage Bundhund": "/sageheadshot.jpg",
    "Conner Schilaty": "/connerheadshot.jpg"
  }

  // Define custom object positions for specific members
  const profileImagePositions: { [key: string]: string } = {
    "Kyle Shum": "center 70%",
    "Sage Bundhund": "0% center",
    "Conner Schilaty": "center 15%"
  }

  const profileImage = profileImages[member.name] || null
  const profileImagePosition = profileImagePositions[member.name]

  const mainImageObjectPosition = member.name === "Kyle Shum" && selectedImage === 0
    ? { objectPosition: '70% center' }
    : member.name === "Cesar Briones" && selectedImage === 2
    ? { objectPosition: '5% center' }
    : member.name === "Emily Ho" && selectedImage === 2
    ? { objectPosition: '90% center' }
    : selectedImage === 1
    ? { objectPosition: '70% center' }
    : selectedImage === 2
    ? { objectPosition: '70% center' }
    : undefined

  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-6 p-6">
        {/* Left side - Image and buttons */}
        <div className="lg:w-[280px] flex flex-col flex-shrink-0">
          {/* Main image placeholder with overlaid thumbnails */}
          <div className="relative aspect-[3/4] bg-zinc-700/50 rounded-lg mb-3 flex items-center justify-center text-zinc-500 overflow-hidden">
            {images.length > 0 && images[selectedImage] ? (
              <Image
                src={images[selectedImage]}
                alt={`${member.name} - Image ${selectedImage + 1}`}
                fill
                className="object-cover"
                style={mainImageObjectPosition}
                sizes="(max-width: 1024px) 100vw, 280px"
                quality={80}
                loading="lazy"
              />
            ) : (
              <span>Image {selectedImage + 1}</span>
            )}

            {/* Image selector thumbnails overlaid at bottom */}
            <div className="absolute bottom-3 left-3 right-3 flex gap-2">
              <button
                onClick={() => setSelectedImage(0)}
                className={`relative flex-1 aspect-video rounded-md transition-colors cursor-pointer overflow-hidden ${
                  selectedImage === 0 ? 'bg-zinc-600 border-2 border-zinc-500' : 'bg-zinc-700/50 border-2 border-zinc-700'
                } hover:bg-zinc-600`}
              >
                {images[0] && (
                  <Image
                    src={images[0]}
                    alt="Thumbnail 1"
                    fill
                    className="object-cover"
                    sizes="80px"
                    quality={60}
                    loading="lazy"
                  />
                )}
              </button>
              <button
                onClick={() => setSelectedImage(1)}
                className={`relative flex-1 aspect-video rounded-md transition-colors cursor-pointer overflow-hidden ${
                  selectedImage === 1 ? 'bg-zinc-600 border-2 border-zinc-500' : 'bg-zinc-700/50 border-2 border-zinc-700'
                } hover:bg-zinc-600`}
              >
                {images[1] && (
                  <Image
                    src={images[1]}
                    alt="Thumbnail 2"
                    fill
                    className="object-cover"
                    style={{ objectPosition: '70% center' }}
                    sizes="80px"
                    quality={60}
                    loading="lazy"
                  />
                )}
              </button>
              <button
                onClick={() => setSelectedImage(2)}
                className={`relative flex-1 aspect-video rounded-md transition-colors cursor-pointer overflow-hidden ${
                  selectedImage === 2 ? 'bg-zinc-600 border-2 border-zinc-500' : 'bg-zinc-700/50 border-2 border-zinc-700'
                } hover:bg-zinc-600`}
              >
                {images[2] && (
                  <Image
                    src={images[2]}
                    alt="Thumbnail 3"
                    fill
                    className="object-cover"
                    style={{ objectPosition: '90% center' }}
                    sizes="80px"
                    quality={60}
                    loading="lazy"
                  />
                )}
              </button>
            </div>
          </div>
          
          {/* Name link button */}
          <a 
            href={member.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-zinc-800/50 hover:bg-zinc-800 transition-colors rounded-lg py-2.5 px-4 flex items-center justify-center gap-2 text-[#cfc493] cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            <span className="text-sm font-medium">{member.name}</span>
          </a>
        </div>

        {/* Right side - Info */}
        <div className="flex-1 min-w-0">
          {/* Header with profile picture */}
          <div className="flex items-start gap-3 mb-4">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-lg bg-zinc-700/50 flex items-center justify-center text-zinc-500 text-xs flex-shrink-0 overflow-hidden relative">
              {profileImage ? (
                <Image
                  src={profileImage}
                  alt={`${member.name} profile`}
                  fill
                  className="object-cover"
                  style={profileImagePosition ? { objectPosition: profileImagePosition } : undefined}
                  sizes="(max-width: 768px) 80px, 112px"
                  quality={75}
                  loading="lazy"
                />
              ) : (
                <span>Profile</span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
                <h3 className="text-xl md:text-2xl font-bold">{member.name}</h3>
                <span className="bg-zinc-800 text-zinc-300 text-xs px-3 py-1 rounded-full whitespace-nowrap">{member.title}</span>
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed">{member.description}</p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-zinc-800/50 rounded-full px-4 py-2 mb-6">
            <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm text-zinc-300">{member.dates}</span>
          </div>

          <div className="bg-zinc-800/30 border border-zinc-700 rounded-lg p-4">
            <h4 className="text-lg font-bold mb-3">BIO</h4>
            <p className="text-zinc-400 text-sm leading-relaxed">{member.involvement}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function EboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <Navbar />
      </div>

      {/* Hero Image */}
      <div className="relative h-screen">
        <Image 
          src="/emily2.jpg" 
          alt="SOAR Eboard" 
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-[#006747]/30" />
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">EXECUTIVE BOARD</h1>
            <p className="text-zinc-200 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-lg">
              Meet the leaders driving SOAR's mission forward.
            </p>
          </div>
        </div>
      </div>

      {/* Eboard Section */}
      <section className="container mx-auto px-6 pt-20 pb-20">

        <div className="space-y-8 max-w-5xl mx-auto">
          {eboardMembers.map((member, index) => (
            <EboardCard key={index} member={member} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
