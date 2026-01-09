"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <Navbar />
      </div>

      {/* Blogs Section with Coming Soon Overlay */}
      <section className="py-24 px-6 bg-background pt-32">
        <div className="container mx-auto max-w-6xl relative">
          {/* Coming Soon Overlay - At the top */}
          <div className="flex items-center justify-center mb-12">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-zinc-900 rounded-full px-6 py-3 mb-6">
                <Image src="/Color Logo.svg" alt="SOAR Logo" width={20} height={20} className="w-5 h-5" />
                <span className="text-sm font-medium tracking-wide text-[#cfc493]">Blogs</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-4 text-white">COMING SOON</h1>
              <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
                We're working hard to bring you insightful content. Stay tuned!
              </p>
            </div>
          </div>

          {/* Blurred Content */}
          <div className="filter blur-sm pointer-events-none select-none">
            {/* Hero Section */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 bg-zinc-900 rounded-full px-6 py-3 mb-6">
                <Image src="/Color Logo.svg" alt="SOAR Logo" width={20} height={20} className="w-5 h-5" />
                <span className="text-sm font-medium tracking-wide text-[#cfc493]">Our Blogs</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">SOAR NEWS AND UPDATES</h2>
              <p className="text-zinc-400 text-lg mb-8 max-w-3xl mx-auto">
                Welcome to SOAR News, where we share our updates, ideas, and trends to inspire and empower your engineering journey.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <div className="relative flex items-center">
                  <svg className="absolute left-4 w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search Topic"
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-full pl-12 pr-12 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#cfc493]/50"
                  />
                  <button className="absolute right-2 bg-zinc-800 hover:bg-zinc-700 rounded-full p-2 transition-colors group">
                    <svg className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Latest Blogs Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-zinc-900 rounded-full px-6 py-3 mb-6">
                <Image src="/Color Logo.svg" alt="SOAR Logo" width={20} height={20} className="w-5 h-5" />
                <span className="text-sm font-medium tracking-wide text-[#cfc493]">Latest Blogs</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">JUMP INTO OUR ARTICLES</h2>
              <p className="text-zinc-400 text-lg mb-8">
                Dive into our diverse range of blog categories covering everything from NSL to event recaps.
              </p>
              <button className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-3 rounded-full transition-colors">
                View More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Categories Section */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 bg-zinc-900 rounded-full px-6 py-3 mb-6">
                  <span className="text-lg">📊</span>
                  <span className="text-sm font-medium tracking-wide text-[#cfc493]">Categories</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">EXPLORE OUR DIVERSE TOPICS</h2>
                <p className="text-zinc-400 text-lg max-w-4xl mx-auto">
                  Our blog covers a wide range of topics to keep you informed and inspired. From web design to digital marketing, explore our categories below.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: "🖌️",
                    title: "Design & Development",
                    description: "Explore the latest trends and best practices in web design and development."
                  },
                  {
                    icon: "📱",
                    title: "Digital Marketing",
                    description: "Learn about the latest strategies and tactics including SEO, SEM, and social media."
                  },
                  {
                    icon: "👥",
                    title: "Branding & Identity",
                    description: "Discover how to build a strong brand identity and stand out in the market."
                  },
                  {
                    icon: "📝",
                    title: "SEO Strategies",
                    description: "Get tips and tricks to improve your web visibility and ranking on search engines."
                  },
                  {
                    icon: "📊",
                    title: "Industry Trends",
                    description: "Stay informed about the latest trends and innovations shaping the digital industry."
                  },
                  {
                    icon: "📄",
                    title: "Case Studies",
                    description: "Explore real-life examples of successful projects and campaigns."
                  }
                ].map((category, index) => (
                  <div key={index} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 hover:border-[#cfc493]/50 transition-colors">
                    <div className="text-4xl mb-4 bg-[#cfc493]/10 w-16 h-16 rounded-lg flex items-center justify-center">{category.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                    <p className="text-zinc-400 text-sm">{category.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Authors Section */}
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-zinc-900 rounded-full px-6 py-3 mb-6">
                <span className="text-lg">✍️</span>
                <span className="text-sm font-medium tracking-wide text-[#cfc493]">Authors</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">MEET OUR TALENTED AUTHORS</h2>
              <p className="text-zinc-400 text-lg mb-12 max-w-4xl mx-auto">
                Get to know the creative minds behind our insightful blogs. Our diverse team of writers brings expertise from various domains, ensuring rich and valuable content for you.
              </p>

              <div className="max-w-md mx-auto">
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-zinc-700 flex-shrink-0 overflow-hidden">
                      <Image src="/emilyblog.jpg" alt="Emily Ho" width={64} height={64} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-xl font-bold">Emily Ho</h3>
                        <a href="https://www.linkedin.com/in/emilyhoo/" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                          <Image src="/linkedin.png" alt="LinkedIn" width={100} height={100} className="h-10 w-10" />
                        </a>
                      </div>
                      <p className="text-[#cfc493] text-sm mb-3">Chief of Marketing</p>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        Emily is a Senior in Chemical Engineering and Chief of Marketing (2024-2026). From 2023-2025, she has worked on the Torito Liquid Propulsion Team as a Propulsion Research member and also a Safety Officer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
