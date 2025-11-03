"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface HowItWorksModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function HowItWorksModal({ isOpen, onClose }: HowItWorksModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg bg-background">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-foreground">How It Works</DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            Our streamlined process ensures a seamless experience from start to finish.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full h-10 w-10 flex items-center justify-center">
              <span>🤝</span>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">1. Initial Consultation</h3>
              <p className="text-sm text-muted-foreground">
                We start with a free consultation to understand your unique needs and business goals.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-chart-2/10 text-chart-2 rounded-full h-10 w-10 flex items-center justify-center">
              <span>✅</span>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">2. Tailored Strategy & Onboarding</h3>
              <p className="text-sm text-muted-foreground">
                We develop a customized tax and accounting strategy and guide you through our simple onboarding process.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-accent text-accent-foreground rounded-full h-10 w-10 flex items-center justify-center">
              <span>🚀</span>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">3. Ongoing Support & Reporting</h3>
              <p className="text-sm text-muted-foreground">
                Receive continuous support, proactive advice, and clear, concise financial reporting to keep you
                informed.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-4 border-t border-border">
          <Link href="/calculator" onClick={onClose}>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  )
}
