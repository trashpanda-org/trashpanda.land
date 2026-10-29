"use client"

import { useEffect } from "react"

// The booking runs once, when both photos are there to be flashed; if they are slow to arrive, skip it.
// The layout's pre-paint script sets html.booking (unless reduced motion); this adds html.go.
export default function Booking() {
  useEffect(() => {
    const shots = [...document.querySelectorAll<HTMLImageElement>(".shot")]
    const ready = shots.map((img) =>
      img.complete
        ? Promise.resolve()
        : new Promise<void>((r) => {
            img.addEventListener("load", () => r(), { once: true })
            img.addEventListener("error", () => r(), { once: true })
          }),
    )
    Promise.all(ready).then(() => {
      if (performance.now() < 2500) document.documentElement.classList.add("go")
    })
  }, [])
  return null
}
