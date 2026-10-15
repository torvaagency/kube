"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowRightIcon } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"
import { ArrowSlide } from "@/components/arrow-slide"
import { SectionLabel } from "@/components/section-label"

const tones = {
  navy: "bg-primary/15 text-foreground dark:text-primary border border-primary/30",
  navySoft: "bg-primary/10 text-muted-foreground dark:text-foreground/90 border border-primary/20",
  slate: "bg-muted text-foreground border border-border dark:bg-white/10 dark:text-white/90 dark:border-white/20",
} as const

type Tone = keyof typeof tones

const tabs: {
  id: string
  label: string
  title: string
  text: string
  points: string[]
  href: string
  cta: string
  visual: [string, string, Tone][]
}[] = [
  {
    id: "plesk",
    label: "Plesk Control Panel",
    title: "Plesk, set up and managed for you",
    text: "Every plan includes Plesk. We configure it, keep it patched and look after it, or hand you full admin access.",
    points: [
      "Domains, email and databases in one dashboard",
      "WordPress Toolkit with one-click staging",
      "Git, Docker and Node.js support",
      "Fully managed or full admin access",
    ],
    href: "#contact",
    cta: "Discuss Plesk management",
    visual: [
      ["Domains", "12 active", "navy"],
      ["Mailboxes", "48 healthy", "navySoft"],
      ["WordPress sites", "6 up to date", "navy"],
    ],
  },
  {
    id: "security",
    label: "Security",
    title: "Security built in, not bolted on",
    text: "SSL, DDoS protection and firewalls come standard on every plan, monitored around the clock.",
    points: [
      "Free SSL certificates that renew automatically",
      "Global DDoS protection and DNS",
      "Firewall and brute-force protection",
      "Malware scanning and clean-up",
    ],
    href: "#contact",
    cta: "Discuss DNS & security",
    visual: [
      ["SSL certificate", "Valid, auto-renews", "navySoft"],
      ["DDoS protection", "Active", "navy"],
      ["Malware scan", "No threats found", "navySoft"],
    ],
  },
  {
    id: "backups",
    label: "Backups",
    title: "Backups you never have to think about",
    text: "Daily offsite backups with simple one-click restores, so a mistake never becomes a disaster.",
    points: [
      "Daily automated offsite backups",
      "30-day retention",
      "One-click restore for sites and email",
      "Staging sites to test before you go live",
    ],
    href: "#hosting",
    cta: "View hosting plans",
    visual: [
      ["Last backup", "2 hours ago", "navy"],
      ["Retention", "30 days", "navySoft"],
      ["Restore", "One click", "slate"],
    ],
  },
  {
    id: "support",
    label: "Support",
    title: "Real engineers, fast answers",
    text: "Talk to the people who actually run your server. No ticket queues, no scripts.",
    points: [
      "Average response in 15 minutes",
      "24/7 monitoring and alerting",
      "Free migrations with zero downtime",
      "One team from design to hosting",
    ],
    href: "#contact",
    cta: "Get direct support",
    visual: [
      ["Average response", "15 min", "navySoft"],
      ["Monitoring", "24/7", "navy"],
      ["Migrations", "Free, no downtime", "navySoft"],
    ],
  },
]

/** Tabbed showcase with navy blue highlights. */
export function ProductTabs() {
  const [active, setActive] = useState(tabs[0]!.id)
  const tab = tabs.find((t) => t.id === active) ?? tabs[0]!

  return (
    <section id="platform" className="scroll-mt-24 relative overflow-hidden border-y bg-background/85 text-foreground backdrop-blur-xs">
      <div aria-hidden className="pointer-events-none absolute -top-32 left-1/3 h-80 w-[35rem] max-w-full -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -top-32 right-1/4 h-80 w-[35rem] max-w-full rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 md:py-20">
        <SectionLabel label="Platform" index="04" />
        <h2 className="mx-auto max-w-3xl text-center text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
          Built for production. Managed end to end.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground sm:text-base leading-relaxed">
          Everything a growing business needs to stay fast, secure and online, without the busywork.
        </p>

        <div className="mt-8 flex justify-center md:mt-12">
          <div
            role="tablist"
            aria-label="Platform features"
            className="inline-flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-border/80 bg-muted/70 p-1 backdrop-blur-sm sm:p-1.5"
          >
            {tabs.map((t) => {
              const isActive = t.id === active
              return (
                <button
                  key={t.id}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => setActive(t.id)}
                  className={cn(
                    "group relative overflow-hidden rounded-full px-3.5 py-1.5 text-xs font-medium tracking-tight whitespace-nowrap transition-colors duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] sm:px-5 sm:py-2 sm:text-sm",
                    isActive
                      ? "text-foreground shadow-sm ring-1 ring-border/50"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-0 rounded-full bg-background transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]",
                      isActive
                        ? "translate-y-0"
                        : "translate-y-full group-hover:translate-y-0"
                    )}
                  />
                  <span className="relative z-10">{t.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div key={tab.id} role="tabpanel" className="mt-8 grid items-center gap-8 animate-[fade-up_0.5s_ease-out_both] md:mt-12 lg:grid-cols-2 lg:gap-14">
          <div>
            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">{tab.title}</h3>
            <p className="mt-3 max-w-lg text-sm text-muted-foreground sm:text-base leading-relaxed">{tab.text}</p>
            <ul className="mt-6 flex flex-col gap-2.5 text-xs sm:text-sm">
              {tab.points.map((p) => (
                <li key={p} className="flex items-start gap-2.5">
                  <ArrowRightIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="text-foreground">{p}</span>
                </li>
              ))}
            </ul>
            <Link href={tab.href} className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline sm:text-base">
              {tab.cta} <ArrowSlide variant="right" className="text-primary" />
            </Link>
          </div>

          <div className="rounded-2xl border bg-card p-5 shadow-xl shadow-black/5 dark:shadow-none backdrop-blur sm:p-6 md:p-7">
            <p className="mb-4 text-xs font-semibold tracking-widest text-muted-foreground uppercase">Example overview</p>
            <div className="flex flex-col gap-2.5">
              {tab.visual.map(([label, value, tone]) => (
                <div key={label} className="group/item flex items-center justify-between gap-3 rounded-xl border bg-muted/40 px-4 py-3 transition-all duration-300 hover:bg-muted/70 hover:translate-x-1 hover:border-primary/30 sm:px-5 sm:py-3.5">
                  <span className="truncate text-xs font-medium text-foreground transition-colors group-hover/item:text-primary sm:text-sm">{label}</span>
                  <span className={cn("shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold transition-transform duration-300 group-hover/item:scale-105 sm:px-3 sm:py-1", tones[tone])}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
