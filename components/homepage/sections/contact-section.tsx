"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  MessageSquare,
  Building2,
  Clock,
  ArrowRight,
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-header", {
        scrollTrigger: {
          trigger: ".contact-header",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })

      gsap.from(".contact-form", {
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })

      gsap.from(".contact-info", {
        scrollTrigger: {
          trigger: ".contact-info",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

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
          companyName: formData.companyName,
          message: formData.message,
          name: formData.name,
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", phone: "", companyName: "", message: "" })
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

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-100 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="contact-header text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-sky-200/60">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Let's start a conversation
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to simplify your Thai business compliance? Get in touch and we'll respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <div className="contact-form lg:col-span-3 bg-white rounded-2xl p-6 md:p-8 border border-slate-200/60 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800">Send us a message</h3>
                <p className="text-sm text-slate-500">Fill out the form below</p>
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
                    className="h-11 bg-slate-50 border-slate-200 focus:bg-white focus:border-sky-400"
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
                    className="h-11 bg-slate-50 border-slate-200 focus:bg-white focus:border-sky-400"
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
                    className="h-11 bg-slate-50 border-slate-200 focus:bg-white focus:border-sky-400"
                  />
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
                    className="h-11 bg-slate-50 border-slate-200 focus:bg-white focus:border-sky-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-700 font-medium">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your business and how we can help..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="resize-none bg-slate-50 border-slate-200 focus:bg-white focus:border-sky-400"
                />
              </div>

              {submitStatus === "success" && (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-lg flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Thank you! We'll get back to you within 24 hours.</span>
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
                className="w-full h-12 text-base font-semibold bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 transition-all"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message
                    <Send className="w-4 h-4" />
                  </span>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info lg:col-span-2 space-y-6">
            {/* Response Time Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-7 h-7 text-sky-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">Quick Response</h3>
                  <p className="text-slate-500">We reply fast</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-3xl font-bold text-sky-600">24h</p>
                  <p className="text-sm text-slate-600">Email response</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-3xl font-bold text-sky-600">1h</p>
                  <p className="text-sm text-slate-600">WhatsApp reply</p>
                </div>
              </div>
            </div>

            {/* Office Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-sky-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-800">Our Office</h3>
              </div>
              <div className="text-slate-600 text-sm leading-relaxed">
                <p className="font-semibold text-slate-800">PND50 (Burakorn Partners)</p>
                <p>Bangkok, Thailand</p>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm">
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
            </div>

            {/* Messaging Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Message Us Directly</h3>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
