"use client"

import { motion } from "framer-motion"
import { Play, Zap, TrendingUp, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

const demoFeatures = [
  {
    icon: Zap,
    title: "Fast Scalping Execution",
    description: "Lightning-fast order execution optimized for scalping strategies on MT5.",
  },
  {
    icon: TrendingUp,
    title: "Multi-Timeframe Profit System",
    description: "Analyzes multiple timeframes to identify high-probability trade setups.",
  },
  {
    icon: Shield,
    title: "Dynamic Stop-Loss Management",
    description: "Intelligent stop-loss that adapts to market volatility and protects profits.",
  },
]

export function ProductWalkthroughSection() {
  return (
    <section className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            See the System <span className="text-primary">In Action</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Watch how our EA executes trades with precision while keeping your funded account safe.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative aspect-video bg-card border border-border rounded-2xl overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4">
                <p className="text-sm font-medium text-foreground">Product Walkthrough</p>
                <p className="text-xs text-muted-foreground">See how PropFirmPass works</p>
              </div>
            </div>
          </motion.div>

          {/* Feature List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {demoFeatures.map((feature, index) => (
              <div key={feature.title} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </div>
            ))}

            <Button size="lg" className="w-full sm:w-auto mt-8">
              Get Started Now
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
