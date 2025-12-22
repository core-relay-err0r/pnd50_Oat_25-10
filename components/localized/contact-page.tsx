"use client"

import React from "react"
import dynamic from "next/dynamic"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, Send, CheckCircle2, MessageSquare, Building2, Clock, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { translations, type Locale } from "@/lib/translations"

const AnimatedGridBackground = dynamic(
  () => import("@/components/ui/animated-grid-background").then((mod) => mod.AnimatedGridBackground),
  { ssr: false },
)

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

interface LocalizedContactPageProps {
  locale: Locale
}

export default function LocalizedContactPage({ locale }: LocalizedContactPageProps) {
  const t = translations[locale]
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    companyName: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          telephone: formData.phone,
          whatsappId: formData.whatsapp,
          companyName: formData.companyName,
          message: formData.message,
          name: formData.name,
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", phone: "", whatsapp: "", companyName: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactMethods = [
    { icon: Phone, label: "Call Us", value: "+66 2 017 2949", href: "tel:020172949" },
    { icon: Mail, label: "Email Us", value: "info@pnd50.com", href: "mailto:info@pnd50.com" },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <AnimatedGridBackground className="min-h-screen" variant="light">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-sky-200/40 via-blue-200/30 to-teal-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-[450px] h-[450px] bg-gradient-to-br from-teal-200/35 via-sky-200/25 to-blue-200/20 rounded-full blur-3xl pointer-events-none" />

        <section className="relative pt-24 pb-8 md:pt-32 md:pb-12 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Headline */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block text-sky-600 font-semibold text-sm uppercase tracking-wider mb-4">
                  {t.contact.badge}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                  {t.contact.title1}
                  <br />
                  <span className="text-sky-600">{t.contact.title2}</span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed max-w-md">{t.contact.description}</p>

                {/* Quick Contact Methods */}
                <div className="mt-8 flex flex-wrap items-center gap-6 text-slate-600">
                  {contactMethods.map((method, index) => (
                    <React.Fragment key={index}>
                      <a
                        href={method.href}
                        className="inline-flex items-center gap-2 hover:text-sky-600 transition-colors"
                      >
                        <method.icon className="w-4 h-4 text-sky-500" />
                        <span className="font-medium">{method.value}</span>
                      </a>
                      {index < contactMethods.length - 1 && <span className="text-slate-300">|</span>}
                    </React.Fragment>
                  ))}
                </div>
              </motion.div>

              {/* Right: Response Time Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden lg:block"
              >
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center">
                      <Clock className="w-7 h-7 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">{t.contact.quickResponse.title}</h3>
                      <p className="text-slate-500">{t.contact.quickResponse.subtitle}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 rounded-xl p-4">
                      <p className="text-3xl font-bold text-sky-600">24h</p>
                      <p className="text-sm text-slate-600">{t.contact.quickResponse.email}</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4">
                      <p className="text-3xl font-bold text-sky-600">1h</p>
                      <p className="text-sm text-slate-600">{t.contact.quickResponse.whatsapp}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-5 gap-8">
                {/* Contact Form */}
                <motion.div
                  className="lg:col-span-3"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-sky-600" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-slate-800">{t.contact.form.title}</h2>
                        <p className="text-sm text-slate-500">{t.contact.form.subtitle}</p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-slate-700 font-medium">
                            {t.contact.form.fullName} *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="h-11 bg-slate-50 border-slate-200 focus:bg-white focus:border-sky-400 transition-colors"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-slate-700 font-medium">
                            {t.contact.form.email} *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="h-11 bg-slate-50 border-slate-200 focus:bg-white focus:border-sky-400 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-slate-700 font-medium">
                            {t.contact.form.phone}
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+66 XX XXX XXXX"
                            value={formData.phone}
                            onChange={handleChange}
                            className="h-11 bg-slate-50 border-slate-200 focus:bg-white focus:border-sky-400 transition-colors"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="whatsapp" className="text-slate-700 font-medium">
                            {t.contact.form.whatsapp}
                          </Label>
                          <Input
                            id="whatsapp"
                            name="whatsapp"
                            type="tel"
                            placeholder="+66 XX XXX XXXX"
                            value={formData.whatsapp}
                            onChange={handleChange}
                            className="h-11 bg-slate-50 border-slate-200 focus:bg-white focus:border-sky-400 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="companyName" className="text-slate-700 font-medium">
                          {t.contact.form.companyName}
                        </Label>
                        <Input
                          id="companyName"
                          name="companyName"
                          type="text"
                          placeholder="Your Company Ltd."
                          value={formData.companyName}
                          onChange={handleChange}
                          className="h-11 bg-slate-50 border-slate-200 focus:bg-white focus:border-sky-400 transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-slate-700 font-medium">
                          {t.contact.form.message} *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder={t.contact.form.messagePlaceholder}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="resize-none bg-slate-50 border-slate-200 focus:bg-white focus:border-sky-400 transition-colors"
                        />
                      </div>

                      {submitStatus === "success" && (
                        <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-lg flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                          <span>{t.contact.form.success}</span>
                        </div>
                      )}

                      {submitStatus === "error" && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                          {t.contact.form.error}
                        </div>
                      )}

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-12 text-base font-semibold bg-sky-600 hover:bg-sky-700 transition-colors"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">{t.contact.form.sending}</span>
                        ) : (
                          <span className="flex items-center gap-2">
                            {t.contact.form.submit}
                            <Send className="w-4 h-4" />
                          </span>
                        )}
                      </Button>
                    </form>
                  </div>
                </motion.div>

                <div className="lg:col-span-2 space-y-6">
                  {/* Office Location Card */}
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-sky-600" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-800">{t.contact.office.title}</h3>
                    </div>
                    <div className="text-slate-600 text-sm leading-relaxed">
                      {t.contact.office.address.map((line, index) => (
                        <p key={index} className={index === 0 ? "font-semibold text-slate-800" : ""}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </motion.div>

                  {/* Direct Contact Card */}
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5 text-sky-600" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-800">{t.contact.directContact}</h3>
                    </div>
                    <div className="space-y-3">
                      <a
                        href="tel:020172949"
                        className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-sky-50 transition-colors group"
                      >
                        <span className="text-slate-700 font-medium">+66 2 017 2949</span>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 transition-all" />
                      </a>
                      <a
                        href="mailto:info@pnd50.com"
                        className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-sky-50 transition-colors group"
                      >
                        <span className="text-slate-700 font-medium">info@pnd50.com</span>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 transition-all" />
                      </a>
                    </div>
                  </motion.div>

                  {/* Social/Messaging Card */}
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-bold text-slate-800 mb-4">{t.contact.messageUs}</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href="https://wa.me/66843563805"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-3 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
                      >
                        <img src="/images/whatsapp-green-icon.png" alt="WhatsApp" className="w-5 h-5" />
                        <span className="text-emerald-700 font-medium text-sm">WhatsApp</span>
                      </a>
                      <a
                        href="https://t.me/66843563805"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-3 bg-sky-50 rounded-lg hover:bg-sky-100 transition-colors"
                      >
                        <img src="/images/telegram-blue-icon.png" alt="Telegram" className="w-5 h-5" />
                        <span className="text-sky-700 font-medium text-sm">Telegram</span>
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedGridBackground>
    </div>
  )
}
