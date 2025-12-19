"use client"
import { ArrowRight, Mail, MapPin, Phone, Globe, ChevronDown } from "lucide-react"
import Link from "next/link"
import ServiceSlider from "@/components/service-slider"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import { useState, useEffect } from "react"

const AnimatedGridBackground = dynamic(
  () => import("@/components/ui/animated-grid-background").then((mod) => mod.AnimatedGridBackground),
  { ssr: false },
)

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
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

export default function ServicesPageClient() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [langOpen, setLangOpen] = useState(false)

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

  const serviceLinks = [
    { name: "Accounting in Thailand", href: "/services/accounting" },
    { name: "Tax Filing in Thailand", href: "/services/tax" },
    { name: "Payroll in Thailand", href: "/services/payroll" },
    { name: "Open Business in Thailand", href: "/services/corporate" },
    { name: "Business Advisory", href: "/services/advisory" },
    { name: "Growth Services", href: "/services/growth" },
  ]

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧", href: "/services" },
    { code: "th", name: "ไทย", flag: "🇹🇭", href: "/th/services" },
    { code: "ru", name: "Русский", flag: "🇷🇺", href: "/ru/services" },
    { code: "zh", name: "中文", flag: "🇨🇳", href: "/zh/services" },
  ]

  return (
    <main className="min-h-screen">
      {/* JSON-LD Structured Data for Services Hub */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Business Services in Thailand",
            description: "Complete business services for foreign companies operating in Thailand",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Accounting Services in Thailand",
                url: "https://pnd50.com/services/accounting",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Tax Services in Thailand",
                url: "https://pnd50.com/services/tax",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Payroll Services in Thailand",
                url: "https://pnd50.com/services/payroll",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Company Registration in Thailand",
                url: "https://pnd50.com/services/corporate",
              },
              {
                "@type": "ListItem",
                position: 5,
                name: "Business Advisory in Thailand",
                url: "https://pnd50.com/services/advisory",
              },
              {
                "@type": "ListItem",
                position: 6,
                name: "Business Growth Services in Thailand",
                url: "https://pnd50.com/services/growth",
              },
            ],
          }),
        }}
      />

      <section className="relative w-full min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-sky-50/80">
        <AnimatedGridBackground className="min-h-screen flex-1" variant="light">
          <motion.div
            className="absolute top-[15%] left-[8%] w-20 h-20 border-2 border-sky-400/30 rounded-2xl backdrop-blur-sm"
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
            className="absolute top-[25%] right-[12%] w-16 h-16 border-2 border-blue-400/25 rounded-full backdrop-blur-sm"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[30%] left-[15%] w-12 h-12 bg-gradient-to-br from-sky-300/20 to-blue-300/20 rounded-lg backdrop-blur-sm"
            animate={{
              rotate: [45, 135, 225, 315, 405],
            }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
          <motion.div
            className="absolute top-[40%] right-[20%] w-8 h-8 bg-gradient-to-br from-blue-400/30 to-sky-400/30 rounded-full"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[20%] right-[8%] w-24 h-24 border border-sky-300/25 rounded-full backdrop-blur-sm"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-[60%] left-[5%] w-6 h-6 bg-blue-400/25 rounded-full"
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          <div
            className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-sky-300/30 via-blue-300/20 to-indigo-300/15 rounded-full blur-3xl pointer-events-none"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: "transform 0.5s ease-out",
            }}
          />
          <div
            className="absolute bottom-20 right-10 w-[450px] h-[450px] bg-gradient-to-br from-blue-300/25 via-sky-300/20 to-indigo-300/15 rounded-full blur-3xl pointer-events-none"
            style={{
              transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
              transition: "transform 0.5s ease-out",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-blue-200/25 via-sky-200/20 to-indigo-200/20 rounded-full blur-3xl pointer-events-none"
            style={{
              transform: `translate(calc(-50% + ${mousePosition.x * 0.5}px), calc(-50% + ${mousePosition.y * 0.5}px))`,
              transition: "transform 0.5s ease-out",
            }}
          />

          <div className="flex-1 w-full flex flex-col lg:scale-[0.85] lg:origin-top">
            <section className="relative py-8 md:py-16 pt-[100px] lg:pt-[140px]">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-4xl mx-auto text-center">
                  <motion.div
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-50 to-blue-50 text-sky-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 border border-sky-200/60 shadow-sm shadow-sky-100/50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
                    </span>
                    Trusted by 200+ Businesses
                  </motion.div>

                  <motion.h1
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-[1.1] tracking-tight text-balance"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="inline-block bg-gradient-to-r from-blue-600 via-sky-500 to-teal-400 bg-clip-text text-transparent">
                      Business Compliance &amp;
                      <br />
                      Accounting
                    </span>{" "}
                    <span className="inline-block bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent">
                      Services in Thailand
                    </span>
                  </motion.h1>

                  <motion.p
                    className="text-slate-600 leading-relaxed text-lg md:text-xl lg:text-2xl mb-12 max-w-2xl mx-auto text-pretty font-light"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    From company setup to ongoing compliance, we provide end-to-end business solutions for foreign-owned
                    companies in Thailand.
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap justify-center gap-6 md:gap-8 mt-16"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        className="group relative bg-white/60 backdrop-blur-md border border-slate-200/60 rounded-2xl p-6 md:p-8 min-w-[160px] hover:bg-white/80 hover:border-sky-300/60 hover:shadow-xl hover:shadow-sky-100/50 transition-all duration-300 hover:-translate-y-1"
                        variants={fadeInUp}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative">
                          <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                            {stat.value}
                          </div>
                          <div className="text-sm md:text-base text-slate-600 font-medium">{stat.label}</div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Language Selector */}
                  <div className="mt-8">
                    <button
                      className="inline-flex items-center justify-center gap-2 bg-white/70 backdrop-blur-md border-2 border-slate-200/80 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:border-sky-400/80 hover:bg-white/90 hover:text-sky-600 transition-all hover:scale-105 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-sky-200/50"
                      onClick={() => setLangOpen(!langOpen)}
                    >
                      <Globe className="w-5 h-5" />
                      Select Language
                      <ChevronDown
                        className="w-5 h-5 transition-transform"
                        style={{ transform: langOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                      />
                    </button>
                    {langOpen && (
                      <div className="mt-2">
                        <ul className="space-y-3">
                          {languages.map((lang, index) => (
                            <li key={index}>
                              <Link
                                href={lang.href}
                                className="text-slate-600 hover:text-sky-600 transition-colors text-sm flex items-center gap-2 group"
                              >
                                {lang.flag} {lang.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>

            <motion.section
              className="py-16 md:py-24"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <motion.div
                  className="text-center mb-16"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent mb-4 text-balance">
                    Our Services
                  </h2>
                  <p className="text-slate-600 text-lg max-w-2xl mx-auto text-pretty">
                    Comprehensive accounting and compliance solutions tailored for your business
                  </p>
                </motion.div>

                <ServiceSlider />
              </div>
            </motion.section>

            <motion.section
              className="py-16 md:py-20"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
                <motion.h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6 text-balance"
                  variants={fadeInUp}
                  transition={{ duration: 0.5 }}
                >
                  Ready to Get Started?
                </motion.h2>
                <motion.p
                  className="text-slate-600 mb-8 leading-relaxed text-lg md:text-xl max-w-2xl mx-auto text-pretty"
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
                    href="/schedule"
                    className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-sky-600 hover:via-blue-700 hover:to-indigo-700 transition-all hover:scale-105 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-600/40"
                  >
                    Schedule Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  {/* CTA Column */}
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-6">Ready to Start?</h3>
                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                      Helping foreign businesses succeed in Thailand since 2015. Get expert accounting, tax, and
                      compliance support.
                    </p>
                    {/* Language Selector Dropdown */}
                    <div className="relative">
                      <button
                        onClick={() => setLangOpen(!langOpen)}
                        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium text-sm hover:from-sky-600 hover:to-blue-700 transition-all hover:scale-105 shadow-md shadow-blue-500/25 w-full sm:w-auto"
                      >
                        <Globe className="w-4 h-4" />
                        Select Language
                        <ChevronDown className={`w-4 h-4 transition-transform ${langOpen ? "rotate-180" : ""}`} />
                      </button>
                      {langOpen && (
                        <div className="absolute bottom-full mb-2 left-0 bg-white rounded-lg shadow-xl border border-slate-200 overflow-hidden min-w-[180px] z-50">
                          {languages.map((lang) => (
                            <Link
                              key={lang.code}
                              href={lang.href}
                              className="flex items-center gap-3 px-4 py-3 hover:bg-sky-50 transition-colors text-sm text-slate-700 hover:text-sky-600"
                              onClick={() => setLangOpen(false)}
                            >
                              <span className="text-lg">{lang.flag}</span>
                              <span>{lang.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.section>

            {/* SEO-optimized footer section */}
            <motion.footer
              className="py-16 md:py-20 mt-auto border-t border-slate-200/60 bg-gradient-to-b from-transparent to-white/50"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                  {/* Services Column */}
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-6">Our Services </h3>
                    <ul className="space-y-3">
                      {serviceLinks.map((service, index) => (
                        <li key={index}>
                          <Link
                            href={service.href}
                            className="text-slate-600 hover:text-sky-600 transition-colors text-sm flex items-center gap-2 group"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 group-hover:bg-sky-600 transition-colors" />
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Column */}
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-6">Contact Us</h3>
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="mailto:info@pnd50.com"
                          className="text-slate-600 hover:text-sky-600 transition-colors text-sm flex items-center gap-3"
                        >
                          <Mail className="w-4 h-4 text-sky-500" />
                          info@pnd50.com
                        </a>
                      </li>
                      <li>
                        <a
                          href="tel:+66843563805"
                          className="text-slate-600 hover:text-sky-600 transition-colors text-sm flex items-center gap-3"
                        >
                          <Phone className="w-4 h-4 text-sky-500" />
                          +66 84 356 3805
                        </a>
                      </li>
                      <li>
                        <span className="text-slate-600 text-sm flex items-center gap-3">
                          <MapPin className="w-4 h-4 text-sky-500" />
                          Bangkok, Thailand
                        </span>
                      </li>
                    </ul>
                    <p className="text-slate-500 text-xs mt-6 leading-relaxed">
                      Serving foreign businesses in Bangkok, Phuket, Chiang Mai, Pattaya, and throughout Thailand.
                    </p>
                  </div>

                  {/* CTA Column */}
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-6">Ready to Start?</h3>
                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                      Helping foreign businesses succeed in Thailand since 2015. Get expert accounting, tax, and
                      compliance support.
                    </p>
                    <Link
                      href="/schedule"
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium text-sm hover:from-sky-600 hover:to-blue-700 transition-all hover:scale-105 shadow-md shadow-blue-500/25"
                    >
                      Free Consultation
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <p className="text-slate-500 text-xs">
                    © 2025 PND50. Professional accounting and business consultant for expats in Thailand.
                  </p>
                  <div className="flex gap-6">
                    <Link
                      href="/privacy-policy"
                      className="text-slate-500 hover:text-sky-600 text-xs transition-colors"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      href="/terms-of-service"
                      className="text-slate-500 hover:text-sky-600 text-xs transition-colors"
                    >
                      Terms of Service
                    </Link>
                  </div>
                </div>
              </div>
            </motion.footer>
          </div>
        </AnimatedGridBackground>
      </section>
    </main>
  )
}
