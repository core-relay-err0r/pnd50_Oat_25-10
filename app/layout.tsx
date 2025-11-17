import { Suspense } from "react"
import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { ModalProvider } from "@/contexts/modal-context"
import LayoutClientComponent from "@/components/layout/LayoutClientComponent"
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/layout/Header"
import ConditionalFooter from "@/components/layout/ConditionalFooter"
import { FloatingChatBot } from "@/components/FloatingChatBot"
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
      <body className={inter.className}>
        <ModalProvider>
          <Header />
          <main>{children}</main>
          <ConditionalFooter />
          <Suspense fallback={null}>
            <Toaster />
            <FloatingChatBot />
          </Suspense>
          <LayoutClientComponent />
        </ModalProvider>
        {/* <Analytics /> */}
        <SpeedInsights />
      </body>
    </html>
  )
}
