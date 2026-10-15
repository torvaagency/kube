"use client"

import Lenis from "lenis"
import { useEffect } from "react"

/** Inertial smooth scrolling for the whole site. Skipped when reduced motion is requested. */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const lenis = new Lenis({ duration: 1.1, anchors: true })
    let raf = requestAnimationFrame(function tick(time) {
      lenis.raf(time)
      raf = requestAnimationFrame(tick)
    })

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  return null
}
