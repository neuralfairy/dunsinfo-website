import { Shield, Lock, Award, CheckCircle } from "lucide-react"

export function TrustBadges() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900/10 to-blue-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Trusted by Industry Leaders</h2>
          <p className="text-gray-400">Enterprise-grade security and compliance</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">SOC 2 Compliant</h3>
            <p className="text-gray-400 text-sm">Enterprise security standards</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">GDPR Ready</h3>
            <p className="text-gray-400 text-sm">Privacy protection built-in</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">99.9% Uptime</h3>
            <p className="text-gray-400 text-sm">Reliable platform performance</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Verified Data</h3>
            <p className="text-gray-400 text-sm">95%+ email accuracy rate</p>
          </div>
        </div>
      </div>
    </section>
  )
}
