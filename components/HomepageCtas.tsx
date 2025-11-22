"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MagneticButton } from "@/components/ui/magnetic-button"

export function HomepageCtas() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Link href="/calculator" className="w-full sm:w-auto">
        <MagneticButton strength={0.3}>
          <Button
            className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-8 text-lg font-bold rounded-lg shadow-lg shadow-blue-500/20 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            style={{ minHeight: "60px", height: "60px" }}
          >
            Schedule Consultation
          </Button>
        </MagneticButton>
      </Link>
      <Link href="/contact" className="w-full sm:w-auto">
        <MagneticButton strength={0.3}>
          <div
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 text-lg font-bold rounded-lg cursor-pointer transition-all duration-300 user-select-none border-2 border-slate-200 bg-white/50 backdrop-blur-sm hover:bg-white/80 hover:border-slate-300 hover:scale-105 text-slate-700 shadow-sm"
            style={{ minHeight: "60px", height: "60px" }}
          >
            <span>Contact Us</span>
          </div>
        </MagneticButton>
      </Link>
    </div>
  )
}
