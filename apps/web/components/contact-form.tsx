"use client"

import { useState } from "react"

import { Button } from "@workspace/ui/components/button"

const field =
  "w-full rounded-xl border border-border/80 bg-background/80 px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"

export function ContactForm() {
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <div className="rounded-2xl border border-border/80 bg-muted/20 p-8 sm:p-10 text-center animate-[fade-up_0.5s_ease-out_both]">
        <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary/20 text-primary">
          <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-semibold tracking-tight">Thanks, message received.</h2>
        <p className="mt-3 text-muted-foreground">We&apos;ll review your requirements and respond directly within one business day.</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}
      className="flex flex-col gap-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium">
          Name
          <input required name="name" placeholder="Alex Smith" className={field} />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium">
          Email
          <input required type="email" name="email" placeholder="alex@company.com" className={field} />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm font-medium">
        Interested in
        <select name="topic" className={field}>
          <option>Managed Plesk Server / Hosting</option>
          <option>Custom Web Application / Website</option>
          <option>Mobile App Development (iOS & Android)</option>
          <option>Server Migration to Plesk</option>
          <option>Something else</option>
        </select>
      </label>
      <label className="flex flex-col gap-2 text-sm font-medium">
        Project details
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Tell us a bit about what you want to build or host..."
          className={field}
        />
      </label>
      <Button type="submit" size="lg" className="h-12 self-start rounded-full px-8 text-base font-semibold shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0">
        Send message
      </Button>
    </form>
  )
}
