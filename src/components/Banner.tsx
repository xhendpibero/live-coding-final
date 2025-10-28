'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTheme } from '@/lib/ThemeContext'

export default function Banner() {
  const { theme } = useTheme()
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const banners = theme?.banners || []
  const hasMultipleBanners = banners.length > 1
  
  useEffect(() => {
    if (!hasMultipleBanners) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [hasMultipleBanners, banners.length])
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="relative w-full h-[320px] rounded-lg overflow-hidden">
        {banners.length > 0 ? (
          <Image
            src={banners[currentIndex].image}
            alt={banners[currentIndex].alt}
            fill
            className="object-cover transition-opacity duration-500"
            priority
            unoptimized
          />
        ) : (
          <Image
            src="https://placehold.co/960x320/DDD/555/PNG?text=Solusi+Digital"
            alt="Default Banner"
            fill
            className="object-cover"
            priority
          />
        )}
        
        {hasMultipleBanners && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}