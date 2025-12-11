"use client"

import type React from "react"
import dynamic from "next/dynamic"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Building2, Clock, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const AnimatedGridBackground = dynamic(
  () => import("@/components/ui/animated-grid-background").then((mod) => mod.AnimatedGridBackground),
  { ssr: false },
)

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    companyName: "",
    serviceType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [copiedItem, setCopiedItem] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/send-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          telephone: formData.phone,
          whatsappId: formData.whatsapp,
          companyName: formData.companyName,
          serviceType: formData.serviceType,
          message: formData.message,
          name: formData.name,
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          whatsapp: "",
          companyName: "",
          serviceType: "",
          message: "",
        })
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const copyToClipboard = async (text: string, itemId: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedItem(itemId)
      setTimeout(() => setCopiedItem(null), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const contactMethods = [
    {
      icon: Phone,
      label: "Call Us",
      value: "+66 2 017 2949",
      href: "tel:020172949",
      copyValue: "020172949",
      id: "phone",
      color: "bg-sky-500",
    },
    {
      icon: Mail,
      label: "Email Us",
      value: "info@pnd50.com",
      href: "mailto:info@pnd50.com",
      copyValue: "info@pnd50.com",
      id: "email",
      color: "bg-blue-500",
    },
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
                  Contact
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                  Let's talk about
                  <br />
                  <span className="text-sky-600">your business</span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed max-w-md">
                  Have questions about Thai accounting or compliance? We're here to help you navigate with confidence.
                </p>

                {/* Quick Contact Methods */}
                <div className="mt-8 flex flex-wrap gap-4">
                  {contactMethods.map((method) => (
                    <motion.a
                      key={method.id}
                      href={method.href}
                      className="group flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3 hover:border-sky-300 hover:shadow-md transition-all duration-300"
                      whileHover={{ y: -2 }}
                    >
                      <div className={`w-10 h-10 ${method.color} rounded-lg flex items-center justify-center`}>
                        <method.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wide">{method.label}</p>
                        <p className="text-slate-800 font-medium">{method.value}</p>
                      </div>
                    </motion.a>
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
                      <h3 className="text-xl font-bold text-slate-800">Quick Response</h3>
                      <p className="text-slate-500">We reply within 24 hours</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 rounded-xl p-4">
                      <p className="text-3xl font-bold text-sky-600">24h</p>
                      <p className="text-sm text-slate-600">Email Response</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4">
                      <p className="text-3xl font-bold text-sky-600">1h</p>
                      <p className="text-sm text-slate-600">WhatsApp Reply</p>
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
                {/* Contact Form - Takes 3 columns */}
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
                        <h2 className="text-xl font-bold text-slate-800">Send a Message</h2>
                        <p className="text-sm text-slate-500">Fill out the form and we'll be in touch</p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-slate-700 font-medium">
                            Full Name *
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
                            Email *
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
                            Phone
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
                            WhatsApp
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
                          Company Name
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
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your needs..."
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
                          <span>Thank you! We'll get back to you soon.</span>
                        </div>
                      )}

                      {submitStatus === "error" && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                          Something went wrong. Please try again.
                        </div>
                      )}

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-12 text-base font-semibold bg-sky-600 hover:bg-sky-700 transition-colors"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span className="animate-spin">⏳</span>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            Send Message
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
                      <h3 className="text-lg font-bold text-slate-800">Office</h3>
                    </div>
                    <div className="text-slate-600 text-sm leading-relaxed">
                      <p className="font-semibold text-slate-800">Suite 3065, 30th Floor</p>
                      <p>Bhiraj Tower at EmQuartier</p>
                      <p>689 Sukhumvit Rd, Khlong Tan Nuea</p>
                      <p>Watthana, Bangkok 10110</p>
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
                      <h3 className="text-lg font-bold text-slate-800">Direct Contact</h3>
                    </div>
                    <div className="space-y-3">
                      <a
                        href="tel:020172949"
                        className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-sky-50 transition-colors group"
                      >
                        <span className="text-slate-700 font-medium">+66 2 017 2949</span>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-all" />
                      </a>
                      <a
                        href="mailto:info@pnd50.com"
                        className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-sky-50 transition-colors group"
                      >
                        <span className="text-slate-700 font-medium">info@pnd50.com</span>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-all" />
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
                    <h3 className="text-lg font-bold text-slate-800 mb-4">Message Us</h3>
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

        <motion.section
          className="py-12 md:py-16 relative z-10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                {/* Map Header */}
                <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-slate-800">Find Us</h2>
                      <p className="text-sm text-slate-500">EmQuartier, Bangkok</p>
                    </div>
                  </div>
                  <a
                    href="https://www.google.com/maps/dir//Bhiraj+Tower+at+EmQuartier,+689+Sukhumvit+Rd,+Khlong+Tan+Nuea,+Watthana,+Bangkok+10110"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-600 text-white font-medium rounded-lg hover:bg-sky-700 transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
                {/* Map Embed */}
                <iframe
                  src="https://maps.google.com/maps?q=Bhiraj+Tower+at+EmQuartier,+689+Sukhumvit+Rd,+Khlong+Tan+Nuea,+Watthana,+Bangkok+10110&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </motion.section>

        <div className="pb-16" />
      </AnimatedGridBackground>
    </div>
  )
}
