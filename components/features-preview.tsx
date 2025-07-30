import { Button } from "@/components/ui/button"
import { Brain, MessageSquare, Phone, Database, Zap, Target } from "lucide-react"

export function FeaturesPreview() {
  const features = [
    {
      icon: Target,
      title: "Contact Discovery",
      description: "AI-powered lead generation with verified contact information",
      link: "https://salescentri.com/platforms/lead-management/lead-generation",
    },
    {
      icon: Phone,
      title: "Voice AI Prospecting",
      description: "Intelligent voice agents for automated outreach",
      link: "https://salescentri.com/platforms/lead-management/voice-ai-agent",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Bot + Chatbot Tools",
      description: "Multi-channel communication automation",
      link: "https://salescentri.com/platforms/lead-management/chat-bot",
    },
    {
      icon: Database,
      title: "Enrichment Layer",
      description: "Advanced data enrichment with AI-driven insights",
      link: "https://salescentri.com/services/data-enrichment",
    },
    {
      icon: Zap,
      title: "CRM Integration",
      description: "Seamless integration with your existing PSA tools",
      link: "https://salescentri.com/solutions/psa-suite/integrations",
    },
    {
      icon: Brain,
      title: "AI Intelligence",
      description: "Machine learning algorithms for better targeting",
      link: "https://salescentri.com/platforms/contact-intelligence/ai-aggregator",
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Powerful AI-Driven Capabilities</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to transform your B2B sales process with artificial intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl border border-purple-500/20 p-6 hover:border-purple-500/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-purple-500/50 text-purple-400 hover:bg-purple-500 hover:text-black bg-transparent"
              >
                <a href={feature.link}>Learn More</a>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-black font-bold"
          >
            <a href="/features">Explore All Features</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
