"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { translations, type Locale } from "@/lib/translations"

interface CTASectionProps {
  locale?: Locale
}

export default function CTASection({ locale = "en" }: CTASectionProps) {
  const t = translations[locale]
  const basePath = locale === "en" ? "" : `/${locale}`

  return (
    <motion.section
      className="py-16 md:py-20 bg-transparent"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
        <p className="text-sm font-medium text-sky-500 mb-3 tracking-wide uppercase">{t.cta.badge}</p>
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 bg-clip-text text-transparent mb-6 text-balance leading-tight">
          {t.cta.title1}
          <br />
          {t.cta.title2}
        </h2>
        <p className="text-slate-500 mb-10 leading-relaxed text-lg max-w-xl mx-auto text-pretty">{t.cta.description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`${basePath}/schedule`}
            className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-200 shadow-lg shadow-sky-500/20"
          >
            {t.cta.schedule}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href={`${basePath}/contact`}
            className="inline-flex items-center justify-center gap-2 border border-sky-200 text-sky-700 px-8 py-4 rounded-full font-medium hover:border-sky-400 hover:text-sky-800 transition-all duration-200"
          >
            {t.cta.contact}
          </Link>
        </div>
      </div>
    </motion.section>
  )
}
