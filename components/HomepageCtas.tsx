"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HomepageCtas() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-start">
      <Link href="/calculator" className="w-full sm:w-auto">
        <Button
          className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 text-lg font-semibold rounded-lg shadow-lg shadow-primary/20 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center"
          style={{ minHeight: "56px", height: "56px" }}
        >
          Schedule Consultation
        </Button>
      </Link>
      <Link href="/contact" className="w-full sm:w-auto">
        <div
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 text-lg font-semibold rounded-lg cursor-pointer transition-all duration-300 border border-slate-600 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/60 hover:border-slate-500 hover:scale-[1.02] text-slate-200"
          style={{ minHeight: "56px", height: "56px" }}
        >
          <span>Contact Us</span>
        </div>
      </Link>
    </div>
  )
}
