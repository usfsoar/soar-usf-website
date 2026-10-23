"use client"

import { useState } from "react"

interface CalendarConfig {
  id: string
  name: string
  subtitle: string
  colorName: string
  src: string
  color: string // Google Calendar embed parameter (%23...)
  uiColor: string // Badge and indicator color in UI
  bgActive: string
  borderActive: string
  enabled: boolean
}

const calendars: CalendarConfig[] = [
  {
    id: "soar",
    name: "SOAR Calendar",
    subtitle: "General Meetings & Club Events",
    colorName: "Green",
    color: "#006747",
    uiColor: "#00965e",
    bgActive: "bg-emerald-950/30",
    borderActive: "border-emerald-600/70",
    src: "https://calendar.google.com/calendar/embed?src=942jatunguv08jrcr3ver7t9kc%40group.calendar.google.com&ctz=America%2FNew_York",
    enabled: true,
  },
  {
    id: "irec",
    name: "IREC Calendar",
    subtitle: "Competition Rocketry & Subteams",
    colorName: "Gold",
    color: "#B8860B",
    uiColor: "#cfc493",
    bgActive: "bg-[#cfc493]/10",
    borderActive: "border-[#cfc493]",
    src: "https://calendar.google.com/calendar/u/0/embed?src=650ae47f6c9515af0662d839d9d86e4db367e840c6f705a0fe6cb134aef4b0e8%40group.calendar.google.com&ctz=America/New_York",
    enabled: true,
  },
  {
    id: "bel",
    name: "BEL Calendar",
    subtitle: "Liquid Propulsion Research",
    colorName: "Slate",
    color: "#466069",
    uiColor: "#7e96a0",
    bgActive: "bg-slate-900/50",
    borderActive: "border-slate-500/70",
    src: "https://calendar.google.com/calendar/embed?src=318ed9be561b53eb43c55672f100636e6bfa145d7c77a32c1ff0a45e008ceecd%40group.calendar.google.com&ctz=America%2FNew_York",
    enabled: true,
  },
]

export function MultiCalendar() {
  const [enabledCalendars, setEnabledCalendars] = useState<Set<string>>(
    new Set(calendars.filter((c) => c.enabled).map((c) => c.id))
  )

  const toggleCalendar = (id: string) => {
    setEnabledCalendars((prev) => {
      const newEnabled = new Set(prev)
      if (newEnabled.has(id)) {
        newEnabled.delete(id)
      } else {
        newEnabled.add(id)
      }
      return newEnabled
    })
  }

  const getEmbedUrl = () => {
    if (enabledCalendars.size === 0) {
      return null
    }

    const enabledCalendarConfigs = calendars.filter((c) => enabledCalendars.has(c.id))
    const params = enabledCalendarConfigs.map((c) => {
      const url = new URL(c.src)
      const src = url.searchParams.get("src")
      const color = encodeURIComponent(c.color)
      return `&src=${src}&color=${color}`
    })

    const baseUrl = "https://calendar.google.com/calendar/embed?ctz=America%2FNew_York"
    return baseUrl + params.join("")
  }

  const embedUrl = getEmbedUrl()

  return (
    <div className="w-full">
      <style jsx>{`
        .calendar-wrapper {
          box-sizing: border-box;
          -webkit-font-smoothing: inherit;
          filter: invert(0.92) hue-rotate(180deg) contrast(1.05);
          flex: 0 0 auto;
          height: 800px;
          position: relative;
          width: 100%;
        }

        .calendar-wrapper iframe {
          width: 100%;
          height: 100%;
        }
      `}</style>

      {/* Calendar Toggle Controls & Color Legend */}
      <div className="mb-6 p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span>Select Calendars to Display</span>
            </h3>
            <p className="text-xs text-zinc-400 mt-0.5">
              Filter schedules by subsystem. Each calendar is color-coded using official SOAR brand standards.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setEnabledCalendars(new Set(calendars.map((c) => c.id)))}
              className="text-xs font-medium text-zinc-400 hover:text-white px-2.5 py-1 rounded-md bg-zinc-800/60 hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              Select All
            </button>
            <button
              onClick={() => setEnabledCalendars(new Set())}
              className="text-xs font-medium text-zinc-400 hover:text-white px-2.5 py-1 rounded-md bg-zinc-800/60 hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              Clear All
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {calendars.map((calendar) => {
            const isEnabled = enabledCalendars.has(calendar.id)
            return (
              <label
                key={calendar.id}
                htmlFor={`calendar-toggle-${calendar.id}`}
                className={`flex items-start gap-3.5 p-4 rounded-xl border transition-all cursor-pointer select-none ${
                  isEnabled
                    ? `${calendar.bgActive} ${calendar.borderActive} shadow-md`
                    : "bg-zinc-950/40 border-zinc-800/80 opacity-60 hover:opacity-90"
                }`}
              >
                <input
                  id={`calendar-toggle-${calendar.id}`}
                  type="checkbox"
                  checked={isEnabled}
                  onChange={() => toggleCalendar(calendar.id)}
                  className="mt-1 w-4 h-4 rounded cursor-pointer shrink-0"
                  style={{ accentColor: calendar.uiColor }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="font-semibold text-sm text-white">{calendar.name}</span>
                    <span
                      className="text-[10px] font-bold px-2 py-0.5 rounded-full border shrink-0"
                      style={{
                        color: calendar.uiColor,
                        borderColor: `${calendar.uiColor}40`,
                        backgroundColor: `${calendar.uiColor}15`,
                      }}
                    >
                      {calendar.colorName}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">{calendar.subtitle}</p>
                </div>
              </label>
            )
          })}
        </div>
      </div>

      {/* Calendar Display */}
      {embedUrl ? (
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="calendar-wrapper">
            <iframe
              key={embedUrl}
              src={embedUrl}
              frameBorder="0"
              scrolling="no"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      ) : (
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-12 text-center shadow-lg">
          <p className="text-[#cfc493] text-lg font-medium">Please select at least one calendar to display.</p>
        </div>
      )}
    </div>
  )
}
