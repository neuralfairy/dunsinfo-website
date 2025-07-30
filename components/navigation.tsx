"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            >
              Dunsinfo Solutions
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/features"
                className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Pricing
              </Link>
              <Button
                asChild
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-black font-semibold"
              >
                <a href="https://salescentri.com/get-started/book-demo">Demo</a>
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-black font-semibold"
              >
                <a href="https://salescentri.com/get-started/free-trial">Free Trial</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-black bg-transparent"
              >
                <a href="https://salescentri.com/get-started/contact">Contact</a>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 rounded-lg mt-2">
              <Link
                href="/features"
                className="text-gray-300 hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-gray-300 hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                Pricing
              </Link>
              <div className="space-y-2 pt-2">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-black font-semibold"
                >
                  <a href="https://salescentri.com/get-started/book-demo">Demo</a>
                </Button>
                <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-black font-semibold">
                  <a href="https://salescentri.com/get-started/free-trial">Free Trial</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-black bg-transparent"
                >
                  <a href="https://salescentri.com/get-started/contact">Contact</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
