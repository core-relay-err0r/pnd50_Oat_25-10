import { Suspense } from "react"
import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ModalProvider } from "@/contexts/modal-context"
import LayoutClientComponent from "@/components/layout/LayoutClientComponent"
import { Toaster } from "@/components/ui/toaster"
import { Navbar } from "@/components/ui/mini-navbar"
import Footer from "@/components/layout/Footer"
import { FloatingChatBot } from "@/components/FloatingChatBot"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { siteConfig } from "@/lib/seo-config"
import { OrganizationSchema, LocalBusinessSchema, WebsiteSchema } from "@/components/seo/structured-data"
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics"

const inter = Inter({ subsets: ["latin"] })

const focusedKeywords = [
  // Brand keywords (highest priority)
  "PND50",
  "ภ.ง.ด.50",
  "P.N.D.50",
  "ภงด50",
  // Core service + brand
  "PND50 accounting Thailand",
  "PND50 tax services",
  "ภ.ง.ด.50 บริการบัญชี",
  // Thai tax form context
  "PND50 corporate tax return Thailand",
  "ภ.ง.ด.50 แบบแสดงรายการภาษี",
  // Secondary keywords
  "accounting Thailand foreign business",
  "tax consultant Bangkok",
]

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "PND50 | Accounting & Tax Services for Foreign Businesses in Thailand",
    template: `%s | PND50`,
  },
  description:
    "PND50 — named after Thailand's corporate tax form ภ.ง.ด.50 (P.N.D.50). Expert accounting, tax filing, and business setup services for foreign-owned companies in Thailand.",
  keywords: focusedKeywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  applicationName: "PND50 Thailand",
  referrer: "origin-when-cross-origin",

  // Icons
  icons: {
    icon: "/fav-50.png",
    shortcut: "/fav-50.png",
    apple: "/apple-touch-icon.png",
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    alternateLocale: siteConfig.alternateLocale,
    url: siteConfig.url,
    siteName: "PND50",
    title: "PND50 | Accounting & Tax Services Thailand",
    description:
      "PND50 — named after Thailand's corporate tax form ภ.ง.ด.50. Expert accounting, tax filing, and business setup for foreign-owned companies.",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "PND50 - Accounting & Tax Services for Foreign Businesses in Thailand",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "PND50 | Accounting & Tax Services Thailand",
    description:
      "PND50 — named after Thailand's corporate tax form ภ.ง.ด.50. Expert accounting for foreign-owned companies.",
    images: [siteConfig.ogImage],
    creator: "@pnd50",
    site: "@pnd50",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification
  verification: {
    google: "iGGUkvE04EL6uchGN6JnXOw63Y57BsCZBmCXO0WSlcM",
  },

  alternates: {
    canonical: siteConfig.url,
  },

  category: "business",
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "light dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <OrganizationSchema />
        <LocalBusinessSchema />
        <WebsiteSchema />

        {/* Geo/Local SEO Tags */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ModalProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Suspense fallback={null}>
            <Toaster />
            <FloatingChatBot />
          </Suspense>
          <LayoutClientComponent />
        </ModalProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
