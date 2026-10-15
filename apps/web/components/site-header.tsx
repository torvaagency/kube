"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@workspace/ui/components/navigation-menu"
import { MobileMenu } from "@/components/mobile-menu"
import { ThemeToggle } from "@/components/theme-toggle"

const navSections = [
  { title: "Services", href: "#services" },
  { title: "Hosting", href: "#hosting" },
  { title: "Platform", href: "#platform" },
  { title: "Why Kube", href: "#why-kube" },
  { title: "Process", href: "#process" },
  { title: "FAQ", href: "#faq" },
]

export function SiteHeader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const diff = currentScrollY - lastScrollY

      // Always show at top of page
      if (currentScrollY < 30) {
        setVisible(true)
      } else if (diff > 8) {
        // Scrolling down past threshold -> hide
        setVisible(false)
      } else if (diff < -8) {
        // Scrolling up past threshold -> show
        setVisible(true)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-3 sm:top-4 inset-x-0 z-50 mx-auto w-full max-w-7xl px-4 transition-transform duration-300 ease-in-out sm:px-6",
        visible ? "translate-y-0" : "-translate-y-24 pointer-events-none"
      )}
    >
      <div className="flex h-14 sm:h-16 items-center justify-between rounded-full border border-border/80 bg-background/85 pl-5 pr-2.5 shadow-lg shadow-black/5 dark:shadow-black/25 backdrop-blur-md transition-all sm:pl-7 sm:pr-3">
        {/* Left: Brand */}
        <div className="flex shrink-0 items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg sm:text-xl font-semibold tracking-tight">kube</span>
          </Link>
        </div>

        {/* Center: Navigation Menu with Section Links */}
        <div className="hidden lg:flex items-center justify-center">
          <NavigationMenu align="center">
            <NavigationMenuList className="gap-0.5 xl:gap-1">
              {navSections.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink
                    render={<Link href={item.href} />}
                    className="h-8.5 rounded-full px-3 text-xs xl:h-9 xl:px-3.5 xl:text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-muted/60 focus:text-foreground focus:bg-muted/60"
                  >
                    {item.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right: Actions, ThemeToggle & Mobile Menu */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
          <ThemeToggle />
          <Button
            size="sm"
            variant="default"
            className="hidden h-9 rounded-full px-4 text-xs font-semibold sm:inline-flex sm:h-9.5 sm:px-5 sm:text-sm"
            render={<Link href="#contact" />}
            nativeButton={false}
          >
            Get in touch
          </Button>
          <MobileMenu
            links={[
              ...navSections,
              { title: "Contact", href: "#contact" },
            ]}
          />
        </div>
      </div>
    </header>
  )
}
