"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import * as d3 from "d3"
import { feature } from "topojson-client"
import { motion } from "framer-motion"

interface GeoFeature {
  type: string
  geometry: any
  properties: any
}

const SHIPPING_LOCATIONS = [
  { name: "Bangkok", coords: [100.5018, 13.7563], color: "#06b6d4" },
  { name: "Singapore", coords: [103.8198, 1.3521], color: "#0ea5e9" },
  { name: "Hong Kong", coords: [114.1694, 22.3193], color: "#14b8a6" },
  { name: "Tokyo", coords: [139.6917, 35.6895], color: "#06b6d4" },
  { name: "Shanghai", coords: [121.4737, 31.2304], color: "#0ea5e9" },
  { name: "Dubai", coords: [55.2708, 25.2048], color: "#14b8a6" },
  { name: "London", coords: [-0.1276, 51.5074], color: "#06b6d4" },
  { name: "New York", coords: [-74.006, 40.7128], color: "#0ea5e9" },
]

function interpolateProjection(raw0: any, raw1: any) {
  const mutate: any = d3.geoProjectionMutator((t: number) => (x: number, y: number) => {
    const [x0, y0] = raw0(x, y)
    const [x1, y1] = raw1(x, y)
    return [x0 + t * (x1 - x0), y0 + t * (y1 - y0)]
  })
  let t = 0
  return Object.assign((mutate as any)(t), {
    alpha(_: number) {
      return arguments.length ? (mutate as any)((t = +_)) : t
    },
  })
}

export function TestimonialCard() {
  const svgRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState([0])
  const [worldData, setWorldData] = useState<GeoFeature[]>([])
  const [rotation, setRotation] = useState([0, 0])
  const [isDragging, setIsDragging] = useState(false)
  const [lastMouse, setLastMouse] = useState([0, 0])
  const [pulseIndex, setPulseIndex] = useState(0)

  const width = 900
  const height = 600

  // Load world data
  useEffect(() => {
    const loadWorldData = async () => {
      try {
        const response = await fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
        const world: any = await response.json()
        const countries = feature(world, world.objects.countries).features
        setWorldData(countries)
      } catch (error) {
        console.log("Error loading world data:", error)
        const fallbackData = [
          {
            type: "Feature",
            geometry: {
              type: "Polygon",
              coordinates: [
                [
                  [-180, -90],
                  [180, -90],
                  [180, 90],
                  [-180, 90],
                  [-180, -90],
                ],
              ],
            },
            properties: {},
          },
        ]
        setWorldData(fallbackData)
      }
    }

    loadWorldData()
  }, [])

  const handleMouseDown = (event: React.MouseEvent) => {
    setIsDragging(true)
    const rect = svgRef.current?.getBoundingClientRect()
    if (rect) {
      setLastMouse([event.clientX - rect.left, event.clientY - rect.top])
    }
  }

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isDragging) return

    const rect = svgRef.current?.getBoundingClientRect()
    if (!rect) return

    const currentMouse = [event.clientX - rect.left, event.clientY - rect.top]
    const dx = currentMouse[0] - lastMouse[0]
    const dy = currentMouse[1] - lastMouse[1]

    const sensitivity = 0.5
    setRotation((prev) => [prev[0] + dx * sensitivity, Math.max(-90, Math.min(90, prev[1] - dy * sensitivity))])

    setLastMouse(currentMouse)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % SHIPPING_LOCATIONS.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!svgRef.current || worldData.length === 0) return

    const svg = d3.select(svgRef.current)
    svg.selectAll("*").remove()

    const t = progress[0] / 100
    const alpha = Math.pow(t, 0.5)

    const scale = d3.scaleLinear().domain([0, 1]).range([220, 140])

    const projection = interpolateProjection(d3.geoOrthographicRaw, d3.geoEquirectangularRaw)
      .scale(scale(alpha))
      .translate([width / 2, height / 2])
      .rotate([rotation[0], rotation[1]])
      .precision(0.1)

    projection.alpha(alpha)

    const path = d3.geoPath(projection)

    const defs = svg.append("defs")

    const oceanGradient = defs
      .append("radialGradient")
      .attr("id", "ocean-gradient")
      .attr("cx", "50%")
      .attr("cy", "50%")
      .attr("r", "50%")

    oceanGradient.append("stop").attr("offset", "0%").attr("stop-color", "#1e3a8a").attr("stop-opacity", 0.4)
    oceanGradient.append("stop").attr("offset", "50%").attr("stop-color", "#1e40af").attr("stop-opacity", 0.5)
    oceanGradient.append("stop").attr("offset", "100%").attr("stop-color", "#075985").attr("stop-opacity", 0.6)

    const landGradient = defs
      .append("linearGradient")
      .attr("id", "land-gradient")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "100%")
      .attr("y2", "100%")

    landGradient.append("stop").attr("offset", "0%").attr("stop-color", "#0284c7")
    landGradient.append("stop").attr("offset", "50%").attr("stop-color", "#0ea5e9")
    landGradient.append("stop").attr("offset", "100%").attr("stop-color", "#14b8a6")

    const glowFilter = defs.append("filter").attr("id", "glow")
    glowFilter.append("feGaussianBlur").attr("stdDeviation", "3").attr("result", "coloredBlur")
    const feMerge = glowFilter.append("feMerge")
    feMerge.append("feMergeNode").attr("in", "coloredBlur")
    feMerge.append("feMergeNode").attr("in", "SourceGraphic")

    try {
      const spherePath = path({ type: "Sphere" })
      if (spherePath) {
        svg
          .append("path")
          .datum({ type: "Sphere" })
          .attr("d", spherePath)
          .attr("fill", "url(#ocean-gradient)")
          .attr("opacity", 0.3)
      }
    } catch (error) {
      console.log("Error creating ocean:", error)
    }

    // Outer glow
    try {
      const graticule = d3.geoGraticule()
      const graticulePath = path(graticule())
      if (graticulePath) {
        svg
          .append("path")
          .datum(graticule())
          .attr("d", graticulePath)
          .attr("fill", "none")
          .attr("stroke", "#ffffff")
          .attr("stroke-width", 0.5)
          .attr("opacity", 0.15)
      }
    } catch (error) {
      console.log("Error creating graticule:", error)
    }

    svg
      .selectAll(".country")
      .data(worldData)
      .enter()
      .append("path")
      .attr("class", "country")
      .attr("d", (d) => {
        try {
          const pathString = path(d as any)
          if (!pathString) return ""
          if (typeof pathString === "string" && (pathString.includes("NaN") || pathString.includes("Infinity"))) {
            return ""
          }
          return pathString
        } catch (error) {
          return ""
        }
      })
      .attr("fill", "url(#land-gradient)")
      .attr("stroke", "#ffffff")
      .attr("stroke-width", 0.5)
      .attr("opacity", 0.85)
      .style("filter", "drop-shadow(0 4px 6px rgba(0,0,0,0.3))")

    SHIPPING_LOCATIONS.forEach((location, index) => {
      const coords = projection(location.coords as [number, number])
      if (coords && !isNaN(coords[0]) && !isNaN(coords[1])) {
        // Outer pulse circle
        svg
          .append("circle")
          .attr("cx", coords[0])
          .attr("cy", coords[1])
          .attr("r", pulseIndex === index ? 12 : 8)
          .attr("fill", "none")
          .attr("stroke", location.color)
          .attr("stroke-width", 2)
          .attr("opacity", pulseIndex === index ? 0.6 : 0.3)
          .style("filter", "url(#glow)")
          .style("transition", "all 0.5s ease")

        // Inner dot
        svg
          .append("circle")
          .attr("cx", coords[0])
          .attr("cy", coords[1])
          .attr("r", 4)
          .attr("fill", location.color)
          .attr("opacity", 0.9)
          .style("filter", "url(#glow)")
      }
    })

    try {
      const sphereOutline = path({ type: "Sphere" })
      if (sphereOutline) {
        // Outer glow layer
        svg
          .append("path")
          .datum({ type: "Sphere" })
          .attr("d", sphereOutline)
          .attr("fill", "none")
          .attr("stroke", "#06b6d4")
          .attr("stroke-width", 4)
          .attr("opacity", 0.2)
          .style("filter", "blur(6px)")

        // Middle glow
        svg
          .append("path")
          .datum({ type: "Sphere" })
          .attr("d", sphereOutline)
          .attr("fill", "none")
          .attr("stroke", "#0ea5e9")
          .attr("stroke-width", 2)
          .attr("opacity", 0.4)
          .style("filter", "blur(2px)")

        // Main outline
        svg
          .append("path")
          .datum({ type: "Sphere" })
          .attr("d", sphereOutline)
          .attr("fill", "none")
          .attr("stroke", "#14b8a6")
          .attr("stroke-width", 1.5)
          .attr("opacity", 0.8)
      }
    } catch (error) {
      console.log("Error creating sphere outline:", error)
    }
  }, [worldData, progress, rotation, pulseIndex])

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[500px] lg:min-h-[600px]">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 rounded-3xl shadow-2xl overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="absolute top-8 left-8 z-20">
          <motion.h3
            className="text-2xl lg:text-3xl font-bold text-white mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Global Reach
          </motion.h3>
          <motion.p
            className="text-sm lg:text-base text-cyan-200/80 max-w-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Connecting businesses worldwide with seamless logistics solutions
          </motion.p>
        </div>

        <div className="absolute bottom-8 right-8 z-20 space-y-3">
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 border border-white/20"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="text-2xl font-bold text-cyan-400">50+</div>
            <div className="text-xs text-white/70">Countries Served</div>
          </motion.div>
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 border border-white/20"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
          >
            <div className="text-2xl font-bold text-teal-400">24/7</div>
            <div className="text-xs text-white/70">Support Available</div>
          </motion.div>
        </div>

        {/* Globe SVG */}
        <svg
          ref={svgRef}
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-full cursor-grab active:cursor-grabbing relative z-10 p-8"
          preserveAspectRatio="xMidYMid meet"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        />
      </div>
    </div>
  )
}
