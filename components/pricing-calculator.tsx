"use client"

import { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Building2, Calculator, FileText, Briefcase, ChevronDown, Check, Send, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useRouter } from "next/navigation"
import { AnimatedGridBackground } from "@/components/ui/animated-grid-background"

// Service Data Structure
const servicesData = {
  corporate: {
    title: "Corporate Services",
    icon: Building2,
    color: "from-blue-500 to-cyan-500",
    services: [
      { id: "new-company", name: "New Co. Ltd. Registration", price: 28500, type: "One-Time" },
      { id: "shareholder-change", name: "Shareholder/Director Change", price: 12000, type: "One-Time" },
      { id: "capital-change", name: "Capital Increase/Decrease", price: 15000, type: "One-Time" },
      { id: "office-change", name: "Office Address Change", price: 9500, type: "One-Time" },
      { id: "vat-registration", name: "VAT Registration (PP20)", price: 10000, type: "One-Time" },
      { id: "dissolution", name: "Company Dissolution", price: 45000, type: "Project" },
    ],
  },
  accounting: {
    title: "Accounting & Tax Services",
    icon: Calculator,
    color: "from-emerald-500 to-teal-500",
    services: [
      {
        id: "monthly-tax-basic",
        name: "Monthly Tax Filing (Basic)",
        price: 4500,
        type: "Monthly",
        hasVariable: true,
        variableType: "transactions",
      },
      {
        id: "monthly-tax-medium",
        name: "Monthly Tax Filing (Medium)",
        price: 7500,
        type: "Monthly",
        hasVariable: true,
        variableType: "transactions",
      },
      { id: "annual-statements", name: "Annual Financial Statements", price: 22000, type: "Annual" },
      {
        id: "payroll",
        name: "Payroll Management",
        price: 800,
        type: "Per Employee/Month",
        hasVariable: true,
        variableType: "employees",
      },
      { id: "audit-coordination", name: "External Audit Coordination", price: 15000, type: "Annual" },
    ],
  },
  advisory: {
    title: "Advisory & Legal Services",
    icon: Briefcase,
    color: "from-purple-500 to-pink-500",
    services: [
      { id: "tax-consult", name: "Initial Tax & Structuring Consult", price: 5500, type: "One-Time" },
      { id: "due-diligence", name: "Legal Due Diligence (DD)", price: 55000, type: "Project" },
      { id: "work-permit", name: "Work Permit & Visa Application", price: 18000, type: "One-Time" },
      { id: "fbc", name: "Foreign Business Certificate (FBC)", price: 95000, type: "Project" },
      { id: "contract-drafting", name: "Contract Drafting (Standard)", price: 15000, type: "One-Time" },
    ],
  },
}

type ServiceCategory = keyof typeof servicesData

interface SelectedService {
  id: string
  category: ServiceCategory
  name: string
  price: number
  type: string
  hasVariable?: boolean
  variableType?: string
  quantity?: number
}

interface ContactInfo {
  name: string
  email: string
  phone: string
}

export function PricingCalculator() {
  const router = useRouter()
  const [expandedCategory, setExpandedCategory] = useState<ServiceCategory | null>(null)
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>([])
  const [step, setStep] = useState<"selection" | "contact">("selection")
  const [contactInfo, setContactInfo] = useState<ContactInfo>({ name: "", email: "", phone: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
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

  // Toggle category expansion
  const toggleCategory = (category: ServiceCategory) => {
    setExpandedCategory(expandedCategory === category ? null : category)
  }

  // Toggle service selection
  const toggleService = (category: ServiceCategory, service: (typeof servicesData.corporate.services)[0]) => {
    const serviceId = service.id
    const isSelected = selectedServices.some((s) => s.id === serviceId)

    if (isSelected) {
      setSelectedServices(selectedServices.filter((s) => s.id !== serviceId))
    } else {
      setSelectedServices([
        ...selectedServices,
        {
          id: serviceId,
          category,
          name: service.name,
          price: service.price,
          type: service.type,
          hasVariable: service.hasVariable,
          variableType: service.variableType,
          quantity: 1,
        },
      ])
    }
  }

  // Check if service needs variable input
  const servicesNeedingVariables = useMemo(() => {
    return selectedServices.filter((s) => s.hasVariable)
  }, [selectedServices])

  // Calculate preliminary total
  const preliminaryTotal = useMemo(() => {
    let oneTime = 0
    let monthly = 0
    let annual = 0

    selectedServices.forEach((service) => {
      const quantity = service.quantity || 1
      const price = service.price * quantity

      if (service.type === "One-Time" || service.type === "Project") {
        oneTime += price
      } else if (service.type === "Monthly" || service.type === "Per Employee/Month") {
        monthly += price
      } else if (service.type === "Annual") {
        annual += price
      }
    })

    return { oneTime, monthly, annual, yearTotal: oneTime + monthly * 12 + annual }
  }, [selectedServices])

  // Handle Calculate button click
  const handleCalculate = () => {
    setStep("contact")
  }

  // Handle form submission
  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/send-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contactInfo,
          selectedServices: selectedServices.map((s) => ({
            name: s.name,
            price: s.price * (s.quantity || 1),
            quantity: s.quantity,
          })),
          totalPrice: preliminaryTotal.yearTotal,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to send quote")
      }

      router.push("/calculator/success")
    } catch (error) {
      console.error("Error submitting quote:", error)
      alert("Failed to send quote. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Format price in THB
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("th-TH").format(price)
  }

  return (
    <AnimatedGridBackground className="min-h-screen">
      {/* Floating parallax blobs */}
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 min-h-screen"
      >
        {/* Header */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <motion.div
            className="my-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          ></motion.div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          {/* Title Section */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Instant Quote Calculator</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              Build Your Custom Quote
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-slate-400 max-w-2xl mx-auto"
            >
              Select the services you need and get an instant price estimate. No hidden fees.
            </motion.p>
          </div>

          {/* Main Content Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {/* Left Column - Service Selection */}
            <div className="lg:col-span-2 space-y-4">
              {(Object.keys(servicesData) as ServiceCategory[]).map((categoryKey, index) => {
                const category = servicesData[categoryKey]
                const Icon = category.icon
                const isExpanded = expandedCategory === categoryKey
                const selectedCount = selectedServices.filter((s) => s.category === categoryKey).length

                return (
                  <motion.div
                    key={categoryKey}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="overflow-hidden"
                  >
                    {/* Category Button */}
                    <button
                      onClick={() => toggleCategory(categoryKey)}
                      className={`w-full flex items-center justify-between p-5 rounded-2xl transition-all duration-300 border-none ${
                        isExpanded
                          ? "bg-slate-800/80 border-2 border-primary/50"
                          : "bg-slate-800/50 border-2 border-slate-700/50 hover:border-slate-600"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-left">
                          <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                          <p className="text-sm text-slate-400">{category.services.length} services available</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {selectedCount > 0 && (
                          <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full">
                            {selectedCount} selected
                          </span>
                        )}
                        <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                          <ChevronDown className="w-5 h-5 text-slate-400" />
                        </motion.div>
                      </div>
                    </button>

                    {/* Expanded Services */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 space-y-2 bg-slate-900/50 rounded-b-2xl border-x-2 border-b-2 border-slate-700/50 -mt-2">
                            {category.services.map((service) => {
                              const isSelected = selectedServices.some((s) => s.id === service.id)
                              return (
                                <motion.div
                                  key={service.id}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  className={`flex flex-col p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                                    isSelected
                                      ? "bg-primary/10 border border-primary/30"
                                      : "bg-slate-800/30 border border-transparent hover:bg-slate-800/50"
                                  }`}
                                >
                                  <div
                                    className="flex items-center justify-between"
                                    onClick={() => toggleService(categoryKey, service)}
                                  >
                                    <div className="flex items-center gap-3">
                                      <Checkbox
                                        checked={isSelected}
                                        className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                                      />
                                      <div>
                                        <p className="font-medium text-white">{service.name}</p>
                                        <p className="text-xs text-slate-400">{service.type}</p>
                                      </div>
                                    </div>
                                    <div className="text-right">
                                      <p className="font-semibold text-primary">฿{formatPrice(service.price)}</p>
                                      {service.type === "Per Employee/Month" && (
                                        <p className="text-xs text-slate-400">/employee/month</p>
                                      )}
                                    </div>
                                  </div>

                                  {isSelected && service.variableType === "employees" && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: "auto" }}
                                      exit={{ opacity: 0, height: 0 }}
                                      className="mt-4 pt-4 border-t border-slate-700/50"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      <Label
                                        htmlFor={`employees-${service.id}`}
                                        className="text-sm text-slate-300 mb-2 block"
                                      >
                                        How many employees?
                                      </Label>
                                      <div className="flex items-center gap-3">
                                        <Input
                                          id={`employees-${service.id}`}
                                          type="number"
                                          min={1}
                                          value={selectedServices.find((s) => s.id === service.id)?.quantity || 1}
                                          onChange={(e) => {
                                            const value = Math.max(1, Number.parseInt(e.target.value) || 1)
                                            setSelectedServices((prev) =>
                                              prev.map((s) => (s.id === service.id ? { ...s, quantity: value } : s)),
                                            )
                                          }}
                                          className="w-24 bg-slate-800 border-slate-600 text-white"
                                        />
                                        <span className="text-sm text-slate-400">
                                          = ฿
                                          {formatPrice(
                                            service.price *
                                              (selectedServices.find((s) => s.id === service.id)?.quantity || 1),
                                          )}
                                          /month
                                        </span>
                                      </div>
                                    </motion.div>
                                  )}
                                </motion.div>
                              )
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>

            {/* Right Column - Sticky Quote Panel */}
            <div className="lg:col-span-1">
              <div className="sticky top-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="bg-slate-800/80 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden"
                >
                  {/* Panel Header */}
                  <div className="p-6 border-b border-slate-700/50">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Your Quote</h3>
                        <p className="text-xs text-slate-400">{selectedServices.length} services selected</p>
                      </div>
                    </div>
                  </div>

                  {/* Selected Services List */}
                  <div className="p-4 max-h-[300px] overflow-y-auto space-y-2">
                    {selectedServices.length === 0 ? (
                      <div className="text-center py-8 text-slate-400">
                        <Calculator className="w-12 h-12 mx-auto mb-3 opacity-50" />
                        <p className="text-sm">Select services to build your quote</p>
                      </div>
                    ) : (
                      selectedServices.map((service) => (
                        <div
                          key={service.id}
                          className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg"
                        >
                          <div className="flex-1 pr-2">
                            <p className="text-sm font-medium text-white truncate">{service.name}</p>
                            <p className="text-xs text-slate-400">{service.type}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-primary">
                              ฿{formatPrice(service.price * (service.quantity || 1))}
                            </span>
                            <button
                              onClick={() => setSelectedServices(selectedServices.filter((s) => s.id !== service.id))}
                              className="p-1 hover:bg-slate-600 rounded transition-colors"
                            >
                              <X className="w-4 h-4 text-slate-400" />
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Price Summary */}
                  {selectedServices.length > 0 && (
                    <div className="p-4 border-t border-slate-700/50 space-y-3">
                      {preliminaryTotal.oneTime > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">One-time Fees</span>
                          <span className="text-white font-medium">฿{formatPrice(preliminaryTotal.oneTime)}</span>
                        </div>
                      )}
                      {preliminaryTotal.monthly > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">Monthly Fees</span>
                          <span className="text-white font-medium">฿{formatPrice(preliminaryTotal.monthly)}/mo</span>
                        </div>
                      )}
                      {preliminaryTotal.annual > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">Annual Fees</span>
                          <span className="text-white font-medium">฿{formatPrice(preliminaryTotal.annual)}/yr</span>
                        </div>
                      )}
                      <div className="pt-3 border-t border-slate-700/50">
                        <div className="flex justify-between">
                          <span className="text-white font-semibold">Year 1 Total</span>
                          <span className="text-xl font-bold text-primary">
                            ฿{formatPrice(preliminaryTotal.yearTotal)}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">*Estimated based on selections</p>
                      </div>
                    </div>
                  )}

                  {/* Action Button */}
                  <div className="p-4 border-t border-slate-700/50">
                    <Button
                      onClick={handleCalculate}
                      disabled={selectedServices.length === 0}
                      className="w-full h-12 bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 text-white font-semibold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Calculate Final Price
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Modal */}
          <AnimatePresence>
            {step === "contact" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                onClick={() => setStep("selection")}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-slate-800 rounded-2xl border border-slate-700 p-6 w-full max-w-md"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center">
                      <Check className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Your Final Quote</h3>
                    <p className="text-3xl font-bold text-primary mt-2">฿{formatPrice(preliminaryTotal.yearTotal)}</p>
                    <p className="text-sm text-slate-400">Year 1 Total</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <Label className="text-slate-300 mb-2 block">Name / Company</Label>
                      <Input
                        placeholder="Your name / Company"
                        value={contactInfo.name}
                        onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                        className="bg-slate-900 border-slate-700 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-slate-300 mb-2 block">Email</Label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={contactInfo.email}
                        onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                        className="bg-slate-900 border-slate-700 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-slate-300 mb-2 block">Phone</Label>
                      <Input
                        type="tel"
                        placeholder="+66 XX XXX XXXX"
                        value={contactInfo.phone}
                        onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                        className="bg-slate-900 border-slate-700 text-white"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      onClick={() => setStep("selection")}
                      className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      disabled={!contactInfo.name || !contactInfo.email || isSubmitting}
                      className="flex-1 bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          >
                            ⏳
                          </motion.span>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          Submit Quote Request
                        </span>
                      )}
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatedGridBackground>
  )
}
