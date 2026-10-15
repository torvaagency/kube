import { ScrollText } from "@/components/scroll-text"
import { ArrowSlide } from "@/components/arrow-slide"
import Link from "next/link"
import {
  ArrowRightLeftIcon,
  BadgeDollarSignIcon,
  CheckIcon,
  ServerIcon,
  ShieldCheckIcon,
  UsersIcon,
  ZapIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import { Marquee } from "@/components/marquee"
import { SectionLabel } from "@/components/section-label"
import { Reveal } from "@/components/reveal"
import { SiteHeader } from "@/components/site-header"
import { HeroDashboard } from "@/components/hero-dashboard"
import { HeroImageBackground } from "@/components/hero-image-background"
import { CloudOutlines } from "@/components/cloud-outlines"
import { ProductTabs } from "@/components/product-tabs"
import { ContactForm } from "@/components/contact-form"

const services = [
  ["01", "Plesk & Managed Servers", "Full Plesk server setup, migrations, maintenance, and 24/7 reliability.", "plesk-management"],
  ["02", "Custom Web Development", "Fast, modern web applications and sites built cleanly for your business.", "web-design"],
  ["03", "Mobile App Development", "Cross-platform iOS and Android apps, from build to app store launch.", "mobile-app-development"],
  ["04", "DNS, SSL & Security", "Fast Anycast DNS, SSL management, firewalls, and server hardening.", "dns-security"],
]

const plans = [
  ["Web Hosting", "$9", "Plesk-powered shared hosting for small business sites.", ["10 GB SSD", "Free SSL", "Daily backups"]],
  ["WordPress", "$24", "Managed WordPress hosting with Plesk WordPress Toolkit.", ["50 GB NVMe", "Auto updates", "Staging site"]],
  ["VPS", "$49", "Dedicated resources, full root access and Plesk included.", ["4 vCPU / 8 GB", "Full root", "99.99% uptime"]],
] as const

const steps = [
  ["01", "Scope", "You talk directly with us. We clarify exactly what you need built or hosted."],
  ["02", "Architecture", "Clear specification, clean design, and optimal server environment approved upfront."],
  ["03", "Build & Configure", "We build your software and configure your Plesk server with hardened security."],
  ["04", "Launch & Manage", "Seamless deployment, zero-downtime cutover, and direct ongoing support."],
]

const stats = [
  ["99.99%", "Uptime guarantee"],
  ["100%", "Direct communication"],
  ["15 min", "Typical response time"],
]

const reasons = [
  ["Plesk, done properly", "We set up, tune, secure, and maintain your Plesk servers daily so you never wrestle with server administration."],
  ["Direct with the builders", "No account managers, sales reps, or ticket queues. You work directly with the team writing code and managing your servers."],
  ["Zero finger-pointing", "Because we handle both your applications and your hosting environment, issues are diagnosed and resolved immediately."],
  ["Security built in", "Automated SSL, server firewalls, Fail2Ban, DDoS mitigation, and daily offsite backups come standard."],
  ["Hassle-free migrations", "Moving from another host? We handle the full migration of your sites, databases, and mailboxes with zero downtime."],
  ["Honest, transparent pricing", "Straightforward monthly hosting and clear milestone project quotes with no hidden surprises."],
]

const reasonIcons = [
  [ServerIcon, "bg-primary/15 text-primary border border-primary/30"],
  [UsersIcon, "bg-primary/15 text-primary border border-primary/30"],
  [ZapIcon, "bg-primary/15 text-primary border border-primary/30"],
  [ShieldCheckIcon, "bg-primary/15 text-primary border border-primary/30"],
  [ArrowRightLeftIcon, "bg-primary/15 text-primary border border-primary/30"],
  [BadgeDollarSignIcon, "bg-primary/15 text-primary border border-primary/30"],
] as const

const statDetails = [
  ["text-foreground", "bg-primary", "Monitored 24/7 with immediate alerting."],
  ["text-foreground", "bg-primary", "Work directly with your dedicated developers and systems engineers."],
  ["text-foreground", "bg-primary", "Direct, knowledgeable help when you need it."],
] as const

const faqs = [
  ["Can you migrate my existing website and server to Plesk?", "Yes. We migrate your websites, databases, and mailboxes from cPanel or other hosts with zero downtime."],
  ["Do I need to know how to manage a server or Plesk?", "No. We configure, optimize, update, and manage the server for you. If you prefer hands-on control, you also get full admin access."],
  ["Do you register or sell domain names?", "No, we focus on engineering: web development, app development, and running managed Plesk servers. Bring your domain from any registrar (Cloudflare, Namecheap, Google, etc.) and we handle DNS configuration, records, and SSL for you."],
  ["What happens if my site or server has an issue?", "Automated 24/7 monitoring alerts us immediately so we can investigate and resolve it right away without you having to chase support tickets."],
  ["Do you build both mobile apps and websites?", "Yes. We design and build full-stack web applications, custom websites, and iOS & Android mobile apps, along with the backend infrastructure."],
  ["Are there lock-in contracts?", "No. Managed hosting is flexible month-to-month, and development work is scoped with clear fixed milestones."],
]

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="relative z-10 w-full max-w-full overflow-x-hidden">
        {/* Hero */}
        <div className="relative overflow-hidden">
          <HeroImageBackground />
          <CloudOutlines />
          <section className="mx-auto flex max-w-4xl flex-col items-center px-4 pt-20 pb-12 text-center sm:px-6 sm:pt-28 md:pt-32 md:pb-16">

            <h1 className="text-4xl leading-[1.12] font-semibold tracking-tight break-words animate-[fade-up_0.8s_ease-out_0.1s_both] sm:text-5xl md:text-6xl">
              Websites, apps & managed servers.{" "}
              <span className="text-primary">Done right.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-sm font-normal text-foreground/90 leading-relaxed text-pretty animate-[fade-up_0.8s_ease-out_0.25s_both] sm:text-base md:text-lg">
              Custom websites, mobile apps, and fully managed Plesk servers. One dedicated technical partner with zero middlemen.
            </p>
            <div className="mt-8 flex flex-col gap-3.5 animate-[fade-up_0.8s_ease-out_0.4s_both] sm:flex-row">
              <Button size="lg" className="h-11 px-6 text-sm font-semibold sm:text-base sm:px-7" render={<Link href="#contact" />} nativeButton={false}>
                Start your project <ArrowSlide variant="right" group="button" />
              </Button>
              <Button size="lg" variant="outline" className="h-11 px-6 text-sm sm:text-base sm:px-7" render={<Link href="#hosting" />} nativeButton={false}>
                Explore server plans
              </Button>
            </div>
          </section>
          <div className="pb-14 md:pb-20">
            <HeroDashboard />
          </div>
        </div>

        <Marquee items={["Managed Plesk Servers", "Web Development", "Mobile Apps", "WordPress Hosting", "VPS Management", "DNS & SSL", "Direct Support"]} />

        {/* Stats */}
        <section className="relative overflow-hidden mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:py-20">
          <SectionLabel label="Results" index="01" />
          <h2 className="mx-auto max-w-3xl text-center text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">Reliability you can measure.</h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border bg-border md:mt-14 md:grid-cols-3">
            {stats.map(([value, label], i) => (
              <Reveal key={label} delay={i * 120} className="h-full bg-background/85 backdrop-blur-xs">
                <div className="group flex h-full flex-col p-6 transition-all duration-300 hover:bg-muted/30 sm:p-7 lg:p-8">
                  <p className={`text-4xl font-semibold tracking-tight transition-transform duration-300 origin-left group-hover:scale-[1.02] sm:text-5xl lg:text-6xl ${statDetails[i]![0]}`}>{value}</p>
                  <p className="mt-3 text-lg font-semibold tracking-tight transition-colors duration-300 group-hover:text-primary sm:text-xl">{label}</p>
                  <p className="mt-1.5 text-xs text-muted-foreground sm:text-sm">{statDetails[i]![2]}</p>
                  <div className="mt-6 h-1.5 w-16 overflow-hidden rounded-full bg-muted">
                    <div className={`h-full w-2/3 rounded-full transition-all duration-500 ease-out group-hover:w-full ${statDetails[i]![1]}`} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-24 relative overflow-hidden mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:py-20">
          <div aria-hidden className="pointer-events-none absolute -top-12 left-1/4 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl filter animate-[pulse_7s_ease-in-out_infinite] dark:bg-primary/10" />
          <div aria-hidden className="pointer-events-none absolute bottom-10 right-1/4 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl filter animate-[pulse_9s_ease-in-out_1s_infinite]" />
          <SectionLabel label="Services" index="02" />
          <ScrollText className="mx-auto max-w-3xl text-center text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">Engineered for your business.</ScrollText>
          <p className="mx-auto mt-3.5 max-w-2xl text-center text-sm text-muted-foreground sm:text-base leading-relaxed">Websites, mobile apps, and managed Plesk infrastructure—handled directly by our experienced team.</p>
          <div className="mt-10 grid overflow-hidden rounded-2xl border bg-border gap-px md:mt-14 md:grid-cols-2">
            {services.map(([num, title, text, slug], i) => (
              <Reveal key={title} delay={(i % 2) * 120} id={slug} className="scroll-mt-28 h-full bg-background/85 backdrop-blur-xs">
                <Link href="#contact" className="group block h-full p-6 transition-all duration-500 hover:bg-muted/40 hover:-translate-y-0.5 sm:p-8 lg:p-10">
                  <div className="flex items-start justify-between">
                    <p className="font-mono text-xs text-muted-foreground transition-colors duration-300 group-hover:text-primary sm:text-sm">{num}</p>
                    <ArrowSlide className="size-5 text-muted-foreground transition-colors duration-300 group-hover:text-foreground" />
                  </div>
                  <h3 className="mt-10 text-xl font-medium tracking-tight transition-colors duration-300 group-hover:text-primary sm:mt-14 sm:text-2xl md:text-3xl">{title}</h3>
                  <p className="mt-3 max-w-md text-xs text-muted-foreground leading-relaxed sm:text-sm">{text}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Hosting */}
        <section id="hosting" className="scroll-mt-24 relative overflow-hidden bg-muted/20">
          <div className="relative overflow-hidden mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:py-20">
            <div aria-hidden className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-80 w-[500px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl filter animate-[pulse_8s_ease-in-out_infinite] dark:bg-primary/10" />
            <SectionLabel label="Hosting" index="03" />
            <ScrollText className="mx-auto max-w-3xl text-center text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">Hosting that stays up.</ScrollText>
            <p className="mx-auto mt-3.5 max-w-2xl text-center text-sm text-muted-foreground sm:text-base leading-relaxed">Plesk-powered plans with free SSL, daily backups and a 99.99% uptime guarantee.</p>
            <div className="mt-10 grid gap-6 md:mt-14 md:grid-cols-3 items-stretch">
              {plans.map(([name, price, text, features], i) => {
                const planSlug = name.toLowerCase().replace(/\s+/g, "-")
                const isPopular = i === 1
                return (
                  <Reveal
                    key={name}
                    delay={i * 120}
                    id={`plan-${planSlug}`}
                    className={cn(
                      "scroll-mt-28 group relative flex flex-col rounded-2xl bg-background/90 backdrop-blur-xs p-6 sm:p-7 lg:p-8 transition-all duration-300",
                      isPopular
                        ? "border-2 border-primary/70 ring-4 ring-primary/10 shadow-2xl shadow-primary/10 md:-translate-y-2 hover:-translate-y-3"
                        : "border border-border/80 hover:border-primary/40 hover:-translate-y-1 hover:bg-muted/30"
                    )}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2.5">
                      <h3 className="text-lg font-semibold tracking-tight transition-colors duration-300 group-hover:text-primary sm:text-xl">{name}</h3>
                      {isPopular && (
                        <span className="relative flex shrink-0 items-center gap-1.5 rounded-full bg-primary/20 px-2.5 py-0.5 text-xs font-semibold text-foreground border border-primary/40 shadow-[0_0_14px_rgba(30,58,138,0.25)]">
                          <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                          Most popular
                        </span>
                      )}
                    </div>
                    <p className="mt-6 text-4xl font-semibold tracking-tight sm:mt-8 sm:text-5xl">
                      {price}
                      <span className="text-base font-normal text-muted-foreground"> /mo</span>
                    </p>
                    <p className="mt-3 text-xs text-muted-foreground sm:text-sm">{text}</p>
                    <ul className="mt-6 mb-8 flex flex-col gap-2.5 border-t border-border/70 pt-6 text-xs sm:text-sm">
                      {features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5">
                          <CheckIcon className={cn("size-4 shrink-0 transition-colors duration-300", isPopular ? "text-primary" : "text-foreground group-hover:text-primary")} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant={isPopular ? "default" : "outline"}
                      size="sm"
                      className={cn(
                        "mt-auto h-10 text-xs font-semibold transition-all duration-300 sm:h-11 sm:text-sm",
                        isPopular ? "shadow-md shadow-primary/25" : "group-hover:border-primary/50"
                      )}
                      render={<Link href="#contact" />}
                      nativeButton={false}
                    >
                      Choose {name} <ArrowSlide variant="right" group="button" />
                    </Button>
                  </Reveal>
                )
              })}
            </div>

            {/* Hostinger-style Trust & Guarantee Bar */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-2xl border border-border/60 bg-background/60 px-6 py-4 text-xs sm:text-sm text-muted-foreground backdrop-blur-sm">
              <span className="flex items-center gap-2">
                <CheckIcon className="size-4 text-primary" /> 30-day money-back guarantee
              </span>
              <span className="flex items-center gap-2">
                <CheckIcon className="size-4 text-primary" /> 99.99% uptime SLA
              </span>
              <span className="flex items-center gap-2">
                <CheckIcon className="size-4 text-primary" /> Free zero-downtime migration
              </span>
              <span className="flex items-center gap-2">
                <CheckIcon className="size-4 text-primary" /> 15-minute response time
              </span>
            </div>
          </div>
        </section>

        {/* Platform */}
        <ProductTabs />

        {/* Why Kube */}
        <section id="why-kube" className="scroll-mt-24 relative overflow-hidden bg-muted/20">
          <div className="relative overflow-hidden mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:py-20">
            <SectionLabel label="Why Kube" index="05" />
            <ScrollText className="mx-auto max-w-3xl text-center text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">Built for businesses that rely on being online.</ScrollText>
            <p className="mx-auto mt-3.5 max-w-2xl text-center text-sm text-muted-foreground sm:text-base leading-relaxed">The practical things that make Kube easier to work with than a typical host.</p>
            <div className="mt-10 grid overflow-hidden rounded-2xl border bg-border gap-px md:mt-14 md:grid-cols-2 lg:grid-cols-3">
              {reasons.map(([title, text], i) => (
                <Reveal key={title} delay={(i % 3) * 100} className="h-full bg-background/85 backdrop-blur-xs">
                  <div className="group h-full p-6 transition-all duration-300 hover:bg-muted/40 hover:-translate-y-1 sm:p-7 lg:p-8">
                    {(() => {
                      const [Icon, tone] = reasonIcons[i]!
                      return (
                        <span className={`grid size-11 place-items-center rounded-2xl ${tone} transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:rotate-3`}>
                          <Icon className="size-5 transition-transform duration-300 group-hover:scale-110" />
                        </span>
                      )
                    })()}
                    <h3 className="mt-6 text-lg font-medium tracking-tight transition-colors duration-300 group-hover:text-primary sm:mt-8 sm:text-xl">{title}</h3>
                    <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed sm:text-sm">{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="scroll-mt-24 relative overflow-hidden mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:py-20">
          <div aria-hidden className="pointer-events-none absolute top-20 right-10 -z-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl filter animate-[pulse_8s_ease-in-out_infinite]" />
          <SectionLabel label="Process" index="06" />
          <ScrollText className="mx-auto max-w-3xl text-center text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">A clear, straightforward process.</ScrollText>
          <p className="mx-auto mt-3.5 max-w-2xl text-center text-sm text-muted-foreground sm:text-base leading-relaxed">Four steps from initial discussion to live deployment and ongoing server care.</p>
          <div className="mt-10 grid overflow-hidden rounded-2xl border bg-border gap-px md:mt-14 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(([num, title, text], i) => (
              <Reveal key={title} delay={i * 100} className="h-full bg-background/85 backdrop-blur-xs">
                <div className="group h-full p-5 transition-all duration-300 hover:bg-muted/40 hover:-translate-y-1 sm:p-6 lg:p-6 xl:p-7">
                  <p className="font-mono text-xs text-muted-foreground transition-colors duration-300 group-hover:text-primary sm:text-sm">{num}</p>
                  <h3 className="mt-8 text-lg font-medium tracking-tight transition-colors duration-300 group-hover:text-primary sm:mt-12 sm:text-xl">{title}</h3>
                  <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed sm:text-sm">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-24 relative overflow-hidden bg-muted/20">
          <div className="relative overflow-hidden mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:py-20">
            <SectionLabel label="FAQ" index="07" />
            <ScrollText className="mx-auto max-w-3xl text-center text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">Questions, answered.</ScrollText>
            <p className="mx-auto mt-3.5 max-w-2xl text-center text-sm text-muted-foreground sm:text-base leading-relaxed">Have a specific requirement? Reach out and you'll speak directly with us.</p>
            <div className="mt-10 flex flex-col overflow-hidden rounded-2xl border bg-border gap-px md:mt-14">
              {faqs.map(([q, a]) => (
                <details key={q} className="group bg-background/85 backdrop-blur-xs px-5 py-4 transition-all duration-300 hover:bg-muted/40 sm:px-6 sm:py-5 md:px-8">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium tracking-tight transition-colors duration-200 group-hover:text-primary sm:text-lg [&::-webkit-details-marker]:hidden">
                    <span>{q}</span>
                    <span aria-hidden className="shrink-0 font-mono text-lg text-muted-foreground transition-all duration-300 group-open:rotate-45 group-hover:text-primary group-hover:scale-125 sm:text-xl">+</span>
                  </summary>
                  <p className="mt-3 max-w-3xl text-xs text-muted-foreground leading-relaxed sm:text-sm">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24 relative overflow-hidden mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute top-10 left-1/3 -z-10 h-96 w-[35rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl filter animate-[pulse_8s_ease-in-out_infinite] dark:bg-primary/10"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute top-20 right-1/4 -z-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl filter animate-[pulse_10s_ease-in-out_1.5s_infinite]"
          />
          <SectionLabel label="Contact" index="08" />
          <ScrollText className="mx-auto max-w-3xl text-center text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
            Let&apos;s talk about your project.
          </ScrollText>
          <p className="mx-auto mt-3.5 max-w-2xl text-center text-sm text-muted-foreground sm:text-base leading-relaxed">
            Tell us about your server, website, or mobile app needs and we&apos;ll get back to you with clear pricing and answers.
          </p>

          <div className="mt-10 grid gap-10 sm:mt-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-border/80 bg-muted/20 p-6 sm:p-8">
                <ContactForm />
              </div>
            </div>

            <div className="flex flex-col justify-between gap-8 rounded-2xl border border-border/80 bg-muted/20 p-6 sm:p-8 lg:col-span-5">
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-xs font-semibold tracking-widest text-primary uppercase">Direct Support</p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">Direct collaboration</h3>
                  <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed sm:text-sm">
                    No middlemen or ticket tiers. You communicate directly with the engineers writing your code and managing your servers.
                  </p>
                </div>

                <div className="space-y-3.5 border-t pt-5 text-xs sm:text-sm">
                  {[
                    ["Response time", "Under 15 minutes"],
                    ["Server monitoring", "24/7/365 active"],
                    ["Migrations", "Free with zero downtime"],
                    ["Availability", "Mon–Fri, AEST"],
                  ].map(([label, val]) => (
                    <div key={label} className="group flex items-start justify-between gap-4 transition-colors duration-200">
                      <span className="text-muted-foreground transition-colors duration-200 group-hover:text-foreground">{label}</span>
                      <span className="shrink-0 text-right font-medium text-foreground transition-colors duration-200 group-hover:text-primary">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-border/60 bg-background/60 p-4 backdrop-blur-sm">
                <p className="text-xs font-medium text-muted-foreground">
                  Prefer email directly? Reach out anytime at{" "}
                  <a href="mailto:hello@kube.example" className="text-foreground underline underline-offset-4">
                    hello@kube.example
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
