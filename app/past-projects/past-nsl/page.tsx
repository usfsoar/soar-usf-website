"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Rocket, 
  Calendar, 
  Maximize2, 
  X, 
  ChevronRight, 
  ChevronLeft,
  Gauge, 
  Ruler, 
  Weight, 
  Cpu, 
  ShieldCheck, 
  Sparkles,
  MapPin,
  Award
} from "lucide-react"

interface SeasonImage {
  src: string
  alt: string
  caption: string
}

interface SeasonData {
  id: string
  year: string
  seasonLabel: string
  vehicleName: string
  challenge: string
  summary: string
  tags: string[]
  images: SeasonImage[]
  specs: {
    targetApogee: string
    length: string
    diameter: string
    liftOffWeight: string
    motor: string
    payload: string
    recovery: string
    innovation: string
  }
}

const SEASONS: SeasonData[] = [
  {
    id: "season-23-24",
    year: "2023–2024",
    seasonLabel: "23-24 Season",
    vehicleName: "Bullseye IV",
    challenge: "Autonomous Ground Vehicle (AGV) Deployment & Active Airbrakes",
    summary:
      "SOAR returned to Huntsville, AL with an advanced airframe featuring custom in-house closed-loop active drag airbrakes and an autonomous rover payload designed to deploy upon vehicle landing, navigate terrain, and transmit live diagnostic telemetry back to ground control.",
    tags: ["Active Airbrakes", "Autonomous Rover", "Dual Deployment", "Carbon Fiber Fins", "Huntsville, AL"],
    images: [
      {
        src: "/pastnslhero.JPG",
        alt: "2023-2024 SOAR Team at NASA Student Launch in Huntsville, AL",
        caption: "SOAR Launch Team at NASA Marshall Space Flight Center / Bragg Farms launch field in Huntsville, AL",
      },
      {
        src: "/pic1.JPG",
        alt: "2023-2024 Vehicle Pre-flight Prep",
        caption: "Airframe and electronics bay preparation during pre-flight inspection",
      },
      {
        src: "/pic2.JPG",
        alt: "2023-2024 Rocket Staged",
        caption: "Vehicle staged and readied for launch operations",
      },
    ],
    specs: {
      targetApogee: "4,500 ft",
      length: "108 in (9.0 ft)",
      diameter: "6.0 in",
      liftOffWeight: "42.5 lb",
      motor: "Cesaroni L-Class Solid (L1030)",
      payload: "Autonomous Ground Vehicle (AGV) with lidar navigation & sample simulation",
      recovery: "Dual Deployment (18\" drogue at apogee, 84\" toroidal main at 700 ft)",
      innovation: "Closed-loop servo-actuated airbrakes for real-time apogee trajectory tuning",
    },
  },
  {
    id: "season-22-23",
    year: "2022–2023",
    seasonLabel: "22-23 Season",
    vehicleName: "Bullseye III",
    challenge: "Payload Bay Stabilization & Multi-Spectrum Camera Orientation",
    summary:
      "Designed to meet NASA's precision altitude and payload orientation challenge, the vehicle featured an internal 360-degree motorized payload gimbal that stabilized during descent and landing to capture high-definition aerial footage and transmit RF beacon signals.",
    tags: ["Stabilized Payload", "RF Telemetry", "Dual Deployment", "CNC Machining", "Precision Apogee"],
    images: [
      {
        src: "/rocket-assembly.jpg",
        alt: "2022-2023 Rocket assembly in SOAR shop",
        caption: "Vehicle structural assembly and dry-fit in the engineering workshop",
      },
      {
        src: "/pic3.JPG",
        alt: "2022-2023 Avionics and recovery rigging",
        caption: "Avionics bay preparation and shock harness deployment rigging",
      },
      {
        src: "/pic4.JPG",
        alt: "2022-2023 Team integration",
        caption: "Subsystem team members completing final payload fit checks",
      },
    ],
    specs: {
      targetApogee: "4,250 ft",
      length: "104 in (8.7 ft)",
      diameter: "5.5 in",
      liftOffWeight: "39.1 lb",
      motor: "Aerotech L1000 Solid Motor",
      payload: "360° motorized stabilized camera & RF telemetry transmission payload",
      recovery: "Dual deployment with redundant Altus Metrum & Jolly Logic releases",
      innovation: "Precision laser-cut internal fiberglass bulkheads and decoupled gimbal bay",
    },
  },
  {
    id: "season-21-22",
    year: "2021–2022",
    seasonLabel: "21-22 Season",
    vehicleName: "Bullseye II",
    challenge: "Grid Localization & Autonomous Target Detection",
    summary:
      "Marking SOAR's triumphant return to national competition after the pandemic hiatus, the 2021-2022 team designed a redesigned modular avionics bay and grid location sensing suite capable of logging flight kinematics and determining landing coordinates without relying on external GPS.",
    tags: ["Grid Localization", "IMU Logging", "Dual Deployment", "Post-COVID Return"],
    images: [
      {
        src: "/pic5.JPG",
        alt: "2021-2022 Airframe manufacturing",
        caption: "Composite airframe finishing and structural alignment",
      },
      {
        src: "/pic6.JPG",
        alt: "2021-2022 Launch day operations",
        caption: "Final pre-flight avionics check on the flight line",
      },
    ],
    specs: {
      targetApogee: "4,000 ft",
      length: "96 in (8.0 ft)",
      diameter: "5.5 in",
      liftOffWeight: "35.8 lb",
      motor: "Aerotech L1150 Solid Motor",
      payload: "Grid localization beacon, atmospheric IMU logger, optical landing sensor",
      recovery: "Dual deployment with dual altimeters & black powder separation charges",
      innovation: "Modular 3D-printed avionics sled with external magnetic arming switches",
    },
  },
  {
    id: "season-18-19",
    year: "2018–2019",
    seasonLabel: "18-19 Season",
    vehicleName: "Bulls Rocketry Mark II",
    challenge: "Autonomous Soil Sample Collection Rover Deployment",
    summary:
      "The 2018-2019 competition rocket deployed a motorized ground rover designed to autonomously travel away from the landing site, collect simulated Martian soil samples, and transmit status confirmation back to base station computers.",
    tags: ["Soil Sample Rover", "Motorized Ejection", "Dual Deployment", "Huntsville Entry"],
    images: [
      {
        src: "/Full Assembly.PNG",
        alt: "2018-2019 CAD Assembly Render",
        caption: "Full CAD assembly model and internal subsystem packaging",
      },
      {
        src: "/pic7.JPG",
        alt: "2018-2019 Rocket build day",
        caption: "Structural assembly and motor mount installation",
      },
    ],
    specs: {
      targetApogee: "4,600 ft",
      length: "112 in (9.3 ft)",
      diameter: "6.0 in",
      liftOffWeight: "44.0 lb",
      motor: "Cesaroni L-Class Solid Motor",
      payload: "Motorized deployment rack with autonomous sample collecting rover",
      recovery: "Dual deployment nylon parachutes with drogue at apogee & main at 800 ft",
      innovation: "Rack-and-pinion rover ejection mechanism integrated within airframe",
    },
  },
  {
    id: "season-17-18",
    year: "2017–2018",
    seasonLabel: "17-18 Season",
    vehicleName: "Bulls Rocketry Mark I",
    challenge: "Deployable Solar Array & Self-Orienting Mast",
    summary:
      "Tasked with deploying a solar power generation payload at apogee, SOAR engineered a deployable solar array that extended outward post-separation, logging solar panel voltage, irradiance, and atmospheric temperature throughout descent.",
    tags: ["Solar Array Payload", "Telemetry Logging", "Dual Deployment", "Solar Power"],
    images: [
      {
        src: "/pic8.JPG",
        alt: "2017-2018 Payload bay integration",
        caption: "Solar array payload bay integration and deployment spring testing",
      },
      {
        src: "/pic9.JPG",
        alt: "2017-2018 Team at launch event",
        caption: "SOAR team members preparing for test launch",
      },
    ],
    specs: {
      targetApogee: "5,200 ft",
      length: "98 in (8.2 ft)",
      diameter: "5.5 in",
      liftOffWeight: "36.5 lb",
      motor: "Aerotech L-Class Solid Propellant",
      payload: "Spring-actuated solar array mast with photovoltaic telemetry logger",
      recovery: "Dual deployment with redundant barometric altimeters",
      innovation: "Linear deployment mast for solar cells and high-temperature insulation",
    },
  },
  {
    id: "season-16-17",
    year: "2016–2017",
    seasonLabel: "16-17 Season",
    vehicleName: "Founding USLI Vehicle",
    challenge: "Roll Damping & Real-Time Telemetry Transmission",
    summary:
      "SOAR's foundational NASA Student Launch entry established USF's presence in Huntsville. The team developed an experimental roll-damping telemetry package and real-time radio downlink, establishing the engineering and safety protocols that power SOAR today.",
    tags: ["Founding Season", "RF Telemetry", "Dual Deployment", "Huntsville Debut"],
    images: [
      {
        src: "/pic10.JPG",
        alt: "2016-2017 Founding team build",
        caption: "Early SOAR members fabricating the primary airframe",
      },
      {
        src: "/pic11.JPG",
        alt: "2016-2017 Electronics testing",
        caption: "Avionics breadboard testing and radio ground link verification",
      },
    ],
    specs: {
      targetApogee: "5,000 ft",
      length: "92 in (7.7 ft)",
      diameter: "5.5 in",
      liftOffWeight: "33.4 lb",
      motor: "Cesaroni L-Class Solid Rocket Motor",
      payload: "Roll sensor package, multi-channel analog-to-digital telemetry board",
      recovery: "Dual deployment parachutes with shear-pin staging",
      innovation: "First USF custom RF telemetry downlink and sensor acquisition package",
    },
  },
]

export default function PastNSLPage() {
  const [activeImageIndexes, setActiveImageIndexes] = useState<{ [seasonId: string]: number }>({
    "season-23-24": 0,
    "season-22-23": 0,
    "season-21-22": 0,
    "season-18-19": 0,
    "season-17-18": 0,
    "season-16-17": 0,
  })

  const [modalImage, setModalImage] = useState<SeasonImage | null>(null)

  const handleNextImage = (seasonId: string, max: number) => {
    setActiveImageIndexes((prev) => ({
      ...prev,
      [seasonId]: (prev[seasonId] + 1) % max,
    }))
  }

  const handlePrevImage = (seasonId: string, max: number) => {
    setActiveImageIndexes((prev) => ({
      ...prev,
      [seasonId]: (prev[seasonId] - 1 + max) % max,
    }))
  }

  const scrollToSeason = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      <div className="relative">
        <Navbar />
      </div>

      <PageHeader
        title="PAST NSL"
        subtitle="Our Journey Through NASA Student Launch: 2016 – 2024"
      />

      {/* Fast-Navigation Bar (Static in place) */}
      <div className="border-b border-zinc-800/80 py-3 bg-zinc-950/40">
        <div className="container mx-auto px-4 max-w-6xl flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap">
            <Calendar className="w-3.5 h-3.5 text-[#cfc493]" />
            <span>Timeline Quick-Jump:</span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {SEASONS.map((season) => (
              <button
                key={season.id}
                onClick={() => scrollToSeason(season.id)}
                className="px-3 py-1 text-xs rounded-full bg-zinc-900 border border-zinc-800 hover:border-[#cfc493] hover:text-[#cfc493] text-zinc-300 font-medium transition-all whitespace-nowrap cursor-pointer active:scale-95"
              >
                {season.seasonLabel}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 sm:px-6 py-12 md:py-20 max-w-6xl">
        {/* Program Overview Banner */}
        <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 md:p-8 mb-16 shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#cfc493]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#cfc493]/10 border border-[#cfc493]/30 text-xs font-semibold text-[#cfc493] mb-3">
                <Rocket className="w-3.5 h-3.5" />
                NASA Student Launch Initiative
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
                Eight Years of Collegiate Rocketry Heritage
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                NASA Student Launch is an eight-month research-based challenge for university rocketry teams.
                Students design, build, and launch complex high-power launch vehicles with scientific and engineering payloads,
                culminating in flight operations at NASA Marshall Space Flight Center in Huntsville, Alabama.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 text-sm">
              <div className="flex items-center gap-2 bg-zinc-950/60 border border-zinc-800/80 px-4 py-2.5 rounded-xl">
                <MapPin className="w-4 h-4 text-[#cfc493]" />
                <span className="text-zinc-300">Huntsville, AL</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-950/60 border border-zinc-800/80 px-4 py-2.5 rounded-xl">
                <Award className="w-4 h-4 text-[#cfc493]" />
                <span className="text-zinc-300">6 Competition Seasons</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Container with Center/Left Spine */}
        <div className="relative">
          {/* Vertical Connecting Spine */}
          <div 
            className="absolute left-4 md:left-1/2 top-4 bottom-8 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#cfc493] via-[#cfc493]/60 to-zinc-800 hidden sm:block" 
          />

          <div className="space-y-16 md:space-y-24">
            {SEASONS.map((season, index) => {
              const currentImgIdx = activeImageIndexes[season.id] || 0
              const currentImg = season.images[currentImgIdx]
              const hasMultipleImages = season.images.length > 1
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={season.id}
                  id={season.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative scroll-mt-20"
                >
                  {/* Timeline Node Icon on the Spine */}
                  <div className="hidden sm:flex absolute left-4 md:left-1/2 -translate-x-1/2 top-0 w-10 h-10 rounded-full bg-zinc-950 border-2 border-[#cfc493] items-center justify-center shadow-lg shadow-[#cfc493]/10 z-10">
                    <span className="w-3 h-3 rounded-full bg-[#cfc493] animate-pulse" />
                  </div>

                  {/* Main Content Card Container */}
                  <div className={`sm:ml-12 md:ml-0 md:w-[calc(50%-3rem)] ${isEven ? "md:mr-auto" : "md:ml-auto"}`}>
                    <div className="bg-zinc-900/60 border border-zinc-800/90 hover:border-zinc-700 rounded-3xl p-6 sm:p-8 shadow-2xl transition-all duration-300 group">
                      
                      {/* Card Header */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#cfc493]/15 border border-[#cfc493]/40 text-xs font-bold text-[#cfc493]">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{season.year}</span>
                        </div>
                        <span className="text-xs uppercase tracking-wider font-semibold text-zinc-500">
                          {season.vehicleName}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
                        {season.challenge}
                      </h3>

                      <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                        {season.summary}
                      </p>

                      {/* Tag Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {season.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-0.5 rounded-md bg-zinc-950/80 border border-zinc-800 text-[11px] font-medium text-zinc-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* SECTION 1: IMAGES */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-[#cfc493]" />
                            <span>Mission Photos & Media ({currentImgIdx + 1} of {season.images.length})</span>
                          </h4>
                          {hasMultipleImages && (
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => handlePrevImage(season.id, season.images.length)}
                                aria-label="Previous photo"
                                className="p-1 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors cursor-pointer"
                              >
                                <ChevronLeft className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleNextImage(season.id, season.images.length)}
                                aria-label="Next photo"
                                className="p-1 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors cursor-pointer"
                              >
                                <ChevronRight className="w-4 h-4" />
                              </button>
                            </div>
                          )}
                        </div>

                        {/* Primary Image Display */}
                        <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 aspect-video group/img">
                          <Image
                            src={currentImg.src}
                            alt={currentImg.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 500px"
                            className="object-cover transition-transform duration-500 group-hover/img:scale-105"
                            priority={index === 0}
                          />

                          {/* Hover View Full Image Overlay */}
                          <button
                            onClick={() => setModalImage(currentImg)}
                            className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-xs backdrop-blur-[2px] cursor-pointer"
                          >
                            <Maximize2 className="w-4 h-4 text-[#cfc493]" />
                            <span>Click to enlarge</span>
                          </button>

                          {/* Caption Bar */}
                          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 pt-6 pointer-events-none">
                            <p className="text-xs text-zinc-200 line-clamp-1">
                              {currentImg.caption}
                            </p>
                          </div>
                        </div>

                        {/* Image Thumbnail Selector if multiple */}
                        {hasMultipleImages && (
                          <div className="flex gap-2 mt-2.5 overflow-x-auto pb-1">
                            {season.images.map((img, imgIdx) => (
                              <button
                                key={imgIdx}
                                onClick={() =>
                                  setActiveImageIndexes((prev) => ({
                                    ...prev,
                                    [season.id]: imgIdx,
                                  }))
                                }
                                className={`relative w-16 h-11 rounded-lg overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                                  imgIdx === currentImgIdx
                                    ? "border-[#cfc493] ring-1 ring-[#cfc493]"
                                    : "border-transparent opacity-60 hover:opacity-100"
                                }`}
                              >
                                <Image
                                  src={img.src}
                                  alt={img.alt}
                                  fill
                                  sizes="64px"
                                  className="object-cover"
                                />
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* SECTION 2: TECHNICAL SPECS */}
                      <div className="border-t border-zinc-800/80 pt-5">
                        <div className="flex items-center justify-between mb-3.5">
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#cfc493] flex items-center gap-1.5">
                            <Cpu className="w-3.5 h-3.5" />
                            <span>Technical Specifications</span>
                          </h4>
                          <span className="text-[11px] text-zinc-500 font-mono">USLI Configuration</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2.5 text-xs">
                          {/* Target Apogee */}
                          <div className="bg-zinc-950/70 border border-zinc-800/80 p-2.5 rounded-xl">
                            <div className="flex items-center gap-1.5 text-zinc-400 mb-1">
                              <Gauge className="w-3.5 h-3.5 text-[#cfc493]" />
                              <span>Target Apogee</span>
                            </div>
                            <span className="font-semibold text-white">{season.specs.targetApogee}</span>
                          </div>

                          {/* Motor */}
                          <div className="bg-zinc-950/70 border border-zinc-800/80 p-2.5 rounded-xl">
                            <div className="flex items-center gap-1.5 text-zinc-400 mb-1">
                              <Rocket className="w-3.5 h-3.5 text-[#cfc493]" />
                              <span>Motor Class</span>
                            </div>
                            <span className="font-semibold text-white line-clamp-1" title={season.specs.motor}>
                              {season.specs.motor}
                            </span>
                          </div>

                          {/* Dimensions */}
                          <div className="bg-zinc-950/70 border border-zinc-800/80 p-2.5 rounded-xl">
                            <div className="flex items-center gap-1.5 text-zinc-400 mb-1">
                              <Ruler className="w-3.5 h-3.5 text-[#cfc493]" />
                              <span>Length & Diameter</span>
                            </div>
                            <span className="font-semibold text-white">
                              {season.specs.length} × {season.specs.diameter}
                            </span>
                          </div>

                          {/* Lift-Off Weight */}
                          <div className="bg-zinc-950/70 border border-zinc-800/80 p-2.5 rounded-xl">
                            <div className="flex items-center gap-1.5 text-zinc-400 mb-1">
                              <Weight className="w-3.5 h-3.5 text-[#cfc493]" />
                              <span>Lift-Off Weight</span>
                            </div>
                            <span className="font-semibold text-white">{season.specs.liftOffWeight}</span>
                          </div>
                        </div>

                        {/* Detailed Subsystems */}
                        <div className="mt-2.5 space-y-2 text-xs">
                          <div className="bg-zinc-950/50 border border-zinc-800/60 p-3 rounded-xl">
                            <span className="text-zinc-400 font-medium block mb-1">Payload System:</span>
                            <span className="text-zinc-200 leading-relaxed block">{season.specs.payload}</span>
                          </div>

                          <div className="bg-zinc-950/50 border border-zinc-800/60 p-3 rounded-xl">
                            <span className="text-zinc-400 font-medium block mb-1">Recovery Architecture:</span>
                            <span className="text-zinc-200 leading-relaxed block">{season.specs.recovery}</span>
                          </div>

                          <div className="bg-zinc-950/50 border border-zinc-800/60 p-3 rounded-xl">
                            <span className="text-zinc-400 font-medium block mb-1">Key Innovation:</span>
                            <span className="text-[#cfc493] leading-relaxed block">{season.specs.innovation}</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Retrospective Section */}
        <div className="mt-24 bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 max-w-4xl mx-auto text-center">
          <ShieldCheck className="w-10 h-10 text-[#cfc493] mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Legacy of Engineering Excellence</h3>
          <p className="text-zinc-400 leading-relaxed mb-6 max-w-2xl mx-auto">
            From our founding 2016-17 campaign through the high-performance 2023-24 season, NASA Student Launch
            has trained generations of USF aerospace, mechanical, electrical, and computer engineers.
            The avionics telemetry, active airbrakes, and deployable payload systems designed here continue to inform
            our current flagship vehicles in IREC and liquid propulsion research.
          </p>
          <div className="inline-flex gap-4 flex-wrap justify-center text-sm text-zinc-400 font-medium">
            <span>• 100+ Student Engineers Trained</span>
            <span>• 6 Full Competition Cycles</span>
            <span>• Real NASA PDR / CDR Reviews</span>
          </div>
        </div>
      </main>

      {/* Lightbox Modal for Enlarge Image */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalImage(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setModalImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] sm:aspect-video w-full bg-black">
                <Image
                  src={modalImage.src}
                  alt={modalImage.alt}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1000px"
                  className="object-contain"
                />
              </div>

              <div className="p-4 sm:p-6 bg-zinc-900 border-t border-zinc-800">
                <h4 className="text-base font-bold text-white mb-1">{modalImage.alt}</h4>
                <p className="text-sm text-zinc-400">{modalImage.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
}
