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
      name: "Cooper Kenney",
      title: "President",
      description: "Serving as the President, Cooper is currently a Junior in Mechanical Engineering.",
      year: "Junior",
      major: "Mechanical Engineering",
      dates: "August 2024 - Present",
      involvement: "Hello everyone, my name is Cooper and I am a current third-year mechanical engineering student at the University of South Florida. I joined SOAR my first semester at USF and have worked my way up the ranks to now being the incoming president of the club. Please feel free to reach out with any questions you may have relating to high power rocketry!",
      link: "https://www.linkedin.com/in/cooperkenney/",
    },
    {
      name: "Conner Schilaty",
      title: "Vice President",
      description: "Serving as the Vice President, Conner is currently a Junior in Aerospace Engineering.",
      year: "Junior",
      major: "Aerospace Engineering",
      dates: "August 2025 - Present",
      involvement:
        "I'm a third-year Aerospace Engineering student, and joined SOAR last fall. As Secretary, it's my job to keep notes, keep tabs on what we need to get done, manage our calendars, monitor our BullsConnect page, and maintain the general organization of our files.",
      link: "https://www.linkedin.com/in/conner-schilaty-474452337/"
    },
    {
      name: "Ethan Zylman",
      title: "IREC Chief Engineer",
      description: "Serving as the IREC Chief Engineer, Ethan is currently a Junior in Electrical Engineering.",
      year: "Junior",
      major: "Electrical Engineering",
      dates: "August 2024 - Present",
      involvement: "Hi guys, I am employed as an employee of the civil engineering department which is my employer. Employment. I am the student at one of the universities in the entire state of Florida, USF!! I would rather make a rocket that goes up really fast. My favorite cereal is honey bunches of oats, and I’m not an Aquarius.",
      link: "https://www.linkedin.com/in/ethan-zylman/"
    },
    {
      name: "Joshua Hachmeister",
      title: "BEL Chief Engineer",
      description: "Serving as the BEL Chief Engineer, Joshua is currently a Sophomore in Mechanical Engineering.",
      year: "Senior",
      major: "Mechanical Engineering",
      dates: "August 2024 - Present",
      involvement: "Joshua's involvement description will go here.",
      link: "https://www.linkedin.com/in/joshua-hachmeister/",
    },
    {
      name: "Heloisa Medeiros Kazakevic",
      title: "Chief of Marketing",
      description: "Serving as the Chief of Marketing, Heloisa is currently a Sophomore in Econometrics and Business Management.",
      year: "Sophomore",
      major: "Econometrics and Business Management",
      dates: "August 2026 - Present",
      involvement: "Hi! I’m Heloisa, a sophomore from Brazil majoring in Business Management and Econometrics. I’m SOAR’s Chief of Marketing, and outside of aerospace, I love playing footvolley!",
      link: "https://www.linkedin.com/in/heloisa-medeiros-87350b303/"
    },
    {
      name: "Valeria Melendez",
      title: "Chief of Operations",
      description: "Serving as the Chief of Operations, Valeria is currently a Senior in Political Science/Cybersecurity.",
      year: "Senior",
      major: "Political Science/Cybersecurity",
      dates: "August 2025 - Present",
      involvement: "Hi, I’m Valeria Melendez and I’m the Chief of Operations for the operations team at SOAR! Im currently a senior student studying political science and cybersecurity. I’ve been apart of soar for about a year now and it’s been a great experience helping out operationally and learning more about rockets.",
      link: "https://www.linkedin.com/in/valeria-melendez-680913362/"
    },
    {
      name: "Ella Ferguson",
      title: "Chief of Finance",
      description: "Serving as the Chief of Finance, Ella is currently a Junior in Accounting & Analytics.",
      year: "Junior",
      major: "Accounting & Analytics",
      dates: "April 2026 - Present",
      involvement: "Ella's involvement description will go here.",
      link: "https://www.linkedin.com/in/ella-ferguson-/"
    },
    {
      name: "Zachary Tephford",
      title: "Chief of Safety",
      description: "Serving as the Chief of Safety, Zachary is currently a Junior in Mechanical Engineering.",
      year: "Junior",
      major: "Mechanical Engineering",
      dates: "August 2024 - Present",
      involvement: "I am a sophomore in Mechanical Engineering, and I joined SOAR in Fall 2024 but wasn't heavily involved until Fall 2025. My involvement has landed me as a Junior Engineer for our IREC Aerostructures Subsystem, along with the Logistics Chair for SOAR’s Operations Team. SOAR has benefited me in many ways, from making new friends to furthering my knowledge and experience in rockets & aerospace.",
      link: "https://www.linkedin.com/in/zacharytephford/",
    },
    {
      name: "Logan Lavoy",
      title: "Secretary",
      description: "Serving as the Secretary, Logan is currently a Sophomore in Aerospace Engineering.",
      year: "Sophomore",
      major: "Aerospace Engineering",
      dates: "August 2025 - Present",
      involvement: "Logan's involvement description will go here.",
      link: "https://www.linkedin.com/in/loganjlavoy/",
    },

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
            <EboardYearbook
              members={eboardMembers}
              gridClass="grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
              containerClass="max-w-5xl mx-auto"
              cardMaxWidth="20rem"
              cardWidthClass="sm:w-56 md:w-60 lg:w-64"
              imageHeightClass="w-full h-72 sm:h-56 md:h-60"
            />
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
                      name: "Ethan Zylman",
                      title: "IREC Chief Engineer",
                      description: "Serving as the IREC Chief Engineer, Ethan is currently a Junior in Electrical Engineering.",
                      year: "Junior",
                      major: "Electrical Engineering",
                      dates: "August 2024 - Present",
                      involvement: "Hi guys, I am employed as an employee of the civil engineering department which is my employer. Employment. I am the student at one of the universities in the entire state of Florida, USF!! I would rather make a rocket that goes up really fast. My favorite cereal is honey bunches of oats, and I’m not an Aquarius.",
                      link: "https://www.linkedin.com/in/ethan-zylman/"
                    },
                    {
                      name: "Pavan Moturi",
                      title: "IREC Program Manager",
                      description: "Serving as the IREC Program Manager, Pavan is currently a Senior in Physics/Chemistry with a minor in Mathematics.",
                      year: "Senior",
                      major: "Physics/Chemistry",
                      dates: "September 2023 - Present",
                      involvement: "Hello I am Pavan! I am a 4th year majoring in BS Physics Dual Degree BA Chemistry and Minor in Math and Astrophysics Concentration, I was an NSL Payload EECS Junior Engineer two years ago. Then, I was the NSL USLI Telemetry Lead last year, and I am the current Program Manager for the IREC team this year!",
                      link: "https://www.linkedin.com/in/pavan-moturi/",
                    },
                    {
                      name: "Alan Guyster",
                      title: "SOAR Avionics Lead",
                      description: "Serving as the Avionics Lead, Alan is currently a Sophomore in Electrical Engineering/Physics.",
                      year: "Sophomore",
                      major: "Electrical Engineering & Physics",
                      dates: "September 2024 - Present",
                      involvement: "Hello everyone! I’m Alan and I’m a double major BS in both Electrical Engineering and Physics. This is my third year with SOAR and I am the telemetry lead for IREC. Feel free to talk to me anytime with any questions!",
                      link: "https://www.linkedin.com/in/alan-guyster-397112325/",
                    },
                    {
                      name: "Matthew Raulerson",
                      title: "IREC Avionics Lead",
                      description: "Serving as the IREC Avionics Lead, Matthew is currently a Senior in Electrical Engineering/.",
                      year: "Senior",
                      major: "Electrical Engineering",
                      dates: "September 2026 - Present",
                      involvement: "Matthew's involvement description will go here.",
                      link: "https://www.linkedin.com/in/matthew-raulerson-a10753343/",
                    },
                    {
                      name: "Sage Bundhund",
                      title: "IREC Aerostructures Lead",
                      description: "Serving as the IREC Aerostructures Lead, Sage is a Sophomore in Mechanical Engineering.",
                      year: "Junior",
                      major: "Mechanical Engineering",
                      dates: "August 2024 - Present",
                      involvement:
                        "I am a junior Mechanical Engineering student, with an Aerospace Engineering minor, as I hope to pursue a career in Aerospace after graduation. I joined SOAR in Fall of 2024, during my first semester! As Chief of Marketing, I am responsible for promoting the club and gaining new student interest, as well as running our great marketing team. I love reading books, collecting records, and learning about space exploration.",
                      link: "https://www.linkedin.com/in/sage-b-8a3717333/",
                    },
                    {
                      name: "Stepan Jankowski",
                      title: "Controls Mechanical Lead",
                      description: "Serving as the Controls Mechanical Lead, Stepan is currently a Junior in Mechanical Engineering.",
                      year: "Junior",
                      major: "Mechanical Engineering",
                      dates: "August 2025 - Present",
                      involvement: "Stepan's involvement description will go here.",
                      link: "https://www.linkedin.com/in/stepanjankowski/",
                    },
                    {
                      name: "Logan Burchfield",
                      title: "Payload Mechanical Lead",
                      description: "Serving as the Payload Mechanical Lead, Logan is currently a Junior in Mechanical Engineering.",
                      year: "Junior",
                      major: "Mechanical Engineering",
                      dates: "September 2023 - Present",
                      involvement: "Logan's involvement description will go here.",
                      link: "https://www.linkedin.com/in/logantburchfield/",
                    },
                    {
                      name: "Kha Nguyen",
                      title: "Payload EECS Lead",
                      description: "Serving as the Payload EECS Lead, Kha is currently a Senior in Computer Engineering.",
                      year: "Senior",
                      major: "Computer Engineering",
                      dates: "August 2025 - Present",
                      involvement: "Kha's involvement description will go here.",
                      link: "https://www.linkedin.com/in/nkha/",
                    },
                    {
                      name: "Matthew West",
                      title: "Controls EECS Lead",
                      description: "Serving as the Controls EECS Lead, Matthew is currently a Junior in Mathematics and Computer Science.",
                      year: "Junior",
                      major: "Mathematics and Computer Science",
                      dates: "August 2025 - Present",
                      involvement: "Matthew's involvement description will go here.",
                      link: "https://www.linkedin.com/in/matthew-jwest/",
                    },
                    {
                      name: "Jonathan Koutin",
                      title: "IREC Safety Lead",
                      description: "Serving as the Safety Lead, Jonathan is currently a Junior in Industrial Engineering.",
                      year: "Junior",
                      major: "Industrial Engineering",
                      dates: "August 2025 - Present",
                      involvement: "Jonathan's involvement description will go here.",
                      link: "https://www.linkedin.com/in/jonathan-koutin-9a94a6395/",
                    },
                    {
                      name: "Amanda (Mandi) Chesney",
                      title: "Project Coordinator",
                      description: "Serving as the Project Coordinator, Amanda is currently a Sophomore in Aerospace Engineering.",
                      year: "Sophomore",
                      major: "Aerospace Engineering",
                      dates: "September 2025 - Present",
                      involvement: "Amanda's involvement description will go here.",
                      link: "https://www.linkedin.com/in/amanda-chesney/",
                    },
                    
                  ]}
                  containerClass="max-w-6xl mx-auto"
                  cardMaxWidth="15rem"
                  cardWidthClass="sm:w-44 md:w-48 lg:w-48"
                  imageHeightClass="w-full h-60 sm:h-44"
                  outerBorderColor="#cfc493"
                  innerBorderColor="#006747"
                  centerLastRow
                />
              </div>

              <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-[#cfc493] mb-4">BEL</h3>
                <EboardYearbook
                  members={[
                    {
                      name: "Joshua Hachmeister",
                      title: "BEL Chief Engineer",
                      description: "Serving as the BEL Chief Engineer, Joshua is currently a Sophomore in Mechanical Engineering.",
                      year: "Senior",
                      major: "Mechanical Engineering",
                      dates: "August 2024 - Present",
                      involvement: "Joshua's involvement description will go here.",
                      link: "https://www.linkedin.com/in/joshua-hachmeister/",
                    },
                    {
                      name: "Alston Wang",
                      title: "BEL Program Manager",
                      description: "Serving as the BEL Program Manager, Alston is currently a Senior in Mechanical Engineering.",
                      year: "Senior",
                      major: "Mechanical Engineering",
                      dates: "July 2026 - Present",
                      involvement: "Alston's involvement description will go here.",
                      link: "https://www.linkedin.com/in/alston-wang-50963a277/",
                    },
                    {
                      name: "Dereck Santiago",
                      title: "GS EECS Lead",
                      description: "Serving as the GS EECS Lead, Dereck is currently a Senior in Computer Engineering.",
                      year: "Senior",
                      major: "Computer Engineering",
                      dates: "September 2025 - Present",
                      involvement: "Dereck's involvement description will go here.",
                      link: "https://www.linkedin.com/in/derecksantiago/",
                    },
                    {
                      name: "Om (Hari) Patel",
                      title: "Propulsion Lead",
                      description: "Serving as the Propulsion Lead, Om (Hari) is currently a Sophomore in Mechanical Engineering.",
                      year: "Sophomore",
                      major: "Mechanical Engineering",
                      dates: "September 2025 - Present",
                      involvement: "Om (Hari) Patel's involvement description will go here.",
                      link: "https://www.linkedin.com/in/-hari-patel-/",
                    },
                    {
                      name: "Harry (Charalampos) Georgiadis",
                      title: "Ground Stations Mechanical Lead",
                      description: "Serving as the Ground Stations Mechanical Lead, Harry is currently a Junior in Mechanical and Aerospace Engineering.",
                      year: "Junior",
                      major: "Mechanical and Aerospace Engineering",
                      dates: "August 2024 - Present",
                      involvement: "Harry's involvement description will go here.",
                      link: "https://www.linkedin.com/in/charalampos-georgiadis-463473275/",
                    },
                    {
                      name: "Ethan Toro",
                      title: "BEL Safety Lead",
                      description: "Serving as the BEL Safety Lead, Ethan is currently a Sophomore in Aerospace Engineering.",
                      year: "Sophomore",
                      major: "Aerospace Engineering",
                      dates: "September 2026 - Present",
                      involvement: "Ethan's involvement description will go here.",
                      link: "https://www.linkedin.com/in/ethantoro/",
                    },
                    {
                      name: "Duc Nguyen",
                      title: "BEL Aerostructures Lead",
                      description: "Serving as the BEL Aerostructures Lead, Duc is currently a Senior in Mechanical Engineering.",
                      year: "Senior",
                      major: "Mechanical Engineering",
                      dates: "January 2024 - Present",
                      involvement: "Hi I'm Duc, a senior in Mechanical Engineering. I joined SOAR in second semester of my freshman year previously on IREC, and now I am the Aerostructures Lead for BEL. I enjoy working on rockets and learning about aerospace engineering, and I also enjoy playing basketball and video games.",
                      link: "https://www.linkedin.com/in/duc-nguyen-usf/",
                    }
                  ]}
                  cardMaxWidth="16rem"
                  cardWidthClass="sm:w-48 md:w-60 lg:w-60"
                  imageHeightClass="w-full h-64 sm:h-48"
                  outerBorderColor="#cfc493"
                  innerBorderColor="#006747"
                  centerLastRow
                />
              </div>

              <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-[#cfc493] mb-2">Marketing</h3>
                <EboardYearbook
                  members={[
                    {
                      name: "Heloisa Medeiros Kazakevic",
                      title: "Chief of Marketing",
                      description: "Serving as the Chief of Marketing, Heloisa is currently a Sophomore in Econometrics and Business Management.",
                      year: "Sophomore",
                      major: "Econometrics and Business Management",
                      dates: "August 2026 - Present",
                      involvement: "Hi! I’m Heloisa, a sophomore from Brazil majoring in Business Management and Econometrics. I’m SOAR’s Chief of Marketing, and outside of aerospace, I love playing footvolley!",
                      link: "https://www.linkedin.com/in/heloisa-medeiros-87350b303/"
                    },
                    {
                      name: "Daniel Misherky",
                      title: "Web Developer",
                      description: "Serving as the Web Developer, Daniel is currently a Senior in Computer Science.",
                      year: "Senior",
                      major: "Computer Science",
                      dates: "October 2025 - Present",
                      involvement: "I'm a senior majoring in Computer Science, and I joined SOAR in mid-Fall 2025 to create this very website. As the Web Developer, I am responsible for maintaining and updating the SOAR website to meet our needs. I enjoy playing basketball, working out, and of course coding 😂",
                      link: "https://www.linkedin.com/in/dmish13/",
                    },
                    {
                      name: "Connor Clay Johnson",
                      title: "Marketing Officer",
                      description: "Serving as the Marketing Officer, Connor is currently a Senior in Marketing.",
                      year: "Senior",
                      major: "Marketing",
                      dates: "August 2026 - Present",
                      involvement: "Connor's involvement description will go here.",
                      link: "https://www.linkedin.com/in/connor-johnson-b12529261/",
                    },
                    {
                      name: "Brandon Remedios",
                      title: "Historian",
                      description: "Serving as the Historian, Brandon is currently a Senior in Mechanical Engineering.",
                      year: "Senior",
                      major: "Mechanical Engineering",
                      dates: "August 2026 - Present",
                      involvement: "Brandon's involvement description will go here.",
                      link: "https://www.linkedin.com/in/brandon-remedios-0a8331289/",
                    }

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
                    {
                      name: "Valeria Melendez",
                      title: "Chief of Operations",
                      description: "Serving as the Chief of Operations, Valeria is currently a Senior in Political Science/Cybersecurity.",
                      year: "Senior",
                      major: "Political Science/Cybersecurity",
                      dates: "August 2025 - Present",
                      involvement: "Hi, I’m Valeria Melendez and I’m the Chief of Operations for the operations team at SOAR! Im currently a senior student studying political science and cybersecurity. I’ve been apart of soar for about a year now and it’s been a great experience helping out operationally and learning more about rockets.",
                      link: "https://www.linkedin.com/in/valeria-melendez-680913362/"
                    },
                    {
                      name: "Jacob Jenkins",
                      title: "Fundraising Lead",
                      description: "Serving as the Fundraising Lead, Jacob is currently a Freshman in Industrial Engineering.",
                      year: "Freshman",
                      major: "Industrial Engineering",
                      dates: "August 2026 - Present",
                      involvement: "Jacob's involvement description will go here.",
                      link: "https://www.linkedin.com/in/jacobjenkins08/",
                    },
                    {
                      name: "Hari Vatsa Harsha Sondur",
                      title: "Fundraising Lead",
                      description: "Serving as the Fundraising Lead, Hari is currently a Freshman in Aerospace Engineering.",
                      year: "Freshman",
                      major: "Aerospace Engineering",
                      dates: "August 2026 - Present",
                      involvement: "Hari's involvement description will go here.",
                      link: "mailto:hharshasondur@usf.edu",
                    },
                    {
                      name: "Yeldana Zhamanova",
                      title: "Professional Development Lead",
                      description: "Serving as the Professional Development Lead, Yeldana is currently a Sophomore in Mechanical Engineering.",
                      year: "Sophomore",
                      major: "Mechanical Engineering",
                      dates: "August 2026 - Present",
                      involvement: "Yeldana's involvement description will go here.",
                      link: "https://www.linkedin.com/in/yeldana-zhamanova-a52971389/",
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
