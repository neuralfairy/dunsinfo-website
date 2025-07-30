"use client"

import { useEffect, useState } from "react"

export function ClientsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const clients = [
    "TechCorp Solutions",
    "Global Dynamics",
    "Innovation Labs",
    "Future Systems",
    "Digital Ventures",
    "Smart Analytics",
    "Cloud Networks",
    "Data Insights",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [clients.length])

  return (
    <section className="py-16 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Clients Using Sales Intelligence Platform</h2>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {clients.map((client, index) => (
              <div key={index} className="w-full flex-shrink-0 text-center">
                <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg border border-purple-500/30 p-8 mx-4">
                  <h3 className="text-xl font-semibold text-white">{client}</h3>
                  <p className="text-gray-400 mt-2">Trusted Partner</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {clients.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-purple-500" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
