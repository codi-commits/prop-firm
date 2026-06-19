"use client"

import { motion } from "framer-motion"
import { 
  Shield, 
  TrendingDown, 
  Calculator, 
  BarChart3, 
  Clock, 
  Target 
} from "lucide-react"

const features = [
  {
    icon: TrendingDown,
    title: "Daily Drawdown Protection",
    description: "Automatically stops trading when daily loss limit approaches. Never breach your prop firm rules again.",
  },
  {
    icon: Shield,
    title: "Equity Guard",
    description: "Real-time equity monitoring with instant position closure if drawdown thresholds are hit.",
  },
  {
    icon: Calculator,
    title: "Smart Lot Sizing",
    description: "Dynamic position sizing based on account equity and risk parameters. Perfect for scaling.",
  },
  {
    icon: BarChart3,
    title: "Consistency Mode",
    description: "Built-in profit targets and loss limits per trade to maintain consistent trading behavior.",
  },
  {
    icon: Clock,
    title: "Trade Frequency Control",
    description: "Set maximum trades per day/session. Prevents overtrading during volatile conditions.",
  },
  {
    icon: Target,
    title: "Precision Entry/Exit",
    description: "Multi-timeframe analysis for high-probability entries with dynamic stop-loss management.",
  },
]

export function FeaturesGrid() {
  return (
    <section id="features" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Risk Management <span className="text-primary">Features</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every feature is designed with prop firm rules in mind. Stay compliant and protect your capital.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
