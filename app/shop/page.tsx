"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <Navbar />
      </div>

      <PageHeader title="THE SHOP" subtitle="Check back soon for exclusive SOAR merchandise." />

      <section className="container mx-auto px-6 py-20">
        <div className="text-center">

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-12 max-w-2xl mx-auto">
            <div className="text-6xl mb-6">🛒</div>
            <h3 className="text-2xl font-bold mb-3">COMING SOON</h3>
            <p className="text-zinc-400">
              We're setting up our merchandise shop with exclusive SOAR apparel and gear.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
