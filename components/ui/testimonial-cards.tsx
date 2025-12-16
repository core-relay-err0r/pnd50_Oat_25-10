"use client"

import * as React from "react"
import { motion } from "framer-motion"
import * as d3 from "d3"
import { feature } from "topojson-client"

interface TestimonialCardProps {
  handleShuffle: () => void
  testimonial: string
  position: "front" | "middle" | "back"
  id: number
  author: string
  image?: string
}

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

export function TestimonialCard({ handleShuffle, position }: TestimonialCardProps) {
  const svgRef = React.useRef<SVGSVGElement>(null)
  const [isAnimating, setIsAnimating] = React.useState(false)
  const [progress, setProgress] = React.useState([0])
  const [worldData, setWorldData] = React.useState<GeoFeature[]>([])
  const [rotation, setRotation] = React.useState([0, 0])
  const [translation, setTranslation] = React.useState([0, 0])
  const [isDragging, setIsDragging] = React.useState(false)
  const [lastMouse, setLastMouse] = React.useState([0, 0])

  const dragRef = React.useRef(0)
  const dragStartTime = React.useRef(0)
  const isFront = position === "front"

  const [isDesktop, setIsDesktop] = React.useState(true)

  React.useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024)
    checkDesktop()
    window.addEventListener("resize", checkDesktop)
    return () => window.removeEventListener("resize", checkDesktop)
  }, [])

  const width = 800
  const height = 500

  // Load world data
  React.useEffect(() => {
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

  React.useEffect(() => {
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

    try {
      const graticule = d3.geoGraticule()
      const graticulePath = path(graticule())
      if (graticulePath) {
        svg
          .append("path")
          .datum(graticule())
          .attr("d", graticulePath)
          .attr("fill", "none")
          .attr("stroke", "#cccccc")
          .attr("stroke-width", 1)
          .attr("opacity", 0.2)
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
      .attr("fill", "none")
      .attr("stroke", "#e0e7ff")
      .attr("stroke-width", 1.0)
      .attr("opacity", 0.8)
      .style("visibility", function () {
        const pathData = d3.select(this).attr("d")
        return pathData && pathData.length > 0 && !pathData.includes("NaN") ? "visible" : "hidden"
      })

    try {
      const sphereOutline = path({ type: "Sphere" })
      if (sphereOutline) {
        svg
          .append("path")
          .datum({ type: "Sphere" })
          .attr("d", sphereOutline)
          .attr("fill", "none")
          .attr("stroke", "#cbd5e1")
          .attr("stroke-width", 2)
          .attr("opacity", 1.0)
      }
    } catch (error) {
      console.log("Error creating sphere outline:", error)
    }
  }, [worldData, progress, rotation, translation])

  React.useEffect(() => {
    const animate = () => {
      setProgress([0])
      const startTime = Date.now()
      const duration = 3000

      const tick = () => {
        const elapsed = Date.now() - startTime
        const t = Math.min(elapsed / duration, 1)
        const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
        const currentProgress = eased * 100

        setProgress([currentProgress])

        if (t < 1) {
          requestAnimationFrame(tick)
        } else {
          setTimeout(() => {
            const reverseStart = Date.now()
            const reverseTick = () => {
              const elapsed = Date.now() - reverseStart
              const t = Math.min(elapsed / duration, 1)
              const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
              const currentProgress = 100 - eased * 100

              setProgress([currentProgress])

              if (t < 1) {
                requestAnimationFrame(reverseTick)
              } else {
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

  const blurFilter = isDesktop && position !== "front" ? "blur(0.8px)" : undefined

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? "2" : position === "middle" ? "1" : "0",
        filter: blurFilter,
      }}
      animate={{
        rotate: position === "front" ? "0deg" : position === "middle" ? "3deg" : "6deg",
        x: position === "front" ? "0%" : position === "middle" ? "33%" : "66%",
      }}
      drag={true}
      dragElastic={0.35}
      dragListener={isFront}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      onDragStart={(e) => {
        dragRef.current = e.clientX
        dragStartTime.current = Date.now()
      }}
      onDragEnd={(e) => {
        const dragDistance = dragRef.current - e.clientX
        const dragDuration = Date.now() - dragStartTime.current
        const velocity = dragDistance / dragDuration

        if (dragDistance > 50 || velocity > 0.3) {
          handleShuffle()
        }
        dragRef.current = 0
        dragStartTime.current = 0
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center rounded-3xl border border-sky-200/60 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 shadow-xl shadow-sky-900/50 backdrop-blur-sm overflow-hidden ${isFront ? "cursor-grab active:cursor-grabbing" : ""}`}
    >
      <div className="relative flex items-center justify-center w-full h-full p-4">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-full rounded-lg bg-transparent cursor-grab active:cursor-grabbing"
          preserveAspectRatio="xMidYMid meet"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        />
      </div>
    </motion.div>
  )
}
