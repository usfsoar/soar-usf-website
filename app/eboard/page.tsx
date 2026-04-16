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
      link: "https://www.linkedin.com/in/emilyhoo/",
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
      name: "Drew Brickell",
      title: "Torito Chief Engineer",
      description: "Serving as the Torito Chief Engineer, Drew is currently a Sophomore in Mechanical Engineering.",
      year: "Sophomore",
      major: "Mechanical Engineering",
      dates: "August 2024 - Present",
      involvement:
        "I am currently a second year Mechanical Engineering student, with the goal of going into the field of aerospace after college.  I am a massive fan of all things rocketry, and have my Tripoli Level 1 and 2 high power rocketry certifications. I started out in SOAR as Aerostructures Lead for Torito, and now as Chief Engineer of Torito, it is my duty to oversee all design, build, and testing of all elements of a liquid propulsion system ranging from test stand to electronics.",
      link: "https://www.linkedin.com/in/drewbrickell/",
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
      name: "Valeria Melendez",
      title: "Chief of Operations",
      description: "Serving as the Chief of Operations, Valeria is currently a Sophomore in Political Science/Cybersecurity.",
      year: "Sophomore",
      major: "Political Science/Cybersecurity",
      dates: "August 2025 - Present",
      involvement: "Hi, I’m Valeria Melendez and I’m the Chief of Operations for the operations team at SOAR! Im currently a second year student studying political science and cybersecurity. I’ve been apart of soar for about a year now and it’s been a great experience helping out operationally and learning more about rockets.",
      link: "https://www.linkedin.com/in/valeria-melendez-680913362/"
    },
    {
      name: "Matthew Messing",
      title: "Chief of Finance",
      description: "Serving as the Chief of Finance, Matthew is currently a Senior in Mechanical Engineering.",
      year: "Senior",
      major: "Mechanical Engineering",
      dates: "January 2024 - Present",
      involvement: "I am a Mechanical Engineering student at the University of South Florida and an active member of the Society of Aeronautics and Rocketry (SOAR). Within SOAR, I have been heavily involved in the design, assembly, and testing of the rocket, while also supporting the team through budgeting, procurement, and organizational operations. My involvement combines hands-on engineering work with leadership and financial coordination to help advance SOAR’s technical projects.",
      link: "https://www.linkedin.com/in/matthew-messing-755930326/"
    },
    {
      name: "Conner Schilaty",
      title: "Secretary",
      description: "Serving as the Secretary, Conner is currently a Junior in Aerospace Engineering.",
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
          {/* Disclaimer */}
          <div className="mb-8 p-4 bg-[#006747]/20 border border-[#cfc493]/50 rounded-lg">
            <p className="text-sm md:text-base text-gray-300">
              <span className="font-semibold text-[#cfc493]">Tip:</span> Click on any card to view more details about each member!
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#006747] mb-4">EBOARD</h2>
            <EboardYearbook members={eboardMembers} />
          </div>

          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#cfc493] mb-6">LEADS</h2>
            <div className="flex flex-col gap-8">
              {/* IREC subsection - stacked and cards styled like EboardYearbook but slightly smaller */}
              <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-[#cfc493] mb-4">IREC</h3>
                {/* Use EboardYearbook with custom grid for 5 columns and smaller cards; clicking opens detail modal */}
                <EboardYearbook
                  members={[
                    {
                      name: "Cesar Briones",
                      title: "IREC Chief Engineer",
                      description: "Serving as the IREC Chief Engineer, Cesar is currently a Senior in Mechanical Engineering.",
                      year: "Senior",
                      major: "Mechanical Engineering",
                      dates: "August 2022 - Present",
                      involvement:
                        "I first joined SOAR in Fall 2022 and I have loved every single moment of it. I have been the Aerostructures Lead for the 2023 and 2024 season. I lead the design of the first airbrakes system, and pushed for more in house CNC metal manufacturing. Now I am the Chief Engineer for the IREC team. Additionally, I have been working on developing a bipropellant liquid engine.",
                      link: "https://www.linkedin.com/in/cesar-briones-aranda/",
                    },
                    {
                      name: "Pavan Moturi",
                      title: "IREC Program Manager",
                      description: "Serving as the IREC Program Manager, Pavan is currently a Junior in Physics/Chemistry with a minor in Mathematics.",
                      year: "Junior",
                      major: "Physics/Chemistry",
                      dates: "September 2023 - Present",
                      involvement: "Hello I am Pavan! I am a 3rd year majoring in BS Physics Dual Degree BA Chemistry and Minor in Math and Astrophysics Concentration, I was an NSL Payload EECS Junior Engineer two years ago. Then, I was the NSL USLI Telemetry Lead last year, and I am the current Program Manager for the IREC team this year!",
                      link: "https://www.linkedin.com/in/pavan-moturi/",
                    },
                    {
                      name: "Alan Guyster",
                      title: "Telemetry Lead",
                      description: "Serving as the Telemetry Lead, Alan is currently a Sophomore in Electrical Engineering/Physics.",
                      year: "Sophomore",
                      major: "Electrical Engineering/Physics",
                      dates: "September 2024 - Present",
                      involvement: "Hello everyone! I’m Alan and I’m a double major BS in both Electrical Engineering and Physics. This is my second year with SOAR and I am the telemetry lead for IREC. Feel free to talk to me anytime with any questions!",
                      link: "https://www.linkedin.com/in/alan-guyster-397112325/",
                    },
                    {
                      name: "Chiara DeAngelis",
                      title: "Payload EECS Lead",
                      description: "Serving as the Payload EECS Lead, Chiara is currently a Senior in Computer Science.",
                      year: "Senior",
                      major: "Computer Science",
                      dates: "January 2024 - Present",
                      involvement: "Hello guys I’m Chiara, I’m a senior computer science victim and the IREC Payload EECS lead this year!🌱My favorite cereal is fruit loops and I am looking forward to building something that works exactly like it’s supposed to this semester 😀 🚀.",
                      link: "https://www.linkedin.com/in/chiara-deangelis-4a8961249/",
                    },
                    {
                      name: "Christopher Fernandez",
                      title: "Airbrakes EECS Lead",
                      description: "Serving as the Airbrakes EECS Lead, Christopher is currently a Junior in Computer Science.",
                      year: "Junior",
                      major: "Computer Science",
                      dates: "June 2025 - Present",
                      involvement: "Hello peoples! I am Chris and I'm majoring in computer science. I am this year's IREC Airbrakes EECS lead. Fih🐟",
                      link: "https://www.linkedin.com/in/chris-fernandez/",
                    },
                    {
                      name: "Cooper Kenney",
                      title: "Payload Mech Lead",
                      description: "Serving as the Payload Mech Lead, Cooper is currently a Sophomore in Mechanical Engineering.",
                      year: "Sophomore",
                      major: "Mechanical Engineering",
                      dates: "August 2024 - Present",
                      involvement: "Hey guys I am Cooper and this is my second year with SOAR and I am the payload mechanical lead for IREC. Feel free to reach out with any questions.",
                      link: "https://www.linkedin.com/in/cooperkenney/",
                    },
                    {
                      name: "Duc Nguyen",
                      title: "Airbrakes Mech Lead",
                      description: "Serving as the Airbrakes Mech Lead, Duc is currently a Junior in Mechanical Engineering.",
                      year: "Junior",
                      major: "Mechanical Engineering",
                      dates: "Jan 2023 - Present",
                      involvement: "Duc's involvement description will go here.",
                      link: "https://www.linkedin.com/in/duc-nguyen-usf/",
                    },
                    {
                      name: "Khôi Minh Tôn Thất",
                      title: "Safety Lead",
                      description: "Serving as theSafety Lead, Khoi is currently a Sophomore in Physics.",
                      year: "Sophomore",
                      major: "Physics",
                      dates: "August 2024 - Present",
                      involvement: "Khôi's involvement description will go here.",
                      link: "https://www.linkedin.com/in/khoiton/",
                    },
                    {
                      name: "Ninh Vu Van",
                      title: "Aerostructures Lead",
                      description: "Serving as the Aerostructures Lead, Ninh is currently a Sophomore in Mechanical Engineering.",
                      year: "Sophomore",
                      major: "Mechanical Engineering",
                      dates: "August 2024 - Present",
                      involvement: "Ninh's involvement description will go here.",
                      link: "https://www.linkedin.com/in/ninh-vu-van-02a044236/",
                    },
                    {
                      name: "Sama Ahmed",
                      title: "Recovery and Flight Dynamics Lead",
                      description: "Serving as the Recovery and Flight Dynamics Lead, Sama is currently a Senior in Computer Science.",
                      year: "Senior",
                      major: "Computer Science",
                      dates: "August 2024 - Present",
                      involvement: "I’m currently a senior in Computer Science. I joined SOAR in Fall 2024 as a Junior Engineer on the Payload System, and I had the opportunity to travel to Huntsville with the team that year, which was a really fun experience. This year, I stepped into the role of Recovery & Flight Dynamics Lead, which has been a really rewarding and developmental experience for me.",
                      link: "https://www.linkedin.com/in/sama-ahmed-28354625b/",
                    },
                  ]}
                  gridClass="grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-5"
                  cardMaxWidth="15rem"
                  cardWidthClass="sm:w-44 md:w-48 lg:w-48"
                  imageHeightClass="w-full h-60 sm:h-44"
                  outerBorderColor="#cfc493"
                  innerBorderColor="#006747"
                />
              </div>

              <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-[#cfc493] mb-4">Torito</h3>
                {/* Torito leads rendered with EboardYearbook so cards open detail modal and match lead styling */}
                <EboardYearbook
                  members={[
                    // Drew Brickell - copy from eboardMembers
                    {
                      name: "Drew Brickell",
                      title: "Torito Chief Engineer",
                      description: "Serving as the Torito Chief Engineer, Drew is currently a Sophomore in Mechanical Engineering.",
                      year: "Sophomore",
                      major: "Mechanical Engineering",
                      dates: "August 2024 - Present",
                      involvement:
                        "I am currently a second year Mechanical Engineering student, with the goal of going into the field of aerospace after college.  I am a massive fan of all things rocketry, and have my Tripoli Level 1 and 2 high power rocketry certifications. I started out in SOAR as Aerostructures Lead for Torito, and now as Chief Engineer of Torito, it is my duty to oversee all design, build, and testing of all elements of a liquid propulsion system ranging from test stand to electronics.",
                      link: "https://www.linkedin.com/in/drewbrickell/",
                    },
                    {
                      name: "Krystal Walford",
                      title: "Torito Program Manager",
                      description: "Serving as the Torito Program Manager, Krystal is currently a Junior in Mechanical Engineering.",
                      year: "Junior",
                      major: "Mechanical Engineering",
                      dates: "August 2024 - Present",
                      involvement: "Krystal's involvement description will go here.",
                      link: "https://www.linkedin.com/in/krystalwalford/",
                    },
                    {
                      name: "Alessandro M",
                      title: "GSC Mech Lead",
                      description: "Serving as the GSC Mech Lead, Alessandro is currently in Mechanical Engineering.",
                      year: "Unknown",
                      major: "Mechanical Engineering",
                      dates: "Unknown",
                      involvement: "Alessandro's involvement description will go here.",
                      link: "",
                    },
                    {
                      name: "Drew Kralovanec",
                      title: "Tripoli Mentor",
                      description: "Serving as the Tripoli Mentor, Drew is currently a Senior in Mechanical Engineering.",
                      year: "Senior",
                      major: "Mechanical Engineering",
                      dates: "January 2023 - Present",
                      involvement: "Drew's involvement description will go here.",
                      link: "https://www.linkedin.com/in/drew-kralovanec-7a6153295/",
                    },
                    {
                      name: "Ethan Zylman",
                      title: "GSC EECS Lead",
                      description: "Serving as the GSC EECS Lead, Ethan is currently a Sophomore in Electrical Engineering.",
                      year: "Sophomore",
                      major: "Electrical Engineering",
                      dates: "August 2024 - Present",
                      involvement: "Hi guys, I am employed as an employee of the civil engineering department which is my employer. Employment. I am the student at one of the universities in the entire state of Florida, USF!! I would rather make a rocket that goes up really fast. My favorite cereal is honey bunches of oats, and I’m not an Aquarius.",
                      link: "https://www.linkedin.com/in/ethan-zylman/",
                    },
                    {
                      name: "Joshua Hachmeister",
                      title: "Test Stand Lead",
                      description: "Serving as the Test Stand Lead, Joshua is currently a Sophomore in Mechanical Engineering.",
                      year: "Sophomore",
                      major: "Mechanical Engineering",
                      dates: "August 2024 - Present",
                      involvement: "Joshua's involvement description will go here.",
                      link: "https://www.linkedin.com/in/joshua-hachmeister/",
                    },
                    {
                      name: "Marwan Abdelwahab",
                      title: "Torito DAQ Lead",
                      description: "Serving as the Torito DAQ Lead, Marwan is currently a Senior in Computer Engineering.",
                      year: "Senior",
                      major: "Computer Engineering",
                      dates: "August 2024 - Present",
                      involvement: "I am a senior studying Computer Engineering at the University of South Florida. I serve as the Torito Data Acquisition (DAQ) Lead for SOAR, where I develop systems used to collect and transmit data during propulsion testing. My work focuses on integrating sensors, embedded systems, and telemetry to monitor engine performance and record test data for analysis. I joined SOAR in 2024 and have since been involved in building and improving the electronics infrastructure for the Torito propulsion subsystem.",
                      link: "https://www.linkedin.com/in/marwan-abdelwahab/",
                    },
                    {
                      name: "Rylie Birkey",
                      title: "Fire Suppression Lead",
                      description: "Serving as the Fire Suppression Lead, Rylie is currently a Junior in Mechanical Engineering.",
                      year: "Junior",
                      major: "Mechanical Engineering",
                      dates: "June 2025 - Present",
                      involvement: "Rylie's involvement description will go here.",
                      link: "https://www.linkedin.com/in/ryliebirkey/",
                    },
                  ]}
                  gridClass="grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4"
                  cardMaxWidth="16rem"
                  cardWidthClass="sm:w-48 md:w-52 lg:w-52"
                  imageHeightClass="w-full h-64 sm:h-48"
                  outerBorderColor="#cfc493"
                  innerBorderColor="#006747"
                />
              </div>

              <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-[#cfc493] mb-2">Marketing</h3>
                <EboardYearbook
                  members={[
                    // Sage Bundhund - copy from eboardMembers
                    {
                      name: "Sage Bundhund",
                      title: "Chief of Marketing",
                      description: "Serving as the Chief of Marketing, Sage is a Sophomore in Mechanical Engineering.",
                      year: "Sophomore",
                      major: "Mechanical Engineering",
                      dates: "August 2024 - Present",
                      involvement:
                        "I am a sophomore Mechanical Engineering student, with an Aerospace Engineering minor, as I hope to pursue a career in Aerospace after graduation. I joined SOAR in Fall of 2024, during my first semester! As Chief of Marketing, I am responsible for promoting the club and gaining new student interest, as well as running our great marketing team. I love reading books, collecting records, and learning about space exploration.",
                      link: "mailto:sbundhund@usf.edu",
                    },
                    {
                      name: "Hunter Hawkins",
                      title: "Marketing Officer",
                      description: "Serving as the Marketing Officer, Hunter is currently a Sophomore in Computer Science.",
                      year: "Sophomore",
                      major: "Computer Science",
                      dates: "January 2025-Present",
                      involvement: "B.S. in Computer Science, 1 year involved in SOAR, as the Marketing Director I've had the honor of assisting the Chief of Marketing for two semesters and providing physical marketing materials like custom decals and liveries for the club!",
                      link: "https://www.linkedin.com/in/hhawki/",
                    },
                    {
                      name: "Conner Schilaty",
                      title: "Secretary",
                      description: "Serving as the Secretary, Conner is currently a Junior in Aerospace Engineering.",
                      year: "Junior",
                      major: "Aerospace Engineering",
                      dates: "August 2025 - Present",
                      involvement:
                        "I'm a third-year Aerospace Engineering student, and joined SOAR last fall. As Secretary, it's my job to keep notes, keep tabs on what we need to get done, manage our calendars, monitor our BullsConnect page, and maintain the general organization of our files.",
                      link: "https://www.linkedin.com/in/conner-schilaty-474452337/"
                    },
                    {
                      name: "Lauren Carpenter",
                      title: "Public Relations Lead",
                      description: "Serving as the Public Relations Lead, Lauren is currently a Sophomore in Mechanical Engineering.",
                      year: "Sophomore",
                      major: "Mechanical Engineering",
                      dates: "August 2025 - Present",
                      involvement: "I’m a sophomore Mechanical Engineering student with an Aerospace Engineering minor! I hope to be a test pilot one day, so I’m working on my student pilots license. I joined SOAR Last semester, and I’m excited to help share what SOAR does and the accomplishments the club’s made!",
                      link: "https://www.linkedin.com/in/lauren-carpenter-47b443353/",
                    },
                    {
                      name: "Angel Hernandez",
                      title: "Multimedia Chair",
                      description: "Serving as a Multimedia Chair, Angel is currently a Sophomore in Mechanical Engineering.",
                      year: "Sophomore",
                      major: "Mechanical Engineering",
                      dates: "August 2025 - Present",
                      involvement: "Angel's involvement description will go here.",
                      link: "https://www.linkedin.com/in/angelhernandez2005/",
                    },
                    {
                      name: "Janna Abdelghani",
                      title: "Multimedia Chair",
                      description: "Serving as a Multimedia Chair, Janna is currently a Sophomore in Mechanical Engineering.",
                      year: "Sophomore",
                      major: "Mechanical Engineering",
                      dates: "August 2024 - Present",
                      involvement: "Janna's involvement description will go here.",
                      link: "https://www.linkedin.com/in/jannaabdelghani/",
                    },
                    {
                      name: "Daniel Misherky",
                      title: "Web Developer",
                      description: "Serving as the Web Developer, Daniel is currently a Sophomore in Computer Science.",
                      year: "Sophomore",
                      major: "Computer Science",
                      dates: "October 2025 - Present",
                      involvement: "I'm a sophomore majoring in Computer Science, and I joined SOAR in mid-Fall 2025 to create this very website. As the Web Developer, I am responsible for maintaining and updating the SOAR website to meet our needs. I enjoy playing basketball, working out, and of course coding 😂",
                      link: "https://www.linkedin.com/in/dmish13/",
                    },
                    {
                      name: "Stepan Jankowski",
                      title: "Historian",
                      description: "Serving as the Historian, Stepan is currently a Junior in Mechanical Engineering.",
                      year: "Junior",
                      major: "Mechanical Engineering",
                      dates: "August 2025 - Present",
                      involvement: "Stepan's involvement description will go here.",
                      link: "https://www.linkedin.com/in/stepanjankowski/",
                    },
                  ]}
                  gridClass="grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4"
                  cardMaxWidth="16rem"
                  cardWidthClass="sm:w-48 md:w-52 lg:w-52"
                  imageHeightClass="w-full h-64 sm:h-48"
                  outerBorderColor="#cfc493"
                  innerBorderColor="#006747"
                />
              </div>
              <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-[#cfc493] mb-2">Operations</h3>
                <EboardYearbook
                  members={[
                    // Sage Bundhund - copy from eboardMembers
                    {
                      name: "Valeria Melendez",
                      title: "Chief of Operations",
                      description: "Serving as the Chief of Operations, Valeria is currently a Sophomore in Political Science/Cybersecurity.",
                      year: "Sophomore",
                      major: "Political Science/Cybersecurity",
                      dates: "August 2025 - Present",
                      involvement: "Hi, I’m Valeria Melendez and I’m the Chief of Operations for the operations team at SOAR! Im currently a second year student studying political science and cybersecurity. I’ve been apart of soar for about a year now and it’s been a great experience helping out operationally and learning more about rockets.",
                      link: "https://www.linkedin.com/in/valeria-melendez-680913362/"
                    },
                    {
                      name: "Zachary Tephford",
                      title: "Logistics Chair",
                      description: "Serving as the Logistics Chair, Zachary is currently a Sophomore in Mechanical Engineering.",
                      year: "Sophomore",
                      major: "Mechanical Engineering",
                      dates: "August 2024 - Present",
                      involvement: "I am a sophomore in Mechanical Engineering, and I joined SOAR in Fall 2024 but wasn't heavily involved until Fall 2025. My involvement has landed me as a Junior Engineer for our IREC Aerostructures Subsystem, along with the Logistics Chair for SOAR’s Operations Team. SOAR has benefited me in many ways, from making new friends to furthering my knowledge and experience in rockets & aerospace.",
                      link: "https://www.linkedin.com/in/zacharytephford/",
                    },
                  ]}
                  gridClass="grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center"
                  cardMaxWidth="20rem"
                  cardWidthClass="sm:w-56 md:w-72 lg:w-72"
                  imageHeightClass="w-full h-80 sm:h-64"
                  outerBorderColor="#cfc493"
                  innerBorderColor="#006747"
                />
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
