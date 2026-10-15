import { ArrowSlide } from "@/components/arrow-slide"
import { cn } from "@workspace/ui/lib/utils"

export function SectionLabel({
  label,
  index,
  className,
}: {
  label: string
  index?: string
  className?: string
}) {
  return (
    <div className={cn("mb-12 flex items-center gap-4 border-b pb-8 md:mb-16", className)}>
      <ArrowSlide className="size-6" />
      {index && (
        <span className="text-xs tracking-widest text-muted-foreground">
          [ {index} ]
        </span>
      )}
      <span className="text-xs tracking-widest text-muted-foreground">
        {label}
      </span>
    </div>
  )
}
