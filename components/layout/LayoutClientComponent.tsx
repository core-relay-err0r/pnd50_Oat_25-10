"use client"

import { useModal } from "@/contexts/modal-context"
import ConsultationModal from "@/components/ConsultationModal"
import HowItWorksModal from "@/components/HowItWorksModal"
import SecurityDetailsModal from "@/components/SecurityDetailsModal"

export default function LayoutClientComponent() {
  const { isModalOpen, closeModal, isHowItWorksOpen, closeHowItWorks, isSecurityDetailsOpen, closeSecurityDetails } =
    useModal()

  return (
    <>
      <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />
      <HowItWorksModal isOpen={isHowItWorksOpen} onClose={closeHowItWorks} />
      <SecurityDetailsModal isOpen={isSecurityDetailsOpen} onClose={closeSecurityDetails} />
    </>
  )
}
