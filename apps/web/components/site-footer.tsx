import Link from "next/link"

import { ArrowSlide } from "@/components/arrow-slide"
import { SectionLabel } from "@/components/section-label"

const columns = [
  {
    title: "Navigation",
    items: [
      { label: "Services", href: "#services" },
      { label: "Hosting", href: "#hosting" },
      { label: "Platform", href: "#platform" },
      { label: "Why Kube", href: "#why-kube" },
    ],
  },
  {
    title: "Information",
    items: [
      { label: "Process", href: "#process" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Direct",
    items: [
      { label: "Start Project", href: "#contact" },
      { label: "Email Directly", href: "mailto:hello@kube.example" },
    ],
  },
]

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group flex items-center justify-between gap-3 py-1.5 transition-transform duration-200 hover:translate-x-1">
      <span className="text-xs font-medium tracking-wider text-muted-foreground transition-colors duration-300 group-hover:text-foreground sm:text-sm">
        {children}
      </span>
      <ArrowSlide className="size-3.5 text-muted-foreground transition-colors duration-300 group-hover:text-foreground" />
    </Link>
  )
}

export function SiteFooter() {
  return (
    <footer className="relative z-10 w-full overflow-hidden rounded-t-[2rem] border-t border-x border-border/80 bg-muted/50 px-6 pt-12 sm:rounded-t-[2.5rem] sm:pt-16 md:rounded-t-[3rem] md:px-12 md:pt-18">
      <div className="mx-auto max-w-7xl">
        <SectionLabel label="Footer" index="ft" />

        <div className="mb-14 grid gap-12 sm:mb-16 md:mb-20 lg:grid-cols-12 lg:gap-8">
          <h3 className="max-w-lg text-2xl leading-snug font-normal sm:text-3xl md:text-4xl lg:col-span-5">
            Custom websites, mobile apps, and managed Plesk servers.
            <br />
            <span className="text-muted-foreground">Direct &amp; Reliable.</span>
          </h3>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-7">
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-1.5">
                <h4 className="mb-3 text-xs tracking-widest text-muted-foreground uppercase">{col.title}</h4>
                {col.items.map((item) => (
                  <FooterLink key={item.href} href={item.href}>
                    {item.label}
                  </FooterLink>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full justify-center overflow-hidden pb-4">
          <p className="w-full select-none text-center font-(family-name:--font-display) text-[8vw] leading-none font-semibold tracking-widest text-foreground/80 uppercase transition-all duration-700 ease-out hover:tracking-[0.14em] hover:text-primary md:text-[8vw]">
            kube
          </p>
        </div>
        <p className="border-t py-5 text-xs tracking-widest text-muted-foreground">
          © {new Date().getFullYear()} kube. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
