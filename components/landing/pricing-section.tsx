"use client"

import { motion } from "framer-motion"
import { Check, ArrowRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const includedFeatures = [
  "Full MT5 Expert Advisor",
  "Prop Firm Presets (FTMO, MFF, etc.)",
  "Risk Management Suite",
  "Interactive Dashboard",
  "Lifetime Updates",
  "Setup Guide & Documentation",
  "Email Support",
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Launch <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get lifetime access at our special launch price. This offer won&apos;t last long.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-lg mx-auto"
        >
          <div className="bg-card border-2 border-primary rounded-2xl p-8 relative overflow-hidden">
            {/* Badge */}
            <div className="absolute top-4 right-4">
              <div className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                <Zap className="w-3 h-3" />
                Limited Offer
              </div>
            </div>

            {/* Pricing */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-5xl font-bold text-foreground">₹999</span>
                <div className="text-left">
                  <span className="text-xl text-muted-foreground line-through block">₹14,999</span>
                  <span className="text-sm text-primary font-medium">Save 93%</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">One-time payment, lifetime access</p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button size="lg" className="w-full gap-2" asChild>
              <a href="https://cosmofeed.com/vp/6a200b7494c7c50013ed8e3a" target="_blank" rel="noopener noreferrer">
                Get Instant Access
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>

            <p className="text-center text-xs text-muted-foreground mt-4">
              Secure payment
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
