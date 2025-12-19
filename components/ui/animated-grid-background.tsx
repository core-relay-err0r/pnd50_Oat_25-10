"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export function AnimatedGridBackground({
  children,
  className,
  variant = "dark",
}: {
  children: React.ReactNode
  className?: string
  variant?: "dark" | "light"
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const isDark = variant === "dark"
  const bgClass = isDark ? "bg-slate-900" : "bg-transparent"
  const particleColor = isDark ? "59, 130, 246" : "71, 85, 105" // slate-600 for light
  const gridColor = isDark ? "rgba(59, 130, 246, 0.1)" : "rgba(100, 116, 139, 0.06)" // slate-500 with low opacity
  const connectionColor = isDark ? "59, 130, 246" : "71, 85, 105" // slate-600 for light

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Particle system
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
        this.opacity = isDark ? Math.random() * 0.5 + 0.2 : Math.random() * 0.35 + 0.15
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = `rgba(${particleColor}, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles - Reduced count for cleaner look
    const particles: Particle[] = []
    const particleCount = isDark ? 100 : 80
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animation loop
    let animationFrameId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid
      ctx.strokeStyle = gridColor
      ctx.lineWidth = 1
      const gridSize = 50

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      // Draw connections between nearby particles - Reduced connection opacity
      particles.forEach((particleA, indexA) => {
        particles.slice(indexA + 1).forEach((particleB) => {
          const dx = particleA.x - particleB.x
          const dy = particleA.y - particleB.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            const opacity = isDark ? 0.2 * (1 - distance / 150) : 0.1 * (1 - distance / 150)
            ctx.strokeStyle = `rgba(${connectionColor}, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particleA.x, particleA.y)
            ctx.lineTo(particleB.x, particleB.y)
            ctx.stroke()
          }
        })
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isDark, particleColor, gridColor, connectionColor])

  return (
    <div className={cn("relative flex flex-col items-center justify-start overflow-x-hidden", bgClass, className)}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: isDark ? 0.6 : 0.5 }} />

      <div className="relative z-10 w-full flex flex-col">{children}</div>
    </div>
  )
}
