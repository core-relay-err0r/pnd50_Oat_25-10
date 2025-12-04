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
    <AnimatedGridBackground className="min-h-screen">
      {/* Floating parallax blobs */}
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

      <motion.div initial="initial" animate="animate" variants={pageVariants} className="relative z-10 min-h-screen">
        {/* Header with back button */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-4">
          <Link href="/calculator">
            <Button variant="ghost" className="text-slate-400 hover:text-white hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Calculator
            </Button>
          </Link>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          {/* Title Section */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center mb-6"
            >
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30">
                <CheckCircle className="h-12 w-12 text-green-400" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-green-400">Quote Submitted Successfully</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              Thank You!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-slate-400 max-w-2xl mx-auto"
            >
              Your quote request has been received. Our team will review your requirements and get back to you shortly.
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
            <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-xl backdrop-blur-sm border-none">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Your Quote Has Been Delivered</h3>
                  <p className="text-slate-300">
                    We've received your business information and sent your detailed accounting services quote to our
                    team for review.
                  </p>
                </div>
              </div>
            </div>

            {/* What Happens Next Card */}
            <div className="p-6 bg-primary/10 border border-primary/20 rounded-xl backdrop-blur-sm border-none border-none">
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">What Happens Next?</h3>
                  <div className="space-y-2 text-slate-300">
                    <p>• Our accounting specialists will review your requirements</p>
                    <p>• We'll prepare a customized service proposal for your business</p>
                    <p>
                      • <span className="text-white font-medium">We will contact you within 1 business day</span> to
                      discuss your needs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Immediate Assistance Card */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm border-none">
              <h3 className="text-lg font-semibold text-white mb-3">Need Immediate Assistance?</h3>
              <p className="text-slate-300 mb-4">
                If you have urgent questions or need to speak with us immediately, feel free to reach out:
              </p>
              <div className="space-y-2 text-slate-300">
                <p>
                  <span className="text-white font-medium">Email:</span> info@pnd50.com
                </p>
                <p>
                  <span className="text-white font-medium">Business Hours:</span> Monday - Friday, 9:00 AM - 6:00 PM
                  (Thailand Time)
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
                className="flex-1 border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                <Link href="/calculator">Get Another Quote</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatedGridBackground>
  )
}
