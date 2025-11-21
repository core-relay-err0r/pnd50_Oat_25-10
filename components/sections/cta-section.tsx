"use client"

import { motion } from "framer-motion"
import { HomepageCtas } from "@/components/HomepageCtas"

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 relative z-10">
      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40 max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-16 text-center border border-slate-700 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Streamline Your Accounting?
            </h2>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Join the future of corporate services in Thailand. Experience the perfect blend of AI efficiency and human
              expertise.
            </p>
            <div className="flex justify-center">
              <HomepageCtas />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
