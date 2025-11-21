import { Suspense } from "react"
import type React from "react"
import type { Metadata } from "next"
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

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PND50 | Tech-Driven Accounting in Thailand",
  description: "Future-Proof Your Finances with Technological Excellence in Accounting.",
  icons: {
    icon: "/fav-50.png",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen overflow-x-hidden`}>
        <ModalProvider>
          {/* Scaled Navbar Wrapper - Fixed */}
          <div className="fixed top-0 left-0 w-full z-50 pointer-events-none lg:w-[117.647%] lg:scale-[0.85] lg:origin-top-left">
            <div className="pointer-events-auto w-full h-full">
              <Navbar />
            </div>
          </div>

          {/* Scaled Main Content - Scrollable */}
          <div className="flex-1 flex flex-col w-full lg:w-[117.647%] lg:scale-[0.85] lg:origin-top-left">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>

          {/* Scaled Overlays - Fixed */}
          <div className="fixed inset-0 z-[60] pointer-events-none lg:w-[117.647%] lg:scale-[0.85] lg:origin-top-left">
            <Suspense fallback={null}>
              <div className="pointer-events-auto">
                <Toaster />
              </div>
              <div className="pointer-events-auto">
                <FloatingChatBot />
              </div>
            </Suspense>
          </div>

          <LayoutClientComponent />
        </ModalProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
