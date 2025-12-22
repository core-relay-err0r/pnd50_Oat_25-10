import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Country to locale mapping
const COUNTRY_LOCALE_MAP: Record<string, string> = {
  // Thai
  TH: "th",

  // Russian-speaking countries
  RU: "ru",
  BY: "ru", // Belarus
  KZ: "ru", // Kazakhstan
  UA: "ru", // Ukraine

  // Chinese-speaking countries/regions
  CN: "cn",
  HK: "cn", // Hong Kong
  TW: "cn", // Taiwan
  MO: "cn", // Macau
  SG: "cn", // Singapore (large Chinese population)
}

// Supported locales
const SUPPORTED_LOCALES = ["en", "th", "ru", "cn"]

// Paths that should not be redirected
const EXCLUDED_PATHS = ["/api", "/_next", "/static", "/favicon.ico", "/robots.txt", "/sitemap.xml", "/schedule/success"]

// Cookie name for storing user's preferred locale
const LOCALE_COOKIE = "NEXT_LOCALE"

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip excluded paths
  if (EXCLUDED_PATHS.some((path) => pathname.startsWith(path))) {
    return NextResponse.next()
  }

  // Skip if already on a locale path
  const currentLocale = SUPPORTED_LOCALES.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  )

  // Check for user's manual locale preference (cookie)
  const preferredLocale = request.cookies.get(LOCALE_COOKIE)?.value

  // If user has a preference and they're on root, redirect to their preferred locale
  if (preferredLocale && SUPPORTED_LOCALES.includes(preferredLocale)) {
    // If on root path and preference is not English, redirect
    if (pathname === "/" && preferredLocale !== "en") {
      const url = request.nextUrl.clone()
      url.pathname = `/${preferredLocale}`
      return NextResponse.redirect(url)
    }
    // If on a sub-page and preference is not English, redirect to localized version
    if (!currentLocale && preferredLocale !== "en") {
      const url = request.nextUrl.clone()
      url.pathname = `/${preferredLocale}${pathname}`
      return NextResponse.redirect(url)
    }
    return NextResponse.next()
  }

  // If already on a locale path, set the cookie and continue
  if (currentLocale) {
    const response = NextResponse.next()
    response.cookies.set(LOCALE_COOKIE, currentLocale === "en" ? "en" : currentLocale, {
      maxAge: 60 * 60 * 24 * 365, // 1 year
      path: "/",
    })
    return response
  }

  // Get country from Vercel's geo detection
  const country = request.geo?.country || "US"

  // Determine locale based on country
  const detectedLocale = COUNTRY_LOCALE_MAP[country] || "en"

  // If detected locale is English, stay on current path
  if (detectedLocale === "en") {
    const response = NextResponse.next()
    response.cookies.set(LOCALE_COOKIE, "en", {
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
    })
    return response
  }

  // Redirect to localized path
  const url = request.nextUrl.clone()

  // For root path, redirect to locale root
  if (pathname === "/") {
    url.pathname = `/${detectedLocale}`
  } else {
    // For other paths, prepend locale
    url.pathname = `/${detectedLocale}${pathname}`
  }

  const response = NextResponse.redirect(url)
  response.cookies.set(LOCALE_COOKIE, detectedLocale, {
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  })

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
}
