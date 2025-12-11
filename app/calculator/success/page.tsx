"use client"

import { useState, useEffect } from "react"
import { CheckCircle, Clock, ArrowLeft, Mail, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"

const AnimatedGridBackground = dynamic(
  () => import("@/components/ui/animated-grid-background").then((mod) => mod.AnimatedGridBackground),
  { ssr: false },
)

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function CalculatorSuccessPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50/80">
      <AnimatedGridBackground className="min-h-screen" variant="light">
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

        {/* Floating decorative shapes */}
        <motion.div
          className="absolute top-[15%] left-[8%] w-20 h-20 border-2 border-sky-300/40 rounded-2xl"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            y: [0, -15, 0, 15, 0],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
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
          className="absolute bottom-[30%] right-[8%] w-24 h-24 border border-blue-200/30 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        <motion.div initial="initial" animate="animate" variants={pageVariants} className="relative z-10">
          {/* Header with back button */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-4">
            <Link href="/calculator">
              <Button variant="ghost" className="text-slate-500 hover:text-slate-700 hover:bg-slate-100">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Calculator
              </Button>
            </Link>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 pb-16">
            {/* Title Section */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center mb-6"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center border border-green-200">
                  <CheckCircle className="h-12 w-12 text-green-500" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full border border-green-200 mb-6"
              >
                <Sparkles className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-700">Quote Submitted Successfully</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4"
              >
                Thank You!
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-slate-600 max-w-2xl mx-auto"
              >
                Your quote request has been received. Our team will review your requirements and get back to you
                shortly.
              </motion.p>
            </div>

            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="max-w-2xl mx-auto space-y-6"
            >
              {/* Quote Delivered Card */}
              <div className="p-6 bg-green-50 border border-green-200 rounded-xl">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Your Quote Has Been Delivered</h3>
                    <p className="text-slate-600">
                      We've received your business information and sent your detailed accounting services quote to our
                      team for review.
                    </p>
                  </div>
                </div>
              </div>

              {/* What Happens Next Card */}
              <div className="p-6 bg-sky-50 border border-sky-200 rounded-xl">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-sky-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">What Happens Next?</h3>
                    <div className="space-y-2 text-slate-600">
                      <p>• Our accounting specialists will review your requirements</p>
                      <p>• We'll prepare a customized service proposal for your business</p>
                      <p>
                        • <span className="text-slate-800 font-medium">We will contact you within 1 business day</span>{" "}
                        to discuss your needs
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Immediate Assistance Card */}
              <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Need Immediate Assistance?</h3>
                <p className="text-slate-600 mb-4">
                  If you have urgent questions or need to speak with us immediately, feel free to reach out:
                </p>
                <div className="space-y-2 text-slate-600">
                  <p>
                    <span className="text-slate-800 font-medium">Email:</span> info@pnd50.com
                  </p>
                  <p>
                    <span className="text-slate-800 font-medium">Business Hours:</span> Monday - Friday, 9:00 AM - 6:00
                    PM (Thailand Time)
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button asChild className="flex-1 bg-primary hover:bg-primary/90 text-white">
                  <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="flex-1 border-slate-300 text-slate-700 bg-white hover:border-primary hover:text-primary transition-all duration-200"
                >
                  <Link href="/calculator">Get Another Quote</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatedGridBackground>
    </section>
  )
}
