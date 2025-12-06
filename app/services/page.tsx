"use client"
import { ArrowRight, Building2, FileCheck, Users, Shield } from "lucide-react"
import Link from "next/link"
import ServiceSlider from "@/components/service-slider"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import { useState, useEffect } from "react"
import { LandingFooter } from "@/components/landing-footer"

const AnimatedGridBackground = dynamic(
  () => import("@/components/ui/animated-grid-background").then((mod) => mod.AnimatedGridBackground),
  { ssr: false },
)

const packages = [
  {
    icon: () => import("lucide-react").then(({ Rocket }) => <Rocket />),
    title: "Startup",
    description: "Ideal for foreign companies seeking to study Thai market for business development purposes.",
    features: [
      "Company registration",
      "Basic accounting setup",
      "Monthly bookkeeping",
      "Tax compliance",
      "Email support",
    ],
    setupTime: "2-3 weeks",
    popular: false,
    href: "/services/packages/startup",
  },
  {
    icon: () => import("lucide-react").then(({ TrendingUp }) => <TrendingUp />),
    title: "Growth",
    description: "Ideal for most businesses. Takes the shortest time to get comprehensive support.",
    features: [
      "Everything in Startup",
      "Payroll services",
      "VAT management",
      "Financial reporting",
      "Priority support",
    ],
    setupTime: "1 week",
    popular: true,
    href: "/services/packages/growth",
  },
  {
    icon: () => import("lucide-react").then(({ Zap }) => <Zap />),
    title: "Full-Cycle",
    description: "Ideal for established companies wishing to expand their operations in Thailand.",
    features: [
      "Everything in Growth",
      "Strategic advisory",
      "Audit support",
      "Corporate governance",
      "Dedicated account manager",
    ],
    setupTime: "Immediate",
    popular: false,
    href: "/services/packages/full-cycle",
  },
]

export default function ServicesPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const stats = [
    { value: "500+", label: "Clients Served" },
    { value: "15+", label: "Years Experience" },
    { value: "99%", label: "Client Satisfaction" },
  ]

  const highlights = [
    { icon: Building2, text: "Company Registration" },
    { icon: FileCheck, text: "Tax & Compliance" },
    { icon: Users, text: "HR & Payroll" },
    { icon: Shield, text: "Legal Advisory" },
  ]

  return (
    <main className="min-h-screen">
      <section className="relative w-full min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <AnimatedGridBackground className="min-h-screen flex-1">
          <div
            className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: "transform 0.5s ease-out",
            }}
          />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-chart-2/20 rounded-full blur-3xl pointer-events-none"
            style={{
              transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
              transition: "transform 0.5s ease-out",
            }}
          />

          <div className="flex-1 w-full flex flex-col lg:scale-[0.85] lg:origin-top">
            <section className="relative py-8 md:py-16 pt-[100px] lg:pt-[140px]">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  {/* Left Column - Content */}
                  <div className="text-center lg:text-left">
                    <motion.div
                      className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                      Trusted by 500+ Businesses
                    </motion.div>

                    <motion.h1
                      className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      Professional Services{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                        Tailored for You
                      </span>
                    </motion.h1>

                    <motion.p
                      className="text-slate-300 leading-relaxed text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      From company setup to ongoing compliance, we provide end-to-end business solutions for
                      foreign-owned companies in Thailand.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                      className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Link
                        href="/calculator"
                        className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
                      >
                        Schedule Consultation
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-primary/30 transition-all backdrop-blur-sm"
                      >
                        Contact Us
                      </Link>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                      className="flex flex-wrap justify-center lg:justify-start gap-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      {stats.map((stat, index) => (
                        <div key={index} className="text-center lg:text-left">
                          <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                          <div className="text-sm text-slate-400">{stat.label}</div>
                        </div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Right Column - Feature Cards */}
                  <motion.div
                    className="grid grid-cols-2 gap-4"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    {highlights.map((item, index) => (
                      <motion.div
                        key={index}
                        className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileHover={{ y: -5 }}
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-white font-semibold text-lg">{item.text}</h3>
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowRight className="w-4 h-4 text-primary" />
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </section>

            <motion.section
              className="py-12 md:py-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
                </div>

                <ServiceSlider />
              </div>
            </motion.section>

            <motion.section
              className="py-16 md:py-24"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
                <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                  Schedule a free consultation to discuss how we can support your business in Thailand
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/calculator"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
                  >
                    Schedule Consultation
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:border-primary hover:bg-white/20 transition-all"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.section>
          </div>

          <LandingFooter />
        </AnimatedGridBackground>
      </section>
    </main>
  )
}
