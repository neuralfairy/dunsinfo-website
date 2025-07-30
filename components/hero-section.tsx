"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Target, Brain } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20">
        <div className="absolute inset-0 matrix-bg"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl float-animation"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl float-animation"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30 mb-6">
            <Zap className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-300 text-sm font-medium">AI Hunter Technology</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Discover Verified
          </span>
          <br />
          <span className="text-white">B2B Leads with AI Hunter</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Find contact emails, enrich them with intent, and close faster using our AI-powered lead discovery platform
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-black font-bold px-8 py-4 text-lg pulse-glow"
          >
            <a href="https://salescentri.com/get-started/free-trial" className="flex items-center">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-black font-bold px-8 py-4 text-lg bg-transparent"
          >
            <a href="https://salescentri.com/get-started/book-demo" className="flex items-center">
              Book Demo
              <Target className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>

        {/* AI Visualization */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl border border-purple-500/20 p-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 pulse-glow">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">AI Discovery</h3>
                <p className="text-gray-400 text-sm">Advanced algorithms find verified contacts</p>
              </div>

              <div className="text-center">
                <div
                  className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 pulse-glow"
                  style={{ animationDelay: "0.5s" }}
                >
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Intent Enrichment</h3>
                <p className="text-gray-400 text-sm">AI-driven signals enhance lead quality</p>
              </div>

              <div className="text-center">
                <div
                  className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 pulse-glow"
                  style={{ animationDelay: "1s" }}
                >
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Faster Closing</h3>
                <p className="text-gray-400 text-sm">Accelerate your sales pipeline</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
