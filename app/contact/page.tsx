"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Clock, Send, MessageSquare, ArrowLeft, ArrowRight, Loader2, Mail } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import { LandingFooter } from "@/components/landing-footer"

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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    companyName: "",
    serviceType: "",
    message: "",
    company: "",
    subject: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [copiedItem, setCopiedItem] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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
          company: formData.company,
          subject: formData.subject,
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
          company: "",
          subject: "",
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
    <main className="min-h-screen">
      <section className="relative w-full min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <AnimatedGridBackground className="min-h-screen flex-1">
          {/* Floating blur blobs */}
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

          <motion.div initial="initial" animate="animate" variants={pageVariants} className="flex-1 flex flex-col">
            {/* Hero Section */}
            <section className="relative pt-32 pb-12 md:py-24 overflow-hidden">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors group mb-8 touch-manipulation py-2"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <span className="text-sm font-medium">Back to Home</span>
                </Link>

                <div className="max-w-4xl">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                    <MessageSquare className="w-4 h-4" />
                    Get in Touch
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                    Let's Start a Conversation
                  </h1>
                  <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                    Whether you're ready to get started or just exploring, we're here to help with clear answers and
                    honest advice.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-12 md:py-16">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
                  {/* Left Column - Contact Info */}
                  <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
                      <h2 className="text-xl font-bold text-white mb-6">Contact Information</h2>
                      <div className="space-y-6">
                        {[
                          {
                            icon: Mail,
                            label: "Email",
                            value: "info@pnd50.com",
                            href: "mailto:info@pnd50.com",
                          },
                          {
                            icon: Phone,
                            label: "Phone",
                            value: "+66 2 123 4567",
                            href: "tel:+6621234567",
                          },
                          {
                            icon: MapPin,
                            label: "Office",
                            value: "Bangkok, Thailand",
                            href: "#",
                          },
                          {
                            icon: Clock,
                            label: "Hours",
                            value: "Mon-Fri: 9AM - 6PM (ICT)",
                            href: "#",
                          },
                        ].map((item, index) => (
                          <a key={index} href={item.href} className="flex items-start gap-4 group">
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                              <item.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <div>
                              <p className="text-sm text-slate-400">{item.label}</p>
                              <p className="text-white font-medium">{item.value}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Quick Links */}
                    <div className="bg-gradient-to-br from-primary/10 to-chart-2/10 rounded-2xl p-6 md:p-8 border border-primary/20">
                      <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
                      <div className="space-y-3">
                        <Link
                          href="/calculator"
                          className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                        >
                          <span className="text-slate-300 group-hover:text-white transition-colors">
                            Schedule Consultation
                          </span>
                          <ArrowRight className="w-4 h-4 text-primary" />
                        </Link>
                        <Link
                          href="/faq"
                          className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                        >
                          <span className="text-slate-300 group-hover:text-white transition-colors">View FAQs</span>
                          <ArrowRight className="w-4 h-4 text-primary" />
                        </Link>
                        <Link
                          href="/services"
                          className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                        >
                          <span className="text-slate-300 group-hover:text-white transition-colors">Our Services</span>
                          <ArrowRight className="w-4 h-4 text-primary" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Contact Form */}
                  <div className="lg:col-span-3">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
                      <h2 className="text-xl font-bold text-white mb-6">Send us a Message</h2>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Full Name *</label>
                            <Input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="bg-white/5 border-white/20 text-white placeholder:text-slate-500 focus:border-primary"
                              placeholder="Your name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Email *</label>
                            <Input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="bg-white/5 border-white/20 text-white placeholder:text-slate-500 focus:border-primary"
                              placeholder="your@email.com"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Company</label>
                            <Input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              className="bg-white/5 border-white/20 text-white placeholder:text-slate-500 focus:border-primary"
                              placeholder="Company name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Phone</label>
                            <Input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="bg-white/5 border-white/20 text-white placeholder:text-slate-500 focus:border-primary"
                              placeholder="+66..."
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">Subject *</label>
                          <Input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="bg-white/5 border-white/20 text-white placeholder:text-slate-500 focus:border-primary"
                            placeholder="How can we help?"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">Message *</label>
                          <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="bg-white/5 border-white/20 text-white placeholder:text-slate-500 focus:border-primary resize-none"
                            placeholder="Tell us about your needs..."
                          />
                        </div>

                        <Button type="submit" disabled={isSubmitting} className="w-full py-6 text-base font-semibold">
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send className="w-5 h-5 ml-2" />
                            </>
                          )}
                        </Button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>

          <LandingFooter />
        </AnimatedGridBackground>
      </section>
    </main>
  )
}
