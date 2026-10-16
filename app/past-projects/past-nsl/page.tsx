"use client"

import { useState, useEffect, useRef } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"
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
  Award,
  Wrench,
  Users,
  Layers
} from "lucide-react"

interface SeasonImage {
  src: string
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
    airframe?: string
    ballast?: string
  }
  designEvolution?: string[]
  teamLeadership?: string
}

const SEASONS: SeasonData[] = [
  {
    id: "season-23-24",
    year: "2023–2024",
    seasonLabel: "23-24 Season",
    vehicleName: "APIS IV (128\" G12 Launch Vehicle)",
    challenge: "4,500 ft Target Apogee & In-Air Deployable 'SAIL' Autonomous Quadcopter Lander",
    summary:
      "SOAR's 2023–2024 competition vehicle, APIS IV, was a 128-inch G12 fiberglass rocket powered by a Cesaroni Pro75 L995 'Red Lightning' motor targeting 4,500 ft AGL. The vehicle incorporated an in-air deployable quadcopter lander—the STEMnauts Atmosphere Independent Lander (SAIL). At apogee, dual counter-rotating ACME lead screws extended the nose cone to expose a 180° airframe window, allowing the spring-jettisoned quadcopter to deploy mid-descent (400–800 ft AGL), unfold its arms, and autonomously navigate simulated crew members ('STEMnauts') to a soft landing while monitoring strict human survivability metrics.",
    tags: [
      "Target: 4,500 ft",
      "APIS IV Launch Vehicle",
      "SAIL Quadcopter Lander",
      "STEMnaut Survivability",
      "Cesaroni Pro75 L995",
      "Dual ACME Lead Screws",
      "Huntsville, AL",
    ],
    images: [
      {
        src: "/nsl2324 pic1.JPG",
      },
      {
        src: "/nsl2324 pic2.JPG",
      },
      {
        src: "/nsl2324 pic3.JPG",
      },
      {
        src: "/nsl2324 pic4.JPG",
      }
    ],
    specs: {
      targetApogee: "4,500 ft (±50 ft AGL)",
      length: "128 in (10.67 ft)",
      diameter: "4.024–4.204 in OD (4.0 in ID)",
      liftOffWeight: "33.9 lb dry / 41.8 lb loaded liftoff mass",
      motor: "Cesaroni Pro75 3618L995-P 'Red Lightning' (75mm APCP, 3,618 N·s total impulse, 3.6s burn)",
      payload:
        "SAIL (STEMnauts Atmosphere Independent Lander): In-air deployable 5+ lb quadcopter with auto-unfolding arms, Lumenier LUX H7 HD flight controller (ArduPilot), backup 36\" parachute, and STEMnaut survivability sensors (<4G, ±10° orientation, ≤10 RPM, <110 dBA, 10–35°C).",
      recovery:
        "Dual deployment: 24\" Fruity Chutes toroidal drogue at apogee, 96\" Fruity Chutes Iris Ultralight main at 610 ft AGL (85.7s descent, landing KE < 75 ft-lbf threshold, drift < 1,709 ft in 20 mph wind).",
      innovation:
        "Dual counter-rotating ACME lead screw extension mechanism exposing a 180° window, spring-loaded rail jettison, and live LoRa/Flask/WebSocket Ground Station telemetry.",
      airframe: "G12 fiberglass tubes (43\" upper, 25\" mid, 2\" switchband, 35\" booster), 18\" Von Karman nose cone (1.3 lb), G10 bulkheads, and 3 chamfered trapezoidal carbon fiber fins (flutter velocity 2,592 ft/s, 4.9 FOS)",
      ballast: "Adjustable Ballast System relocated to upper body driver coupler near CG to protect payload cutout, holding up to 10 stackable sleds (up to 2.97 lb / 36 one-ounce weights)",
    },
    designEvolution: [
      "Dual Lead Screw Extension (<20s): NEMA 17 stepper and acetal gear train drives right- and left-handed ACME lead screws simultaneously to eliminate torsional twist, opening a 180° cutout window at apogee (and reversing to close if descending below 300 ft without RSO approval).",
      "In-Flight Spring Jettison: Folded quadcopter sits on 3D-printed guide rails atop twin compressed springs (8.72 lbf/in constant); LoRa-actuated servos retract locking pins between 400–800 ft AGL to launch the drone clear of the airframe.",
      "Auto-Deploying Carbon Arms & Failsafe: 120° torsion springs snap 4 carbon-fiber tube arms to 90° upon exit; dual servos release a spring-loaded vented plunger deploying a 36\" backup parachute if stabilization or battery thresholds fail.",
      "Ground Station LoRa Mesh: Teensy 4.0 reads live RRC3 altimeter and GPS data, feeding an Arduino Nano with 433 MHz Adafruit RFM96W LoRa to stream real-time GIS mapping and telemetry plots to a Python Flask web server via WebSockets.",
      "Subscale Testing Lessons (Plant City, FL): Three 75%-scale flights on J760/J355 motors prompted standardized parachute folding, secure battery retention bars, and a compartmentalized hardware organizer after early flights suffered chute tangling and detached couplers.",
    ],
    teamLeadership:
      "Society of Aeronautics and Rocketry (SOAR) at the University of South Florida, mentored by Jonathan Fitzer (Tripoli Level III #17393); engineering contributions by Cesar Briones, Karam Shahrouri, Adam R., and Lazaro A.J.",
  },
  {
    id: "season-22-23",
    year: "2022–2023",
    seasonLabel: "22-23 Season",
    vehicleName: "115\" G12 Launch Vehicle",
    challenge: "Autonomous Servo Stabilized Camera System (SSCS) & 4,500 ft Target Apogee",
    summary:
      "Designed for NASA Student Launch in Huntsville, AL, SOAR engineered a 115-inch G12 fiberglass rocket powered by a Cesaroni K520 motor. Upon landing, an onboard master-slave computing architecture autonomously aligned with an upward-facing airframe port, extended a 120° FOV camera on a 2-axis micro-stepper gimbal, leveled along the Z-axis, and executed radio-transmitted commands via APRS RF receiver.",
    tags: [
      "Target Apogee: 4,500 ft",
      "SSCS Camera Payload",
      "Cesaroni K520",
      "G12 Fiberglass",
      "APRS RF Commands",
      "Dual RRC3 Altimeters",
      "Huntsville, AL",
    ],
    images: [
      {
        src: "/nsl2223 pic1.jpg",
      },
      {
        src: "/nsl2223 pic2.jpg",
      },
      {
        src: "/nsl2223 pic3.jpg",
      },
    ],
    specs: {
      targetApogee: "4,500 ft (±50 ft AGL)",
      length: "115 in (9.58 ft)",
      diameter: "4.0 in OD",
      liftOffWeight: "16.5 lb (17.0 lb with optimal ballast)",
      motor: "Cesaroni K520 (4-Grain Solid Rocket Motor, 3.3s burn time)",
      payload:
        "Servo Stabilized Camera System (SSCS): Raspberry Pi Zero master + Pico slave, dual Adafruit BNO055 9-DOF IMUs, DRA818V 2m APRS receiver, 120° FOV camera on 2-axis leveling micro-stepper gimbal.",
      recovery:
        "Dual deployment with redundant Missile Works RRC3 altimeters, 902–928 MHz RTx/GPS tracker: 16\" drogue at apogee, 72\" nylon main at 500 ft AGL (kinetic energy well below 75 ft-lbf limit).",
      innovation:
        "Internal rotational stepper assembly that senses orientation on touchdown and drives a rack-and-pinion camera through the upward-facing airframe aperture, leveled by 2-axis micro-stepper gimbal.",
      airframe: "G12 fiberglass body tube with 3 carbon fiber symmetrical-trapezoidal fins & 54mm anodized aluminum boattail/motor retainer",
      ballast: "Nose cone shoulder modular ballast holding up to twenty-four 1-oz steel weights for apogee tuning & static stability margin (2.95 calibers)",
    },
    designEvolution: [
      "Payload Upgrades: Redesigned actuator parts with 100% infill PETG, carbon steel rack-and-pinion gears, dual BNO055 IMUs for sensor redundancy, and foam-lined aerodynamic port covers.",
      "Nosecone Ballast Integration: Added modular 24-oz stackable ballast system after subscale flight testing in Plant City, FL to ensure optimal off-the-rail stability margin (2.95 calibers).",
      "Avionics Calibration & Isolation: Implemented shop barometric calibration and sensor housing isolation to eliminate discrepancies between primary and backup Missile Works RRC3 altimeters.",
      "Ground Ejection Verification: Scaled black powder separation charges to 2.0g to ensure high-margin separation under all flight dynamics.",
    ],
    teamLeadership: "Society of Aeronautics and Rocketry (SOAR) at the University of South Florida, mentored by Jonathan Fitzer (Tripoli Level III).",
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
      },
      {
        src: "/pic6.JPG",
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
    vehicleName: "141\" Fiberglass Launch Vehicle",
    challenge: "5,000 ft Target Apogee, Dynamic Apogee Adjustment (DAAS), & Autonomous Soil Rover",
    summary:
      "SOAR's 2018–2019 competition vehicle featured a 141-inch fiberglass rocket with active drag flaps (DAAS) and an autonomous soil-collection rover. Designed for a 5,000 ft apogee in Huntsville, AL, the rocket utilized a unique Payload Descent Leveling Subsystem (PDLS) to orient the upper airframe horizontally under parachute descent before landing, allowing a Recon Scout-inspired rover to eject remotely, travel 10+ ft, and flip itself over to vacuum a 10 mL soil sample.",
    tags: [
      "Target: 5,000 ft",
      "DAAS Active Drag Flaps",
      "Autonomous Soil Rover",
      "PDLS Horizontal Landing",
      "Cesaroni L2375",
      "Inverted Vacuum Intake",
      "Huntsville, AL",
    ],
    images: [
      {
        src: "/Full Assembly.PNG",
      },
      {
        src: "/pic7.JPG",
      },
    ],
    specs: {
      targetApogee: "5,000 ft (±50 ft AGL)",
      length: "141 in (11.75 ft)",
      diameter: "6.1 in OD (6.0 in nominal)",
      liftOffWeight: "36.7 lb dry / 44.7 lb w/ payload / 53.9 lb loaded",
      motor: "Cesaroni L2375 'White Thunder' APCP (75mm Pro75-4G, 1,093 lbf·s, 1.9s burn, 10.22 T/W)",
      payload:
        "Autonomous Soil-Collection Rover (19\" bay): Dual solenoid lock, motorized winch-piston ejection, differential DC motor drive with custom PLA tread wheels, collapsible stabilization arm, and an inverted top-mounted vacuum intake collecting 10 mL of soil.",
      recovery:
        "Two untethered sections with dual-deployment: 20\" SkyAngle drogue at apogee, 84\" Fruity Chutes main for lower section at 750 ft, 96\" Fruity Chutes main for upper section at 725 ft, and PDLS horizontal leveling at 550 ft (kinetic energy < 75 ft-lbf).",
      innovation:
        "Dynamic Apogee Adjustment Subsystem (DAAS) with 3 deployable drag flaps (+34% drag), and the Payload Descent Leveling Subsystem (PDLS) transferring parachute load to land the upper airframe horizontally.",
      airframe: "Fiberglass tubes (56\" upper, 3\" transition, 47\" lower), 30\" Von Karman nose cone with aluminum tip, 3/16\" FRP bulkheads, and 3 backswept carbon fiber fins (2.4 calibers stability margin)",
      ballast: "Adjustable Ballast Subsystem (ABS) in nose cone with stackable acrylic plates on 5/16\" threaded rods holding 1-oz weights (6–8 oz/plate)",
    },
    designEvolution: [
      "Dynamic Apogee Adjustment (DAAS): Integrated 3 deployable aluminum drag fins driven by a 12V planetary geared motor and crank-slider mechanism in the 3\" transition band to modulate cross-sectional area by up to 31%.",
      "Payload Descent Leveling (PDLS): Solved 2018 mud-obstruction issues by firing a Tender Descender quick link at 550 ft to transfer parachute load to a lower bridle, dropping the payload tube horizontally before touchdown.",
      "Inverted Vacuum Collection: Placed the soil intake on top of the rover to maintain maximum ground clearance during driving, programming the rover to flip itself over at the collection site to vacuum soil flush with the surface.",
      "Steel-Bar Battery Retention: Replaced standard 9V clips with steel-bar-retained 3.7V 750 mAh LiPo batteries after subscale test flights in Plant City, FL (Apis III-S at 3,600 ft apogee) revealed clip detachment risks.",
      "Quadruple Altimeter Redundancy: Two independent avionics bays each outfitted with dual Missile Works RRC3 altimeters and 902–928 MHz RTx GPS units armed via keyed rotary switches.",
    ],
    teamLeadership:
      "Student leadership led by Ashleigh Stevenson (Team Advisor), Sara Vlhova (PM & Safety Officer), Ian Sanders (Vehicle Lead), Thomas Hall (Payload Lead), and Ashley de Kort (Safety Officer), with Dr. Manoug Manougian (Faculty Advisor) and Jim West (Tripoli Level III Mentor).",
  },
  {
    id: "season-17-18",
    year: "2017–2018",
    seasonLabel: "17-18 Season",
    vehicleName: "111\" G10/G12 Fiberglass Launch Vehicle",
    challenge: "1-Mile Target Apogee (5,280 ft AGL) & Autonomous 'Sidewinder' Rover",
    summary:
      "Targeting an exact 1-mile apogee (5,280 ft AGL), SOAR designed and manufactured a 111-inch fiberglass launch vehicle equipped with a modular nose-cone ballast system. Upon landing, the rocket deployed the autonomous 'Sidewinder' rover using a motorized winch-and-sled mechanism to traverse deformable soil and unfold solar panels.",
    tags: [
      "Exact 1-Mile (5,280 ft)",
      "Sidewinder Rover",
      "AeroTech L1420R-P",
      "G10/G12 Fiberglass",
      "Modular Ballast",
      "Winch & Sled Ejection",
      "Huntsville, AL",
    ],
    images: [
      {
        src: "/pic8.JPG",
      },
      {
        src: "/pic9.JPG",
      },
    ],
    specs: {
      targetApogee: "5,280 ft (1.00 Mile AGL)",
      length: "111 in (9.25 ft)",
      diameter: "5.148 in OD",
      liftOffWeight: "36.8–37.2 lb (40.2 lb ballasted)",
      motor: "AeroTech L1420R-P (75mm Solid APCP, 4,603 N·s total impulse)",
      payload:
        "Autonomous 'Sidewinder' Rover: sideways-stowed large-diameter wheels with Newtonian support leg, motorized winch-and-sled ejection, 5+ ft autonomous drive, and deployable solar array.",
      recovery:
        "Four redundant Altus Metrum EasyMini altimeters with staggered deployment: 20\" SkyAngle drogue at apogee, 36\" Fruity Chutes at 950 ft (booster), and 60\" SkyAngle at 800 ft (payload/nose).",
      innovation:
        "Modular 3D-printed nose cone ballast system (up to 3.7 lbs in 1-oz increments) for launch-day wind apogee tuning, plus shortened fin geometry to defeat flutter at 800+ fps.",
      airframe: "G10/G12 Fiberglass tubing with 1/8\" structural FRP fiberglass fins, bulkheads, and centering rings",
      ballast: "Modular 3D-printed stackable system in nose cone shoulder holding 1-oz weights (up to ~3.72 lbs) to fine-tune apogee",
    },
    designEvolution: [
      "Fin Flutter Mitigation: Shortened fin height from 8\" to 5.75\" (14\" root, 8.25\" tip), increasing flutter boundary from 440 fps to ~808 fps, safely above projected 748 fps max velocity.",
      "Payload Winch & Sled: Replaced complex rack-and-pinion with a high-torque stepper motor winch and push/pull solenoids for reliable rover ejection.",
      "Extended Airframe (+17\"): Lengthened rover compartment to 47.75\" and altimeter bay to 12\" to eliminate internal coupling stage and simplify recovery packaging.",
      "Staggered Main Deployment: Separated main parachute deployments (950 ft and 800 ft) to eliminate shock cord entanglement discovered during subscale flight testing in Plant City, FL.",
    ],
    teamLeadership:
      "Stephanie Bauman (Student Team Leader), Jackson Stephenson (Project Manager), Kevin Kirkolis (Safety Officer), Dr. Manoug Manougian (Academic Advisor), Jim West (Tripoli Level 3 Mentor).",
  },
  {
    id: "season-16-17",
    year: "2016–2017",
    seasonLabel: "16-17 Season",
    vehicleName: "145\" G10 Fiberglass Launch Vehicle",
    challenge: "Autonomous Steerable Landing Module & Real-Time Computer Vision Target ID",
    summary:
      "SOAR's second NASA Student Launch entry featured a 145-inch (12-ft) G10 fiberglass rocket powered by a Cesaroni L1115 motor targeting 5,280 ft AGL. The vehicle deployed an autonomous 9.4-lb landing module mid-flight with motorized steering arms, spring-actuated landing gear with ground wheels, and an onboard OpenCV vision processing system to identify and classify colored ground targets in real time.",
    tags: [
      "16-17 Campaign",
      "Target: 5,280 ft",
      "OpenCV Computer Vision",
      "Autonomous Landing Module",
      "Cesaroni L1115",
      "Steerable Propellers",
      "Huntsville, AL",
    ],
    images: [
      {
        src: "/pic10.JPG",
      },
      {
        src: "/pic11.JPG",
      },
    ],
    specs: {
      targetApogee: "5,280 ft (±50 ft AGL)",
      length: "145 in (12.08 ft)",
      diameter: "6.0 in OD",
      liftOffWeight: "40.06 lb unloaded / 49.81 lb loaded",
      motor: "Cesaroni L1115 (75mm Solid APCP, 5,015 N·s total impulse, 4.5s burn time)",
      payload:
        "Autonomous Landing Module (24\", 9.38 lb): Raspberry Pi 3B running OpenCV (HSV color masking & contour filtering) for real-time target identification, dual SunnySky brushless counter-rotating steering motors, and 4 spring-hinged landing legs with wheels for upright touchdown.",
      recovery:
        "Dual deployment with 2 redundant Missile Works RRC3 altimeters and Kraft phenolic piston ejection (no deployment bags). Four SkyAngle parachutes (2 drogue, 2 CERT-3) with 902–928 MHz RTx GPS tracking in 3 sections.",
      innovation:
        "Mid-body autonomous landing module featuring deployable Unistrut steering arms with magnetic catches, phototransistor sunlight wake-up activation, and real-time aerial computer vision.",
      airframe: "3-ft fiberglass nose cone, 5-ft G10 fiberglass main body, 13-in coupler bay, and 4-ft booster with carbon fiber/fiberglass trapezoidal fins (2.24 calibers stability margin)",
      ballast: "Calculated loaded CG at 95.72\" and CP at 109\" from nose tip, yielding stable 2.24 calibers margin and >52 fps rail exit velocity",
    },
    designEvolution: [
      "Autonomous Aerial Steering: Dual SunnySky brushless counter-rotating motors on spring-loaded 6061 aluminum Unistrut arms deployed horizontally upon ejection to counter parachute spin and steer toward target landing zones.",
      "OpenCV Real-Time Color Classification: Raspberry Pi 3B executed HSV color masking and Canny edge contour filtering scaled by altitude to identify and differentiate three 40' x 40' colored ground tarps.",
      "Phototransistor Sleep/Wake Architecture: Kept payload electronics in low-power sleep mode inside the dark airframe (40-hr battery reserve) until sunlight exposure upon ejection triggered full autonomous operation.",
      "Piston Separation Ejection: Kraft phenolic piston system eliminated deployment bags, ensuring clean black-powder charge separation of the nose cone, lander, and booster sections.",
      "Subscale Flight Verification: 2/3-scale prototype flight in Plant City, FL reached 1,899 ft apogee at 321 fps, validating separation dynamics and refining parachute packing to eliminate line entanglement.",
    ],
    teamLeadership: "Society of Aeronautics and Rocketry (SOAR) at the University of South Florida, mentored by Jim West (Tripoli Level 3, Tripoli Advisory Panel).",
  },
  {
    id: "season-15-16",
    year: "2015–2016",
    seasonLabel: "15-16 Season",
    vehicleName: "Minotaur (138\" Mars Ascent Vehicle)",
    challenge: "Centennial Challenge MAV & Autonomous Ground Support Equipment (AGSE) System",
    summary:
      "USF SOAR's inaugural year competing in the NASA Student Launch featured Minotaur—a 138-inch single-stage Mars Ascent Vehicle (MAV) powered by a Cesaroni L910s motor targeting 5,280 ft AGL. Competing in the Centennial Challenge MAV category, the launch vehicle was paired with an Autonomous Ground Support Equipment (AGSE) system: a 6-wheeled Rocker-Bogie retrieval rover equipped with a 5-DOF stainless-steel robotic arm that autonomously located a sample payload on the ground, loaded it into a motorized 24\" internal payload containment bay sealed flush with a linear actuator, erected the launch rail to 85° using a 100:1 non-backdrivable worm gear, and inserted the motor igniter—all completed in under 10 minutes.",
    tags: [
      "Inaugural Season",
      "Minotaur MAV Vehicle",
      "Autonomous AGSE Rover",
      "5-DOF Robotic Arm",
      "Kinect 3D Mapping",
      "100:1 Worm-Gear Erector",
      "Cesaroni L910s",
      "Target: 5,280 ft",
    ],
    images: [
      {
        src: "/pic12.JPG",
      },
    ],
    specs: {
      targetApogee: "5,280 ft (5,000–5,400 ft window AGL)",
      length: "138.0–138.6 in (11.5 ft)",
      diameter: "4.00 in OD",
      liftOffWeight: "14.2–17.1 lb empty / 22.82–23.2 lb loaded liftoff mass",
      motor: "Cesaroni L910s APCP (75mm BATES grain, 2,856.1 N·s total impulse, 3.2s burn time, 8.93 T/W)",
      payload:
        "Autonomous Ground Support Equipment (AGSE) & MAV Payload Bay: 6-wheeled Rocker-Bogie rover with ROS differential drive, 5-DOF stainless-steel robotic arm with Kinect RGB-D vision and MATLAB 3D point-cloud mapping, radio-controlled internal L16 linear actuator sealing the 24\" containment bay, automated 100:1 worm gear 85° launch rail erector, and motorized friction-roller nozzle igniter insertion station.",
      recovery:
        "Dual deployment in 3 tethered sections (nose/payload, fore airframe, aft fin can) with 828\" paracord shock cords (3x vehicle length): SkyAngle Cert-3 drogue (6.3 sq ft) at apogee (63.04 ft/s descent) and SkyAngle Cert-3 Large main (57 sq ft) at 500 ft AGL (15.93 ft/s descent, landing KE 12.2–28.6 ft·lbf, well below 75 ft·lbf limit). Redundant Missile Works RRC3 altimeters with lockable turn switches + TeleGPS.",
      innovation:
        "Fully autonomous ground-to-launch sequence in under 10 minutes: Rocker-Bogie rover sample retrieval, motorized bay sealing with zero external protrusions, non-backdrivable 100:1 worm-gear rail erection to 85°, and automated igniter insertion without GPS, magnetic compasses, or pneumatics.",
      airframe:
        "Wildman G-12 fiberglass fore and aft body tubes, Kraft phenolic coupler/motor mount, PML HDPE ogive nose cone with structural foam/ballast compartment, Baltic birch bulkheads with 3,500 psi slow-cure epoxy, 75mm AeroPack retainer, and four PML G10 fiberglass through-the-wall trapezoidal fins with carbon-fiber/epoxy fillets (5.38 cal loaded stability margin).",
      ballast:
        "Loaded CG at 92.51\"–96.89\" and CP at 114.0\" from nose tip (5.38 cal loaded / 8.62 cal empty stability margin). 43.00 ft/s rail exit velocity with simulated apogee of 5,270–5,280 ft and Mach 0.67 max velocity.",
    },
    designEvolution: [
      "Autonomous 6-Wheel Rocker-Bogie Rover: Modeled on NASA Mars rovers with 4-in steel-framed wheels; outer four wheels driven by optical-encoder DC motors via ROS navigation stack (amcl visual localization & costmaps), counterbalanced to prevent tipping.",
      "5-DOF Stainless Steel Robotic Arm: 304 stainless steel arm with 7 Hitec servos, 18.3\" horizontal reach, 22.9\" vertical reach, and a liquid-rubber coated 4-tooth interlocking gripper with servo angle feedback for sample verification.",
      "Kinect RGB-D Vision & Master PC: Onboard Raspberry Pi streaming Kinect 3D depth to an offboard MATLAB master PC for real-time sample color/shape identification and obstacle-avoidance trajectory calculation.",
      "Mechanized Retracting Payload Bay: Radio-controlled Firgelli L16 linear actuator retracting the 24\" fiberglass containment bay flush with an O-ring seal to eliminate external aerodynamic protrusions once the sample is loaded.",
      "Automated Worm-Gear Erector & Igniter Inserter: Electric motor driving a 100:1 non-backdrivable worm gear generating 2,087 in-lb torque to lift the rail from horizontal to 85° with ratchet backup, paired with motorized elastomer friction rollers inserting the motor igniter.",
      "Subscale Flight Verification: 3:4-scale prototype (93.2\" length, 10.3 lb mass) successfully launched December 20, 2015, achieving 4,092 ft apogee (only 1.06% error vs. 4,136 ft OpenRocket prediction) with nominal dual deployment.",
    ],
    teamLeadership:
      "Society of Aeronautics and Rocketry (SOAR) at the University of South Florida (Inaugural NSL Season), mentored by Rick Waters (Tripoli Level 3 #8543 / NAR Advisor). Student leadership included the Project Lead, Safety Officer (monitoring lab/pad safety, MSDS, PPE enforcement), and Education Engagement Officer (STEM outreach at Young Middle Magnet and USF Student Veterans).",
  },
]

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    transition: { duration: 0.45, ease: "easeOut" },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function PastNSLPage() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const [hasScrolledPastTop, setHasScrolledPastTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolledPastTop(window.scrollY > 40)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 80%"],
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const [activeImageIndexes, setActiveImageIndexes] = useState<{ [seasonId: string]: number }>({
    "season-23-24": 0,
    "season-22-23": 0,
    "season-21-22": 0,
    "season-18-19": 0,
    "season-17-18": 0,
    "season-16-17": 0,
    "season-15-16": 0,
  })

  const [modalState, setModalState] = useState<{
    seasonId: string
    imageIndex: number
  } | null>(null)

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

  const handleModalNext = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    if (!modalState) return
    const season = SEASONS.find((s) => s.id === modalState.seasonId)
    if (!season || season.images.length <= 1) return
    const nextIdx = (modalState.imageIndex + 1) % season.images.length
    setModalState({ seasonId: season.id, imageIndex: nextIdx })
    setActiveImageIndexes((prev) => ({ ...prev, [season.id]: nextIdx }))
  }

  const handleModalPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    if (!modalState) return
    const season = SEASONS.find((s) => s.id === modalState.seasonId)
    if (!season || season.images.length <= 1) return
    const prevIdx = (modalState.imageIndex - 1 + season.images.length) % season.images.length
    setModalState({ seasonId: season.id, imageIndex: prevIdx })
    setActiveImageIndexes((prev) => ({ ...prev, [season.id]: prevIdx }))
  }

  useEffect(() => {
    if (!modalState) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModalState(null)
      } else if (e.key === "ArrowLeft") {
        handleModalPrev()
      } else if (e.key === "ArrowRight") {
        handleModalNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [modalState])

  const modalSeason = modalState ? SEASONS.find((s) => s.id === modalState.seasonId) : null
  const modalImage = modalSeason ? modalSeason.images[modalState!.imageIndex] : null
  const modalImageCount = modalSeason ? modalSeason.images.length : 0
  const hasMultipleModalImages = modalImageCount > 1

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
        subtitle="Our Journey Through NASA Student Launch: 2015 – 2024"
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
                Nine Years of Collegiate Rocketry Heritage
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
                <span className="text-zinc-300">7 Competition Seasons</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Container with Center/Left Spine */}
        <div ref={timelineRef} className="relative">
          {/* Vertical Connecting Spine - Initially hidden, dynamically grows downwards on scroll */}
          <motion.div 
            style={{ scaleY }}
            className="absolute left-4 md:left-1/2 top-5 bottom-8 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#cfc493] via-[#cfc493] to-[#cfc493]/80 hidden sm:block origin-top shadow-[0_0_12px_rgba(207,196,147,0.4)]" 
          />

          <div className="space-y-16 md:space-y-24">
            {SEASONS.map((season, index) => {
              const currentImgIdx = activeImageIndexes[season.id] || 0
              const currentImg = season.images[currentImgIdx]
              const hasMultipleImages = season.images.length > 1
              const isEven = index % 2 === 0

              return (
                <div
                  key={season.id}
                  id={season.id}
                  className="relative scroll-mt-20"
                >
                  {/* Timeline Node Icon on the Spine */}
                  {index === 0 ? (
                    /* The first node is always visible when user lands on page */
                    <div className="hidden sm:flex absolute left-4 md:left-1/2 -translate-x-1/2 top-0 w-10 h-10 rounded-full bg-zinc-950 border-2 border-[#cfc493] items-center justify-center shadow-lg shadow-[#cfc493]/20 z-10">
                      <span className="w-3 h-3 rounded-full bg-[#cfc493] animate-pulse" />
                    </div>
                  ) : (
                    /* Subsequent nodes fade in as scroll line reaches them */
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, scale: 0.6 },
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
                      }}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: "some", margin: "-40px 0px -100px 0px" }}
                      className="hidden sm:flex absolute left-4 md:left-1/2 -translate-x-1/2 top-0 w-10 h-10 rounded-full bg-zinc-950 border-2 border-[#cfc493] items-center justify-center shadow-lg shadow-[#cfc493]/20 z-10"
                    >
                      <span className="w-3 h-3 rounded-full bg-[#cfc493] animate-pulse" />
                    </motion.div>
                  )}

                  {/* Main Content Card Container - Animated Fade In & Fade Out on Scroll */}
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate={index === 0 && !hasScrolledPastTop ? "hidden" : undefined}
                    whileInView="visible"
                    viewport={{ once: false, amount: "some", margin: "-60px 0px -160px 0px" }}
                    className={`sm:ml-12 md:ml-0 md:w-[calc(50%-3rem)] ${isEven ? "md:mr-auto" : "md:ml-auto"} will-change-[transform,opacity]`}
                  >
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
                            alt = {`Season ${season.year} Image ${currentImgIdx + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 500px"
                            className="object-cover transition-transform duration-500 group-hover/img:scale-105"
                            priority={index === 0}
                          />

                          {/* Hover View Full Image Overlay */}
                          <button
                            onClick={() => setModalState({ seasonId: season.id, imageIndex: currentImgIdx })}
                            className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-xs backdrop-blur-[2px] cursor-pointer"
                          >
                            <Maximize2 className="w-4 h-4 text-[#cfc493]" />
                            <span>Click to enlarge</span>
                          </button>

                          {/* Caption Bar */}
                          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 pt-6 pointer-events-none">
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
                                  alt={`Season ${season.year} Thumbnail ${imgIdx + 1}`}
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
                          {season.specs.airframe && (
                            <div className="bg-zinc-950/50 border border-zinc-800/60 p-3 rounded-xl">
                              <span className="text-zinc-400 font-medium block mb-1 flex items-center gap-1.5">
                                <Layers className="w-3.5 h-3.5 text-[#cfc493]" />
                                <span>Airframe & Construction:</span>
                              </span>
                              <span className="text-zinc-200 leading-relaxed block">{season.specs.airframe}</span>
                            </div>
                          )}

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

                          {season.designEvolution && season.designEvolution.length > 0 && (
                            <div className="bg-zinc-950/70 border border-zinc-800/80 p-3.5 rounded-xl">
                              <span className="text-[#cfc493] font-semibold block mb-2 flex items-center gap-1.5">
                                <Wrench className="w-3.5 h-3.5" />
                                <span>Engineering Solutions & Design Upgrades:</span>
                              </span>
                              <ul className="space-y-1.5 text-zinc-300">
                                {season.designEvolution.map((item, dIdx) => (
                                  <li key={dIdx} className="flex items-start gap-2">
                                    <span className="text-[#cfc493] mt-0.5">•</span>
                                    <span className="leading-relaxed">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {season.teamLeadership && (
                            <div className="bg-zinc-950/40 border border-zinc-800/50 p-3 rounded-xl text-[11px] text-zinc-400 flex items-start gap-2">
                              <Users className="w-3.5 h-3.5 text-[#cfc493] shrink-0 mt-0.5" />
                              <div className="leading-relaxed">
                                <span className="text-zinc-300 font-medium">Team Leadership: </span>
                                <span>{season.teamLeadership}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Retrospective Section */}
        <div className="mt-24 bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 max-w-4xl mx-auto text-center">
          <ShieldCheck className="w-10 h-10 text-[#cfc493] mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Legacy of Engineering Excellence</h3>
          <p className="text-zinc-400 leading-relaxed mb-6 max-w-2xl mx-auto">
            From our founding 2015-16 campaign through the high-performance 2023-24 season, NASA Student Launch
            has trained generations of USF aerospace, mechanical, electrical, and computer engineers.
            The avionics telemetry, active airbrakes, and deployable payload systems designed here continue to inform
            our current flagship vehicles in IREC and liquid propulsion research.
          </p>
          <div className="inline-flex gap-4 flex-wrap justify-center text-sm text-zinc-400 font-medium">
            <span>• 100+ Student Engineers Trained</span>
            <span>• 7 Full Competition Cycles</span>
            <span>• Real NASA PDR / CDR Reviews</span>
          </div>
        </div>
      </main>

      {/* Lightbox Modal for Enlarge Image */}
      <AnimatePresence>
        {modalState && modalSeason && modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalState(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          >
            {/* Modal Content Wrapper with Left/Right Arrows */}
            <div className="relative max-w-5xl w-full flex items-center justify-center">
              {/* Previous Arrow Button (Season-scoped, positioned to the left of the image) */}
              {hasMultipleModalImages && (
                <button
                  onClick={handleModalPrev}
                  aria-label="Previous image in this season"
                  className="absolute left-2 sm:-left-16 z-30 p-2.5 sm:p-3 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-white border border-zinc-700/80 hover:border-[#cfc493] transition-all hover:scale-110 active:scale-95 shadow-2xl cursor-pointer"
                >
                  <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
                </button>
              )}

              {/* Next Arrow Button (Season-scoped, positioned to the right of the image) */}
              {hasMultipleModalImages && (
                <button
                  onClick={handleModalNext}
                  aria-label="Next image in this season"
                  className="absolute right-2 sm:-right-16 z-30 p-2.5 sm:p-3 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-white border border-zinc-700/80 hover:border-[#cfc493] transition-all hover:scale-110 active:scale-95 shadow-2xl cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
                </button>
              )}

              {/* Main Dialog Card */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl"
              >
                {/* Header Bar */}
                <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 bg-zinc-950/80 border-b border-zinc-800/80">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#cfc493]/15 border border-[#cfc493]/40 text-xs font-bold text-[#cfc493]">
                      {modalSeason.year} Season
                    </span>
                    <span className="text-xs text-zinc-400 font-medium">
                      {modalSeason.vehicleName}
                    </span>
                    {hasMultipleModalImages && (
                      <span className="text-xs text-zinc-500 font-mono">
                        ({modalState.imageIndex + 1} of {modalImageCount})
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setModalState(null)}
                    className="p-1.5 rounded-full bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                    aria-label="Close dialog"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Image Container */}
                <div className="relative aspect-[16/10] sm:aspect-video w-full bg-black">
                  <Image
                    key={modalImage.src}
                    src={modalImage.src}
                    alt={`Season ${modalSeason.year} Image`}
                    fill
                    sizes="(max-width: 1200px) 100vw, 1100px"
                    className="object-contain transition-opacity duration-300"
                    priority
                  />
                </div>

                {/* Footer with Caption & Dots */}
                <div className="p-4 sm:p-5 bg-zinc-950/90 border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {`Season ${modalSeason.year} Image`}
                  </div>

                  {/* Dot Indicators */}
                  {hasMultipleModalImages && (
                    <div className="flex items-center gap-1.5 self-center sm:self-auto shrink-0">
                      {modalSeason.images.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          onClick={() => {
                            setModalState({ seasonId: modalSeason.id, imageIndex: dotIdx })
                            setActiveImageIndexes((prev) => ({ ...prev, [modalSeason.id]: dotIdx }))
                          }}
                          aria-label={`Go to image ${dotIdx + 1}`}
                          className={`h-2 rounded-full transition-all cursor-pointer ${
                            dotIdx === modalState.imageIndex
                              ? "w-6 bg-[#cfc493]"
                              : "w-2 bg-zinc-700 hover:bg-zinc-500"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
}
