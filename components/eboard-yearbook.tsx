"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"

type Member = {
  name: string
  title: string
  description: string
  dates: string
  involvement: string
  link: string
  year?: string
  major?: string
}

type YearbookProps = {
  members: Member[]
  /** Tailwind grid classes for responsive columns (defaults kept to original) */
  gridClass?: string
  /** Max width for card (as Tailwind friendly value like '18rem' used in inline style) */
  cardMaxWidth?: string
  /** width utility classes for the card element */
  cardWidthClass?: string
  /** image height classes for the card image container */
  imageHeightClass?: string
  /** outer card border color (CSS color string) */
  outerBorderColor?: string
  /** inner image container border color (CSS color string) */
  innerBorderColor?: string
}

export default function EboardYearbook({ members, gridClass = 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4', cardMaxWidth = '18rem', cardWidthClass = 'sm:w-48 md:w-52', imageHeightClass = 'w-full h-72 sm:h-48', outerBorderColor = '#006747', innerBorderColor = '#cfc493' }: YearbookProps) {
  const [selected, setSelected] = useState<number | null>(null)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (selected === null) return
      if (e.key === "ArrowRight") setSelected((s) => (s === null ? null : Math.min(members.length - 1, s + 1)))
      if (e.key === "ArrowLeft") setSelected((s) => (s === null ? null : Math.max(0, s - 1)))
      if (e.key === "Escape") setSelected(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [selected, members.length])

  // Reset image index when changing members
  useEffect(() => {
    setSelectedImage(0)
  }, [selected])

  // Define images for members with galleries
  const memberImages: { [key: string]: string[] } = {
    "Emily Ho": ["/emily1.jpg", "/emily2.jpg", "/emily3.jpg"],
    "Drew Brickell": ["/drew1.jpg", "/drew2.jpg", "/drew3.jpg"],
    "Cesar Briones": ["/cesar1.jpg", "/cesar2.jpg", "/cesar3.jpg"],
    "Kyle Shum": ["/kyle1.jpg", "/kyle2.jpg", "/kyle3.jpg"],
    "Sage Bundhund": ["/sage1.jpg", "/sage2.jpg", "/sage3.jpg"],
    "Conner Schilaty": ["/conner1.jpg", "/conner2.jpg", "/conner3.jpg"],
    "Daniel Misherky": ["/daniel1.jpg", "/daniel2.jpg", "/daniel3.jpg"],
    "Joshua Garcia": ["/joshg1.jpg", "/joshg2.jpg", "/joshg3.jpg"],
    "Valeria Melendez": ["/valeria1.jpg", "/valeria2.jpg", ""],
    "Marwan Abdelwahab": ["/marwan1.jpg", "/marwan2.jpg", "/marwan3.jpg"],
    "Alan Guyster": ["/alan1.jpg", "/alan2.jpg", "/alan3.jpg"],
  }

  // Define profile images for each member
  const profileImages: { [key: string]: string } = {
    "Emily Ho": "/emilyheadshot.jpg",
    "Cesar Briones": "/cesarheadshot.jpg",
    "Kyle Shum": "/kyleheadshot.jpg",
    "Drew Brickell": "/drewheadshot.jpg",
    "Sage Bundhund": "/sageheadshot.jpg",
    "Conner Schilaty": "/connerheadshot.jpg",
    "Daniel Misherky": "/danielheadshot.jpg",
    "Matthew Messing": "/matthewheadshot.jpg",
    "Joshua Garcia": "/joshgheadshot.jpg",
    "Pavan Moturi": "/pavanheadshot.jpg",
    "Alan Guyster": "/alanheadshot.jpg",
    "Chiara DeAngelis": "/chiaraheadshot.jpg",
    "Christopher Fernandez": "/chrisheadshot.jpg",
    "Cooper Kenney": "/cooperheadshot.jpg",
    "Duc Nguyen": "/ducheadshot.jpg",
    "Khôi Minh Tôn Thất": "/khoiheadshot.jpg",
    "Ninh Vu Van": "/ninhheadshot.jpg",
    "Sama Ahmed": "/samaheadshot.jpg",
    "Krystal Walford": "/krystalheadshot.jpg",
    "Ethan Zylman": "/ethanzheadshot.jpg",
    "Joshua Hachmeister": "/joshhheadshot.jpg",
    "Marwan Abdelwahab": "/marwanheadshot.jpg",
    "Rylie Birkey": "/rylieheadshot.jpg",
    "Hunter Hawkins": "/hunterheadshot.jpg",
    "Lauren Carpenter": "/laurenheadshot.jpg",
    "Angel Hernandez": "/angelheadshot.jpg",
    "Janna Abdelghani": "/jannaheadshot.jpg",
    "Stepan Jankowski": "/stepanheadshot.jpg",
    "Shreya Bhatt": "/shreyaheadshot.jpg",
    "Valeria Melendez": "/valeriaheadshot.jpg"
  }

  // Define custom object positions for specific members
  const profileImagePositions: { [key: string]: string } = {
    "Kyle Shum": "50% 70%",
    "Sage Bundhund": "25% 50%",
    "Conner Schilaty": "50% 15%"
  }

  const getImages = (member: Member) => {
    const imagesRaw: string[] = memberImages[member.name] || []
    return imagesRaw.filter(Boolean)
  }

  const getMainImageObjectPosition = (member: Member, imageIndex: number) => {
    if (member.name === "Kyle Shum" && imageIndex === 0) return { objectPosition: '50% 70%' }
    if (member.name === "Sage Bundhund" && imageIndex === 0) return { objectPosition: '50% 70%' }
    if (member.name === "Cesar Briones" && imageIndex === 2) return { objectPosition: '5% 50%' }
    if (member.name === "Emily Ho" && imageIndex === 2) return { objectPosition: '90% 50%' }
    if (member.name === "Conner Schilaty" && imageIndex === 1) return { objectPosition: '50% 10%' }
    if (member.name === "Marwan Abdelwahab" && imageIndex === 0) return { objectPosition: '25% 70%' }
    if (member.name === "Marwan Abdelwahab" && imageIndex === 1) return { objectPosition: '90% 70%' }
    if (member.name === "Marwan Abdelwahab" && imageIndex === 2) return { objectPosition: '100% 70%' }
    if (member.name === "Alan Guyster" && imageIndex === 1) return { objectPosition: '100% 70%' }
    if (member.name === "Alan Guyster" && imageIndex === 2) return { objectPosition: '100% 70%' }
    if (imageIndex === 1) return { objectPosition: '50% 70%' }
    if (imageIndex === 2) return { objectPosition: '50% 70%' }
    return undefined
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className={`grid ${gridClass} gap-6`}>
          {members.map((m, i) => {
            const profileImage = profileImages[m.name] || null
            const profileImagePosition = profileImagePositions[m.name]
            return (
              <button
                key={m.name + i}
                onClick={() => setSelected(i)}
                className={`group bg-zinc-900 border-2 rounded-2xl p-4 flex flex-col items-center gap-3 hover:scale-105 transition-all hover:border-[#005a3c] w-full ${cardWidthClass} mx-auto cursor-pointer`}
                  style={{ maxWidth: cardMaxWidth, borderColor: outerBorderColor }}
              >
                  <div className={`${imageHeightClass} rounded-lg overflow-hidden bg-zinc-800 flex items-center justify-center border-2 relative p-0 sm:p-2 w-full`} style={{ borderColor: innerBorderColor }}> 
                  {profileImage ? (
                    <Image
                      src={profileImage}
                      alt={m.name}
                      fill
                      className="object-cover"
                      style={profileImagePosition ? { objectPosition: profileImagePosition } : undefined}
                      sizes="128px"
                    />
                  ) : (
                    <span className="text-zinc-500">Profile</span>
                  )}
                </div>
                <div className="text-center w-full mt-2">
                  <div className="text-md font-bold text-white truncate">{m.name}</div>
                  <div className="text-sm text-[#cfc493] mt-1 truncate">{m.title}</div>
                  {m.year && <div className="text-sm text-zinc-300 mt-1 truncate">{m.year}</div>}
                  {m.major && <div className="text-sm text-zinc-300 truncate">{m.major}</div>}
                  <div className="text-sm text-zinc-500 mt-1">{m.dates}</div>
                </div>
              </button>
            )
          })}
        </div>

        {selected !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-3xl" onClick={() => setSelected(null)} />
            <div className="relative z-10 w-full max-w-5xl bg-zinc-900 border border-zinc-800 rounded-xl overflow-auto max-h-[90vh] lg:overflow-visible lg:max-h-none">
              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-zinc-800/80 hover:bg-zinc-700 flex items-center justify-center cursor-pointer text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div className="flex flex-col lg:flex-row gap-6 p-6 max-h-[80vh] overflow-auto lg:overflow-visible lg:max-h-none">
                {/* Left side - Image and buttons */}
                <div className="lg:w-[280px] flex flex-col flex-shrink-0">
                  {/* Main image placeholder with overlaid thumbnails */}
                  <div className="relative w-full h-[45vh] lg:aspect-[3/4] lg:h-auto bg-zinc-700 rounded-lg mb-3 flex items-center justify-center text-zinc-500 overflow-hidden">
                    {(() => {
                      const images = getImages(members[selected])
                      const currentImage = images.length > 0 && images[selectedImage] ? images[selectedImage] : null
                      const mainImageObjectPosition = getMainImageObjectPosition(members[selected], selectedImage)

                      return currentImage ? (
                        <Image
                          src={currentImage}
                          alt={`${members[selected].name} - Image ${selectedImage + 1}`}
                          fill
                          className="object-cover"
                          style={mainImageObjectPosition}
                          sizes="(max-width: 1024px) 100vw, 280px"
                          quality={80}
                        />
                      ) : (
                        <span>Image {selectedImage + 1}</span>
                      )
                    })()}

                    {/* Left / Right arrow buttons for cycling images */}
                    {(() => {
                      const images = getImages(members[selected])
                      const thumbCount = 3

                      return (
                        <>
                          <button
                            aria-label="Previous image"
                            onClick={() => setSelectedImage((selectedImage - 1 + thumbCount) % thumbCount)}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-zinc-800/60 hover:bg-zinc-800 text-white cursor-pointer rounded-full p-2 z-10"
                          >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>

                          <button
                            aria-label="Next image"
                            onClick={() => setSelectedImage((selectedImage + 1) % thumbCount)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-zinc-800/60 hover:bg-zinc-800 text-white cursor-pointer rounded-full p-2 z-10"
                          >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </>
                      )
                    })()}

                    {/* Image selector thumbnails overlaid at bottom */}
                    {(() => {
                      const images = getImages(members[selected])
                      return (
                        <div className="absolute bottom-3 left-3 right-3 flex gap-2">
                          {[0, 1, 2].map((idx) => {
                            const has = Boolean(images[idx])
                            return (
                              <button
                                key={idx}
                                onClick={() => setSelectedImage(idx)}
                                aria-pressed={selectedImage === idx}
                                className={`relative flex-1 aspect-video rounded-md transition-colors cursor-pointer overflow-hidden ${
                                  selectedImage === idx ? 'bg-zinc-600 border-4 border-[#cfc493]' : has ? 'bg-zinc-700 border-2 border-zinc-700' : 'bg-zinc-700/30 border-2 border-zinc-600'
                                } hover:bg-zinc-600`}
                                style={selectedImage === idx ? { boxShadow: '0 6px 18px rgba(207,196,147,0.18), 0 0 0 6px rgba(207,196,147,0.10)' } : undefined}
                              >
                                {has ? (
                                  <Image
                                    src={images[idx]}
                                    alt={`Thumbnail ${idx + 1}`}
                                    fill
                                    className="object-cover"
                                    style={idx === 1 ? { objectPosition: '50% 70%' } : idx === 2 ? { objectPosition: '90% 50%' } : undefined}
                                    sizes="80px"
                                    quality={60}
                                  />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center text-zinc-400">
                                    <svg width="38" height="22" viewBox="0 0 38 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
                                      <rect x="1.5" y="1.5" width="35" height="19" rx="4" stroke="#cfc9a3" strokeWidth="2" fill="rgba(0,0,0,0)" />
                                    </svg>
                                  </div>
                                )}
                              </button>
                            )
                          })}
                        </div>
                      )
                    })()}
                  </div>

                  {/* Name link button */}
                  <a
                    href={members[selected].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-zinc-800 hover:bg-zinc-800/90 transition-colors rounded-lg py-2.5 px-4 flex items-center justify-center gap-2 text-[#cfc493] cursor-pointer"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    <span className="text-sm font-medium">{members[selected].name}</span>
                  </a>
                </div>

                {/* Right side - Info */}
                <div className="flex-1 min-w-0">
                  {/* Header with profile picture */}
                  <div className="flex items-start gap-3 mb-4">
                    {(() => {
                      const profileImage = profileImages[members[selected].name] || null
                      const profileImagePosition = profileImagePositions[members[selected].name]
                      return (
                        <div className="w-20 h-20 md:w-28 md:h-28 rounded-lg bg-zinc-700 flex items-center justify-center text-zinc-500 text-xs flex-shrink-0 overflow-hidden relative">
                          {profileImage ? (
                            <Image
                              src={profileImage}
                              alt={`${members[selected].name} profile`}
                              fill
                              className="object-cover"
                              style={profileImagePosition ? { objectPosition: profileImagePosition } : undefined}
                              sizes="(max-width: 768px) 80px, 112px"
                              quality={75}
                            />
                          ) : (
                            <span>Profile</span>
                          )}
                        </div>
                      )
                    })()}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
                        <h3 className="text-xl md:text-2xl font-bold">{members[selected].name}</h3>
                        <span className="bg-zinc-800 text-[#cfc493] text-xs px-3 py-1 rounded-full whitespace-nowrap">{members[selected].title}</span>
                      </div>
                      <p className="text-zinc-300 text-sm leading-relaxed">{members[selected].description}</p>
                    </div>
                  </div>


                      <div className="inline-flex items-center gap-2 bg-zinc-800 rounded-full px-4 py-2 mb-6">
                        <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm text-zinc-300">{members[selected].dates}</span>
                      </div>

                  <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 mb-6">
                    <h4 className="text-lg font-bold mb-3">BIO</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">{members[selected].involvement}</p>
                  </div>

                  {/* Navigation buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                    <button
                      onClick={() => setSelected((s) => (s === null ? null : Math.max(0, s - 1)))}
                      disabled={selected === 0}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors text-sm"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                      Previous
                    </button>
                    <button
                      onClick={() => setSelected((s) => (s === null ? null : Math.min(members.length - 1, s + 1)))}
                      disabled={selected === members.length - 1}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors text-sm"
                    >
                      Next
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
