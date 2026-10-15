import { cn } from "@workspace/ui/lib/utils"

/** Infinite scrolling ticker with rounded bordered container and edge fade. */
export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const row = (
    <div className="flex shrink-0 items-center gap-8 px-4 md:gap-12 md:px-6">
      {items.map((item) => (
        <div key={item} className="flex items-center gap-8 md:gap-12">
          <span className="font-heading text-sm font-medium tracking-tight whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground md:text-base">
            {item}
          </span>
          <span className="size-1.5 rounded-full bg-primary/40" />
        </div>
      ))}
    </div>
  )

  return (
    <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 my-6 md:my-10", className)}>
      <div
        className="relative overflow-hidden rounded-full border border-border/80 bg-muted/25 py-3.5 shadow-sm backdrop-blur-sm sm:py-4 md:py-4.5"
        aria-hidden
      >
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]">
          <div className="flex w-max animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
            {row}
            {row}
            {row}
            {row}
          </div>
        </div>
      </div>
    </div>
  )
}
