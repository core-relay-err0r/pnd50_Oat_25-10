"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Clock, Send, Check, Copy, MessageSquare } from "lucide-react"
import Link from "next/link"

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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-chart-2/10 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-chart-2/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-primary mb-6 border border-primary/20">
              <MessageSquare className="w-4 h-4" />
              Get In Touch
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Let's Start a Conversation
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Whether you have questions about our services, need expert advice, or want to schedule a consultation,
              we're here to help your business succeed in Thailand.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-card border-2 border-border rounded-2xl p-8 shadow-lg hover:border-primary transition-all duration-300">
                <h2 className="text-3xl font-bold text-foreground mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+66 XX XXX XXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="whatsapp">WhatsApp Number</Label>
                      <Input
                        id="whatsapp"
                        name="whatsapp"
                        type="tel"
                        placeholder="+66 XX XXX XXXX"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      type="text"
                      placeholder="Your Company Ltd."
                      value={formData.companyName}
                      onChange={handleChange}
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="serviceType">Service Interest</Label>
                    <Select
                      value={formData.serviceType}
                      onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="accounting">Accounting & Bookkeeping</SelectItem>
                        <SelectItem value="tax">Tax & Compliance</SelectItem>
                        <SelectItem value="payroll">Payroll Services</SelectItem>
                        <SelectItem value="corporate">Corporate Services</SelectItem>
                        <SelectItem value="advisory">Advisory & Support</SelectItem>
                        <SelectItem value="startup">Startup Package</SelectItem>
                        <SelectItem value="growth">Growth Package</SelectItem>
                        <SelectItem value="full-cycle">Full-Cycle Package</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your needs..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="resize-none"
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div className="bg-chart-2/10 border border-chart-2 text-chart-2 px-4 py-3 rounded-lg flex items-center gap-2">
                      <Check className="w-5 h-5" />
                      <span>Thank you! We'll get back to you soon.</span>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="bg-destructive/10 border border-destructive text-destructive px-4 py-3 rounded-lg">
                      Something went wrong. Please try again or contact us directly.
                    </div>
                  )}

                  <Button type="submit" disabled={isSubmitting} className="w-full h-12 text-lg font-semibold">
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
              <div className="bg-gradient-to-br from-primary/5 to-chart-2/5 rounded-2xl p-8 border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Office Location</h3>
                    <p className="text-muted-foreground">Visit us at our Bangkok office</p>
                  </div>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    <strong className="text-foreground">Suite 3065, 30th Floor</strong>
                    <br />
                    Bhiraj Tower at EmQuartier
                    <br />
                    689 Sukhumvit Rd, Khlong Tan Nuea
                    <br />
                    Watthana, Bangkok 10110
                  </p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-gradient-to-br from-primary/5 to-chart-2/5 rounded-2xl p-8 border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Contact Details</h3>
                    <p className="text-muted-foreground">Reach out through your preferred channel</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3 group">
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-foreground">Phone:</span>
                      <a
                        href="tel:020172949"
                        className="text-primary hover:text-primary/90 transition-colors duration-300 font-medium"
                      >
                        +66 2 017 2949
                      </a>
                    </div>
                    <button
                      onClick={() => copyToClipboard("020172949", "phone")}
                      className="p-2 rounded-lg hover:bg-primary/10 transition-all duration-300 opacity-0 group-hover:opacity-100"
                      title="Copy phone number"
                    >
                      {copiedItem === "phone" ? (
                        <Check className="w-4 h-4 text-chart-2" />
                      ) : (
                        <Copy className="w-4 h-4 text-muted-foreground" />
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-between gap-3 group">
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-foreground">Email:</span>
                      <a
                        href="mailto:info@pnd50.com"
                        className="text-primary hover:text-primary/90 transition-colors duration-300 font-medium"
                      >
                        info@pnd50.com
                      </a>
                    </div>
                    <button
                      onClick={() => copyToClipboard("info@pnd50.com", "email")}
                      className="p-2 rounded-lg hover:bg-primary/10 transition-all duration-300 opacity-0 group-hover:opacity-100"
                      title="Copy email"
                    >
                      {copiedItem === "email" ? (
                        <Check className="w-4 h-4 text-chart-2" />
                      ) : (
                        <Copy className="w-4 h-4 text-muted-foreground" />
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-between gap-3 group">
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-foreground">Telegram:</span>
                      <a
                        href="https://t.me/66843563805"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:text-primary/90 transition-colors duration-300 font-medium"
                      >
                        <img src="/images/icons8-telegram.gif" alt="Telegram" className="w-5 h-5" />
                        +66 84 356 3805
                      </a>
                    </div>
                    <button
                      onClick={() => copyToClipboard("0843563805", "telegram")}
                      className="p-2 rounded-lg hover:bg-primary/10 transition-all duration-300 opacity-0 group-hover:opacity-100"
                      title="Copy Telegram number"
                    >
                      {copiedItem === "telegram" ? (
                        <Check className="w-4 h-4 text-chart-2" />
                      ) : (
                        <Copy className="w-4 h-4 text-muted-foreground" />
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-between gap-3 group">
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-foreground">WhatsApp:</span>
                      <a
                        href="https://wa.me/66843563805"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:text-primary/90 transition-colors duration-300 font-medium"
                      >
                        <img src="/images/icons8-whatsapp.gif" alt="WhatsApp" className="w-5 h-5" />
                        +66 84 356 3805
                      </a>
                    </div>
                    <button
                      onClick={() => copyToClipboard("0843563805", "whatsapp")}
                      className="p-2 rounded-lg hover:bg-primary/10 transition-all duration-300 opacity-0 group-hover:opacity-100"
                      title="Copy WhatsApp number"
                    >
                      {copiedItem === "whatsapp" ? (
                        <Check className="w-4 h-4 text-chart-2" />
                      ) : (
                        <Copy className="w-4 h-4 text-muted-foreground" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-primary/5 to-chart-2/5 rounded-2xl p-8 border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Business Hours</h3>
                    <p className="text-muted-foreground">We're here when you need us</p>
                  </div>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Monday - Friday:</span>
                    <span className="text-foreground font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Saturday - Sunday:</span>
                    <span className="text-foreground font-semibold">Closed</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Find Us on the Map</h2>
              <p className="text-xl text-muted-foreground">
                Located in the heart of Bangkok's business district at EmQuartier
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-border hover:border-primary transition-all duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.6919447890845!2d100.57168931483!3d13.731641990349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed269e0c9e5%3A0x8d6c3c8c8c8c8c8c!2sBhiraj+Tower+at+EmQuartier!5e0!3m2!1sen!2sth!4v1234567890123!5m2!1sen!2sth"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PND50 Office Location"
                className="w-full"
              ></iframe>
            </div>

            <div className="mt-8 text-center">
              <a
                href="https://www.google.com/maps/dir//Bhiraj+Tower+at+EmQuartier,+689+Sukhumvit+Rd,+Khlong+Tan+Nuea,+Watthana,+Bangkok+10110"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <MapPin className="w-5 h-5" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
