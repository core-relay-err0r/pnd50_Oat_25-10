"use client"

import { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Building2,
  Calculator,
  FileText,
  Briefcase,
  ChevronDown,
  Check,
  Send,
  X,
  Sparkles,
  MessageCircle,
  Minus,
  Plus,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useRouter } from "next/navigation"
import { AnimatedGridBackground } from "@/components/ui/animated-grid-background"
import { LandingFooter } from "@/components/landing-footer"

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
        name: "Monthly Tax Filing",
        price: 4500,
        type: "Monthly",
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
  selectedOptions?: string[]
}

interface ContactInfo {
  name: string
  email: string
  phone: string
}

export function PricingCalculator() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<ServiceCategory | null>(null)
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>([])
  const [step, setStep] = useState<"selection" | "contact">("selection")
  const [contactInfo, setContactInfo] = useState<ContactInfo>({ name: "", email: "", phone: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [selectedMonths, setSelectedMonths] = useState<number>(12)

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

  // Toggle option selection
  const toggleOption = (
    category: ServiceCategory,
    serviceId: string,
    option: { id: string; name: string; price: number },
  ) => {
    setSelectedServices((prev) =>
      prev.map((s) =>
        s.id === serviceId
          ? {
              ...s,
              selectedOptions: s.selectedOptions
                ? s.selectedOptions.includes(option.id)
                  ? s.selectedOptions.filter((o) => o !== option.id)
                  : [...s.selectedOptions, option.id]
                : [option.id],
            }
          : s,
      ),
    )
  }

  const updateQuantity = (serviceId: string, quantity: number) => {
    setSelectedServices((prev) => prev.map((s) => (s.id === serviceId ? { ...s, quantity: Math.max(1, quantity) } : s)))
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

      // Add option prices
      if (service.selectedOptions) {
        service.selectedOptions.forEach((optionId) => {
          const optionPrice =
            servicesData[service.category].services
              .find((s) => s.id === service.id)
              ?.options?.find((o) => o.id === optionId)?.price || 0
          oneTime += optionPrice
        })
      }
    })

    const periodTotal = oneTime + monthly * selectedMonths + annual

    return {
      oneTime,
      monthly,
      annual,
      periodTotal,
      yearTotal: oneTime + monthly * 12 + annual,
    }
  }, [selectedServices, selectedMonths])

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
          selectedServices: selectedServices.map((s) => {
            const basePrice = s.price * (s.quantity || 1)
            const optionsPrice =
              s.selectedOptions?.reduce((total, optionId) => {
                const optionPrice =
                  servicesData[s.category].services
                    .find((serv) => serv.id === s.id)
                    ?.options?.find((o) => o.id === optionId)?.price || 0
                return total + optionPrice
              }, 0) || 0

            return {
              name: s.name,
              price: basePrice + optionsPrice,
              quantity: s.quantity,
              selectedOptions: s.selectedOptions,
            }
          }),
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

  // Format price in USD
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US").format(price)
  }

  return (
    <div className="min-h-screen relative">
      <AnimatedGridBackground className="min-h-screen" variant="light">
        <motion.div
          className="absolute top-[15%] left-[8%] w-20 h-20 border-2 border-sky-300/40 rounded-2xl"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            y: [0, -15, 0, 15, 0],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          style={{
            transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
          }}
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

        <div
          className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-sky-200/40 via-blue-200/30 to-teal-200/20 rounded-full blur-3xl pointer-events-none"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.5s ease-out",
          }}
        />
        <div
          className="absolute bottom-20 right-10 w-[450px] h-[450px] bg-gradient-to-br from-teal-200/35 via-sky-200/25 to-blue-200/20 rounded-full blur-3xl pointer-events-none"
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
          className="relative z-10 min-h-screen flex flex-col"
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

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 flex-1">
            {/* Title Section */}
            <div className="text-center mb-12 mt-6">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100/80 rounded-full mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Sparkles className="w-4 h-4 text-sky-600" />
                <span className="text-sm font-medium text-sky-700">Instant Quote Calculator</span>
              </motion.div>
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-700 via-sky-600 to-sky-500 bg-clip-text text-transparent mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Build Your Custom Quote
              </motion.h1>
              <motion.p
                className="text-lg text-slate-600 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Select the services you need and get an instant price estimate. No hidden fees.
              </motion.p>

              <motion.div
                className="mt-6 inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-primary/10 via-primary/5 to-sky-100/50 border border-primary/20 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-slate-800">Not sure where to start?</p>
                  <p className="text-xs text-slate-600">
                    Ask <span className="font-semibold text-primary">Panida</span> to guide you through the process
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 ml-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/60 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Main Content Grid */}
            <motion.div
              className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto overflow-x-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {/* Left Column - Service Selection */}
              <div className="lg:col-span-2 space-y-4">
                {/* Tab Navigation */}
                <div className="flex gap-1 sm:gap-2 mb-6 bg-slate-100/80 p-1 sm:p-1.5 rounded-xl overflow-x-auto">
                  {(Object.keys(servicesData) as ServiceCategory[]).map((categoryKey) => {
                    const category = servicesData[categoryKey]
                    const Icon = category.icon
                    const isActive = activeTab === categoryKey
                    const selectedCount = selectedServices.filter((s) => s.category === categoryKey).length

                    return (
                      <button
                        key={categoryKey}
                        onClick={() => setActiveTab(categoryKey)}
                        className={`flex-1 flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 sm:py-3 rounded-lg transition-all duration-300 min-w-0 ${
                          isActive
                            ? "bg-white shadow-md text-slate-800"
                            : "text-slate-500 hover:text-slate-700 hover:bg-white/50"
                        }`}
                      >
                        <div
                          className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0`}
                        >
                          <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <span className="font-medium text-xs sm:text-sm hidden sm:inline truncate">
                          {categoryKey === "corporate"
                            ? "Corporate"
                            : categoryKey === "accounting"
                              ? "Accounting"
                              : "Advisory"}
                        </span>
                        {selectedCount > 0 && (
                          <span className="px-1.5 sm:px-2 py-0.5 bg-sky-100 text-sky-700 text-xs font-medium rounded-full flex-shrink-0">
                            {selectedCount}
                          </span>
                        )}
                      </button>
                    )
                  })}
                </div>

                <div className="min-h-[400px]">
                  {/* Tab Content - Services List */}
                  <AnimatePresence mode="wait">
                    {activeTab === null ? (
                      <motion.div
                        key="standby"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center h-[400px] text-center"
                      >
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center mb-4">
                          <Sparkles className="w-8 h-8 text-slate-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-700 mb-2">
                          Select a category to view services
                        </h3>
                        <p className="text-sm text-slate-500 max-w-sm">
                          Choose from Corporate, Accounting, or Advisory services above to get started with your quote.
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-2"
                      >
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-slate-800">{servicesData[activeTab].title}</h3>
                          <p className="text-sm text-slate-500">
                            {servicesData[activeTab].services.length} services available
                          </p>
                        </div>
                        {servicesData[activeTab].services.map((service) => {
                          const isSelected = selectedServices.some((s) => s.id === service.id)
                          return (
                            <motion.div
                              key={service.id}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              className={`flex flex-col p-3 sm:p-4 rounded-xl cursor-pointer transition-all duration-200 border max-w-full ${
                                isSelected
                                  ? "bg-sky-50 border-sky-200"
                                  : "bg-white hover:bg-slate-50 border-slate-200/80"
                              }`}
                            >
                              <div
                                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                                onClick={() => toggleService(activeTab, service)}
                              >
                                <div className="flex items-center gap-3 min-w-0">
                                  <Checkbox
                                    checked={isSelected}
                                    className="data-[state=checked]:bg-sky-600 data-[state=checked]:border-sky-600 flex-shrink-0"
                                  />
                                  <div className="min-w-0">
                                    <p className="font-medium text-slate-800 text-sm sm:text-base">{service.name}</p>
                                    <p className="text-xs text-slate-500 line-clamp-2">{service.description}</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 pl-8 sm:pl-0 flex-shrink-0">
                                  <span className="text-sm font-semibold text-slate-700">
                                    ${service.price.toLocaleString()}
                                  </span>
                                  {service.hasOptions && (
                                    <ChevronDown
                                      className={`w-4 h-4 text-slate-400 transition-transform ${
                                        isSelected ? "rotate-180" : ""
                                      }`}
                                    />
                                  )}
                                </div>
                              </div>

                              {/* Service Options */}
                              <AnimatePresence>
                                {isSelected && service.hasOptions && service.options && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="mt-3 pt-3 border-t border-slate-200"
                                  >
                                    <p className="text-xs text-slate-500 mb-2">Select options:</p>
                                    <div className="space-y-2">
                                      {service.options.map((option) => {
                                        const currentService = selectedServices.find((s) => s.id === service.id)
                                        const isOptionSelected = currentService?.selectedOptions?.includes(option.id)

                                        return (
                                          <div
                                            key={option.id}
                                            onClick={(e) => {
                                              e.stopPropagation()
                                              toggleOption(activeTab, service.id, option)
                                            }}
                                            className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-all ${
                                              isOptionSelected
                                                ? "bg-sky-100 border border-sky-200"
                                                : "bg-slate-50 hover:bg-slate-100 border border-transparent"
                                            }`}
                                          >
                                            <div className="flex items-center gap-2">
                                              <Checkbox
                                                checked={isOptionSelected}
                                                className="data-[state=checked]:bg-sky-600 data-[state=checked]:border-sky-600 w-4 h-4"
                                              />
                                              <span className="text-sm text-slate-700">{option.name}</span>
                                            </div>
                                            <span className="text-xs font-medium text-slate-600">
                                              +${option.price.toLocaleString()}
                                            </span>
                                          </div>
                                        )
                                      })}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>

                              {/* Quantity Selector for Variable Services */}
                              <AnimatePresence>
                                {isSelected && service.hasVariable && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="mt-3 pt-3 border-t border-slate-200"
                                  >
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                      <p className="text-sm text-slate-600">
                                        {service.variableType === "employees"
                                          ? "Number of employees:"
                                          : "Est. monthly transactions:"}
                                      </p>
                                      <div className="flex items-center gap-2">
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation()
                                            const currentService = selectedServices.find((s) => s.id === service.id)
                                            updateQuantity(service.id, (currentService?.quantity || 1) - 1)
                                          }}
                                          className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
                                        >
                                          <Minus className="w-4 h-4" />
                                        </button>
                                        <input
                                          type="number"
                                          min="1"
                                          value={selectedServices.find((s) => s.id === service.id)?.quantity || 1}
                                          onChange={(e) => {
                                            e.stopPropagation()
                                            updateQuantity(service.id, Number.parseInt(e.target.value) || 1)
                                          }}
                                          onClick={(e) => e.stopPropagation()}
                                          className="w-14 sm:w-16 h-8 text-center rounded-lg border border-slate-200 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                                        />
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation()
                                            const currentService = selectedServices.find((s) => s.id === service.id)
                                            updateQuantity(service.id, (currentService?.quantity || 1) + 1)
                                          }}
                                          className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
                                        >
                                          <Plus className="w-4 h-4" />
                                        </button>
                                      </div>
                                    </div>
                                    <p className="text-xs text-slate-400 mt-2">
                                      {service.variableType === "employees"
                                        ? `$${service.price.toLocaleString()} per employee/month`
                                        : `Base price for selected volume`}
                                    </p>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </motion.div>
                          )
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              {/* Right Column - Sticky Quote Panel */}
              <div className="lg:col-span-1">
                <div className="sticky top-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="bg-white/90 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl shadow-sky-100/50 border border-slate-100"
                  >
                    {/* Panel Header */}
                    <div className="p-4 sm:p-6 border-b border-slate-100">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                          <FileText className="w-5 h-5 text-white" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-semibold text-slate-800">Your Quote</h3>
                          <p className="text-xs text-slate-500">{selectedServices.length} services selected</p>
                        </div>
                      </div>
                    </div>

                    {/* Selected Services List */}
                    <div className="p-3 sm:p-4 max-h-[300px] overflow-y-auto space-y-2">
                      {selectedServices.length === 0 ? (
                        <div className="text-center py-8 text-slate-400">
                          <Calculator className="w-12 h-12 mx-auto mb-3 opacity-50" />
                          <p className="text-sm">Select services to build your quote</p>
                        </div>
                      ) : (
                        selectedServices.map((service) => (
                          <div
                            key={service.id}
                            className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-2 sm:p-3 bg-slate-50 rounded-lg gap-1 sm:gap-2"
                          >
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-slate-800 truncate">{service.name}</p>
                              <p className="text-xs text-slate-500">{service.type}</p>
                            </div>
                            <div className="flex items-center justify-between sm:justify-end gap-2 flex-shrink-0">
                              <span className="text-sm font-semibold text-sky-600 whitespace-nowrap">
                                ${formatPrice(service.price * (service.quantity || 1))}
                              </span>
                              <button
                                onClick={() => setSelectedServices(selectedServices.filter((s) => s.id !== service.id))}
                                className="p-1 hover:bg-slate-200 rounded transition-colors flex-shrink-0"
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
                      <div className="p-3 sm:p-4 space-y-2 sm:space-y-3 border-t border-slate-100">
                        {preliminaryTotal.oneTime > 0 && (
                          <div className="flex justify-between text-sm gap-2">
                            <span className="text-slate-500">One-time Fees</span>
                            <span className="text-slate-800 font-medium whitespace-nowrap flex-shrink-0">
                              ${formatPrice(preliminaryTotal.oneTime)}
                            </span>
                          </div>
                        )}
                        {preliminaryTotal.monthly > 0 && (
                          <div className="flex justify-between text-sm gap-2">
                            <span className="text-slate-500">Monthly Fees</span>
                            <span className="text-slate-800 font-medium whitespace-nowrap flex-shrink-0">
                              ${formatPrice(preliminaryTotal.monthly)}/mo
                            </span>
                          </div>
                        )}
                        {preliminaryTotal.annual > 0 && (
                          <div className="flex justify-between text-sm gap-2">
                            <span className="text-slate-500">Annual Fees</span>
                            <span className="text-slate-800 font-medium whitespace-nowrap flex-shrink-0">
                              ${formatPrice(preliminaryTotal.annual)}/yr
                            </span>
                          </div>
                        )}
                        <div className="pt-2 sm:pt-3 border-t border-slate-100">
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <span className="text-sm text-slate-600">Select Duration</span>
                            <div className="flex gap-1">
                              {[1, 3, 6, 12].map((months) => (
                                <button
                                  key={months}
                                  onClick={() => setSelectedMonths(months)}
                                  className={`px-2 py-1 text-xs font-medium rounded-md transition-all ${
                                    selectedMonths === months
                                      ? "bg-sky-500 text-white shadow-sm"
                                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                  }`}
                                >
                                  {months === 12 ? "1 Year" : `${months} Mo`}
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className="flex justify-between items-center gap-2">
                            <span className="text-slate-800 font-semibold">
                              {selectedMonths === 12 ? "Year 1 Total" : `${selectedMonths}-Month Total`}
                            </span>
                            <span className="text-lg sm:text-xl font-bold text-sky-600 whitespace-nowrap flex-shrink-0">
                              ${formatPrice(preliminaryTotal.periodTotal)}
                            </span>
                          </div>

                          {/* Show monthly breakdown when not 12 months */}
                          {selectedMonths !== 12 && preliminaryTotal.monthly > 0 && (
                            <p className="text-xs text-slate-500 mt-1">
                              ${formatPrice(preliminaryTotal.monthly)}/mo × {selectedMonths} months
                              {preliminaryTotal.oneTime > 0 && ` + $${formatPrice(preliminaryTotal.oneTime)} one-time`}
                            </p>
                          )}

                          <p className="text-xs text-slate-500 mt-1">*Estimated based on selections</p>
                        </div>
                      </div>
                    )}

                    {/* Action Button */}
                    <div className="p-3 sm:p-4">
                      <Button
                        onClick={handleCalculate}
                        disabled={selectedServices.length === 0}
                        className="w-full h-12 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white font-semibold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Calculate Final Price
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="pb-16 lg:pb-24" />

          <LandingFooter variant="light" absolute={false} />

          {/* Contact Form Modal */}
          <AnimatePresence>
            {step === "contact" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
                onClick={() => setStep("selection")}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center">
                      <Check className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800">Your Final Quote</h3>
                    <p className="text-3xl font-bold text-sky-600 mt-2">${formatPrice(preliminaryTotal.periodTotal)}</p>
                    <p className="text-sm text-slate-500">
                      {selectedMonths === 12 ? "Year 1 Total" : `${selectedMonths}-Month Total`}
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <Label className="text-slate-600 mb-2 block">Name / Company</Label>
                      <Input
                        placeholder="Your name / Company"
                        value={contactInfo.name}
                        onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                        className="bg-slate-50 border-slate-200 text-slate-800"
                      />
                    </div>
                    <div>
                      <Label className="text-slate-600 mb-2 block">Email</Label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={contactInfo.email}
                        onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                        className="bg-slate-50 border-slate-200 text-slate-800"
                      />
                    </div>
                    <div>
                      <Label className="text-slate-600 mb-2 block">Phone</Label>
                      <Input
                        type="tel"
                        placeholder="+66 XX XXX XXXX"
                        value={contactInfo.phone}
                        onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                        className="bg-slate-50 border-slate-200 text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      onClick={() => setStep("selection")}
                      className="flex-1 border-slate-300 text-slate-600 hover:bg-slate-100"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      disabled={!contactInfo.name || !contactInfo.email || isSubmitting}
                      className="flex-1 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 disabled:opacity-50"
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
        </motion.div>

        {/* Related Links Section */}
      </AnimatedGridBackground>
    </div>
  )
}
