import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"

/*
 * Two stacked arrows inside a clipped box: on hover the first slides out and the
 * second slides in from the opposite corner. Parent needs `group` (or the Button,
 * which already provides `group/button`).
 * Class names are written out in full so Tailwind can detect them.
 */
const motion = {
  "up-right": {
    group: [
      "group-hover:translate-x-full group-hover:-translate-y-full",
      "-translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0",
    ],
    button: [
      "group-hover/button:translate-x-full group-hover/button:-translate-y-full",
      "-translate-x-full translate-y-full group-hover/button:translate-x-0 group-hover/button:translate-y-0",
    ],
  },
  right: {
    group: [
      "group-hover:translate-x-full",
      "-translate-x-full group-hover:translate-x-0",
    ],
    button: [
      "group-hover/button:translate-x-full",
      "-translate-x-full group-hover/button:translate-x-0",
    ],
  },
} as const

export function ArrowSlide({
  variant = "up-right",
  group = "group",
  className,
}: {
  variant?: keyof typeof motion
  group?: "group" | "button"
  className?: string
}) {
  const Icon = variant === "right" ? ArrowRightIcon : ArrowUpRightIcon
  const [out, into] = motion[variant][group]
  const base =
    "absolute inset-0 size-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"

  return (
    <span aria-hidden className={cn("relative block size-4 shrink-0 overflow-hidden", className)}>
      <Icon className={cn(base, out)} />
      <Icon className={cn(base, into)} />
    </span>
  )
}
