"use client"

import { useState } from "react"

interface CalendarConfig {
  id: string
  name: string
  src: string
  enabled: boolean
}

const calendars: CalendarConfig[] = [
  {
    id: "soar",
    name: "SOAR Calendar",
    src: "https://calendar.google.com/calendar/embed?src=942jatunguv08jrcr3ver7t9kc%40group.calendar.google.com&ctz=America%2FNew_York",
    enabled: true,
  },
  {
    id: "irec",
    name: "IREC Calendar",
    src: "https://calendar.google.com/calendar/u/0/embed?src=650ae47f6c9515af0662d839d9d86e4db367e840c6f705a0fe6cb134aef4b0e8%40group.calendar.google.com&ctz=America/New_York",
    enabled: false,
  },
  {
    id: "torito",
    name: "Torito Calendar",
    src: "https://calendar.google.com/calendar/u/0/embed?src=e65df5c4a3a837c50882865d7606807ec0c1b099c8e981a42d438ad013321e49%40group.calendar.google.com&ctz=America/New_York",
    enabled: false,
  },
]

export function MultiCalendar() {
  const [enabledCalendars, setEnabledCalendars] = useState<Set<string>>(
    new Set(calendars.filter((c) => c.enabled).map((c) => c.id))
  )

  const toggleCalendar = (id: string) => {
    const newEnabled = new Set(enabledCalendars)
    if (newEnabled.has(id)) {
      newEnabled.delete(id)
    } else {
      newEnabled.add(id)
    }
    setEnabledCalendars(newEnabled)
  }

  const getEmbedUrl = () => {
    if (enabledCalendars.size === 0) {
      return null
    }

    const enabledCalendarConfigs = calendars.filter((c) => enabledCalendars.has(c.id))
    const srcs = enabledCalendarConfigs.map((c) => {
      const url = new URL(c.src)
      return url.searchParams.get("src")
    })

    const baseUrl = "https://calendar.google.com/calendar/embed?ctz=America%2FNew_York"
    return (
      baseUrl +
      srcs
        .filter((s) => s)
        .map((s) => `&src=${s}`)
        .join("")
    )
  }

  const embedUrl = getEmbedUrl()

  return (
    <div className="w-full">
      <style jsx>{`
        :root {
          font-family: sans-serif;
          font-size: 12px;
          --token-f625cd9c-eaf7-4830-9abe-885d260206dd: #fff;
          --token-811502d1-0eed-443f-8478-80af7a468fd8: #cfc493;
          --token-f5bc7a34-0c77-443b-b684-8cedb1c2c074: #cfc493;
          --token-3e615b24-d9fc-4c54-b2ad-169116039064: #edebd1;
          --token-228bd8b7-61e7-4bd9-9cd4-ea1fc74f8329: #f8fde7;
          --token-c243089d-22fa-4f8f-8f22-cf56670552cd: #0f0f0f;
          --token-d9454b2f-ce3c-4b90-86b5-27e17ad46d27: #141414;
          --token-6947ca58-4a1b-4b95-ba60-8472824a92a1: #1a1a1a;
          --token-04c52171-4de3-44b2-8dbe-ce34f70099a7: #1f1f1f;
          --token-a1e15573-407a-4e05-aad1-ccea5b623206: #262626;
          --token-e797afbf-7d45-44fe-9d79-b9d6850b7078: #2e2e2e;
          --token-add9e850-86ea-475b-bee1-1fe2d98fb1fd: #404040;
          --token-1ea94bb4-e366-48b2-a582-2a7d341cfb0a: #96979c;
          --token-50b92554-c06b-4234-9dc3-b4fb95be4c7b: #b0b1b5;
          --token-dd2900f6-9f5b-418d-8242-22e7260df7e5: #cacbce;
          --token-d1a42c1e-80d4-439d-895a-21aa57395645: #e4e5e6;
          --token-44907ccf-0ea5-4a3d-95f6-21bbb86df999: #f2f2f3;
          --token-efc87095-b4a7-4589-8808-09a99b6bac39: #f7f7f8;
          --token-cd9ad879-0340-4881-8da6-7efa110062d4: #cfc493;
          --token-a888adc2-3d05-4d6f-88b7-8dab97418795: #a89a6b;
          --token-4c7d257d-1d08-4035-ad20-8cb2bd0b1bf2: #cdf140;
          --token-220e61a4-c2a0-4eef-ac6e-fe707380fbcf: #daf66f;
          --framer-will-change-override: none;
          --framer-will-change-filter-override: none;
          --framer-aspect-ratio-supported: auto;
        }

        .calendar-wrapper {
          box-sizing: border-box;
          -webkit-font-smoothing: inherit;
          filter: hue-rotate(182deg) invert(1) sepia(1);
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

      {/* Calendar Toggle Controls */}
      <div className="mb-6 p-6 bg-zinc-900/50 border-2 border-[#cfc493]/30 rounded-xl">
        <h3 className="text-lg font-semibold text-[#cfc493] mb-4">Select Calendars to Display</h3>
        <div className="flex flex-wrap gap-6">
          {calendars.map((calendar) => (
            <label key={calendar.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={enabledCalendars.has(calendar.id)}
                onChange={() => toggleCalendar(calendar.id)}
                className="w-5 h-5 rounded border-2 border-[#cfc493] bg-zinc-800 checked:bg-[#cfc493] cursor-pointer accent-[#cfc493]"
              />
              <span className="text-[#cfc493] font-medium group-hover:text-[#edebd1] transition-colors">
                {calendar.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Calendar Display */}
      {embedUrl ? (
        <div className="bg-zinc-900/50 border-2 border-[#cfc493]/20 rounded-xl overflow-hidden">
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
        <div className="bg-zinc-900/50 border-2 border-[#cfc493]/20 rounded-xl p-12 text-center">
          <p className="text-[#cfc493] text-lg">Please select at least one calendar to display.</p>
        </div>
      )}
    </div>
  )
}
