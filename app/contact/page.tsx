"use client"

import type React from "react"
import dynamic from "next/dynamic"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Send, Check, Copy, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"

const AnimatedGridBackground = dynamic(
  () => import("@/components/ui/animated-grid-background").then((mod) => mod.AnimatedGridBackground),
  { ssr: false },
)

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50/80">
      <AnimatedGridBackground className="min-h-screen" variant="light">
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
          className="absolute bottom-[30%] left-[15%] w-12 h-12 bg-gradient-to-br from-sky-200/30 to-teal-200/30 rounded-lg"
          animate={{
            rotate: [45, 135, 225, 315, 405],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute top-[40%] right-[20%] w-8 h-8 bg-gradient-to-br from-blue-300/40 to-sky-300/40 rounded-full"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[8%] w-24 h-24 border border-blue-200/30 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-sky-200/40 via-blue-200/30 to-teal-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-[450px] h-[450px] bg-gradient-to-br from-teal-200/35 via-sky-200/25 to-blue-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-blue-100/35 via-sky-100/25 to-teal-100/30 rounded-full blur-3xl pointer-events-none" />

        {/* Hero Section */}
        <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto">
              <motion.div
                className="inline-flex items-center gap-2 bg-sky-100/80 text-sky-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-sky-200/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <MessageSquare className="w-4 h-4" />
                Get in Touch
              </motion.div>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-slate-700 via-sky-600 to-sky-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Let's Start a Conversation
              </motion.h1>
              <motion.p
                className="text-lg text-slate-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Have questions about our services? We're here to help you navigate Thai accounting and compliance with
                confidence.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <motion.section
          className="py-12 md:py-20 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
              {/* Contact Form */}
              <div className="order-2 lg:order-1">
                <div className="bg-white/80 backdrop-blur-sm border-2 border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-lg hover:border-sky-300 transition-all duration-300">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">Send Us a Message</h2>
                  <p className="text-slate-600 mb-6 md:mb-8 text-sm">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-base md:text-sm text-slate-700">
                          Your Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="h-12 text-base bg-white border-slate-200"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-base md:text-sm text-slate-700">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="h-12 text-base bg-white border-slate-200"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-base md:text-sm text-slate-700">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+66 XX XXX XXXX"
                          value={formData.phone}
                          onChange={handleChange}
                          className="h-12 text-base bg-white border-slate-200"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="whatsapp" className="text-base md:text-sm text-slate-700">
                          WhatsApp Number
                        </Label>
                        <Input
                          id="whatsapp"
                          name="whatsapp"
                          type="tel"
                          placeholder="+66 XX XXX XXXX"
                          value={formData.whatsapp}
                          onChange={handleChange}
                          className="h-12 text-base bg-white border-slate-200"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="companyName" className="text-base md:text-sm text-slate-700">
                        Company Name (optional)
                      </Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        type="text"
                        placeholder="Your Company Ltd."
                        value={formData.companyName}
                        onChange={handleChange}
                        className="h-12 text-base bg-white border-slate-200"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-base md:text-sm text-slate-700">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your needs..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="resize-none text-base bg-white border-slate-200"
                      />
                    </div>

                    {submitStatus === "success" && (
                      <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-lg flex items-center gap-2">
                        <Check className="w-5 h-5 flex-shrink-0" />
                        <span>Thank you! We'll get back to you soon.</span>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                        Something went wrong. Please try again or contact us directly.
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin mr-2">⏳</span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Information */}
              <div className="order-1 lg:order-2 space-y-6">
                {/* Office Location */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border-2 border-slate-200/80 hover:border-sky-300 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">Office Location</h3>
                      <p className="text-slate-600 text-sm md:text-base">Visit us at our Bangkok office</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-slate-600">
                    <p className="leading-relaxed text-sm md:text-base">
                      <strong className="text-slate-800">Suite 3065, 30th Floor</strong>
                      <br />
                      Bhiraj Tower at EmQuartier
                      <br />
                      689 Sukhumvit Rd, Khlong Tan Nuea
                      <br />
                      Watthana, Bangkok 10110. Thailand.
                    </p>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border-2 border-slate-200/80 hover:border-sky-300 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">Contact Details</h3>
                      <p className="text-slate-600 text-sm md:text-base">Reach out through your preferred channel</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-3 group">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <span className="font-semibold text-slate-800 flex-shrink-0">Phone:</span>
                        <a
                          href="tel:020172949"
                          className="text-sky-600 hover:text-sky-700 transition-colors duration-300 font-medium truncate"
                        >
                          +66 2 017 2949
                        </a>
                      </div>
                      <button
                        onClick={() => copyToClipboard("020172949", "phone")}
                        className="p-2 rounded-lg hover:bg-sky-100 transition-all duration-300 opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
                        title="Copy phone number"
                      >
                        {copiedItem === "phone" ? (
                          <Check className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Copy className="w-4 h-4 text-slate-500" />
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-between gap-3 group">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <span className="font-semibold text-slate-800 flex-shrink-0">Email:</span>
                        <a
                          href="mailto:info@pnd50.com"
                          className="text-sky-600 hover:text-sky-700 transition-colors duration-300 font-medium truncate"
                        >
                          info@pnd50.com
                        </a>
                      </div>
                      <button
                        onClick={() => copyToClipboard("info@pnd50.com", "email")}
                        className="p-2 rounded-lg hover:bg-sky-100 transition-all duration-300 opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
                        title="Copy email"
                      >
                        {copiedItem === "email" ? (
                          <Check className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Copy className="w-4 h-4 text-slate-500" />
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-between gap-3 group">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <img src="/images/telegram-blue-icon.png" alt="Telegram" className="w-5 h-5 object-contain" />
                          <span className="font-semibold text-sky-600">Telegram:</span>
                        </div>
                        <a
                          href="https://t.me/66843563805"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sky-600 hover:text-sky-700 transition-colors duration-300 font-medium truncate"
                        >
                          +66 84 356 3805
                        </a>
                      </div>
                      <button
                        onClick={() => copyToClipboard("0843563805", "telegram")}
                        className="p-2 rounded-lg hover:bg-sky-100 transition-all duration-300 opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
                        title="Copy Telegram number"
                      >
                        {copiedItem === "telegram" ? (
                          <Check className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Copy className="w-4 h-4 text-slate-500" />
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-between gap-3 group">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <img
                            src="/images/whatsapp-green-icon.png"
                            alt="WhatsApp"
                            className="w-5 h-5 object-contain"
                          />
                          <span className="font-semibold text-emerald-600">WhatsApp:</span>
                        </div>
                        <a
                          href="https://wa.me/66843563805"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sky-600 hover:text-sky-700 transition-colors duration-300 font-medium truncate"
                        >
                          +66 84 356 3805
                        </a>
                      </div>
                      <button
                        onClick={() => copyToClipboard("0843563805", "whatsapp")}
                        className="p-2 rounded-lg hover:bg-sky-100 transition-all duration-300 opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
                        title="Copy WhatsApp number"
                      >
                        {copiedItem === "whatsapp" ? (
                          <Check className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Copy className="w-4 h-4 text-slate-500" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Map Section */}
        <section className="py-12 md:py-16 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-slate-800 mb-4">Find Us on the Map</h2>
                <p className="md:text-xl text-slate-600 text-sm">
                  Located in the heart of Bangkok's business district at EmQuartier
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-200/80 hover:border-sky-300 transition-all duration-300">
                <iframe
                  src="https://maps.google.com/maps?q=Bhiraj+Tower+at+EmQuartier,+689+Sukhumvit+Rd,+Khlong+Tan+Nuea,+Watthana,+Bangkok+10110&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[400px] md:h-[500px]"
                ></iframe>
              </div>

              <div className="mt-8 text-center">
                <a
                  href="https://www.google.com/maps/dir//Bhiraj+Tower+at+EmQuartier,+689+Sukhumvit+Rd,+Khlong+Tan+Nuea,+Watthana,+Bangkok+10110"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-lg hover:from-sky-600 hover:to-blue-700 transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <MapPin className="w-5 h-5" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom padding to account for no footer */}
        <div className="pb-16" />
      </AnimatedGridBackground>
    </div>
  )
}
