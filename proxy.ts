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

// Paths that should not be processed
const EXCLUDED_PATHS = ["/api", "/_next", "/static", "/favicon.ico", "/robots.txt", "/sitemap.xml", "/schedule/success"]

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip excluded paths
  if (EXCLUDED_PATHS.some((path) => pathname.startsWith(path))) {
    return NextResponse.next()
  }

  return NextResponse.next()
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
