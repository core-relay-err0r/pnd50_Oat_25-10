"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HomepageCtas() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-start">
      <Link href="/calculator" className="w-full sm:w-auto">
        <Button
          className="w-full sm:w-auto bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-700 hover:from-blue-700 hover:via-indigo-700 hover:to-violet-800 text-white px-8 text-lg font-bold rounded-xl shadow-lg shadow-indigo-600/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-700/40 flex items-center justify-center border-0"
          style={{ minHeight: "60px", height: "60px" }}
        >
          Schedule Consultation
        </Button>
      </Link>
      <Link href="/contact" className="w-full sm:w-auto">
        <div
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 text-lg font-bold rounded-xl cursor-pointer transition-all duration-300 user-select-none border-2 border-slate-300/50 bg-white/60 backdrop-blur-md hover:bg-white/80 hover:border-blue-400/60 hover:scale-105 text-slate-700 hover:text-blue-600 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-blue-200/50"
          style={{ minHeight: "60px", height: "60px" }}
        >
          <span>Contact Us</span>
        </div>
      </Link>
    </div>
  )
}
