import type React from "react"
import type { Metadata } from "next"
import { ModalProvider } from "@/contexts/modal-context"
import { Toaster } from "@/components/ui/toaster"
import { FloatingChatBot } from "@/components/FloatingChatBot"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "PND50 - AI Boutique Accounting & Tax Services in Thailand",
  description:
    "Expert accounting, tax filing, and business compliance services for foreign-owned companies in Thailand.",
}

export default function HorizontalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ModalProvider>
      {children}
      <Suspense fallback={null}>
        <Toaster />
        <FloatingChatBot />
      </Suspense>
    </ModalProvider>
  )
}
