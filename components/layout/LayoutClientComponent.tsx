"use client"

import { useModal } from "@/contexts/modal-context"
import HowItWorksModal from "@/components/HowItWorksModal"
import SecurityDetailsModal from "@/components/SecurityDetailsModal"

export default function LayoutClientComponent() {
  const { isHowItWorksOpen, closeHowItWorks, isSecurityDetailsOpen, closeSecurityDetails } = useModal()

  return (
    <>
      <HowItWorksModal isOpen={isHowItWorksOpen} onClose={closeHowItWorks} />
      <SecurityDetailsModal isOpen={isSecurityDetailsOpen} onClose={closeSecurityDetails} />
    </>
  )
}
