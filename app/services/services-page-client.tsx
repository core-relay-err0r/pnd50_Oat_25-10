"use client"

import { motion } from "framer-motion"
import ServiceSlider from "@/components/service-slider"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function ServicesPageClient() {
  return (
    <motion.section
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {/* Hero Section */}
      <motion.div className="text-center mb-16 md:mb-20" variants={fadeInUp}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6 text-balance">
          Business Services in Thailand
        </h1>
        <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-pretty">
          Comprehensive accounting, tax, and business solutions for foreign companies operating in Thailand
        </p>
      </motion.div>

      {/* Services Slider */}
      <motion.div variants={fadeInUp}>
        <ServiceSlider />
      </motion.div>
    </motion.section>
  )
}
