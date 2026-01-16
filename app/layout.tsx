import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Roboto_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const robotoMono = Roboto_Mono({ 
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
  preload: true
})

export const metadata: Metadata = {
  title: "USF Society of Aeronautics and Rocketry",
  description: "The Society of Aeronautics and Rocketry at the University of South Florida. The sky is not the limit.",
  generator: "Next.js",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${robotoMono.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
