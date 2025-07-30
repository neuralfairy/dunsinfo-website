import { HeroSection } from "@/components/hero-section"
import { TrustBadges } from "@/components/trust-badges"
import { ClientsCarousel } from "@/components/clients-carousel"
import { InteractiveDemo } from "@/components/interactive-demo"
import { FeaturesPreview } from "@/components/features-preview"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <TrustBadges />
      <ClientsCarousel />
      <InteractiveDemo />
      <FeaturesPreview />
      <CTASection />
    </div>
  )
}
