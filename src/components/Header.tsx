'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { useTheme } from '@/lib/ThemeContext'

export default function Header() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const langParams = searchParams.get('lang') || 'id'
  const brandParams = searchParams.get('brand') || ''
  const { theme } = useTheme()

  const changeLang = (lang: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('lang', lang)
    if (brandParams) {
      params.set('brand', brandParams)
    }
    window.location.href = `${pathname}?${params.toString()}`
  }

  return (
    <header className="bg-primary py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-4 md:hidden">
          <div className="flex-shrink-0">
            <Image
              src={theme?.logo || "https://placehold.co/250x80/CCCCCC/555/PNG?text=GenericBrand"}
              alt="Logo GenericBrand"
              width={250}
              height={80}
              className="h-auto"
              priority
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              className={`px-3 py-1 rounded font-bold transition-colors ${
                langParams === 'en'
                  ? 'bg-white text-primary'
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={() => changeLang('en')}
            >
              EN
            </button>
            <span className="text-white">|</span>
            <button
              className={`px-3 py-1 rounded font-bold transition-colors ${
                langParams === 'id'
                  ? 'bg-white text-primary'
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={() => changeLang('id')}
            >
              ID
            </button>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-between">
          <div className="flex-shrink-0">
            <Image
              src={theme?.logo || "https://placehold.co/250x80/CCCCCC/555/PNG?text=GenericBrand"}
              alt="Logo GenericBrand"
              width={250}
              height={80}
              className="h-auto"
              priority
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              className={`px-3 py-1 rounded font-bold transition-colors ${
                langParams === 'en'
                  ? 'bg-white text-primary'
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={() => changeLang('en')}
            >
              EN
            </button>
            <span className="text-white">|</span>
            <button
              className={`px-3 py-1 rounded font-bold transition-colors ${
                langParams === 'id'
                  ? 'bg-white text-primary'
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={() => changeLang('id')}
            >
              ID
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}