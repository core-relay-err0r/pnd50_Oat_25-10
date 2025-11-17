"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Mail } from 'lucide-react'

export function HomepageCtas() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full max-w-lg mx-auto lg:mx-0">
      <Link href="/calculator" className="w-full">
        <Button
          className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-7 text-lg font-bold rounded-2xl shadow-2xl shadow-blue-500/30 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-blue-500/40 active:scale-[0.98] flex items-center justify-center gap-3 border border-blue-400/20"
        >
          <span>Schedule Consultation</span>
          <ArrowRight className="w-5 h-5" />
        </Button>
      </Link>
      <Link href="/contact" className="w-full">
        <Button
          variant="outline"
          className="w-full px-8 py-7 text-lg font-bold rounded-2xl cursor-pointer transition-all duration-300 border-2 border-slate-600/50 bg-slate-800/40 backdrop-blur-xl hover:bg-slate-700/60 hover:border-slate-500/70 hover:scale-[1.02] active:scale-[0.98] text-white shadow-xl shadow-slate-900/20 hover:shadow-2xl hover:shadow-slate-900/30 flex items-center justify-center gap-3"
        >
          <Mail className="w-5 h-5" />
          <span>Contact Us</span>
        </Button>
      </Link>
    </div>
  )
}
