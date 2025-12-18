"use client"

import type React from "react"
import { useEffect, useRef, useCallback } from "react"
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
  const animationFrameId = useRef<number>()

  const isDark = variant === "dark"
  const bgClass = isDark ? "bg-slate-900" : "bg-transparent"

  const particleColor = isDark ? "59, 130, 246" : "71, 85, 105"
  const gridColor = isDark ? "rgba(59, 130, 246, 0.1)" : "rgba(100, 116, 139, 0.06)"
  const connectionColor = isDark ? "59, 130, 246" : "71, 85, 105"

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const particleCount = isDark ? 50 : 40

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Particle class
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
        this.speedX = Math.random() * 0.3 - 0.15
        this.speedY = Math.random() * 0.3 - 0.15
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

    const particles: Particle[] = []
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    let frameCount = 0
    const frameSkip = 2 // Only render every 2nd frame

    const render = () => {
      frameCount++

      // Skip frames for performance
      if (frameCount % frameSkip !== 0) {
        animationFrameId.current = requestAnimationFrame(render)
        return
      }

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

      const connectionDistance = 100
      particles.forEach((particleA, indexA) => {
        particles.slice(indexA + 1).forEach((particleB) => {
          const dx = particleA.x - particleB.x
          const dy = particleA.y - particleB.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = isDark
              ? 0.15 * (1 - distance / connectionDistance)
              : 0.08 * (1 - distance / connectionDistance)
            ctx.strokeStyle = `rgba(${connectionColor}, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particleA.x, particleA.y)
            ctx.lineTo(particleB.x, particleB.y)
            ctx.stroke()
          }
        })
      })

      animationFrameId.current = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [isDark, particleColor, gridColor, connectionColor])

  useEffect(() => {
    const cleanup = animate()
    return cleanup
  }, [animate])

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center overflow-x-hidden min-h-full",
        bgClass,
        className,
      )}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: isDark ? 0.6 : 0.5 }} />
      <div className="relative z-10 w-full flex flex-col flex-1">{children}</div>
    </div>
  )
}
