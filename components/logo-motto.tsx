import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function LogoMotto() {
  return (
    <section className="relative bg-zinc-950 border-b border-white/10">
      {/* Hero Image Extension */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img
          src="/modern-university-engineering-building-with-palm-t.jpg"
          alt="Campus Building"
          className="w-full h-full object-cover brightness-50"
        />
        {/* Blue border overlay */}
        <div className="absolute inset-0 border-4 border-blue-500" />
      </div>

      {/* Logo and Text Section */}
      <div className="bg-zinc-950 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            {/* Logo */}
            <div className="relative flex-shrink-0">
              <Image src="/White Logo.svg" alt="SOAR Logo" width={128} height={128} className="w-24 h-24 md:w-32 md:h-32" />
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-24 bg-white/30" />

            {/* Text */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">
                USF SOCIETY OF AERONAUTICS AND ROCKETRY
              </h2>
              <p className="text-base md:text-lg text-white mt-2 uppercase tracking-wide">THE SKY IS NOT THE LIMIT.</p>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center gap-4 mt-8">
            <Link href="/#sponsors">
              <Button
                size="lg"
                style={{ backgroundColor: "#D0C495", color: "#0f0f0f" }}
                className="rounded-full px-8 py-6 text-base font-medium hover:opacity-90"
              >
                Support Us!
              </Button>
            </Link>
            <Link href="/#contact">
              <Button
                size="lg"
                style={{ backgroundColor: "#D0C495", color: "#0f0f0f" }}
                className="rounded-full px-8 py-6 text-base font-medium hover:opacity-90"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
