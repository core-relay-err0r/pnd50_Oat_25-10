"use client"

import { type ReactNode, forwardRef } from "react"
import { cn } from "@/lib/utils"

interface ScrollSectionProps {
  id: string
  children: ReactNode
  className?: string
}

export const ScrollSection = forwardRef<HTMLDivElement, ScrollSectionProps>(({ id, children, className }, ref) => {
  return (
    <section
      ref={ref}
      id={id}
      data-section={id}
      className={cn("horizontal-section flex-shrink-0 overflow-y-auto overflow-x-hidden", className)}
      style={{
        width: "100vw",
        height: "100vh",
        minWidth: "100vw",
      }}
    >
      {children}
    </section>
  )
})

ScrollSection.displayName = "ScrollSection"
