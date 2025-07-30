import { Button } from "@/components/ui/button"
import { Users, Target, Award, Rocket } from "lucide-react"

export default function AboutPage() {
  const team = [
    {
      name: "AI Research Team",
      role: "Machine Learning Engineers",
      description: "Developing cutting-edge AI algorithms for lead discovery and enrichment",
    },
    {
      name: "Product Team",
      role: "Product Managers & Designers",
      description: "Creating intuitive experiences for B2B sales professionals",
    },
    {
      name: "Engineering Team",
      role: "Full-Stack Developers",
      description: "Building scalable infrastructure for enterprise-grade performance",
    },
    {
      name: "Sales Intelligence Team",
      role: "Data Scientists",
      description: "Ensuring data accuracy and developing predictive models",
    },
  ]

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Dunsinfo
            </span>
            <br />
            <span className="text-white">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We're revolutionizing B2B sales with AI-powered lead discovery, helping teams find verified contacts and
            accelerate their pipeline
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6">
                At Dunsinfo Solutions, we believe that every B2B sales team deserves access to the most advanced AI
                technology for lead discovery and enrichment. Based in Spokane, WA, we're dedicated to transforming how
                sales professionals find, qualify, and engage with prospects.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Our AI Hunter platform combines machine learning, natural language processing, and advanced data
                analytics to deliver verified contact information with unprecedented accuracy and speed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-black font-bold"
                >
                  <a href="https://salescentri.com/company/about-us/leadership-team">Leadership Team</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-black bg-transparent"
                >
                  <a href="https://salescentri.com/company/team-advisors/career-openings">Career Openings</a>
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl border border-purple-500/20 p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    95%
                  </div>
                  <p className="text-gray-300 text-sm">Email Accuracy</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    10K+
                  </div>
                  <p className="text-gray-300 text-sm">Active Users</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    50M+
                  </div>
                  <p className="text-gray-300 text-sm">Contacts Verified</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    24/7
                  </div>
                  <p className="text-gray-300 text-sm">AI Processing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our AI Team</h2>
            <p className="text-xl text-gray-300">World-class experts in artificial intelligence and sales technology</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl border border-purple-500/20 p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-purple-400">{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-300">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Precision</h3>
              <p className="text-gray-300">
                We deliver the most accurate contact data in the industry, because your success depends on quality
                leads.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-gray-300">
                We continuously push the boundaries of AI technology to give you a competitive advantage.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-gray-300">
                We're committed to providing exceptional service and support to help you achieve your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Mission</h2>
          <p className="text-xl text-gray-300 mb-8">Help us revolutionize B2B sales with cutting-edge AI technology</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-black font-bold"
            >
              <a href="https://salescentri.com/company/careers">Join Us</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-black bg-transparent"
            >
              <a href="https://salescentri.com/get-started/contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
