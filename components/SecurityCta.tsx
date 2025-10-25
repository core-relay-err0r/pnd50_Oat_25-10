"use client"
import { Button } from "@/components/ui/button"
import { useModal } from "@/contexts/modal-context"

export function SecurityCta() {
  const { openSecurityDetails } = useModal()
  return (
    <Button
      onClick={openSecurityDetails}
      variant="outline"
      size="lg"
      className="border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent"
    >
      See Security Details
    </Button>
  )
}
