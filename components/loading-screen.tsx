"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

const preloadImages = [
  "/grok_image_oatei0.jpg",
  "/home-bng.jpg",
  "/bng-body.jpg",
  "/apple-icon.png",
  "/new-logo.png"
]

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const pathname = usePathname()

  // Preload critical images
  useEffect(() => {
    const imagePromises = preloadImages.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = resolve
        img.onerror = reject
        img.src = src
      })
    })

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch(() => setImagesLoaded(true)) // Continue even if some images fail
  }, [])

  // Handle route changes
  useEffect(() => {
    if (imagesLoaded) {
      const timer = setTimeout(() => setIsLoading(false), 500)
      return () => clearTimeout(timer)
    }
  }, [pathname, imagesLoaded])

  // Initial load
  useEffect(() => {
    if (imagesLoaded) {
      const timer = setTimeout(() => setIsLoading(false), 1200)
      return () => clearTimeout(timer)
    }
  }, [imagesLoaded])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto relative">
            {/* Outer spinning ring */}
            <div className="absolute inset-0 rounded-full border-4 border-purple-500/20 animate-spin border-t-purple-500"></div>
            {/* Inner pulsing ring */}
            <div className="absolute inset-2 rounded-full border-2 border-pink-500/30 animate-pulse"></div>
            {/* Logo */}
            <div className="absolute inset-4 flex items-center justify-center">
              <img 
                src="/apple-icon.png" 
                alt="AlphaDAO" 
                className="w-full h-full object-contain animate-pulse"
              />
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white animate-pulse">
            {imagesLoaded ? "Almost Ready..." : "Loading AlphaDAO"}
          </h3>
          <div className="flex items-center justify-center gap-1">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 w-64 mx-auto">
          <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
            <div className={`h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ${
              imagesLoaded ? 'w-full' : 'w-1/3 animate-pulse'
            }`}></div>
          </div>
        </div>
      </div>
    </div>
  )
}