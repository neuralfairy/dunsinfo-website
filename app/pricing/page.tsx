import { Button } from "@/components/ui/button"
import { Check, Star, Zap, Crown } from "lucide-react"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      icon: Star,
      price: "Contact for Pricing",
      description: "Perfect for small teams getting started with AI-powered lead discovery",
      features: [
        "Up to 1,000 contacts/month",
        "Basic email verification",
        "Standard support",
        "CRM integration",
        "Basic analytics",
      ],
      cta: "Get Pricing",
      link: "https://salescentri.com/pricing",
      popular: false,
    },
    {
      name: "Pro",
      icon: Zap,
      price: "Custom Quote",
      description: "Advanced features for growing sales teams and agencies",
      features: [
        "Up to 10,000 contacts/month",
        "Advanced AI enrichment",
        "Voice AI prospecting",
        "WhatsApp & chat bots",
        "Priority support",
        "Advanced analytics",
        "Custom integrations",
      ],
      cta: "Plans Overview",
      link: "https://salescentri.com/pricing/plans-overview",
      popular: true,
    },
    {
      name: "Enterprise",
      icon: Crown,
      price: "Custom Solution",
      description: "Tailored solutions for large organizations with specific needs",
      features: [
        "Unlimited contacts",
        "Custom AI models",
        "Dedicated account manager",
        "White-label options",
        "Advanced security",
        "Custom reporting",
        "24/7 premium support",
        "On-premise deployment",
      ],
      cta: "Enterprise & Custom",
      link: "https://salescentri.com/pricing/enterprise-custom",
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Simple, Transparent
            </span>
            <br />
            <span className="text-white">Pricing</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your team's AI-powered lead discovery needs
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-black font-bold"
          >
            <a href="https://salescentri.com/pricing/free-trial">Start Free Trial</a>
          </Button>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl border p-8 ${plan.popular ? "border-purple-500 scale-105" : "border-purple-500/20"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-black px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    {plan.price}
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full ${plan.popular ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-black" : "border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-black"} font-bold`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  <a href={plan.link}>{plan.cta}</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">All Plans Include</h2>
            <p className="text-xl text-gray-300">Core features available across all pricing tiers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email Verification</h3>
              <p className="text-gray-400 text-sm">95%+ accuracy guarantee</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">AI Enrichment</h3>
              <p className="text-gray-400 text-sm">Advanced data insights</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">CRM Integration</h3>
              <p className="text-gray-400 text-sm">Seamless workflow</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-400 text-sm">Always here to help</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">Try AI Hunter risk-free with our 14-day trial</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-black font-bold"
            >
              <a href="https://salescentri.com/pricing/free-trial">Start Free Trial</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-black bg-transparent"
            >
              <a href="https://salescentri.com/get-started/book-demo">Schedule Demo</a>
            </Button>
          </div>
          <p className="text-gray-400 mt-4">No credit card required • Full access • Cancel anytime</p>
        </div>
      </section>
    </div>
  )
}
