"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HomepageCtas() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-start">
      <Link href="/schedule" className="w-full sm:w-auto">
        <Button
          className="w-full sm:w-auto bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-400 hover:from-teal-400 hover:via-cyan-400 hover:to-teal-300 text-white px-8 text-lg font-bold rounded-xl shadow-lg shadow-teal-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/50 flex items-center justify-center border-0"
          style={{ minHeight: "60px", height: "60px" }}
        >
          Schedule Consultation
        </Button>
      </Link>
      <Link href="/contact" className="w-full sm:w-auto">
        <div
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 text-lg font-bold rounded-xl cursor-pointer transition-all duration-300 user-select-none border-2 border-pink-300/60 bg-white/70 backdrop-blur-md hover:bg-pink-50/80 hover:border-pink-400/80 hover:scale-105 text-pink-700 hover:text-pink-600 shadow-lg shadow-pink-200/40 hover:shadow-xl hover:shadow-pink-300/50"
          style={{ minHeight: "60px", height: "60px" }}
        >
          <span>Contact Us</span>
        </div>
      </Link>
    </div>
  )
}
