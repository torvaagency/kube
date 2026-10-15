import { CheckIcon } from "lucide-react"

const uptime = [62, 78, 70, 88, 74, 92, 80, 96, 84, 90, 94, 98]

/** Illustrative control-panel preview used under the hero (placeholder data, not a real customer). */
export function HeroDashboard() {
  return (
    <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6">
      <div aria-hidden className="pointer-events-none absolute inset-x-16 -top-8 -z-10 h-48 rounded-full bg-primary/20 dark:bg-primary/25 blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
      <div aria-hidden className="pointer-events-none absolute right-10 bottom-0 -z-10 h-40 w-64 rounded-full bg-primary/15 blur-3xl animate-[pulse_8s_ease-in-out_1.5s_infinite]" />
      <div className="overflow-hidden rounded-2xl border bg-card text-left shadow-2xl shadow-black/5 dark:shadow-primary/10 transition-all duration-500 hover:shadow-primary/20 hover:-translate-y-1">
        {/* Window bar */}
        <div className="flex items-center justify-between gap-3 border-b px-4 py-2.5 sm:px-5 sm:py-3">
          <div className="flex shrink-0 gap-1.5">
            <span className="size-2.5 rounded-full bg-muted-foreground/30 transition-colors hover:bg-red-500/60 sm:size-3" />
            <span className="size-2.5 rounded-full bg-muted-foreground/30 transition-colors hover:bg-primary/60 sm:size-3" />
            <span className="size-2.5 rounded-full bg-muted-foreground/30 transition-colors hover:bg-green-500/60 sm:size-3" />
          </div>
          <div className="mx-2 flex h-7 max-w-xs flex-1 items-center justify-center truncate rounded-full bg-muted px-3 text-xs text-muted-foreground">
            plesk.yourbusiness.com.au
          </div>
          <span className="hidden shrink-0 items-center gap-2 text-xs font-medium text-foreground sm:flex">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Live
          </span>
        </div>

        <div className="grid gap-px bg-border md:grid-cols-3">
          {/* Domain */}
          <div className="bg-card p-5 sm:p-6">
            <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">Site & Server</p>
            <p className="mt-2.5 truncate text-lg font-semibold tracking-tight sm:text-xl">app.yourbusiness.com</p>
            <span className="mt-2.5 inline-flex items-center rounded-full bg-primary/20 px-2.5 py-0.5 text-xs font-semibold text-foreground border border-primary/40">
              Active
            </span>
            <ul className="mt-5 flex flex-col gap-2.5 text-xs sm:text-sm">
              {["SSL certificate valid", "DNS propagated", "Daily backup complete"].map((item) => (
                <li key={item} className="group/item flex items-center gap-2.5">
                  <span className="grid size-4.5 shrink-0 place-items-center rounded-full bg-primary/20 text-primary transition-transform duration-300 group-hover/item:scale-110">
                    <CheckIcon className="size-3" />
                  </span>
                  <span className="truncate transition-colors group-hover/item:text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Uptime */}
          <div className="bg-card p-5 sm:p-6">
            <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">Uptime · 30 days</p>
            <p className="mt-2.5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">99.99%</p>
            <div className="mt-5 flex h-16 items-end gap-1 sm:h-20 sm:gap-1.5">
              {uptime.map((h, i) => (
                <span
                  key={i}
                  style={{ height: `${h}%` }}
                  className="flex-1 rounded-sm bg-primary first:rounded-l-md last:rounded-r-md transition-all duration-300 hover:scale-y-115 hover:brightness-110 origin-bottom cursor-pointer"
                  title={`Day ${i + 1}: 100% uptime`}
                />
              ))}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">No incidents in the last 30 days</p>
          </div>

          {/* Resources */}
          <div className="bg-card p-5 sm:p-6">
            <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">Server resources</p>
            <div className="mt-4 flex flex-col gap-4">
              {[
                ["CPU", 24, "bg-primary"],
                ["Memory", 41, "bg-primary"],
                ["Disk", 18, "bg-primary"],
              ].map(([label, value, color]) => (
                <div key={label as string} className="group/res">
                  <div className="mb-1.5 flex justify-between text-xs sm:text-sm">
                    <span className="font-medium transition-colors group-hover/res:text-primary">{label}</span>
                    <span className="font-mono text-muted-foreground">{value}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-muted sm:h-2">
                    <div style={{ width: `${value}%` }} className={`h-full rounded-full ${color} transition-all duration-500 group-hover/res:brightness-110 group-hover/res:scale-x-105 origin-left`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
