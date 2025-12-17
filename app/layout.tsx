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
import { siteConfig, pageMetadata, thaiKeywords } from "@/lib/seo-config"
import {
  OrganizationSchema,
  LocalBusinessSchema,
  WebsiteSchema,
  ProfessionalServiceSchema,
  SpeakableSchema,
} from "@/components/seo/structured-data"
import { GeoTags, ServiceAreaSchema, InternationalServiceAreaSchema } from "@/components/seo/geo-tags"
import { AISearchContent, EntityDefinition, QAPageSchema } from "@/components/seo/ai-search-optimization"
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics"

const inter = Inter({ subsets: ["latin"] })

const allKeywords = [...siteConfig.keywords.home, ...thaiKeywords.general, ...thaiKeywords.location]

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: pageMetadata.home.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: pageMetadata.home.description,
  keywords: allKeywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  generator: "v0.dev",
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
    siteName: siteConfig.name,
    title: pageMetadata.home.title,
    description: pageMetadata.home.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - ${siteConfig.tagline}`,
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: pageMetadata.home.title,
    description: pageMetadata.home.description,
    images: [siteConfig.ogImage],
    creator: "@pnd50",
    site: "@pnd50",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification (add your actual verification codes)
  verification: {
    google: "iGGUkvE04EL6uchGN6JnXOw63Y57BsCZBmCXO0WSlcM",
    // yandex: "your-yandex-verification",
    // other: { "bing": "your-bing-verification" },
  },

  // Alternate languages
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "en-US": siteConfig.url,
      "th-TH": `${siteConfig.url}/th`,
    },
  },

  // Category
  category: "business",

  other: {
    "article:publisher": siteConfig.social.facebook,
    "article:author": siteConfig.url,
    "og:email": siteConfig.business.email,
    "og:phone_number": siteConfig.business.phone,
    "og:latitude": String(siteConfig.business.geo.latitude),
    "og:longitude": String(siteConfig.business.geo.longitude),
    "og:street-address": siteConfig.business.address.streetAddress,
    "og:locality": siteConfig.business.address.addressLocality,
    "og:region": siteConfig.business.address.addressRegion,
    "og:postal-code": siteConfig.business.address.postalCode,
    "og:country-name": "Thailand",
    "business:contact_data:street_address": siteConfig.business.address.streetAddress,
    "business:contact_data:locality": siteConfig.business.address.addressLocality,
    "business:contact_data:postal_code": siteConfig.business.address.postalCode,
    "business:contact_data:country_name": "Thailand",
    "business:contact_data:email": siteConfig.business.email,
    "business:contact_data:phone_number": siteConfig.business.phone,
  },
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
        {/* Structured Data Schemas */}
        <OrganizationSchema />
        <LocalBusinessSchema />
        <WebsiteSchema />
        <ProfessionalServiceSchema />
        <ServiceAreaSchema />
        <InternationalServiceAreaSchema />
        <SpeakableSchema />
        <EntityDefinition />
        <QAPageSchema />

        {/* Geo/Local SEO Tags */}
        <GeoTags city="Bangkok" region="Bangkok" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
      </head>
      <body className={inter.className}>
        <ModalProvider>
          <Navbar />
          <main>
            {children}
            <AISearchContent />
          </main>
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
