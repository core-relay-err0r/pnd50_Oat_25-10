"use client"

import { ArrowRight, BookOpen, FileText, Users, Building2, Scale, Briefcase } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import { useState, useEffect } from "react"
import { LandingFooter } from "@/components/landing-footer"

const AnimatedGridBackground = dynamic(
  () => import("@/components/ui/animated-grid-background").then((mod) => mod.AnimatedGridBackground),
  { ssr: false },
)

const services = [
  {
    number: "01",
    icon: BookOpen,
    title: "Accounting & Bookkeeping",
    description:
      "We handle your monthly bookkeeping, financial statements, and reconciliations with precision. All work is processed internally using TR Cloud — a secure accounting system operated by our team.",
    features: ["Monthly bookkeeping", "Financial statements", "Bank reconciliations", "TR Cloud system"],
    href: "/services/accounting",
  },
  {
    number: "02",
    icon: FileText,
    title: "Tax & Compliance",
    description:
      "Monthly and annual tax filings, including VAT, withholding tax, and corporate income tax. We ensure your company remains fully compliant with Thai Revenue Department regulations.",
    features: ["VAT filing", "Withholding tax", "Corporate income tax", "Compliance support"],
    href: "/services/tax",
  },
  {
    number: "03",
    icon: Users,
    title: "Payroll Services",
    description:
      "Monthly payroll and social security submissions, prepared accurately and delivered on time. Ideal for both local and foreign-owned businesses.",
    features: ["Monthly payroll", "Social security", "Accurate calculations", "Timely delivery"],
    href: "/services/payroll",
  },
  {
    number: "04",
    icon: Building2,
    title: "Corporate Services",
    description:
      "Company registration, shareholder updates, and annual DBD filings — handled efficiently by our experienced team.",
    features: ["Company registration", "Shareholder updates", "DBD filings", "Corporate governance"],
    href: "/services/corporate",
  },
  {
    number: "05",
    icon: Scale,
    title: "Legal & Advisory",
    description:
      "Clear, practical guidance on Thai business law, work permits, and regulatory compliance to help your business operate confidently.",
    features: ["Work permits", "Business visas", "Legal consultation", "Regulatory guidance"],
    href: "/services/legal",
  },
  {
    number: "06",
    icon: Briefcase,
    title: "Business Solutions",
    description:
      "Strategic financial planning and analysis to help scale your business in Thailand. We provide insights to optimize operations and maximize profitability.",
    features: ["Financial analysis", "Growth strategy", "Cost optimization", "Performance metrics"],
    href: "/services/solutions",
  },
]

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "15+", label: "Years Experience" },
  { value: "99%", label: "Client Retention" },
  { value: "24/7", label: "Support Available" },
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

  return (
    <main className="min-h-screen">
      <section className="relative w-full min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <AnimatedGridBackground className="min-h-screen flex-1">
          {/* Floating blur elements */}
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

          <div className="flex-1 w-full flex flex-col">
            {/* Hero Section */}
            <section className="relative py-8 md:py-12 pt-[100px] lg:pt-[140px]">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  {/* Left - Hero Content */}
                  <div>
                    <motion.div
                      className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                      What we do
                    </motion.div>

                    <motion.h1
                      className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      Our collection of services spans{" "}
                      <span className="text-slate-400">every stage of your business journey.</span>
                    </motion.h1>

                    <motion.p
                      className="text-slate-300 leading-relaxed text-lg mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      Explore how we help foreign-owned businesses thrive in Thailand with comprehensive accounting,
                      tax, and corporate services.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Link
                        href="/calculator"
                        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:gap-4"
                      >
                        Get Started
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </motion.div>
                  </div>

                  {/* Right - Stats Grid */}
                  <motion.div
                    className="grid grid-cols-2 gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileHover={{ y: -5 }}
                      >
                        <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                        <div className="text-slate-400 text-sm">{stat.label}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Services Grid Section */}
            <motion.section
              className="py-16 md:py-24"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {services.map((service, index) => {
                    const Icon = service.icon
                    return (
                      <motion.div
                        key={index}
                        className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-primary/50 transition-all duration-500"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        whileHover={{ y: -8 }}
                      >
                        {/* Number Badge */}
                        <div className="absolute top-6 right-6 text-6xl font-bold text-slate-800 group-hover:text-primary/20 transition-colors duration-500">
                          {service.number}
                        </div>

                        {/* Icon */}
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                          <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                        </div>

                        {/* Content */}
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>

                        <p className="text-slate-400 leading-relaxed mb-6 text-sm line-clamp-3">
                          {service.description}
                        </p>

                        {/* Features */}
                        <ul className="space-y-2 mb-6">
                          {service.features.slice(0, 3).map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center gap-2 text-sm text-slate-500 group-hover:text-slate-400 transition-colors"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>

                        {/* Read More Link */}
                        <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span>Learn more</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.section>

            {/* Process Section */}
            <motion.section
              className="py-16 md:py-24 border-t border-slate-800"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center mb-16">
                  <motion.h2
                    className="text-3xl md:text-4xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    How We Work
                  </motion.h2>
                  <motion.p
                    className="text-slate-400 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    Our streamlined process ensures you get the support you need, when you need it.
                  </motion.p>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                  {[
                    { step: "01", title: "Consultation", desc: "Discuss your business needs with our experts" },
                    { step: "02", title: "Assessment", desc: "We analyze your requirements and propose solutions" },
                    { step: "03", title: "Implementation", desc: "Our team sets up and handles all processes" },
                    { step: "04", title: "Ongoing Support", desc: "Continuous support and regular reporting" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="text-center relative"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
                    >
                      <div className="text-5xl font-bold text-primary/20 mb-4">{item.step}</div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                      {index < 3 && (
                        <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
              className="py-16 md:py-24"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="bg-gradient-to-br from-primary/10 via-slate-900 to-chart-2/10 border border-slate-800 rounded-3xl p-8 md:p-12 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
                  <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                    Schedule a free consultation to discuss how we can support your business in Thailand.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/calculator"
                      className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
                    >
                      Schedule Consultation
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/30 transition-all"
                    >
                      Contact Us
                    </Link>
                  </div>
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
