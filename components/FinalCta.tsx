"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mail, Calendar } from "lucide-react"

export function FinalCta() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <Button
        asChild
        variant="outline"
        className="border-2 border-white/40 text-white hover:bg-white/20 hover:border-white hover:backdrop-blur-md text-lg px-8 py-6 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
      >
        <Link href="/contact">
          <Mail className="mr-2 h-5 w-5" />
          Contact Us
        </Link>
      </Button>
      <Button
        asChild
        className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
      >
        <Link href="/schedule">
          <Calendar className="mr-2 h-5 w-5" />
          Schedule Consultation
        </Link>
      </Button>
    </div>
  )
}
