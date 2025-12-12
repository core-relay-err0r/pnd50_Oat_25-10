"use client"
import { useEffect, useState, useTransition, useRef, useCallback } from "react"
import { scheduleConsultation, type FormState } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
}

const initialState: FormState = {
  message: "",
  status: "error",
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [state, setState] = useState<FormState>(initialState)
  const [isPending, startTransition] = useTransition()

  const onCloseRef = useRef(onClose)

  useEffect(() => {
    onCloseRef.current = onClose
  }, [onClose])

  const handleAutoClose = useCallback(() => {
    onCloseRef.current()
  }, [])

  useEffect(() => {
    if (state.status === "success") {
      const timer = setTimeout(() => {
        handleAutoClose()
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [state.status, handleAutoClose])

  const handleClose = () => {
    if (!isPending) {
      onClose()
    }
  }

  const formAction = async (formData: FormData) => {
    startTransition(async () => {
      const result = await scheduleConsultation(initialState, formData)
      setState(result)
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Schedule Consultation</DialogTitle>
          <DialogDescription>Fill out the form below and we'll get back to you shortly.</DialogDescription>
        </DialogHeader>

        {state.status === "success" ? (
          <div className="flex flex-col items-center justify-center p-8 text-center">
            <div className="text-6xl mb-4">✅</div>
            <h3 className="text-lg font-medium text-gray-900">Success!</h3>
            <p className="text-sm text-gray-600">{state.message}</p>
          </div>
        ) : (
          <form action={formAction} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                required
                className={state.errors?.name ? "border-red-500 focus:border-red-500" : ""}
              />
              {state.errors?.name && <p className="text-sm text-red-500">{state.errors.name[0]}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <Input
                id="company"
                name="company"
                type="text"
                placeholder="Enter your company name"
                className={state.errors?.company ? "border-red-500 focus:border-red-500" : ""}
              />
              {state.errors?.company && <p className="text-sm text-red-500">{state.errors.company[0]}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                required
                className={state.errors?.email ? "border-red-500 focus:border-red-500" : ""}
              />
              {state.errors?.email && <p className="text-sm text-red-500">{state.errors.email[0]}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="telephone">Telephone</Label>
              <Input
                id="telephone"
                name="telephone"
                type="tel"
                placeholder="Enter your telephone number"
                className={state.errors?.telephone ? "border-red-500 focus:border-red-500" : ""}
              />
              {state.errors?.telephone && <p className="text-sm text-red-500">{state.errors.telephone[0]}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatsapp">WhatsApp ID</Label>
              <Input
                id="whatsapp"
                name="whatsapp"
                type="text"
                placeholder="Enter your WhatsApp number or ID"
                className={state.errors?.whatsapp ? "border-red-500 focus:border-red-500" : ""}
              />
              {state.errors?.whatsapp && <p className="text-sm text-red-500">{state.errors.whatsapp[0]}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">Select Your Service</Label>
              <select
                id="service"
                name="service"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Choose a service...</option>
                <option value="web-development">Web Development</option>
                <option value="mobile-app">Mobile App Development</option>
                <option value="ui-ux-design">UI/UX Design</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="consulting">Business Consulting</option>
                <option value="other">Other</option>
              </select>
              {state.errors?.service && <p className="text-sm text-red-500">{state.errors.service[0]}</p>}
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                className="flex-1 bg-transparent"
                disabled={isPending}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isPending} className="flex-1 bg-black hover:bg-gray-800 text-white">
                {isPending ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
