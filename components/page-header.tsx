import React from "react"

export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="bg-background border-b border-zinc-800 pt-20 md:pt-28 pb-8 md:pb-12">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">{title}</h1>
          {subtitle && <p className="text-zinc-400 text-lg md:text-xl">{subtitle}</p>}
        </div>
      </div>
    </header>
  )
}

export default PageHeader
