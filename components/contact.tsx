"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, ExternalLink } from "lucide-react"
import Image from "next/image"

export function Contact() {
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)
  const [instagramCount, setInstagramCount] = useState<number>(2100)
  const [discordCount, setDiscordCount] = useState<number>(800)
  const [linkedinCount, setLinkedinCount] = useState<number>(400)
  const [registeredCount, setRegisteredCount] = useState<number>(450)

  function formatCount(n: number) {
    if (!Number.isFinite(n) || n < 1000) return `${n}`
    const remainder = n % 1000
    const k = Math.floor(n / 1000)
    // If within the first 100 of the next thousand, show 'Xk+' (per spec: 1000-1099 -> 1k+)
    if (remainder < 100) return `${k}k+`
    // Otherwise show 1 decimal precision based on hundreds (e.g., 1150 -> 1.1k)
    const tenths = Math.floor(n / 100) / 10
    return `${tenths.toFixed(1)}k`
  }

  useEffect(() => {
    let mounted = true
    async function loadDiscord() {
      try {
        const res = await fetch('/api/socials/discord')
        if (!res.ok) return
        const data = await res.json()
        if (mounted && typeof data.members === 'number') {
          setDiscordCount(data.members)
        }
      } catch (err) {
        // keep fallback
      }
    }
    loadDiscord()
    return () => { mounted = false }
  }, [])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setResult("Sending...")
    setLoading(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const res = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (res.ok) {
        setResult("Form Submitted Successfully ✅")
        form.reset()
      } else {
        setResult("Something went wrong ❌")
      }
    } catch (err) {
      console.error("Error submitting form:", err)
      setResult("Server error ❌")
    } finally {
      setLoading(false)
    }
  }
  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-6 bg-background scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-zinc-900 rounded-full px-6 py-3 mb-4">
              <Mail className="h-5 w-5" style={{ color: "#D0C495" }} />
              <span className="text-sm font-medium tracking-wide" style={{ color: "#cfc493" }}>Contact Us</span>
            </div>

            <h2 className="text-4xl font-bold mb-6">GET IN TOUCH WITH US</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Have a question or need more information about our organization or current projects? Fill out the form,
              and our team will get back to you as soon as possible.
            </p>
          </div>

          <div className="max-w-2xl mx-auto w-full">
            <form className="space-y-6" onSubmit={onSubmit}>
              <div>
                <Label htmlFor="name" className="sr-only">
                  Name
                </Label>
                <Input id="name" name="name" placeholder="Name" className="bg-secondary/50 border-secondary" />
              </div>

              <div>
                <Label htmlFor="email" className="sr-only">
                  E-mail
                </Label>
                <Input id="email" name="email" type="email" placeholder="E-mail" className="bg-secondary/50 border-secondary" />
              </div>

              <div>
                <Label htmlFor="message" className="sr-only">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows={5}
                  className="bg-secondary/50 border-secondary resize-y"
                />
              </div>

              <div className="flex justify-center">
                <Button
                  type="submit"
                  disabled={loading}
                  style={{ backgroundColor: "#D0C495", color: "#0f0f0f" }}
                  className="w-full sm:w-auto hover:opacity-90 rounded-full px-12 shadow-[0_0_20px_rgba(208,196,149,0.5)] hover:shadow-[0_0_30px_rgba(208,196,149,0.7)] transition-all cursor-pointer"
                >
                  {loading ? 'Sending...' : 'Submit'}
                </Button>
              </div>
              {result && (
                <div className="text-center mt-4">
                  <p className="font-medium">{result}</p>
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="max-w-2xl mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16">
          <a
            href="https://www.instagram.com/usfsoar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-start gap-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors group cursor-pointer"
          >
            <div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center flex-shrink-0">
              <Image src="/instagram.png" alt="Instagram" width={20} height={20} className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="font-normal">@usfsoar</div>
              <div className="text-xs text-muted-foreground">{formatCount(instagramCount)} Followers</div>
            </div>
            <ExternalLink className="h-4 w-4" style={{ color: "#cfc493" }} />
          </a>

          <a
            href="https://discord.gg/7qjAHzrnHz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-start gap-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors group cursor-pointer"
          >
            <div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center flex-shrink-0">
              <Image src="/discord.png" alt="Discord" width={20} height={20} className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="font-normal">USF SOAR</div>
              <div className="text-xs text-muted-foreground">{formatCount(discordCount)} Members</div>
            </div>
            <ExternalLink className="h-4 w-4" style={{ color: "#cfc493" }} />
          </a>

          <a
            href="https://www.linkedin.com/company/usfsoar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-start gap-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors group cursor-pointer"
          >
            <div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center flex-shrink-0">
              <Image src="/linkedin.png" alt="LinkedIn" width={20} height={20} className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="font-normal">@USF SOAR</div>
              <div className="text-xs text-muted-foreground">{formatCount(linkedinCount)} Followers</div>
            </div>
            <ExternalLink className="h-4 w-4" style={{ color: "#cfc493" }} />
          </a>

          <a
            href="https://bullsconnect.usf.edu/feeds?type=club&type_id=58509&tab=about"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-start gap-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors group cursor-pointer"
          >
            <div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center flex-shrink-0">
              <Image src="/Color Logo.svg" alt="BullsConnect" width={20} height={20} className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="font-normal">Bullsconnect</div>
              <div className="text-xs text-muted-foreground">{formatCount(registeredCount)} Members</div>
            </div>
            <ExternalLink className="h-4 w-4" style={{ color: "#cfc493" }} />
          </a>
          </div>
        </div>
      </div>
    </section>
  )
}
