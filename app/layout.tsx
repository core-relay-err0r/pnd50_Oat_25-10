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
} from "@/components/seo/structured-data"
import { GeoTags, ServiceAreaSchema } from "@/components/seo/geo-tags"

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

  // Verification (add your actual verification codes)
  verification: {
    google: "your-google-verification-code",
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

        {/* Geo/Local SEO Tags */}
        <GeoTags city="Bangkok" region="Bangkok" />
      </head>
      <body className={inter.className}>
        <ModalProvider>
          <Navbar />
          <main>{children}</main>
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
