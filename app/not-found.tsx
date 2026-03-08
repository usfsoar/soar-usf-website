"use client"

import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <Navbar />
      </div>

      <PageHeader title="404 Not Found" subtitle="Page not found" />

      <section className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg md:text-2xl text-gray-300 mb-8">
            Umm..., I think you might've put the wrong GPS coordinates
          </p>

          <Link href="/">
            <Button className="px-8 py-6 rounded-full bg-[#cfc493] cursor-pointer text-lg">Return to Home</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
