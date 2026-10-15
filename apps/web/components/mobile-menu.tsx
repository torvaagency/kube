"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { MenuIcon, PlusIcon, XIcon } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"
import { ArrowSlide } from "@/components/arrow-slide"
import { ThemeToggle } from "@/components/theme-toggle"

export type MenuItem = { title: string; href: string; description?: string }
export type MenuGroup = { title: string; items: MenuItem[] }

/** Full-screen mobile menu: clip-path reveal, numbered rows, accordion groups, staggered links. */
export function MobileMenu({
  groups = [],
  links,
}: {
  groups?: MenuGroup[]
  links: MenuItem[]
}) {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(groups[0]?.title ?? null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener("keydown", onKey)
    }
  }, [open])

  const close = () => setOpen(false)
  const rows = [
    ...groups.map((g) => ({ kind: "group" as const, ...g })),
    ...links.map((l) => ({ kind: "link" as const, ...l })),
  ]

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="group relative flex h-9 sm:h-10 items-center gap-2 sm:gap-3 overflow-hidden rounded-full border border-border/80 px-3 sm:px-4 text-xs sm:text-sm tracking-widest uppercase transition-colors"
      >
        <span className="absolute inset-[-2px] translate-y-full bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0" />
        <span className="relative z-10 flex items-center gap-2 sm:gap-3 transition-colors duration-500 group-hover:text-background">
          Menu <MenuIcon className="size-3.5 sm:size-4" />
        </span>
      </button>

      {mounted &&
        createPortal(
          <div
            aria-hidden={!open}
            data-lenis-prevent
            className={cn(
              "fixed inset-0 z-[100] flex flex-col lg:hidden overflow-y-auto bg-background/98 text-foreground transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] backdrop-blur-2xl",
              open ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"
            )}>
            <div aria-hidden className="pointer-events-none absolute -top-32 right-0 size-96 rounded-full bg-primary/15 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute bottom-0 -left-20 size-80 rounded-full bg-primary/15 blur-3xl" />

            <div className="relative z-10 flex items-center justify-between border-b border-border/80 px-6 py-4 sm:py-5">
              <span className="text-xl font-semibold tracking-tight">kube</span>
              <div className="flex items-center gap-2.5">
                <ThemeToggle />
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close menu"
                  className="group relative flex h-9 sm:h-10 items-center gap-2 sm:gap-3 overflow-hidden rounded-full border border-border/80 px-3.5 sm:px-4 text-xs sm:text-sm tracking-widest uppercase"
                >
                  <span className="absolute inset-[-2px] translate-y-full bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0" />
                  <span className="relative z-10 flex items-center gap-2 sm:gap-3 transition-colors duration-500 group-hover:text-background">
                    Close <XIcon className="size-3.5 sm:size-4" />
                  </span>
                </button>
              </div>
            </div>

            <nav className="relative z-10 flex-1 px-6 py-6 sm:py-8">
              <ul className="border-t border-border/80">
                {rows.map((row, i) => {
                  const delay = open ? `${150 + i * 80}ms` : "0ms"
                  const num = String(i + 1).padStart(2, "0")
                  const rowClass = cn(
                    "border-b border-border/80 transition-all duration-700",
                    open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  )

                  if (row.kind === "link") {
                    return (
                      <li key={row.title} className={rowClass} style={{ transitionDelay: delay }}>
                        <Link href={row.href} onClick={close} className="group flex items-center gap-4 py-4 sm:py-5 text-foreground/90 transition-colors hover:text-foreground">
                          <span className="font-mono text-xs text-muted-foreground">[{num}]</span>
                          <span className="flex-1 text-2xl font-medium tracking-tight sm:text-3xl">{row.title}</span>
                          <ArrowSlide className="size-5 text-muted-foreground transition-colors group-hover:text-foreground" />
                        </Link>
                      </li>
                    )
                  }

                  const isOpen = expanded === row.title
                  return (
                    <li key={row.title} className={rowClass} style={{ transitionDelay: delay }}>
                      <button
                        type="button"
                        onClick={() => setExpanded(isOpen ? null : row.title)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center gap-4 py-4 sm:py-5 text-left text-foreground/90 transition-colors hover:text-foreground"
                      >
                        <span className="font-mono text-xs text-muted-foreground">[{num}]</span>
                        <span className="flex-1 text-2xl font-medium tracking-tight sm:text-3xl">{row.title}</span>
                        <PlusIcon
                          className={cn(
                            "size-5 text-muted-foreground transition-transform duration-500",
                            isOpen && "rotate-45"
                          )}
                        />
                      </button>
                      <div
                        className={cn(
                          "grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]",
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        )}
                      >
                        <ul className="overflow-hidden">
                          {row.items.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                onClick={close}
                                className="group flex items-center justify-between gap-4 border-t border-border/80 py-3.5 pl-8 text-muted-foreground transition-colors hover:text-foreground"
                              >
                                <span className="text-sm tracking-wide">{item.title}</span>
                                <ArrowSlide className="text-muted-foreground transition-colors group-hover:text-foreground" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </nav>

            <div className="relative z-10 flex items-center justify-between gap-4 border-t border-border/80 px-6 py-5 sm:py-6">
              <Link
                href="#contact"
                onClick={close}
                className="group relative flex h-11 flex-1 items-center justify-center gap-3 overflow-hidden rounded-full bg-primary px-6 text-xs sm:text-sm font-semibold tracking-widest text-primary-foreground uppercase shadow-md shadow-primary/20 transition-colors"
              >
                <span className="absolute inset-[-2px] translate-y-full bg-[color-mix(in_oklch,var(--primary),white_18%)] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0" />
                <span className="relative z-10 flex items-center gap-3 transition-colors duration-500 text-primary-foreground">
                  Get in touch <ArrowSlide />
                </span>
              </Link>
            </div>
          </div>,
          document.body
        )}
    </div>
  )
}
