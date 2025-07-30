import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, MessageCircle, Users, Handshake } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Get in Touch
            </span>
            <br />
            <span className="text-white">With Our Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Ready to transform your B2B sales process? Let's discuss how AI Hunter can accelerate your pipeline
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl border border-purple-500/20 p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
              <form className="space-y-6" action="https://salescentri.com/get-started/contact">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <Input className="bg-black/50 border-purple-500/30 text-white" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <Input className="bg-black/50 border-purple-500/30 text-white" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <Input
                    className="bg-black/50 border-purple-500/30 text-white"
                    placeholder="john@company.com"
                    type="email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                  <Input className="bg-black/50 border-purple-500/30 text-white" placeholder="Your Company" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <Textarea
                    className="bg-black/50 border-purple-500/30 text-white"
                    placeholder="Tell us about your needs..."
                    rows={4}
                  />
                </div>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-black font-bold"
                >
                  <a href="https://salescentri.com/get-started/contact">Send Message</a>
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Office Location</h3>
                      <p className="text-gray-300">Spokane, WA</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Email Support</h3>
                      <p className="text-gray-300">Available 24/7</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Phone Support</h3>
                      <p className="text-gray-300">Business hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl border border-purple-500/20 p-6">
                <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-black font-bold"
                  >
                    <a
                      href="https://salescentri.com/contact/support-request/live-chat"
                      className="flex items-center justify-center"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Live Chat
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-black bg-transparent"
                  >
                    <a
                      href="https://salescentri.com/contact/partnerships/partner-inquiry"
                      className="flex items-center justify-center"
                    >
                      <Handshake className="w-4 h-4 mr-2" />
                      Partner Inquiry
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-black bg-transparent"
                  >
                    <a
                      href="https://salescentri.com/contact/support-request"
                      className="flex items-center justify-center"
                    >
                      <Users className="w-4 h-4 mr-2" />
                      Support Request
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">How Can We Help?</h2>
            <p className="text-xl text-gray-300">Choose the best way to get in touch based on your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Sales Inquiry</h3>
              <p className="text-gray-300 mb-6">
                Ready to get started? Let's discuss your needs and find the perfect solution.
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-black font-bold"
              >
                <a href="https://salescentri.com/contact/sales-inquiry">Contact Sales</a>
              </Button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Technical Support</h3>
              <p className="text-gray-300 mb-6">
                Need help with your account or have technical questions? We're here to help.
              </p>
              <Button
                asChild
                variant="outline"
                className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-black bg-transparent"
              >
                <a href="https://salescentri.com/contact/support-request/submit-ticket">Submit Ticket</a>
              </Button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Partnerships</h3>
              <p className="text-gray-300 mb-6">
                Interested in partnering with us? Let's explore collaboration opportunities.
              </p>
              <Button
                asChild
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-black bg-transparent"
              >
                <a href="https://salescentri.com/contact/partnerships">Partner With Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
