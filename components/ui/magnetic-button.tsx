"use client"

import type React from "react"
import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  strength?: number // How strong the magnetic pull is (default: 0.5)
  active?: boolean
}

export function MagneticButton({ children, className = "", strength = 0.5, active = true }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!active || !ref.current) return

      const xTo = gsap.quickTo(ref.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" })
      const yTo = gsap.quickTo(ref.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" })

      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e
        const { height, width, left, top } = ref.current!.getBoundingClientRect()
        const x = clientX - (left + width / 2)
        const y = clientY - (top + height / 2)

        xTo(x * strength)
        yTo(y * strength)
      }

      const handleMouseLeave = () => {
        xTo(0)
        yTo(0)
      }

      ref.current.addEventListener("mousemove", handleMouseMove)
      ref.current.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        if (ref.current) {
          ref.current.removeEventListener("mousemove", handleMouseMove)
          ref.current.removeEventListener("mouseleave", handleMouseLeave)
        }
      }
    },
    { scope: ref, dependencies: [active, strength] },
  )

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
