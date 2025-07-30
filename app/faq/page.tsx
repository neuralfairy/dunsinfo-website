import { Button } from "@/components/ui/button"
import { HelpCircle, BookOpen, FileText } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  const faqs = [
    {
      question: "What is AI Hunter and how does it work?",
      answer:
        "AI Hunter is our advanced lead discovery platform that uses artificial intelligence to find and verify B2B contact information. It scans millions of data points across the web, social networks, and professional databases to identify accurate email addresses, phone numbers, and enrichment data for your target prospects.",
    },
    {
      question: "How accurate is the contact data provided by AI Hunter?",
      answer:
        "AI Hunter maintains a 95%+ email accuracy rate through our advanced verification algorithms. We use multiple validation techniques including syntax checking, domain verification, and real-time email validation to ensure the highest quality contact data.",
    },
    {
      question: "Can AI Hunter integrate with my existing CRM system?",
      answer:
        "Yes, AI Hunter seamlessly integrates with popular CRM platforms including Salesforce, HubSpot, Pipedrive, and many others. We also offer PSA integrations and custom API access for enterprise customers with specific integration requirements.",
    },
    {
      question: "What types of data enrichment does AI Hunter provide?",
      answer:
        "AI Hunter provides comprehensive data enrichment including company information, technographic data, intent signals, social media profiles, job titles, company size, industry classification, and behavioral insights to help you better understand and target your prospects.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial that gives you full access to AI Hunter's features. No credit card is required to start your trial, and you can cancel anytime during the trial period.",
    },
    {
      question: "How does the Voice AI prospecting feature work?",
      answer:
        "Our Voice AI agents use natural language processing to conduct intelligent conversations with prospects. They can qualify leads, schedule appointments, and follow up automatically while maintaining natural, human-like interactions.",
    },
    {
      question: "What security measures are in place to protect my data?",
      answer:
        "We maintain enterprise-grade security with SOC 2 compliance, GDPR readiness, end-to-end encryption, and regular security audits. Your data is stored securely and never shared with third parties.",
    },
    {
      question: "Can I export the contact data I discover?",
      answer:
        "Yes, you can export your discovered contacts in various formats including CSV, Excel, and direct CRM integration. All exports maintain the enrichment data and verification status for each contact.",
    },
    {
      question: "What support options are available?",
      answer:
        "We offer 24/7 email support, live chat during business hours, comprehensive documentation, video tutorials, and dedicated account management for enterprise customers.",
    },
    {
      question: "How does pricing work for different team sizes?",
      answer:
        "We offer flexible pricing tiers based on your team size and usage needs. Our Starter plan is perfect for small teams, Pro for growing businesses, and Enterprise for large organizations with custom requirements.",
    },
  ]

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Frequently Asked
            </span>
            <br />
            <span className="text-white">Questions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Find answers to common questions about AI Hunter and our lead discovery platform
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Top Questions about AI Hunter</h2>
            <p className="text-gray-300 text-center mb-8">Everything you need to know to get started</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl border border-purple-500/20 px-6"
              >
                <AccordionTrigger className="text-left text-white hover:text-purple-400 py-6">
                  <span className="text-lg font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-6 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Help Resources */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Need More Help?</h2>
            <p className="text-xl text-gray-300">Explore our comprehensive resources and support options</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Documentation</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive guides and API documentation to help you get the most out of AI Hunter.
              </p>
              <div className="space-y-2">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-black font-bold"
                >
                  <a href="https://salescentri.com/docs/user-guide">User Guide</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-black bg-transparent"
                >
                  <a href="https://salescentri.com/docs/api-reference">API Reference</a>
                </Button>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Support Center</h3>
              <p className="text-gray-300 mb-6">
                Get personalized help from our support team through multiple channels.
              </p>
              <div className="space-y-2">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-black font-bold"
                >
                  <a href="https://salescentri.com/contact/support-request/live-chat">Live Chat</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-black bg-transparent"
                >
                  <a href="https://salescentri.com/contact/support-request/submit-ticket">Submit Ticket</a>
                </Button>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Learning Resources</h3>
              <p className="text-gray-300 mb-6">Tutorials, webinars, and best practices to maximize your success.</p>
              <div className="space-y-2">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-black font-bold"
                >
                  <a href="https://salescentri.com/resources/tutorials-webinars">Tutorials</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black bg-transparent"
                >
                  <a href="https://salescentri.com/resources/whitepapers-ebooks">Whitepapers</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Still Have Questions?</h2>
          <p className="text-xl text-gray-300 mb-8">Our team is here to help you succeed with AI Hunter</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-black font-bold"
            >
              <a href="https://salescentri.com/get-started/book-demo">Schedule a Demo</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-black bg-transparent"
            >
              <a href="https://salescentri.com/get-started/contact">Contact Support</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
