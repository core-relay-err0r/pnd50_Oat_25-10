"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    quote:
      "PND50 transformed our accounting process completely. Our AI-powered system made compliance effortless and saved clients countless hours every month.",
    author: "Sarah M.",
    role: "Expat Specialist",
    company: "PND50",
    image: "/images/image.png",
  },
  {
    quote:
      "We're an accounting firm that understands tech companies. The real-time dashboard and expert support are game-changers for our business.",
    author: "Chanika M.",
    role: "Senior Accountant",
    company: "PND50",
    image: "/placeholder.svg",
  },
  {
    quote:
      "As a foreign entrepreneur, I can focus on growth while PND50 handles the difficulty of Thai tax regulations. They make sure we handle it all seamlessly.",
    author: "Michael R.",
    role: "Business Owner",
    company: "Burakorn Partners",
    image: "/placeholder.svg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 relative z-10 bg-slate-950/30">
      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40 max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted by Businesses</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            See what our clients and partners have to say about their experience with PND50.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-slate-900/50 border-slate-800 h-full backdrop-blur-sm">
                <CardContent className="pt-6 flex flex-col h-full">
                  <div className="flex-1 mb-6">
                    <p className="text-slate-300 italic leading-relaxed">"{testimonial.quote}"</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.author} />
                      <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-white font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-slate-500">
                        {testimonial.role} @ {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
