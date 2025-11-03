import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Full-Cycle Package | PND50",
  description: "Complete end-to-end solution for established businesses in Thailand.",
}

export default function FullCyclePackagePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Full-Cycle Package</h1>
        <p className="text-xl text-muted-foreground">Package details coming soon...</p>
      </div>
    </div>
  )
}
