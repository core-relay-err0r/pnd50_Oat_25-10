"use client"

import { useModal } from "@/contexts/modal-context"
import { Button } from "@/components/ui/button"
import type { ReactNode } from "react"

export default function CtaButton({ children }: { children: ReactNode }) {
  const { openModal } = useModal()
  return <Button onClick={openModal}>{children}</Button>
}
