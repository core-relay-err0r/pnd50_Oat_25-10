"use client"
import { Button } from "@/components/ui/button"
import { useModal } from "@/contexts/modal-context"
import { PlayCircle } from "lucide-react"

export function FinalCta() {
  const { openHowItWorks } = useModal()
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <Button
        onClick={openHowItWorks}
        variant="outline"
        className="border-2 border-white/40 text-white hover:bg-white/20 hover:border-white hover:backdrop-blur-md text-lg px-8 py-6 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
      >
        <PlayCircle className="mr-2 h-5 w-5" />
        See How It Works
      </Button>
    </div>
  )
}
