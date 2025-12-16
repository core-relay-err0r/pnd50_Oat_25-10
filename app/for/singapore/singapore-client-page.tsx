"use client"
import dynamic from "next/dynamic"
import { HomepageCtas } from "@/components/HomepageCtas"
import { useEffect, useState, useMemo } from "react"
import { ShuffleTestimonials } from "@/components/ShuffleTestimonials"
import { motion } from "framer-motion"
import { LandingFooter } from "@/components/landing-footer"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"

const AnimatedGridBackground = dynamic(
  () => import("@/components/ui/animated-grid-background").then((mod) => mod.AnimatedGridBackground),
  { ssr: false },
)

export default function SingaporeClientPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [wordIndex, setWordIndex] = useState(0)
  const words = useMemo(() => ["Accounting", "Consultant", "Compliant"], [])

  useEffect(() => {
    setIsVisible(true)
  }, [])

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

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (wordIndex === words.length - 1) {
        setWordIndex(0)
      } else {
        setWordIndex(wordIndex + 1)
      }
    }, 2500)
    return () => clearTimeout(timeoutId)
  }, [wordIndex, words])

  return (
    <main id="main-content" className="min-h-screen">
      <section
        className="relative w-full min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-sky-50/80"
        aria-label="Hero section"
      >
        <AnimatedGridBackground className="min-h-screen flex-1" variant="light">
          {/* Hero Section */}
          <div className="flex-1 w-full flex flex-col lg:scale-[0.85] lg:origin-top lg:mt-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex items-center py-12 sm:py-16 lg:py-20 pt-[100px] lg:pt-12 pb-32 lg:pb-20">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
                {/* Left side - Hero content */}
                <div className="text-center lg:text-left space-y-6 md:space-y-8">
                  <motion.h1
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl font-bold mb-4 leading-tight tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-teal-400 bg-clip-text text-transparent animate-gradient-shift inline-block pb-2 leading-[1.15]">
                      AI Boutique
                    </span>
                    <br />
                    <span className="relative inline-block w-full overflow-visible" style={{ height: "1.15em" }}>
                      <span className="sr-only" aria-live="polite">
                        {words[wordIndex]}
                      </span>
                      {words.map((word, index) => (
                        <motion.span
                          key={index}
                          className="absolute left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 font-bold whitespace-nowrap bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 bg-clip-text text-transparent"
                          initial={{ opacity: 0, y: 100 }}
                          transition={{ type: "spring", stiffness: 50 }}
                          animate={
                            wordIndex === index
                              ? {
                                  y: 0,
                                  opacity: 1,
                                }
                              : {
                                  y: wordIndex > index ? -150 : 150,
                                  opacity: 0,
                                }
                          }
                          aria-hidden="true"
                        >
                          {word}
                        </motion.span>
                      ))}
                    </span>
                  </motion.h1>

                  <div className="flex lg:hidden justify-center my-8 scale-75">
                    <ShuffleTestimonials />
                  </div>

                  <motion.p
                    className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed text-slate-600"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    Expert Thai accounting for Singapore companies expanding to Thailand. You Talk to an Expert, Not a
                    Robot. We connect you with a dedicated human advisor who speaks English fluently. Our AI makes them{" "}
                    <span className="text-blue-600 font-semibold">5x faster</span> and{" "}
                    <span className="text-emerald-600 font-semibold">totally error-free</span>.
                  </motion.p>

                  <motion.div
                    className="pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <HomepageCtas />
                  </motion.div>
                </div>

                {/* Right side - Testimonial cards */}
                <motion.div
                  className="hidden lg:flex items-center justify-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <ShuffleTestimonials />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Floating shapes - decorative elements */}
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
            aria-hidden="true"
          />
          <motion.div
            className="absolute top-[25%] right-[12%] w-16 h-16 border-2 border-teal-300/30 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            aria-hidden="true"
          />
          <motion.div
            className="absolute bottom-[30%] left-[15%] w-12 h-12 bg-gradient-to-br from-sky-200/30 to-teal-200/30 rounded-lg"
            animate={{
              rotate: [45, 135, 225, 315, 405],
            }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            aria-hidden="true"
          />
          <motion.div
            className="absolute top-[40%] right-[20%] w-8 h-8 bg-gradient-to-br from-blue-300/40 to-sky-300/40 rounded-full"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            aria-hidden="true"
          />
          <motion.div
            className="absolute bottom-[20%] right-[8%] w-24 h-24 border border-blue-200/30 rounded-full"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            aria-hidden="true"
          />
          <motion.div
            className="absolute top-[60%] left-[5%] w-6 h-6 bg-teal-400/30 rounded-full"
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            aria-hidden="true"
          />

          {/* Background blurs - decorative */}
          <div
            className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-sky-200/40 via-blue-200/30 to-teal-200/20 rounded-full blur-3xl pointer-events-none"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: "transform 0.5s ease-out",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute bottom-20 right-10 w-[450px] h-[450px] bg-gradient-to-br from-teal-200/35 via-sky-200/25 to-blue-200/20 rounded-full blur-3xl pointer-events-none"
            style={{
              transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
              transition: "transform 0.5s ease-out",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-blue-100/35 via-sky-100/25 to-teal-100/30 rounded-full blur-3xl pointer-events-none"
            style={{
              transform: `translate(calc(-50% + ${mousePosition.x * 0.5}px), calc(-50% + ${mousePosition.y * 0.5}px))`,
              transition: "transform 0.5s ease-out",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute top-[10%] right-[30%] w-[300px] h-[300px] bg-gradient-to-br from-emerald-100/25 to-teal-100/20 rounded-full blur-3xl pointer-events-none"
            style={{
              transform: `translate(${mousePosition.x * 0.7}px, ${mousePosition.y * 0.7}px)`,
              transition: "transform 0.6s ease-out",
            }}
            aria-hidden="true"
          />

          <LandingFooter variant="light" />
        </AnimatedGridBackground>
      </section>

      {/* Why Singapore Companies Choose Us */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why Singapore Companies Trust PND50</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "ASEAN Business Understanding",
                description:
                  "We understand cross-border ASEAN operations. Many of our clients are Singapore companies expanding regionally through Thailand.",
              },
              {
                title: "English-First Communication",
                description:
                  "Clear, professional English communication. No language barriers, no miscommunication — just straightforward accounting support.",
              },
              {
                title: "Thai Compliance Expertise",
                description:
                  "Navigate Thailand's tax laws, BOI regulations, and reporting requirements with confidence. We handle the complexity.",
              },
              {
                title: "Singapore Tax Coordination",
                description:
                  "We can coordinate with your Singapore accountant for transfer pricing, intercompany transactions, and tax treaty benefits.",
              },
            ].map((feature, index) => (
              <div key={index} className="flex gap-4 p-6 bg-white border border-slate-200 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-sky-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Use Cases */}
      <section className="container mx-auto px-4 py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            How We Help Singapore Companies in Thailand
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Regional Headquarters Setup",
                description:
                  "Setting up a Thai subsidiary or regional HQ? We handle company registration, bank account opening support, tax registration, and ongoing compliance.",
              },
              {
                title: "Manufacturing & Trading Operations",
                description:
                  "Managing Thai manufacturing or trading operations? We provide bookkeeping, inventory accounting, transfer pricing documentation, and monthly financial reporting.",
              },
              {
                title: "Service Delivery Entities",
                description:
                  "Operating a service entity in Thailand? We handle VAT, withholding tax, intercompany invoicing, and ensure proper documentation for cross-border transactions.",
              },
              {
                title: "BOI-Promoted Companies",
                description:
                  "Received BOI promotion? We manage BOI reporting requirements, duty exemption tracking, and ensure you maximize your tax incentives legally.",
              },
            ].map((useCase, index) => (
              <div key={index} className="p-6 bg-white border border-slate-200 rounded-lg">
                <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-sky-100 text-sky-700 rounded-full text-sm font-bold">
                    {index + 1}
                  </span>
                  {useCase.title}
                </h3>
                <p className="text-slate-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services for Singapore Companies */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Services</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Company Registration & Setup",
              "Monthly Bookkeeping",
              "Corporate Tax Filing (PND50)",
              "VAT Management (PP.30)",
              "Withholding Tax",
              "Transfer Pricing Documentation",
              "BOI Reporting",
              "Audit Support",
              "Payroll Services",
              "Work Permit Support",
              "Financial Reporting (Thai & English)",
              "Strategic Tax Planning",
            ].map((service, index) => (
              <div key={index} className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0" />
                <span>{service}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild size="lg">
              <Link href="/services">
                View All Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-br from-sky-600 to-blue-600 text-white rounded-2xl">
        <div className="max-w-3xl mx-auto text-center">
          <Headphones className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Ready to Simplify Your Thai Operations?</h2>
          <p className="text-sky-100 text-lg mb-8">
            Book a free consultation with our team. We'll discuss your specific needs and show you how we can support
            your Thailand operations.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Schedule Free Consultation</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
