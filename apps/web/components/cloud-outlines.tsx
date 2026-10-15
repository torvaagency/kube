"use client"

import { cn } from "@workspace/ui/lib/utils"

/**
 * High-precision vector cloud shapes (white stroke outlines).
 */
function CloudShape1({ className }: { className?: string }) {
  // Classic cumulus cloud outline with soft base and 4 curved lobes
  return (
    <svg
      viewBox="0 0 120 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M25 55h70a16 16 0 0 0 12-26 22 22 0 0 0-32-15 28 28 0 0 0-42 7A18 18 0 0 0 25 55z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Delicate inner contour arc for depth */}
      <path
        d="M52 28a16 16 0 0 1 22 4"
        stroke="white"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray="2 3"
        strokeOpacity="0.45"
      />
    </svg>
  )
}

function CloudShape2({ className }: { className?: string }) {
  // Elongated cirrus / cloud bank outline
  return (
    <svg
      viewBox="0 0 150 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M30 54h90a16 16 0 0 0 10-25 22 22 0 0 0-34-12 28 28 0 0 0-48 4 20 20 0 0 0-18 33z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Delicate inner contour arc */}
      <path
        d="M62 26a18 18 0 0 1 26 2"
        stroke="white"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray="2 4"
        strokeOpacity="0.45"
      />
    </svg>
  )
}

function CloudShape3({ className }: { className?: string }) {
  // Compact puffy cloud outline
  return (
    <svg
      viewBox="0 0 90 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20 45h50a12 12 0 0 0 8-19 18 18 0 0 0-24-10 20 20 0 0 0-26 7 14 14 0 0 0-8 22z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Delicate inner accent arc */}
      <path
        d="M42 22a10 10 0 0 1 12 3"
        stroke="white"
        strokeWidth="1"
        strokeLinecap="round"
        strokeOpacity="0.4"
      />
    </svg>
  )
}

export function CloudOutlines() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-5 overflow-hidden select-none"
    >
      {/* Cloud 1 - Top Left: Fluffy cumulus outline, sits cleanly beneath navbar */}
      <div
        className={cn(
          "absolute top-24 sm:top-28 left-[3%] sm:left-[6%] md:left-[8%]",
          "w-36 sm:w-48 md:w-56 opacity-65 dark:opacity-50",
          "drop-shadow-[0_4px_16px_rgba(15,39,82,0.18)] dark:drop-shadow-[0_0_14px_rgba(255,255,255,0.25)]"
        )}
      >
        <CloudShape1 className="w-full h-auto" />
      </div>

      {/* Cloud 2 - Top Right: Elongated cirrus outline, sits cleanly beneath navbar */}
      <div
        className={cn(
          "absolute top-28 sm:top-32 right-[4%] sm:right-[8%] md:right-[10%]",
          "w-40 sm:w-56 md:w-64 opacity-60 dark:opacity-45",
          "drop-shadow-[0_4px_18px_rgba(15,39,82,0.18)] dark:drop-shadow-[0_0_16px_rgba(255,255,255,0.22)]"
        )}
      >
        <CloudShape2 className="w-full h-auto" />
      </div>

      {/* Cloud 3 - Mid Left: Compact puffy cloud beside hero subtext */}
      <div
        className={cn(
          "hidden sm:block absolute top-[22rem] sm:top-[24rem] left-[6%] sm:left-[10%] md:left-[14%]",
          "w-28 sm:w-36 md:w-44 opacity-55 dark:opacity-40",
          "drop-shadow-[0_3px_12px_rgba(15,39,82,0.15)] dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.20)]"
        )}
      >
        <CloudShape3 className="w-full h-auto" />
      </div>

      {/* Cloud 4 - Mid Right: Beside dashboard preview */}
      <div
        className={cn(
          "absolute top-[32rem] sm:top-[34rem] right-[5%] sm:right-[9%] md:right-[12%]",
          "w-36 sm:w-48 md:w-56 opacity-60 dark:opacity-45",
          "drop-shadow-[0_4px_16px_rgba(15,39,82,0.18)] dark:drop-shadow-[0_0_14px_rgba(255,255,255,0.25)]"
        )}
      >
        <CloudShape1 className="w-full h-auto" />
      </div>

      {/* Cloud 5 - Lower Center-Left: Subtle behind dashboard */}
      <div
        className={cn(
          "hidden md:block absolute bottom-16 sm:bottom-20 left-[16%] lg:left-[20%]",
          "w-36 lg:w-44 opacity-50 dark:opacity-35",
          "drop-shadow-[0_3px_14px_rgba(15,39,82,0.15)] dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.20)]"
        )}
      >
        <CloudShape2 className="w-full h-auto" />
      </div>
    </div>
  )
}
