export function Footer() {
  return (
    <footer className="bg-black border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Dunsinfo Solutions
            </div>
            <p className="text-gray-400 mb-4">
              AI-powered lead discovery platform helping B2B sales teams find verified contact emails and enrich them
              with AI-driven signals.
            </p>
            <div className="text-gray-400">
              <p>Spokane, WA</p>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://salescentri.com/platforms/lead-management/lead-generation"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Lead Generation
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/platforms/lead-management/voice-ai-agent"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Voice AI Agent
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/platforms/lead-management/chat-bot"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Chat Bot
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/services/data-enrichment"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Data Enrichment
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/solutions/psa-suite/integrations"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  PSA Integrations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://salescentri.com/company/about-us"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/company/careers"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/company/partners-affiliates"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/contact"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-500/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">© 2024 Dunsinfo Solutions. All rights reserved.</div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://salescentri.com/trust/security-privacy"
              className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="https://salescentri.com/trust/compliance-certifications"
              className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>

        <div className="mt-4 text-center">
          <a
            href="https://salescentri.com?utm_source=dunsinfo.com&utm_medium=footer&utm_campaign=partner_network"
            className="text-gray-500 hover:text-purple-400 text-sm transition-colors"
          >
            Powered by Sales Intelligence Platform
          </a>
        </div>
      </div>
    </footer>
  )
}
