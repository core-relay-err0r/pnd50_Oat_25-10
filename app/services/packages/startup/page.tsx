import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Startup Package | PND50",
  description: "Essential services to launch your business in Thailand.",
}

export default function StartupPackagePage() {
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

        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Startup Package</h1>
        <p className="text-xl text-muted-foreground">Package details coming soon...</p>
      </div>
    </div>
  )
}
