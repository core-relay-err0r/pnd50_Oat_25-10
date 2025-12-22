"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface ModalContextType {
  isHowItWorksOpen: boolean
  openHowItWorks: () => void
  closeHowItWorks: () => void
  isSecurityDetailsOpen: boolean
  openSecurityDetails: () => void
  closeSecurityDetails: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false)
  const [isSecurityDetailsOpen, setIsSecurityDetailsOpen] = useState(false)

  const openHowItWorks = () => setIsHowItWorksOpen(true)
  const closeHowItWorks = () => setIsHowItWorksOpen(false)

  const openSecurityDetails = () => setIsSecurityDetailsOpen(true)
  const closeSecurityDetails = () => setIsSecurityDetailsOpen(false)

  return (
    <ModalContext.Provider
      value={{
        isHowItWorksOpen,
        openHowItWorks,
        closeHowItWorks,
        isSecurityDetailsOpen,
        openSecurityDetails,
        closeSecurityDetails,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider")
  }
  return context
}
