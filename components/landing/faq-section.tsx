"use client"

import { motion } from "framer-motion"
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What prop firms is this EA compatible with?",
    answer: "Our EA is compatible with all major prop firms including FTMO, MyForexFunds, The5ers, True Forex Funds, and more. We include pre-configured presets for each firm's specific rules.",
  },
  {
    question: "Does this work with MT4 or only MT5?",
    answer: "Currently, the EA is designed exclusively for MetaTrader 5 (MT5). We've optimized it specifically for MT5's superior execution and features.",
  },
  {
    question: "How does the daily drawdown protection work?",
    answer: "The EA monitors your daily P/L in real-time. When you approach your prop firm's daily loss limit (configurable), it automatically stops opening new trades and can close existing positions to protect your account.",
  },
  {
    question: "Do I need a VPS to run this EA?",
    answer: "While not required, we highly recommend using a VPS for optimal performance. The EA is optimized to run efficiently on low-resource VPS servers.",
  },
  {
    question: "What currency pairs does the EA trade?",
    answer: "The EA supports all major forex pairs (EURUSD, GBPUSD, USDJPY, etc.) and can be configured to trade specific pairs based on your preference.",
  },
  {
    question: "Is there a refund policy?",
    answer: "Due to the digital nature of the product, all sales are final. However, we provide comprehensive documentation and support to ensure you get the most out of the EA.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20 bg-card/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about PropFirmPass.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
