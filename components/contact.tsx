"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Instagram, MessageCircle, Linkedin, Feather } from "lucide-react"

export function Contact() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Contact Us</span>
            </div>

            <h2 className="text-4xl font-bold mb-6">GET IN TOUCH WITH US</h2>
            <p className="text-muted-foreground leading-relaxed">
              Have a question or need more information about our organization or current projects? Fill out the form,
              and our team will get back to you as soon as possible.
            </p>
          </div>

          <div>
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
                  className="bg-secondary/50 border-secondary resize-none"
                />
              </div>

              <Button type="submit" className="w-auto">
                Submit
              </Button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <a
            href="#"
            className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
          >
            <Instagram className="h-5 w-5" />
            <div>
              <div className="font-semibold">@usfsoar</div>
              <div className="text-xs text-muted-foreground">1.3k+ Followers</div>
            </div>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            <div>
              <div className="font-semibold">USF SOAR</div>
              <div className="text-xs text-muted-foreground">600+ Members</div>
            </div>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <div>
              <div className="font-semibold">@USF SOAR</div>
              <div className="text-xs text-muted-foreground">300+ Followers</div>
            </div>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
          >
            <Feather className="h-5 w-5" />
            <div>
              <div className="font-semibold">Builticonnect</div>
              <div className="text-xs text-muted-foreground">500+ Members</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
