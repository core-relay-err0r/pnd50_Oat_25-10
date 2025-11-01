"use client"

import { Button } from "@/components/ui/button"
import { useModal } from "@/contexts/modal-context"
import Link from "next/link"

export function HomepageCtas() {
  const { openHowItWorks } = useModal()

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link href="/calculator">
        <Button
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 text-lg font-bold rounded-lg shadow-lg shadow-blue-500/20 transition-all duration-300 transform hover:scale-102 flex items-center justify-center"
          style={{ minHeight: "60px", height: "60px" }}
        >
          Schedule Consultation
          <span className="ml-2 text-blue-100">→</span>
        </Button>
      </Link>
      <div
        onClick={openHowItWorks}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            openHowItWorks()
          }
        }}
        className="flex items-center justify-center gap-2 px-8 text-lg font-bold rounded-lg cursor-pointer transition-all duration-300 user-select-none border-2 border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/50 hover:scale-102 text-white"
        style={{ minHeight: "60px", height: "60px" }}
      >
        <span className="text-xl">▶️</span>
        <span>See How It Works</span>
      </div>
    </div>
  )
}
