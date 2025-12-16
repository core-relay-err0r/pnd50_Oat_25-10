import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { i18n } from "@/lib/i18n-config"

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if the pathname is missing a locale
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )

  // If pathname is missing locale and starts with /th, it's already handled
  if (pathname.startsWith("/th")) {
    return NextResponse.next()
  }

  // Allow default locale (English) without prefix
  if (pathnameIsMissingLocale) {
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, static files)
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|og-image.jpg).*)",
  ],
}
