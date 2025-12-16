"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import * as d3 from "d3"
import { feature } from "topojson-client"

interface GeoFeature {
  type: string
  geometry: any
  properties: any
}

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
  const [isAnimating, setIsAnimating] = useState(false)
  const [progress, setProgress] = useState([0])
  const [worldData, setWorldData] = useState<GeoFeature[]>([])
  const [rotation, setRotation] = useState([0, 0])
  const [translation, setTranslation] = useState([0, 0])
  const [isDragging, setIsDragging] = useState(false)
  const [lastMouse, setLastMouse] = useState([0, 0])

  const width = 800
  const height = 500

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

    const t = progress[0] / 100

    if (t < 0.5) {
      const sensitivity = 0.5
      setRotation((prev) => [prev[0] + dx * sensitivity, Math.max(-90, Math.min(90, prev[1] - dy * sensitivity))])
    } else {
      const sensitivityMap = 0.25
      setRotation((prev) => [prev[0] + dx * sensitivityMap, Math.max(-90, Math.min(90, prev[1] - dy * sensitivityMap))])
    }

    setLastMouse(currentMouse)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (!svgRef.current || worldData.length === 0) return

    const svg = d3.select(svgRef.current)
    svg.selectAll("*").remove()

    const t = progress[0] / 100
    const alpha = Math.pow(t, 0.5)

    const scale = d3.scaleLinear().domain([0, 1]).range([200, 120])
    const baseRotate = d3.scaleLinear().domain([0, 1]).range([0, 0])

    const projection = interpolateProjection(d3.geoOrthographicRaw, d3.geoEquirectangularRaw)
      .scale(scale(alpha))
      .translate([width / 2 + translation[0], height / 2 + translation[1]])
      .rotate([baseRotate(alpha) + rotation[0], rotation[1]])
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

    oceanGradient.append("stop").attr("offset", "0%").attr("stop-color", "#0ea5e9").attr("stop-opacity", 0.3)

    oceanGradient.append("stop").attr("offset", "100%").attr("stop-color", "#06b6d4").attr("stop-opacity", 0.5)

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
      .attr("stroke-width", 0.8)
      .attr("opacity", 0.9)
      .style("filter", "drop-shadow(0 2px 4px rgba(0,0,0,0.2))")
      .style("visibility", function () {
        const pathData = d3.select(this).attr("d")
        return pathData && pathData.length > 0 && !pathData.includes("NaN") ? "visible" : "hidden"
      })

    try {
      const sphereOutline = path({ type: "Sphere" })
      if (sphereOutline) {
        // Outer glow
        svg
          .append("path")
          .datum({ type: "Sphere" })
          .attr("d", sphereOutline)
          .attr("fill", "none")
          .attr("stroke", "#0ea5e9")
          .attr("stroke-width", 3)
          .attr("opacity", 0.3)
          .style("filter", "blur(4px)")

        // Main outline
        svg
          .append("path")
          .datum({ type: "Sphere" })
          .attr("d", sphereOutline)
          .attr("fill", "none")
          .attr("stroke", "#06b6d4")
          .attr("stroke-width", 2)
          .attr("opacity", 0.8)
      }
    } catch (error) {
      console.log("Error creating sphere outline:", error)
    }
  }, [worldData, progress, rotation, translation])

  useEffect(() => {
    const animate = () => {
      const startProgress = 0
      const endProgress = 100
      const duration = 2000

      const startTime = Date.now()

      const tick = () => {
        const elapsed = Date.now() - startTime
        const t = Math.min(elapsed / duration, 1)

        const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
        const currentProgress = startProgress + (endProgress - startProgress) * eased

        setProgress([currentProgress])

        if (t < 1) {
          requestAnimationFrame(tick)
        } else {
          // Wait 2 seconds then reverse
          setTimeout(() => {
            const reverseStart = Date.now()
            const reverseTick = () => {
              const elapsed = Date.now() - reverseStart
              const t = Math.min(elapsed / duration, 1)
              const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
              const currentProgress = endProgress - (endProgress - startProgress) * eased

              setProgress([currentProgress])

              if (t < 1) {
                requestAnimationFrame(reverseTick)
              } else {
                // Wait 2 seconds then restart
                setTimeout(animate, 2000)
              }
            }
            reverseTick()
          }, 2000)
        }
      }

      tick()
    }

    animate()
  }, [])

  return (
    <div className="relative flex items-center justify-center w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 rounded-2xl shadow-2xl p-8">
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent rounded-2xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl pointer-events-none" />

      <svg
        ref={svgRef}
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-full cursor-grab active:cursor-grabbing relative z-10"
        preserveAspectRatio="xMidYMid meet"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      />
    </div>
  )
}
