"use client"

import { useEffect } from "react"

const LOCALE_COOKIE = "NEXT_LOCALE"

export function LocaleSetter({ locale }: { locale: string }) {
  useEffect(() => {
    // Set locale cookie when user visits a localized page
    document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=${60 * 60 * 24 * 365}`
  }, [locale])

  return null
}
