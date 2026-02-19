"use client"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id")
  const [hoverShop, setHoverShop] = useState(false)
  const [hoverHome, setHoverHome] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader title="ORDER CONFIRMED" subtitle="Thank you for supporting SOAR USF!" />

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="mb-16">
            <CheckCircle className="w-16 md:w-24 h-16 md:h-24 text-[#006747] mx-auto mb-4 md:mb-6" />
            <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: "#006747" }}>
              Payment Successful!
            </h1>
            <p className="text-base md:text-xl mb-4 md:mb-6" style={{ color: "#ffffff" }}>
              Thank you for your purchase and support of SOAR USF!
            </p>
            {sessionId && (
              <p className="text-xs md:text-sm mb-8" style={{ color: "#ffffff" }}>
                Order ID: {sessionId}
              </p>
            )}
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#CFC493" }}>What's Next?</h2>
            <ul className="text-left space-y-3">
              <li className="flex items-start">
                <span className="mr-2" style={{ color: "#CFC493" }}>✓</span>
                <span style={{ color: "#ffffff" }}>You will receive a confirmation email shortly</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: "#CFC493" }}>✓</span>
                <span style={{ color: "#ffffff" }}>For merchandise orders, we'll contact you about pickup/delivery</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: "#CFC493" }}>✓</span>
                <span style={{ color: "#ffffff" }}>Donations will directly support SOAR USF programs and initiatives</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              onMouseEnter={() => setHoverShop(true)}
              onMouseLeave={() => setHoverShop(false)}
              className="text-black px-8 py-3 rounded-lg font-semibold transition"
              style={{ backgroundColor: hoverShop ? "#d9c68a" : "#cfc493" }}
            >
              Continue Shopping
            </Link>
            <Link
              href="/"
              onMouseEnter={() => setHoverHome(true)}
              onMouseLeave={() => setHoverHome(false)}
              className="px-8 py-3 rounded-lg font-semibold transition"
              style={{ border: "2px solid #CFC493", color: hoverHome ? "#d9c68a" : "#CFC493" }}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
