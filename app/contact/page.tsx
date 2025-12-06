"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Building2,
  Calculator,
  FileText,
  HelpCircle,
  ArrowRight,
  MessageSquare,
} from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import dynamic from "next/dynamic"
import { LandingFooter } from "@/components/landing-footer"

const AnimatedGridBackground = dynamic(
  () => import("@/components/ui/animated-grid-background").then((mod) => mod.AnimatedGridBackground),
  { ssr: false },
)

const inquiryTypes = [
  { value: "company-registration", label: "Company Registration", icon: Building2 },
  { value: "accounting", label: "Accounting & Tax", icon: Calculator },
  { value: "legal", label: "Legal Advisory", icon: FileText },
  { value: "other", label: "Other Inquiry", icon: HelpCircle },
]

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "info@pnd50.com",
    description: "We typically respond within 24 hours",
    href: "mailto:info@pnd50.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+66 2 XXX XXXX",
    description: "Mon-Fri, 9:00 AM - 6:00 PM (ICT)",
    href: "tel:+6620000000",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Bangkok, Thailand",
    description: "Schedule an appointment first",
    href: "#",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon - Fri: 9AM - 6PM",
    description: "Weekend by appointment",
    href: "#",
  },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    inquiryType: "company-registration",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
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

    try {
      const response = await fetch("/api/send-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error("Error sending message:", error)
      alert("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <main className="min-h-screen">
      <section className="relative w-full min-h-screen flex flex-col bg-gradient-to-b from-slate-800 via-slate-700 to-slate-800">
        <AnimatedGridBackground className="min-h-screen flex-1">
          <div
            className="absolute top-20 left-10 w-96 h-96 bg-primary/40 rounded-full blur-3xl pointer-events-none"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: "transform 0.5s ease-out",
            }}
          />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-chart-2/40 rounded-full blur-3xl pointer-events-none"
            style={{
              transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
              transition: "transform 0.5s ease-out",
            }}
          />

          <div className="flex-1 w-full flex flex-col lg:scale-[0.85] lg:origin-top">
            {/* Hero Section */}
            <section className="relative pt-28 pb-12 md:pt-32 md:pb-16 overflow-hidden">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors group mb-6 sm:mb-8 touch-manipulation"
                  ></Link>
                </motion.div>

                <div className="text-center max-w-3xl mx-auto">
                  <motion.div
                    className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-sm font-medium text-primary mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <MessageSquare className="w-4 h-4" />
                    Get in Touch
                  </motion.div>

                  <motion.h1
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Let's Start a{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                      Conversation
                    </span>
                  </motion.h1>

                  <motion.p
                    className="text-slate-300 leading-relaxed mb-8 text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    Have questions about doing business in Thailand? We're here to help you every step of the way.
                  </motion.p>
                </div>
              </div>
            </section>

            {/* Contact Info Cards */}
            <motion.section
              className="py-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      className="group p-6 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-primary/50 transition-all"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index + 0.6 }}
                    >
                      <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-primary font-medium mb-1">{item.value}</p>
                      <p className="text-sm text-slate-400">{item.description}</p>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Contact Form Section */}
            <section className="py-12">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <motion.div
                  className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 md:p-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-green-500" />
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-4">Message Sent!</h2>
                      <p className="text-slate-300 mb-8">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                      <Button
                        onClick={() => {
                          setIsSubmitted(false)
                          setFormState({
                            name: "",
                            email: "",
                            company: "",
                            phone: "",
                            inquiryType: "company-registration",
                            message: "",
                          })
                        }}
                        className="bg-primary text-primary-foreground"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Send Us a Message</h2>
                        <p className="text-slate-400">Fill out the form below and we'll be in touch soon.</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-white">
                              Full Name *
                            </Label>
                            <Input
                              id="name"
                              name="name"
                              value={formState.name}
                              onChange={handleChange}
                              required
                              placeholder="John Doe"
                              className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-white">
                              Email Address *
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formState.email}
                              onChange={handleChange}
                              required
                              placeholder="john@company.com"
                              className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="company" className="text-white">
                              Company Name
                            </Label>
                            <Input
                              id="company"
                              name="company"
                              value={formState.company}
                              onChange={handleChange}
                              placeholder="Your Company Ltd."
                              className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-white">
                              Phone Number
                            </Label>
                            <Input
                              id="phone"
                              name="phone"
                              value={formState.phone}
                              onChange={handleChange}
                              placeholder="+66 XX XXX XXXX"
                              className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500"
                            />
                          </div>
                        </div>

                        <div className="space-y-3">
                          <Label className="text-white">What can we help you with? *</Label>
                          <RadioGroup
                            value={formState.inquiryType}
                            onValueChange={(value) => setFormState((prev) => ({ ...prev, inquiryType: value }))}
                            className="grid grid-cols-2 md:grid-cols-4 gap-3"
                          >
                            {inquiryTypes.map((type) => (
                              <Label
                                key={type.value}
                                htmlFor={type.value}
                                className={`flex flex-col items-center gap-2 p-4 rounded-xl border cursor-pointer transition-all ${
                                  formState.inquiryType === type.value
                                    ? "border-primary bg-primary/10 text-primary"
                                    : "border-slate-600 bg-slate-900/50 text-slate-300 hover:border-slate-500"
                                }`}
                              >
                                <RadioGroupItem value={type.value} id={type.value} className="sr-only" />
                                <type.icon className="w-6 h-6" />
                                <span className="text-sm text-center">{type.label}</span>
                              </Label>
                            ))}
                          </RadioGroup>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-white">
                            Your Message *
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            required
                            placeholder="Tell us about your business needs..."
                            rows={5}
                            className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 resize-none"
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-primary text-primary-foreground py-6 text-lg"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Sending...
                            </span>
                          ) : (
                            <span className="flex items-center gap-2">
                              <Send className="w-5 h-5" />
                              Send Message
                            </span>
                          )}
                        </Button>
                      </form>
                    </>
                  )}
                </motion.div>
              </div>
            </section>

            {/* CTA Section */}
            <motion.section
              className="py-8 md:py-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need a Quick Quote?</h2>
                <p className="text-slate-300 mb-8 text-lg">
                  Use our pricing calculator to get an instant estimate for our services.
                </p>
                <Link
                  href="/calculator"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.section>
          </div>

          <LandingFooter />
        </AnimatedGridBackground>
      </section>
    </main>
  )
}
