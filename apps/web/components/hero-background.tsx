/** Minimal animated SVG backdrop: drawn lines and pulsing nodes. */
export function HeroBackground() {
  const nodes = [
    [192, 128, "0s"],
    [576, 320, "1.2s"],
    [896, 192, "2.4s"],
    [1088, 448, "0.6s"],
    [320, 512, "1.8s"],
    [704, 576, "3s"],
  ] as const

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden text-foreground [mask-image:linear-gradient(to_bottom,black_55%,transparent)]"
    >


      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1280 640"
        preserveAspectRatio="xMaxYMid slice"
        fill="none"
      >
        <g stroke="currentColor" strokeOpacity="0.35" strokeWidth="1">
          <path
            d="M192 128H576V320H896V192H1088V448"
            pathLength={1}
            strokeDasharray={1}
            style={{ animation: "draw-line 6s ease-in-out infinite alternate" }}
          />
          <path
            d="M320 512H704V576H1088V448"
            pathLength={1}
            strokeDasharray={1}
            style={{ animation: "draw-line 7s ease-in-out 1s infinite alternate" }}
          />
        </g>
        {nodes.map(([x, y, delay]) => (
          <rect
            key={`${x}-${y}`}
            x={x - 6}
            y={y - 6}
            width="12"
            height="12"
            fill="currentColor"
            style={{ animation: `pulse-square 4s ease-in-out ${delay} infinite` }}
          />
        ))}
      </svg>
    </div>
  )
}
