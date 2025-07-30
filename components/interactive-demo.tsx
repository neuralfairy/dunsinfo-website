import { Button } from "@/components/ui/button"
import { Play, MousePointer } from "lucide-react"

export function InteractiveDemo() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Experience AI Hunter in Action</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how our AI-powered platform discovers and enriches B2B leads in real-time
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl border border-purple-500/20 p-8 backdrop-blur-sm">
            <div className="aspect-video bg-black/50 rounded-lg border border-purple-500/30 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5"></div>
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 pulse-glow">
                  <Play className="w-10 h-10 text-white ml-1" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Live Interactive Demo</h3>
                <p className="text-gray-300 mb-6">Watch AI Hunter discover and enrich leads in seconds</p>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-black font-bold"
                >
                  <a href="https://salescentri.com/solutions/use-case-navigator/demo" className="flex items-center">
                    Launch Interactive Demo
                    <MousePointer className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
