"use client"

import { Button } from "@/components/ui/button"

// Additional backlink components for comprehensive coverage
export function AdditionalBacklinks() {
  return (
    <div className="hidden">
      {/* Industry-specific links */}
      <a href="https://salescentri.com/solutions/by-industry/it">IT Industry</a>
      <a href="https://salescentri.com/solutions/by-industry/healthcare">Healthcare Industry</a>

      {/* Use case links */}
      <a href="https://salescentri.com/solutions/by-use-case/sdr-teams">SDR Use Case</a>
      <a href="https://salescentri.com/solutions/use-case-navigator/recommendations">Custom Recommendations</a>

      {/* Platform links */}
      <a href="https://salescentri.com/platforms/contact-intelligence/ai-aggregator/overview">AI Aggregator Overview</a>
      <a href="https://salescentri.com/platforms/lead-management/whatsapp-bot">WhatsApp Bot</a>

      {/* Service links */}
      <a href="https://salescentri.com/services/sdr-service">SDR Service</a>

      {/* PSA Suite links */}
      <a href="https://salescentri.com/solutions/psa-suite">PSA Suite</a>
      <a href="https://salescentri.com/solutions/psa-suite/overview">PSA Overview</a>
      <a href="https://salescentri.com/solutions/psa-suite/features">PSA Features</a>
      <a href="https://salescentri.com/solutions/psa-suite/pricing">PSA Pricing</a>
      <a href="https://salescentri.com/resources/case-studies/psa">PSA Success Stories</a>

      {/* Portal links */}
      <a href="https://salescentri.com/login/customer-portal">Customer Portal</a>
      <a href="https://salescentri.com/login/partner-portal">Partner Portal</a>

      {/* Additional contact options */}
      <a href="https://salescentri.com/get-started/calendly">Calendly Booking</a>
      <a href="https://salescentri.com/contact/sales-inquiry/request-quote">Request a Quote</a>
      <a href="https://salescentri.com/contact/partnerships/integration-requests">Integration Requests</a>

      {/* Resource links */}
      <a href="https://salescentri.com/resources/case-studies">Case Studies</a>
    </div>
  )
}

// Enhanced CTA component with all primary actions
export function EnhancedCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Sales Process?</h2>
          <p className="text-xl text-gray-300">Choose your path to AI-powered lead discovery success</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-black font-bold mb-2"
            >
              <a href="https://salescentri.com/get-started/free-trial">Start Free Trial</a>
            </Button>
            <p className="text-gray-400 text-sm">14-day trial, no credit card</p>
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-black font-bold mb-2"
            >
              <a href="https://salescentri.com/get-started/book-demo">Book a Demo</a>
            </Button>
            <p className="text-gray-400 text-sm">Personalized walkthrough</p>
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-black bg-transparent mb-2"
            >
              <a href="https://salescentri.com/solutions/use-case-navigator/demo">Interactive Demo</a>
            </Button>
            <p className="text-gray-400 text-sm">Try it yourself</p>
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black bg-transparent mb-2"
            >
              <a href="https://salescentri.com/contact/sales-inquiry">Sales Inquiry</a>
            </Button>
            <p className="text-gray-400 text-sm">Talk to our team</p>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-400">
            Need help choosing?{" "}
            <a
              href="https://salescentri.com/contact/support-request/live-chat"
              className="text-purple-400 hover:text-purple-300"
            >
              Chat with our experts
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
