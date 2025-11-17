"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HomepageCtas() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-stretch sm:items-center w-full sm:w-auto">
      <Link href="/calculator" className="w-full sm:w-auto">
        <Button
          className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-6 sm:px-8 text-base sm:text-lg font-bold rounded-lg shadow-lg shadow-blue-500/20 transition-all duration-300 transform hover:scale-102 flex items-center justify-center"
          style={{ minHeight: "56px", height: "56px" }}
        >
          Schedule Consultation
          <span className="ml-2 text-blue-100">→</span>
        </Button>
      </Link>
      <Link href="/contact" className="w-full sm:w-auto">
        <div
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 text-base sm:text-lg font-bold rounded-lg cursor-pointer transition-all duration-300 user-select-none border-2 border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/50 hover:scale-102 text-white"
          style={{ minHeight: "56px", height: "56px" }}
        >
          <span>Contact Us</span>
        </div>
      </Link>
    </div>
  )
}
