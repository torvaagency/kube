"use client"

import { useEffect, useRef } from "react"

import { cn } from "@workspace/ui/lib/utils"

/**
 * Heading that moves subtly as a single block based on scroll position.
 * Smooth translation that rests at 0px and never pushes down into siblings.
 */
export function ScrollText({
  children,
  as: Tag = "h2",
  className,
}: {
  children: React.ReactNode
  as?: "h1" | "h2" | "h3"
  className?: string
}) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return

    let raf = 0

    const update = () => {
      raf = 0
      const vh = window.innerHeight
      const rect = el.getBoundingClientRect()
      // Parallax progress: 0 when near bottom entry, 1 when centered in viewport
      const progress = Math.min(1, Math.max(0, (vh - rect.top) / (vh * 0.75)))
      // Subtle float from -8px up to 0px at rest (never pushes down past 0px into siblings)
      const translateY = (progress - 1) * 8
      el.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0)`
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <Tag
      ref={ref as React.Ref<HTMLHeadingElement>}
      className={cn(
        "will-change-transform transition-transform duration-150 ease-out",
        className
      )}
    >
      {children}
    </Tag>
  )
}
