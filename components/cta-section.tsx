import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 pulse-glow">
            <Rocket className="w-10 h-10 text-white" />
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Sales Process?</h2>

        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of B2B sales teams using AI Hunter to discover verified leads and accelerate their pipeline
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-black font-bold px-8 py-4 text-lg"
          >
            <a href="https://salescentri.com/get-started/free-trial" className="flex items-center">
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-black font-bold px-8 py-4 text-lg bg-transparent"
          >
            <a href="https://salescentri.com/get-started/book-demo">Schedule a Demo</a>
          </Button>
        </div>

        <div className="mt-8 text-gray-400">
          <p>No credit card required • 14-day free trial • Setup in minutes</p>
        </div>
      </div>
    </section>
  )
}
