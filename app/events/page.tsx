import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <Navbar />
      </div>

      {/* Events Header */}
      <section className="container mx-auto px-6 pt-32 pb-12">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-zinc-900 rounded-full px-6 py-3 mb-6">
            <svg className="w-5 h-5 text-[#edebd1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-medium tracking-wide text-[#cfc493]">SOAR Calendar</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">EVENTS AND MEETINGS</h2>
          <p className="text-zinc-400 text-lg">I know what WE'RE doing today, tomorrow, in fact, for the whole year.</p>
        </div>
      </section>

      {/* Google Calendar Section */}
      <section className="container mx-auto px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden">
            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&bgcolor=%23000000&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&mode=MONTH"
              className="w-full h-[600px]"
              frameBorder="0"
              scrolling="no"
            />
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section id="blogs" className="py-24 px-6 bg-background scroll-mt-20">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-3 bg-zinc-900 rounded-full px-6 py-3 mb-4">
            <Image src="/Color Logo.svg" alt="SOAR Logo" width={20} height={20} className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wide" style={{ color: "#cfc493" }}>Our Blogs</span>
          </div>

          <h2 className="text-5xl font-bold mb-4 text-balance">SOAR UPDATES</h2>
          <p className="text-muted-foreground mb-12">Be updated on all things SOAR.</p>

          <Card className="bg-[#1a3a52] border-none p-12 mb-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Collection List</h3>
              <p className="text-sm text-muted-foreground">No items added Collection</p>
            </div>
          </Card>

        </div>
      </section>

      <Footer />
    </div>
  )
}
