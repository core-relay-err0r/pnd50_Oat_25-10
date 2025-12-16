"use client"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import ServiceSlider from "@/components/service-slider"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import { useState, useEffect } from "react"
import { ServicesRelatedLinks } from "@/components/seo/related-links"

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

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
}

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

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
    { value: "200+", label: "Clients Served" },
    { value: "10+", label: "Years Experience" },
    { value: "99%", label: "Client Satisfaction" },
  ]

  return (
    <main className="min-h-screen">
      <section className="relative w-full min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-sky-50/80">
        <AnimatedGridBackground className="min-h-screen flex-1" variant="light">
          <motion.div
            className="absolute top-[15%] left-[8%] w-20 h-20 border-2 border-sky-300/40 rounded-2xl"
            animate={{
              rotate: [0, 90, 180, 270, 360],
              y: [0, -15, 0, 15, 0],
            }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            style={{
              transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
            }}
          />
          <motion.div
            className="absolute top-[25%] right-[12%] w-16 h-16 border-2 border-teal-300/30 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[30%] left-[15%] w-12 h-12 bg-gradient-to-br from-sky-200/30 to-teal-200/30 rounded-lg"
            animate={{
              rotate: [45, 135, 225, 315, 405],
            }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
          <motion.div
            className="absolute top-[40%] right-[20%] w-8 h-8 bg-gradient-to-br from-blue-300/40 to-sky-300/40 rounded-full"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[20%] right-[8%] w-24 h-24 border border-blue-200/30 rounded-full"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-[60%] left-[5%] w-6 h-6 bg-teal-400/30 rounded-full"
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          <div
            className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-sky-200/40 via-blue-200/30 to-teal-200/20 rounded-full blur-3xl pointer-events-none"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: "transform 0.5s ease-out",
            }}
          />
          <div
            className="absolute bottom-20 right-10 w-[450px] h-[450px] bg-gradient-to-br from-teal-200/35 via-sky-200/25 to-blue-200/20 rounded-full blur-3xl pointer-events-none"
            style={{
              transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
              transition: "transform 0.5s ease-out",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-blue-100/35 via-sky-100/25 to-teal-100/30 rounded-full blur-3xl pointer-events-none"
            style={{
              transform: `translate(calc(-50% + ${mousePosition.x * 0.5}px), calc(-50% + ${mousePosition.y * 0.5}px))`,
              transition: "transform 0.5s ease-out",
            }}
          />
          <div
            className="absolute top-[10%] right-[30%] w-[300px] h-[300px] bg-gradient-to-br from-emerald-100/25 to-teal-100/20 rounded-full blur-3xl pointer-events-none"
            style={{
              transform: `translate(${mousePosition.x * 0.7}px, ${mousePosition.y * 0.7}px)`,
              transition: "transform 0.6s ease-out",
            }}
          />

          <div className="flex-1 w-full flex flex-col lg:scale-[0.85] lg:origin-top">
            <section className="relative py-8 md:py-16 pt-[100px] lg:pt-[140px]">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-3xl mx-auto text-center">
                  <motion.div
                    className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-sky-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></span>
                    Trusted by 200+ Businesses
                  </motion.div>

                  <motion.h1
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="bg-gradient-to-r from-slate-700 via-sky-600 to-sky-500 bg-clip-text text-transparent">
                      Professional Services
                    </span>{" "}
                    <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 bg-clip-text text-transparent">
                      Tailored for You
                    </span>
                  </motion.h1>

                  <motion.p
                    className="text-slate-600 leading-relaxed text-lg md:text-xl mb-8 max-w-xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    From company setup to ongoing compliance, we provide end-to-end business solutions for foreign-owned
                    companies in Thailand.
                  </motion.p>

                  <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  ></motion.div>

                  <motion.div
                    className="flex flex-wrap justify-center gap-8"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        className="text-center"
                        variants={fadeInUp}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-700 via-sky-600 to-sky-500 bg-clip-text text-transparent">
                          {stat.value}
                        </div>
                        <div className="text-sm text-slate-500">{stat.label}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </section>

            <motion.section
              className="py-12 md:py-20"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <motion.div
                  className="text-center mb-12"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 bg-clip-text text-transparent mb-4">
                    Our Services
                  </h2>
                </motion.div>

                <ServiceSlider />
              </div>
            </motion.section>

            <motion.section
              className="py-8 md:py-12"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
                <motion.h2
                  className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-slate-700 via-sky-600 to-sky-500 bg-clip-text text-transparent mb-6"
                  variants={fadeInUp}
                  transition={{ duration: 0.5 }}
                >
                  Ready to Get Started?
                </motion.h2>
                <motion.p
                  className="text-slate-600 mb-6 leading-relaxed text-lg"
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Schedule a free consultation to discuss how we can support your business in Thailand
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link
                    href="/calculator"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:from-blue-600 hover:via-blue-700 hover:to-indigo-700 transition-all hover:scale-105 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-600/40"
                  >
                    Schedule Consultation
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white/60 backdrop-blur-md border-2 border-slate-300/50 text-slate-700 px-8 py-4 rounded-xl font-bold hover:border-sky-400/60 hover:bg-white/80 hover:text-sky-600 transition-all hover:scale-105 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-sky-200/50"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </motion.section>

            <section className="py-8 md:py-12">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <ServicesRelatedLinks />
              </div>
            </section>
          </div>
        </AnimatedGridBackground>
      </section>
    </main>
  )
}
