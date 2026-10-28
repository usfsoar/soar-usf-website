"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"

export default function PastIRECPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const galleryImages = [
    {
      src: "/irec2526 pic1.jpg",
      title: "SOAR Project Aurora Team 24 at IREC",
      caption: "The USF Society of Aeronautics and Rocketry team presenting Project Aurora and the flight vehicle on stage alongside international competitors.",
    },
    {
      src: "/irec2526 pic2.jpg",
      title: "IREC International Gathering — Spaceport Midland, TX",
      caption: "Panoramic view of collegiate rocketry teams from across the globe assembled at the International Rocket Engineering Competition.",
    },
  ]

  // Lightbox keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return
      if (e.key === "Escape") setSelectedImageIndex(null)
      if (e.key === "ArrowLeft") {
        setSelectedImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryImages.length - 1))
      }
      if (e.key === "ArrowRight") {
        setSelectedImageIndex((prev) => (prev !== null && prev < galleryImages.length - 1 ? prev + 1 : 0))
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImageIndex, galleryImages.length])

  const highlights = [
    {
      title: "Live Telemetry & Pan/Tilt Tracking",
      description: "Custom Teensy 4.1 avionics suite downlinks real-time GPS, altitude, and sensor telemetry over 430 MHz LoRa boosted by a 200 mW RF amplifier to an autonomous motorized 2-axis pan/tilt Yagi ground station.",
    },
    {
      title: "Live Video Downlink with OSD",
      description: "5.8 GHz analog/digital video transmitter (VTX) delivering high-framerate onboard forward and downward video feeds with a real-time BetaFlight on-screen display (OSD) telemetry overlay.",
    },
    {
      title: "Deployable 3U CubeSat & EVE Rover",
      description: "3U aluminum CubeSat frame ejected at 1,000 ft AGL under a dedicated 52-inch chute. The autonomous 4WD EVE rover rolls out via a motorized rack-and-pinion ramp upon landing to conduct Edge AI and NDVI vegetation analysis.",
    },
    {
      title: "Bolted Fin Structure with Carbon Fiber Fins",
      description: "Modular bolted fin can assembly featuring four custom trapezoidal carbon fiber fins slotted into internal aluminum brackets and an aft anodized aluminum thrust ring transferring motor loads directly to the airframe.",
    },
    {
      title: "Active Drag Airbrakes Subsystem",
      description: "Four conformal curved aerodynamic flaps actuated by a NEMA 23 stepper motor via an inverted slider-crank mechanism (0° to 48°), regulated by a custom 4-layer PCB with Kalman filter state estimation targeting 10,000 ft AGL.",
    },
    {
      title: "Triple-Redundant Dual Deployment Recovery",
      description: "Three independent Missile Works RRC3+ altimeters on isolated LiPo circuits with magnetic arming switches and redundant black powder charges. Drogue deploys at apogee; 120-inch Fruity Chutes Toroidal Main at 1,000 ft.",
    },
  ]

  const leadershipTeam = [
    { role: "Chief Engineer", name: "Cesar Briones Aranda", detail: "Final authority on technical decisions, requirement verification, and subsystem flight readiness." },
    { role: "Program Manager", name: "Pavan Moturi", detail: "Timeline scheduling, resource allocation, risk matrix management, and stakeholder communications." },
    { role: "Aerostructures Lead", name: "Van Ninh Vu", detail: "Airframe integration, composite fin manufacturing, modular fin can, and structural FEA." },
    { role: "Airbrakes Mechanical Lead", name: "Minh Duc Nguyen", detail: "Inverted slider-crank linkages, conformal flap kinematics, and structural housing." },
    { role: "Airbrakes EECS Lead", name: "Christopher Michael Fernandez", detail: "Custom 4-layer PCB, Pi Zero 2 W companion computer, TMC2209 driver, and control algorithms." },
    { role: "Payload Mechanical Lead", name: "Cooper Kenney", detail: "3U CubeSat chassis, spring suspension landing legs, and motorized rack-and-pinion deployment." },
    { role: "Payload EECS Lead", name: "Chiara Alessandra Deangelis", detail: "Dual RGB Edge AI & NoIR camera payload, NDVI computer vision, and autonomous rover drive electronics." },
    { role: "Recovery Lead", name: "Sama Hosam Ahmed Moussa Ahmed", detail: "Triple-redundant RRC3+ altimeter bays, pyrotechnic sizing, and dual-deployment parachute rigging." },
    { role: "Safety Officer Lead", name: "Khoi Ton", detail: "Hazard analysis, PPE compliance, launch-day pre-flight checklists, and range safety protocols." },
    { role: "Telemetry Lead", name: "Alan Guyster", detail: "Live telemetry, ground station integration, and data visualization." }
  ]

  return (
    <div className="min-h-screen bg-background text-white">
      <div className="relative">
        <Navbar />
      </div>

      <PageHeader title="PAST IREC" subtitle="Project Aurora (Team 24) • IREC 2025–2026 Competition Entry" />

      <section className="container mx-auto px-6 pt-16 pb-20">
        <div className="max-w-4xl mx-auto space-y-10">

          {/* Vehicle Showcase Card */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sm:p-8 overflow-hidden relative shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#cfc493]/15 border border-[#cfc493]/40 text-xs font-bold text-[#cfc493] mb-4">
                  <span>Project Aurora • Team 24</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-white">Project Aurora Launch Vehicle</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Project Aurora was designed, fabricated, and launched by the Society of Aeronautics and Rocketry (SOAR) at the University of South Florida for the 2026 International Rocket Engineering Competition (IREC) in Midland, Texas. Competing in the 10,000 ft COTS solid motor category, Aurora combines active aerodynamic airbrakes, custom long-range LoRa telemetry with motorized ground tracking, live video downlink, and an autonomous deployable 3U CubeSat rover.
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-zinc-950/70 border border-zinc-800/80 p-3 rounded-xl">
                    <span className="text-zinc-400 block mb-0.5">Target Apogee</span>
                    <span className="text-white font-semibold text-sm">10,000 ft AGL</span>
                  </div>
                  <div className="bg-zinc-950/70 border border-zinc-800/80 p-3 rounded-xl">
                    <span className="text-zinc-400 block mb-0.5">Unbraked Apogee</span>
                    <span className="text-white font-semibold text-sm">11,943 ft</span>
                  </div>
                  <div className="bg-zinc-950/70 border border-zinc-800/80 p-3 rounded-xl">
                    <span className="text-zinc-400 block mb-0.5">Length & Diameter</span>
                    <span className="text-white font-semibold text-sm">101.4 in & 6.17 in</span>
                  </div>
                  <div className="bg-zinc-950/70 border border-zinc-800/80 p-3 rounded-xl">
                    <span className="text-zinc-400 block mb-0.5">Liftoff Mass</span>
                    <span className="text-white font-semibold text-sm">64.05 lbs</span>
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden bg-zinc-950/70 border border-zinc-800/80 p-6 flex items-center justify-center group shadow-xl shadow-black/40">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#cfc493]/10 via-transparent to-transparent pointer-events-none" />
                  <Image
                    src="/irec2026.webp"
                    alt="ESRA IREC 2026"
                    width={600}
                    height={600}
                    className="object-contain w-full h-full drop-shadow-[0_15px_30px_rgba(207,196,147,0.2)] transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Competition Photo Gallery */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white">Competition Gallery</h3>
                <p className="text-zinc-400 text-sm">Moments from the 2026 International Rocket Engineering Competition at Spaceport Midland</p>
              </div>
              <span className="text-xs text-zinc-500 self-start sm:self-auto bg-zinc-950 px-3 py-1 rounded-full border border-zinc-800">Click to enlarge</span>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className="group relative cursor-pointer bg-zinc-950/60 rounded-xl border border-zinc-800 overflow-hidden hover:border-[#cfc493]/60 transition-all shadow-lg hover:shadow-black/60 flex flex-col"
                >
                  <div className="relative w-full h-56 overflow-hidden bg-black/40">
                    <Image
                      src={img.src}
                      alt={img.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-4 h-4 text-[#cfc493]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-white text-base mb-1 group-hover:text-[#cfc493] transition-colors">
                        {img.title}
                      </h4>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {img.caption}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Competition Overview */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-white">About the IREC Mission</h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              The International Rocket Engineering Competition (IREC) is the premier global collegiate rocketry competition hosted by the Experimental Sounding Rocket Association (ESRA). Held at Spaceport Midland in Texas, teams from across the world compete to accurately reach designated target altitudes, recover complex flight systems, and deploy functional scientific payloads.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              SOAR entered <strong className="text-white">Project Aurora (Team 24)</strong> into the 10,000 ft COTS (Commercial-Off-The-Shelf) Solid Rocket Motor category. To counteract variations in atmospheric density, motor burn, and wind conditions, the team engineered Aurora with an unbraked target apogee of <strong className="text-white">11,943 ft</strong>. Active aerodynamic airbrakes continuously monitor ascent energy and deploy conformal drag flaps during the coast phase to bleed excess speed and land precisely at the 10,000 ft target apogee.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              At 1,000 ft AGL, Aurora ejects a dedicated 3U CubeSat containing the <strong className="text-white">EVE (Earth Vegetation Evaluator)</strong> rover. Upon landing, EVE autonomously rolls out down a motorized ramp and executes an Edge AI NDVI plant health survey.
            </p>
          </div>

          {/* Launch Vehicle Technical Specifications */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Vehicle Specifications</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-zinc-700">
                    <th className="py-3 px-4 font-semibold text-white">Parameter</th>
                    <th className="py-3 px-4 font-semibold text-white">Specification & Design Value</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-zinc-800/80">
                    <td className="py-3 px-4 text-zinc-400 font-medium">Competition Class</td>
                    <td className="py-3 px-4 text-white">10,000 ft AGL Apogee — COTS Solid Rocket Motor</td>
                  </tr>
                  <tr className="border-b border-zinc-800/80">
                    <td className="py-3 px-4 text-zinc-400 font-medium">Rocket Dimensions</td>
                    <td className="py-3 px-4 text-white">101.4 in total length (100.0 in body tube) | 6.17 in OD (5.93 in ID fiberglass)</td>
                  </tr>
                  <tr className="border-b border-zinc-800/80">
                    <td className="py-3 px-4 text-zinc-400 font-medium">Mass Breakdown</td>
                    <td className="py-3 px-4 text-white">Liftoff: 64.05 lbs (29.05 kg) | Propellant: 12.50 lbs | Payload: 8.59 lbs (3.90 kg) | Burnout: ~51.55 lbs</td>
                  </tr>
                  <tr className="border-b border-zinc-800/80">
                    <td className="py-3 px-4 text-zinc-400 font-medium">Solid Rocket Motor</td>
                    <td className="py-3 px-4 text-white">AeroTech M1939W-PS White Lightning (98mm casing, 10,481.5 N·s total impulse, 5.4s burn, 1,939 N avg thrust)</td>
                  </tr>
                  <tr className="border-b border-zinc-800/80">
                    <td className="py-3 px-4 text-zinc-400 font-medium">Target & Unbraked Apogee</td>
                    <td className="py-3 px-4 text-white">10,000 ft AGL Target | 11,943 ft Unbraked OpenRocket simulation</td>
                  </tr>
                  <tr className="border-b border-zinc-800/80">
                    <td className="py-3 px-4 text-zinc-400 font-medium">Static Stability Margin</td>
                    <td className="py-3 px-4 text-white">2.15 to 2.80 calibers (CG @ 67.5 in, CP @ 80.8 in from tip of nose cone)</td>
                  </tr>
                  <tr className="border-b border-zinc-800/80">
                    <td className="py-3 px-4 text-zinc-400 font-medium">Airbrakes System</td>
                    <td className="py-3 px-4 text-white">4 Conformal flaps actuated by NEMA 23 stepper & inverted slider-crank linkages (0° to 48°)</td>
                  </tr>
                  <tr className="border-b border-zinc-800/80">
                    <td className="py-3 px-4 text-zinc-400 font-medium">Fin Assembly</td>
                    <td className="py-3 px-4 text-white">Modular bolted fin can with 4 custom trapezoidal carbon fiber fins and CNC aluminum thrust ring</td>
                  </tr>
                  <tr className="border-b border-zinc-800/80">
                    <td className="py-3 px-4 text-zinc-400 font-medium">Recovery Architecture</td>
                    <td className="py-3 px-4 text-white">Triple-redundant dual-deploy (3x Missile Works RRC3+ altimeters, drogue at apogee, 120" Fruity Chutes Toroidal Main at 1,000 ft)</td>
                  </tr>
                  <tr className="border-b border-zinc-800/80">
                    <td className="py-3 px-4 text-zinc-400 font-medium">Scientific Payload</td>
                    <td className="py-3 px-4 text-white">3U Aluminum CubeSat + EVE Rover with motorized rack-and-pinion ramp, RGB YOLO Edge AI, and NoIR NDVI camera</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-zinc-400 font-medium">Telemetry & Downlink</td>
                    <td className="py-3 px-4 text-white">Custom Teensy 4.1 + 430 MHz LoRa (200 mW amp), 2-axis motorized tracking ground station, 5.8 GHz VTX video with OSD</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Technical System Highlights */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-2 text-white">Technical System Highlights</h3>
            <p className="text-zinc-400 text-sm mb-6">
              Core engineering innovations and flight subsystems engineered for Project Aurora:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-zinc-950/60 rounded-xl border border-zinc-800/80">
                  <svg className="w-5 h-5 text-[#cfc493] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-white text-base mb-1">{highlight.title}</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subsystem In-Depth Breakdown */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Airbrakes & Flight Control */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sm:p-7">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#cfc493]" />
                <h4 className="text-xl font-bold text-white">Active Airbrakes Control</h4>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                Designed to bridge the gap between Aurora's 11,943 ft unbraked potential and the 10,000 ft competition ceiling. The airbrakes feature four curved conformal flaps conforming to the 6.17-inch airframe outer diameter.
              </p>
              <ul className="text-xs text-zinc-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#cfc493] font-bold">•</span>
                  <span><strong>Actuation:</strong> High-torque NEMA 23 stepper motor driving an inverted slider-crank linkage for precise flap extension angles between 0° and 48°.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#cfc493] font-bold">•</span>
                  <span><strong>Avionics Hardware:</strong> Custom 4-layer PCB integrating a Raspberry Pi Zero 2 W, BMP580 precision barometer, BNO085 9-DOF IMU, and TMC2209 silent stepper driver.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#cfc493] font-bold">•</span>
                  <span><strong>Control Algorithm:</strong> Real-time Kalman state estimator coupled to aerodynamic CFD drag lookup tables to modulate deployment during coast phase.</span>
                </li>
              </ul>
            </div>

            {/* Scientific Payload & EVE Rover */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sm:p-7">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#006747]" />
                <h4 className="text-xl font-bold text-white">3U CubeSat & EVE Rover</h4>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                The payload bay houses a custom 6061-T6 aluminum 3U CubeSat chassis and the Earth Vegetation Evaluator (EVE) rover, deploying under its own 52-inch chute at 1,000 ft AGL.
              </p>
              <ul className="text-xs text-zinc-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#006747] font-bold">•</span>
                  <span><strong>Ejection & Descent:</strong> Mechanical separation at 1,000 ft with four spring-loaded suspension feet absorbing ground impact energy.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#006747] font-bold">•</span>
                  <span><strong>Autonomous Egress:</strong> Dual micro-gearmotors drive a rack-and-pinion deployment ramp rolling the 4WD rover out onto the terrain.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#006747] font-bold">•</span>
                  <span><strong>Vision & NDVI:</strong> Dual cameras (Visible Edge AI camera running YOLOv8 + Raspberry Pi NoIR with 550nm filter) calculate NDVI values to classify desert vegetation.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Testing, Verification & Ground Operations */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Testing & Verification</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              To verify mission reliability before shipping to Midland, the SOAR engineering team executed comprehensive ground, structural, and flight testing:
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="p-4 bg-zinc-950/60 rounded-xl border border-zinc-800/80">
                <h5 className="font-bold text-white mb-2 flex items-center gap-2">
                  <span className="text-[#cfc493]">01.</span> Ground Ejections
                </h5>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Pressure-transducer instrumented pyrotechnic separation tests validating black powder charge mass, shear pin shearing, and clean parachute clearance without structural shock damage.
                </p>
              </div>

              <div className="p-4 bg-zinc-950/60 rounded-xl border border-zinc-800/80">
                <h5 className="font-bold text-white mb-2 flex items-center gap-2">
                  <span className="text-[#cfc493]">02.</span> Beard Garage Drop Tests
                </h5>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  8-story drop testing from the USF Beard Parking Garage validating CubeSat suspension damping, landing orientation, and reliable autonomous EVE rover ramp deployment under impact forces.
                </p>
              </div>

              <div className="p-4 bg-zinc-950/60 rounded-xl border border-zinc-800/80">
                <h5 className="font-bold text-white mb-2 flex items-center gap-2">
                  <span className="text-[#cfc493]">03.</span> Telemetry Longevity & Flight
                </h5>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  11-hour continuous bench RF longevity stress test with the motorized tracking ground station, alongside subscale flight tests validating high-speed airbrake actuation and aerodynamic stability.
                </p>
              </div>
            </div>
          </div>

          {/* Leadership & Subsystem Teams */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white">Project Leadership & Subsystems</h3>
                <p className="text-zinc-400 text-sm">Cross-disciplinary leadership team responsible for Project Aurora</p>
              </div>
              <div className="text-xs text-zinc-400 bg-zinc-950 px-3 py-1.5 rounded-xl border border-zinc-800">
                <span>Faculty Advisor: <strong>Dr. Nicholas Baksh</strong> | Flyer of Record: <strong>Jonathan Fitzer</strong></span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
              {leadershipTeam.map((member, idx) => (
                <div key={idx} className="p-3.5 bg-zinc-950/60 rounded-xl border border-zinc-800/80 flex flex-col justify-between">
                  <div>
                    <span className="text-[#cfc493] font-semibold text-[11px] block uppercase tracking-wide mb-0.5">
                      {member.role}
                    </span>
                    <h5 className="text-white font-bold text-sm mb-1.5">{member.name}</h5>
                    <p className="text-zinc-400 text-[11px] leading-relaxed">{member.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-zinc-800/80 text-xs text-zinc-400 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <p>
                Special thanks to Team Mentor <strong className="text-white">Jimmy Yawn</strong>, the SOAR Executive Board, and over 30 dedicated student engineers contributing across Aerostructures, Airbrakes, Avionics, Payload, Recovery, GSE, and Safety.
              </p>
            </div>
          </div>

          {/* Competition Information */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Competition Information</h3>
            <div className="grid sm:grid-cols-3 gap-4 text-sm">
              <div className="p-4 bg-zinc-950/60 rounded-xl border border-zinc-800/80">
                <span className="text-xs text-zinc-400 block mb-1">Competition Season</span>
                <span className="text-white font-bold text-base">2025–2026 IREC</span>
              </div>
              <div className="p-4 bg-zinc-950/60 rounded-xl border border-zinc-800/80">
                <span className="text-xs text-zinc-400 block mb-1">Launch Location</span>
                <span className="text-white font-bold text-base">Spaceport Midland, Texas</span>
              </div>
              <div className="p-4 bg-zinc-950/60 rounded-xl border border-zinc-800/80">
                <span className="text-xs text-zinc-400 block mb-1">Sanctioning Host</span>
                <span className="text-white font-bold text-base">ESRA Sounding Rocket Association</span>
              </div>
            </div>
          </div>

          {/* Technical Report PDF */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white">Technical Report</h3>
                <p className="text-zinc-400 text-sm">Official Project Technical Report for Project Aurora (Team 24)</p>
              </div>
              <a
                href="/Team024_University of South Florida_Project Technical Report.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#cfc493]/15 border border-[#cfc493]/40 hover:bg-[#cfc493]/25 text-[#cfc493] text-xs font-bold rounded-xl transition-all self-start sm:self-auto"
              >
                <span>Open in New Tab</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div className="rounded-xl overflow-hidden border border-zinc-800 shadow-inner">
              <iframe
                src="/Team024_University of South Florida_Project Technical Report.pdf"
                width="100%"
                height="650px"
                title="Project Aurora Technical Report"
                className="bg-zinc-950"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-4 right-4 z-50 text-zinc-400 cursor-pointer hover:text-white bg-zinc-900/80 hover:bg-zinc-800 p-2.5 rounded-full border border-zinc-700/80 transition-colors"
            title="Close (Esc)"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryImages.length - 1))
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-zinc-300 cursor-pointer hover:text-white bg-zinc-900/80 hover:bg-zinc-800 p-3 rounded-full border border-zinc-700/80 transition-all hover:scale-110 shadow-xl"
            title="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImageIndex((prev) => (prev !== null && prev < galleryImages.length - 1 ? prev + 1 : 0))
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 cursor-pointer text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 p-3 rounded-full border border-zinc-700/80 transition-all hover:scale-110 shadow-xl"
            title="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image & Caption Container */}
          <div
            className="relative max-w-5xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
              <Image
                src={galleryImages[selectedImageIndex].src}
                alt={galleryImages[selectedImageIndex].title}
                width={1600}
                height={1000}
                className="max-h-[75vh] w-auto object-contain rounded-xl"
              />
            </div>
            <div className="mt-4 text-center px-4 max-w-2xl">
              <h4 className="text-lg font-bold text-white mb-1">
                {galleryImages[selectedImageIndex].title}
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400">
                {galleryImages[selectedImageIndex].caption}
              </p>
              <div className="text-[11px] text-zinc-500 mt-2">
                Image {selectedImageIndex + 1} of {galleryImages.length}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}