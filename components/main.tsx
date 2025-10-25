import type React from "react"
import { cn } from "@/lib/utils"

export function Main({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <main className={cn("md:pl-64 h-full", className)} {...props}>
      {children}
    </main>
  )
}
