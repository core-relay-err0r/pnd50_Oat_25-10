"use client"
import { Rocket, Zap, ArrowLeft, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"
import ServiceSlider from "@/components/service-slider"
import { motion } from "framer-motion"

const packages = [
  {
    icon: Rocket,
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
    icon: TrendingUp,
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
    icon: Zap,
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
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background py-8 md:py-12 pt-[100px] lg:pt-[100px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors group mb-6 sm:mb-8 touch-manipulation"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
          </motion.div>

          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Comprehensive Solutions
            </motion.div>
            <motion.h1
              className="text-3xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Professional Services for Your Business
            </motion.h1>
            <motion.p
              className="text-muted-foreground leading-relaxed text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              From accounting to compliance, we provide comprehensive services tailored for foreign-owned businesses
              operating in Thailand.
            </motion.p>
          </div>
        </div>
      </section>

      <motion.section
        className="py-12 md:py-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          </div>

          <ServiceSlider />
        </div>
      </motion.section>

      <motion.section
        className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
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
              className="inline-flex items-center justify-center gap-2 bg-card border-2 border-border text-foreground px-8 py-4 rounded-lg font-semibold hover:border-primary hover:bg-card/50 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
