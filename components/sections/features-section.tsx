"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, ShieldCheck, Users, Clock } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "5x Faster Processing",
    description:
      "Our AI-driven engine processes documents and transactions at lightning speed, reducing turnaround times significantly.",
  },
  {
    icon: ShieldCheck,
    title: "100% Error-Free",
    description:
      "Automated validation and compliance checks ensure your financial data is accurate and compliant with Thai regulations.",
  },
  {
    icon: Users,
    title: "Expert Human Oversight",
    description:
      "Every AI process is monitored by certified Thai accountants who understand the nuances of local business laws.",
  },
  {
    icon: Clock,
    title: "Real-Time Reporting",
    description:
      "Access your financial insights instantly. No more waiting for end-of-month reports to know where you stand.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 lg:py-32 relative z-10">
      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40 max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose PND50?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            We combine cutting-edge AI technology with professional accounting expertise to deliver a superior service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-slate-900/50 border-slate-800 hover:border-primary/50 transition-colors h-full backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
