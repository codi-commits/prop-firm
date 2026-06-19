import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { FundedTradingSection } from "@/components/landing/funded-trading-section"
import { FeaturesGrid } from "@/components/landing/features-grid"
import { EAFeaturesSection } from "@/components/landing/ea-features-section"
import { ProductWalkthroughSection } from "@/components/landing/product-walkthrough-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { FAQSection } from "@/components/landing/faq-section"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FundedTradingSection />
      <FeaturesGrid />
      <EAFeaturesSection />
      <ProductWalkthroughSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
