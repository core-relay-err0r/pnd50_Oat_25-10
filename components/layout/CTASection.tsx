"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function CTASection() {
  return (
    <motion.section
      className="py-16 md:py-20 bg-transparent"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
        <p className="text-sm font-medium text-sky-500 mb-3 tracking-wide uppercase">Get Started</p>
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6 text-balance leading-tight">
          Ready to simplify your
          <br />
          business in Thailand?
        </h2>
        <p className="text-slate-500 mb-10 leading-relaxed text-lg max-w-xl mx-auto text-pretty">
          Let's discuss how we can help your business thrive with expert accounting and tax support.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/schedule"
            className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-4 rounded-full font-medium hover:from-sky-600 hover:to-blue-700 transition-all hover:scale-105 shadow-lg shadow-sky-500/25"
          >
            Schedule a Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border border-sky-200 text-sky-700 px-8 py-4 rounded-full font-medium hover:border-sky-300 hover:bg-sky-50/50 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </motion.section>
  )
}
