import type { Metadata } from "next"
import { Geist_Mono, Inter, Plus_Jakarta_Sans } from "next/font/google"

import "@workspace/ui/globals.css"
import { SmoothScroll } from "@/components/smooth-scroll"
import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@workspace/ui/lib/utils"

export const metadata: Metadata = {
  title: "kube — Web Development, Mobile Apps & Managed Plesk Hosting",
  description: "Bespoke websites, mobile apps, and fully managed Plesk servers. Built and managed directly with you.",
}

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontDisplay = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, fontDisplay.variable, "font-sans", inter.variable)}
    >
      <body>
        <ThemeProvider>
          <SmoothScroll />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
