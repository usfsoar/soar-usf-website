"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, ExternalLink } from "lucide-react"
import Image from "next/image"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-background scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-zinc-900 rounded-full px-6 py-3 mb-4">
              <Mail className="h-5 w-5" style={{ color: "#D0C495" }} />
              <span className="text-sm font-medium tracking-wide" style={{ color: "#D0C495" }}>Contact Us</span>
            </div>

            <h2 className="text-4xl font-bold mb-6">GET IN TOUCH WITH US</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Have a question or need more information about our organization or current projects? Fill out the form,
              and our team will get back to you as soon as possible.
            </p>
          </div>

          <div className="max-w-2xl mx-auto w-full">
            <form className="space-y-6">
              <div>
                <Label htmlFor="name" className="sr-only">
                  Name
                </Label>
                <Input id="name" placeholder="Name" className="bg-secondary/50 border-secondary" />
              </div>

              <div>
                <Label htmlFor="email" className="sr-only">
                  E-mail
                </Label>
                <Input id="email" type="email" placeholder="E-mail" className="bg-secondary/50 border-secondary" />
              </div>

              <div>
                <Label htmlFor="message" className="sr-only">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Message"
                  rows={5}
                  className="bg-secondary/50 border-secondary resize-y"
                />
              </div>

              <div className="flex justify-center">
                <Button
                  type="submit"
                  style={{ backgroundColor: "#D0C495", color: "#0f0f0f" }}
                  className="w-full sm:w-auto hover:opacity-90 rounded-full px-6 shadow-[0_0_20px_rgba(208,196,149,0.5)] hover:shadow-[0_0_30px_rgba(208,196,149,0.7)] transition-all"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="max-w-2xl mx-auto w-full">
          <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <a
            href="https://www.instagram.com/usfsoar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center sm:justify-start gap-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors group"
          >
            <Image src="/instagram.png" alt="Instagram" width={20} height={20} className="h-5 w-5" />
            <div className="flex-1 hidden sm:block">
              <div className="font-semibold">@usfsoar</div>
              <div className="text-xs text-muted-foreground">1.9k+ Followers</div>
            </div>
            <ExternalLink className="h-4 w-4 hidden md:block" style={{ color: "#D0C495" }} />
          </a>

          <a
            href="https://discord.gg/Y9tbUE2f"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center sm:justify-start gap-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors group"
          >
            <Image src="/discord.png" alt="Discord" width={20} height={20} className="h-5 w-5" />
            <div className="flex-1 hidden sm:block">
              <div className="font-semibold">USF SOAR</div>
              <div className="text-xs text-muted-foreground">800+ Members</div>
            </div>
            <ExternalLink className="h-4 w-4 hidden sm:block" style={{ color: "#D0C495" }} />
          </a>

          <a
            href="https://www.linkedin.com/company/usfsoar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center sm:justify-start gap-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors group"
          >
            <Image src="/linkedin.png" alt="LinkedIn" width={20} height={20} className="h-5 w-5" />
            <div className="flex-1 hidden sm:block">
              <div className="font-semibold">@USF SOAR</div>
              <div className="text-xs text-muted-foreground">300+ Followers</div>
            </div>
            <ExternalLink className="h-4 w-4 hidden sm:block" style={{ color: "#D0C495" }} />
          </a>

          <a
            href="https://bullsconnect.usf.edu/feeds?type=club&type_id=58509&tab=about"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center sm:justify-start gap-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors group"
          >
            <Image src="/Color Logo.svg" alt="BullsConnect" width={20} height={20} className="h-5 w-5" />
            <div className="flex-1 hidden sm:block">
              <div className="font-semibold">BullsConnect</div>
              <div className="text-xs text-muted-foreground">500+ Members</div>
            </div>
            <ExternalLink className="h-4 w-4 hidden sm:block" style={{ color: "#D0C495" }} />
          </a>
          </div>
        </div>
      </div>
    </section>
  )
}
