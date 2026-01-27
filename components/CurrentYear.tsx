"use client"
import { useEffect, useState } from "react"

export default function CurrentYear() {
  const [year, setYear] = useState<string>("")

  useEffect(() => {
    setYear(String(new Date().getFullYear()))
  }, [])

  if (!year) return null // nothing during prerender
  return <span suppressHydrationWarning>{year}</span>
}
