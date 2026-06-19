"use client"

import { motion } from "framer-motion"
import { 
  CheckCircle, 
  LayoutDashboard, 
  Settings2, 
  Sliders, 
  SlidersHorizontal,
  Filter,
  Bell,
  Lock,
  RefreshCw
} from "lucide-react"

const eaFeatures = [
  {
    icon: LayoutDashboard,
    title: "Interactive Dashboard",
    description: "Real-time trading dashboard showing account status, open positions, daily P/L, and risk metrics.",
  },
  {
    icon: Settings2,
    title: "Prop Firm Presets",
    description: "Pre-configured settings for FTMO, MyForexFunds, The5ers, and other popular prop firms.",
  },
  {
    icon: Sliders,
    title: "Custom Lot Size Settings",
    description: "Fixed lot, percentage-based, or equity-based lot sizing with maximum lot limits.",
  },
  {
    icon: SlidersHorizontal,
    title: "Trailing Stop-Loss Profiles",
    description: "Multiple trailing stop modes: fixed, ATR-based, and break-even with customizable activation.",
  },
  {
    icon: Filter,
    title: "Smart Session Filters",
    description: "Trade only during specific sessions (London, NY, Asia) with news event filtering.",
  },
  {
    icon: Bell,
    title: "Alert System",
    description: "Push notifications for trade entries, exits, drawdown warnings, and daily summaries.",
  },
  {
    icon: Lock,
    title: "Account Protection",
    description: "Automatic trading halt on reaching daily/weekly/monthly loss limits.",
  },
  {
    icon: RefreshCw,
    title: "Auto-Recovery Mode",
    description: "Smart position recovery system that gradually rebuilds after drawdown periods.",
  },
]

export function EAFeaturesSection() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Features of the <span className="text-primary">EA</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive trading system packed with everything you need to trade funded accounts successfully.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {eaFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex items-start gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Feature List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 bg-card border border-border rounded-2xl p-8"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            Everything Included
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Multi-currency support",
              "VPS optimized",
              "Low latency execution",
              "Spread filter",
              "Slippage protection",
              "Magic number support",
              "Partial close feature",
              "Break-even automation",
              "Compounding mode",
              "Detailed trade logs",
              "Performance analytics",
              "Lifetime updates",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <span className="text-muted-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
