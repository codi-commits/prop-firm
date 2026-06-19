"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-br from-primary/20 via-card to-card border border-primary/20 rounded-3xl p-8 sm:p-12 text-center overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Pass Your <span className="text-primary">Prop Firm Challenge</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Join hundreds of traders who are using PropFirmPass to trade funded accounts with confidence.
              Get instant access today at our limited launch price.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto gap-2" asChild>
                <a href="https://cosmofeed.com/vp/6a200b7494c7c50013ed8e3a" target="_blank" rel="noopener noreferrer">
                  Get Started for ₹999
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <p className="text-sm text-muted-foreground">
                <span className="line-through">₹14,999</span> - 93% off launch price
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
