import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight, FileText, BookOpen, Video } from "lucide-react"

export default function BlogPage() {
  const posts = [
    {
      title: "The Future of AI in B2B Sales: Trends to Watch in 2024",
      excerpt:
        "Discover how artificial intelligence is reshaping the B2B sales landscape and what it means for your team.",
      author: "AI Research Team",
      date: "December 15, 2023",
      category: "AI Insights",
      readTime: "5 min read",
    },
    {
      title: "Maximizing ROI with AI-Powered Lead Discovery",
      excerpt: "Learn proven strategies to increase your return on investment using intelligent lead discovery tools.",
      author: "Sales Strategy Team",
      date: "December 10, 2023",
      category: "Sales Strategy",
      readTime: "7 min read",
    },
    {
      title: "Voice AI in Sales: The Complete Guide to Automated Prospecting",
      excerpt: "Everything you need to know about implementing voice AI agents in your sales process.",
      author: "Product Team",
      date: "December 5, 2023",
      category: "Product Updates",
      readTime: "10 min read",
    },
    {
      title: "Data Enrichment Best Practices for B2B Sales Teams",
      excerpt: "Master the art of data enrichment to improve lead quality and conversion rates.",
      author: "Data Science Team",
      date: "November 28, 2023",
      category: "Best Practices",
      readTime: "6 min read",
    },
    {
      title: "CRM Integration Strategies for Maximum Efficiency",
      excerpt: "Optimize your workflow with seamless CRM integrations and automation.",
      author: "Engineering Team",
      date: "November 20, 2023",
      category: "Integrations",
      readTime: "8 min read",
    },
    {
      title: "The Psychology of AI-Enhanced Sales Outreach",
      excerpt: "Understanding how AI can improve your outreach effectiveness and response rates.",
      author: "Sales Psychology Team",
      date: "November 15, 2023",
      category: "Sales Psychology",
      readTime: "9 min read",
    },
  ]

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI Sales
            </span>
            <br />
            <span className="text-white">Insights & Strategies</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Thought leadership content, AI tools insights, and proven outbound strategies to accelerate your B2B sales
            success
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {posts.map((post, index) => (
                  <article
                    key={index}
                    className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300"
                  >
                    <div className="flex items-center text-sm text-gray-400 mb-4">
                      <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full mr-4">
                        {post.category}
                      </span>
                      <div className="flex items-center mr-4">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center mr-4">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-4 hover:text-purple-400 transition-colors cursor-pointer">
                      {post.title}
                    </h2>

                    <p className="text-gray-300 mb-6 leading-relaxed">{post.excerpt}</p>

                    <Button
                      variant="outline"
                      className="border-purple-500/50 text-purple-400 hover:bg-purple-500 hover:text-black bg-transparent"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    className="border-purple-500/50 text-purple-400 hover:bg-purple-500 hover:text-black bg-transparent"
                  >
                    Previous
                  </Button>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-black">1</Button>
                  <Button
                    variant="outline"
                    className="border-purple-500/50 text-purple-400 hover:bg-purple-500 hover:text-black bg-transparent"
                  >
                    2
                  </Button>
                  <Button
                    variant="outline"
                    className="border-purple-500/50 text-purple-400 hover:bg-purple-500 hover:text-black bg-transparent"
                  >
                    3
                  </Button>
                  <Button
                    variant="outline"
                    className="border-purple-500/50 text-purple-400 hover:bg-purple-500 hover:text-black bg-transparent"
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl border border-purple-500/20 p-6">
                <h3 className="text-xl font-bold text-white mb-4">Need Help?</h3>
                <div className="space-y-3">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-black font-bold"
                  >
                    <a
                      href="https://salescentri.com/contact/support-request/submit-ticket"
                      className="flex items-center justify-center"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Submit a Ticket
                    </a>
                  </Button>
                </div>
              </div>

              {/* Resources */}
              <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl border border-purple-500/20 p-6">
                <h3 className="text-xl font-bold text-white mb-4">Resources</h3>
                <div className="space-y-3">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-purple-500/50 text-purple-400 hover:bg-purple-500 hover:text-black bg-transparent"
                  >
                    <a
                      href="https://salescentri.com/resources/whitepapers-ebooks"
                      className="flex items-center justify-center"
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      Whitepapers & Ebooks
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-blue-500/50 text-blue-400 hover:bg-blue-500 hover:text-black bg-transparent"
                  >
                    <a
                      href="https://salescentri.com/resources/tutorials-webinars"
                      className="flex items-center justify-center"
                    >
                      <Video className="w-4 h-4 mr-2" />
                      Tutorials & Webinars
                    </a>
                  </Button>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl border border-purple-500/20 p-6">
                <h3 className="text-xl font-bold text-white mb-4">Categories</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-gray-300 hover:text-purple-400 cursor-pointer">
                    <span>AI Insights</span>
                    <span className="text-sm">12</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-300 hover:text-purple-400 cursor-pointer">
                    <span>Sales Strategy</span>
                    <span className="text-sm">8</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-300 hover:text-purple-400 cursor-pointer">
                    <span>Product Updates</span>
                    <span className="text-sm">15</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-300 hover:text-purple-400 cursor-pointer">
                    <span>Best Practices</span>
                    <span className="text-sm">10</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-300 hover:text-purple-400 cursor-pointer">
                    <span>Integrations</span>
                    <span className="text-sm">6</span>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl border border-purple-500/20 p-6">
                <h3 className="text-xl font-bold text-white mb-4">Stay Updated</h3>
                <p className="text-gray-300 mb-4">Get the latest AI sales insights delivered to your inbox.</p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  />
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-black font-bold">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
