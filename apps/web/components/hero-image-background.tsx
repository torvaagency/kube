import Image from "next/image"

import { cn } from "@workspace/ui/lib/utils"

/**
 * Hero background using /background.avif, adapted for light and dark modes.
 */
export function HeroImageBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none",
        "[mask-image:linear-gradient(to_bottom,black_0%,black_75%,transparent_100%)]",
        className
      )}
    >
      <Image
        src="/background.avif"
        alt=""
        fill
        priority
        unoptimized
        className="object-cover object-top opacity-30 dark:opacity-85 scale-110 blur-2xl transition-opacity duration-500"
      />
      {/* Soft gradient veil to ensure text contrast across both light and dark themes */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background dark:from-background/30 dark:via-background/60 dark:to-background transition-colors duration-500" />
    </div>
  )
}
