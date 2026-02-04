"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        <Navbar />
      </div>
      <PageHeader title="MEDIA + PICS" subtitle="Explore our photo gallery and social media content." />

      {/* Photo Gallery Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center">
          {/* Simple Photo Slider */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold mb-8">Photo Gallery</h3>
            <div className="slideshow-container">
              <div className="slider-track">
                <div className="slide"><Image src="/pic1.JPG" alt="Photo 1" width={300} height={200} /></div>
                <div className="slide"><Image src="/pic2.JPG" alt="Photo 2" width={300} height={200} /></div>
                <div className="slide"><Image src="/pic3.JPG" alt="Photo 3" width={300} height={200} /></div>
                <div className="slide"><Image src="/pic4.JPG" alt="Photo 4" width={300} height={200} /></div>
                <div className="slide"><Image src="/pic5.JPG" alt="Photo 5" width={300} height={200} /></div>
                <div className="slide"><Image src="/pic6.JPG" alt="Photo 6" width={300} height={200} /></div>
                <div className="slide"><Image src="/pic7.JPG" alt="Photo 7" width={300} height={200} /></div>
                <div className="slide"><Image src="/pic8.JPG" alt="Photo 8" width={300} height={200} /></div>
                <div className="slide"><Image src="/pic9.JPG" alt="Photo 9" width={300} height={200} /></div>
                <div className="slide"><Image src="/pic10.JPG" alt="Photo 10" width={300} height={200} /></div>
                <div className="slide"><Image src="/pic11.JPG" alt="Photo 11" width={300} height={200} /></div>
                <div className="slide"><Image src="/pic12.JPG" alt="Photo 12" width={300} height={200} /></div>
                {/* Duplicate slides for seamless loop */}
                <div className="slide"><Image src="/pic1.JPG" alt="Photo 1" width={300} height={200} /></div>
                <div className="slide"><Image src="/pic2.JPG" alt="Photo 2" width={300} height={200} /></div>
                <div className="slide"><Image src="/pic3.JPG" alt="Photo 3" width={300} height={200} /></div>
                <div className="slide"><Image src="/pic4.JPG" alt="Photo 4" width={300} height={200} /></div>
                <div className="slide"><Image src="/pic5.JPG" alt="Photo 5" width={300} height={200} /></div>
                <div className="slide"><Image src="/pic6.JPG" alt="Photo 6" width={300} height={200} /></div>
                <div className="slide"><Image src="/pic7.JPG" alt="Photo 7" width={300} height={200} /></div>
                <div className="slide"><Image src="/pic8.JPG" alt="Photo 8" width={300} height={200} /></div>
                <div className="slide"><Image src="/pic9.JPG" alt="Photo 9" width={300} height={200} /></div>
                <div className="slide"><Image src="/pic10.JPG" alt="Photo 10" width={300} height={200} /></div>
                <div className="slide"><Image src="/pic11.JPG" alt="Photo 11" width={300} height={200} /></div>
                <div className="slide"><Image src="/pic12.JPG" alt="Photo 12" width={300} height={200} /></div>
              </div>
            </div>
            
            {/* See More Button - Reduced spacing */}
            <div>
              <a
                href="https://usfedu.sharepoint.com/teams/SocietyofAeronauticsandRocketryGRP/SitePages/Home.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#cfc493] hover:bg-[#b8ad7a] text-zinc-900 font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                See More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Sections */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Instagram Section */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 text-center">
            <div className="mb-6">
              <svg className="w-16 h-16 mx-auto text-[#cfc493]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Instagram Reels</h3>
            <p className="text-zinc-400 mb-6">
              Check out our latest reels and behind-the-scenes content.
            </p>
            <a
              href="https://www.instagram.com/usfsoar/reels/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#cfc493] hover:bg-[#b8ad7a] text-zinc-900 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              See More
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              
            </a>
          </div>

          {/* TikTok Section */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 text-center">
            <div className="mb-6">
              <svg className="w-16 h-16 mx-auto text-[#cfc493]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">TikTok Videos</h3>
            <p className="text-zinc-400 mb-6">
              Watch our short-form videos and quick updates.
            </p>
            <a
              href="https://www.tiktok.com/@usf.soar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#cfc493] hover:bg-[#b8ad7a] text-zinc-900 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              See More
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .slideshow-container {
          width: 100%;
          height: 250px;
          overflow: hidden;
          position: relative;
          margin: 0 auto;
        }
        
        .slider-track {
          display: flex;
          gap: 20px;
          animation: scroll 90s linear infinite;
        }
        
        @media (max-width: 768px) {
          .slider-track {
            animation: scroll 60s linear infinite;
          }
        }
        
        .slider-track:hover {
          animation-play-state: paused;
        }
        
        .slide {
          flex-shrink: 0;
          width: 300px;
          height: 200px;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
        }
        
        .slide :global(img) {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 300ms;
        }
        
        .slide:hover :global(img) {
          transform: scale(1.1);
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-320px * 12));
          }
        }
      `}</style>
    </div>
  )
}
