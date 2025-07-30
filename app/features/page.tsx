import { Button } from "@/components/ui/button"
import { Brain, MessageSquare, Phone, Database, Zap, Target } from "lucide-react"

export default function FeaturesPage() {
  const capabilities = [
    {
      icon: Target,
      title: "Contact Discovery",
      description:
        "Advanced AI algorithms scan millions of data points to find verified B2B contact information with 95%+ accuracy rates.",
      features: ["Email verification", "Phone number discovery", "Social media profiles", "Company hierarchy mapping"],
      link: "https://salescentri.com/platforms/lead-management/lead-generation",
    },
    {
      icon: Phone,
      title: "Voice AI Prospecting",
      description: "Intelligent voice agents that conduct natural conversations and qualify leads automatically.",
      features: ["Natural language processing", "Conversation intelligence", "Automated follow-ups", "Call analytics"],
      link: "https://salescentri.com/platforms/lead-management/voice-ai-agent",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Bot + Chatbot Tools",
      description: "Multi-channel communication automation across WhatsApp, web chat, and messaging platforms.",
      features: ["WhatsApp integration", "Web chat widgets", "Automated responses", "Lead qualification"],
      link: "https://salescentri.com/platforms/lead-management/whatsapp-bot",
    },
    {
      icon: Database,
      title: "Enrichment Layer",
      description: "Comprehensive data enrichment with AI-driven insights and intent signals for better targeting.",
      features: ["Technographic data", "Intent signals", "Company insights", "Behavioral tracking"],
      link: "https://salescentri.com/services/data-enrichment",
    },
    {
      icon: Zap,
      title: "CRM Integration Showcase",
      description: "Seamless integration with popular CRM and PSA platforms for streamlined workflow automation.",
      features: ["Salesforce integration", "HubSpot connectivity", "PSA tool sync", "Custom API access"],
      link: "https://salescentri.com/solutions/psa-suite/integrations",
    },
    {
      icon: Brain,
      title: "AI Intelligence Engine",
      description: "Machine learning algorithms continuously improve lead scoring and targeting accuracy.",
      features: ["Predictive scoring", "Pattern recognition", "Automated insights", "Performance optimization"],
      link: "https://salescentri.com/platforms/contact-intelligence/ai-aggregator",
    },
  ]

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI-Powered Features
            </span>
            <br />
            <span className="text-white">That Drive Results</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover the comprehensive suite of AI-driven tools designed to revolutionize your B2B sales process
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-black font-bold"
          >
            <a href="https://salescentri.com/solutions/use-case-navigator">Use Case Navigator</a>
          </Button>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Core Capabilities</h2>
            <p className="text-xl text-gray-300">Everything you need to supercharge your sales pipeline</p>
          </div>

          <div className="space-y-16">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}
              >
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <capability.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">{capability.title}</h3>
                  </div>
                  <p className="text-lg text-gray-300 mb-6">{capability.description}</p>
                  <ul className="space-y-2 mb-6">
                    {capability.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-black font-bold"
                  >
                    <a href={capability.link}>Learn More</a>
                  </Button>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl border border-purple-500/20 p-8 h-80 flex items-center justify-center">
                    <div className="text-center">
                      <capability.icon className="w-24 h-24 text-purple-400 mx-auto mb-4 opacity-50" />
                      <p className="text-gray-400">Interactive Feature Demo</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Proven Performance</h2>
            <p className="text-xl text-gray-300">Real results from AI-powered lead discovery</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                95%
              </div>
              <p className="text-gray-300">Email Accuracy</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                3x
              </div>
              <p className="text-gray-300">Faster Lead Discovery</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                40%
              </div>
              <p className="text-gray-300">Higher Response Rates</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                60%
              </div>
              <p className="text-gray-300">Time Savings</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience These Features?</h2>
          <p className="text-xl text-gray-300 mb-8">Start your free trial and see the difference AI can make</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-black font-bold"
            >
              <a href="https://salescentri.com/get-started/free-trial">Start Free Trial</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-black bg-transparent"
            >
              <a href="https://salescentri.com/get-started/book-demo">Book a Demo</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
