import { ThemeData } from './types'

const THEME_ENDPOINTS = {
  a: "https://api.jsonbin.io/v3/qs/69006a0c43b1c97be9869b18",
  b: "https://api.jsonbin.io/v3/qs/69006a7cd0ea881f40c194f2",
  default: "https://api.jsonbin.io/v3/qs/69009be843b1c97be986f129"
} as const

export async function fetchThemeData(brand: string = '', lang: string = 'id'): Promise<ThemeData> {
  console.log('Fetching theme data:', { brand, lang })
  
  const urlTheme = THEME_ENDPOINTS[brand as keyof typeof THEME_ENDPOINTS] || THEME_ENDPOINTS.default
  console.log('Using endpoint:', urlTheme)

  try {
    const response = await fetch(urlTheme, {
      headers: {
        'Content-Type': 'application/json',
        'X-Access-Key': '$2a$10$Zr0jxB5gOUoNjsJ9QBUNe.',
        'X-Bin-Meta': 'false'
      },
      cache: 'no-store'
    })

    if (!response.ok) {
      console.error('API response not ok:', response.status, response.statusText)
      throw new Error(`Failed to fetch theme: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    console.log('Raw API response:', data)

    const themeData: ThemeData = {
      logo: data.record.logo,
      primaryColor: data.record.primaryColor,
      banners: data.record.banners,
      content: data.record.content[lang],
      blogPosts: data.record.blogPosts[lang],
      footer: data.record.footer[lang],
    }

    console.log('Processed theme data:', themeData)
    
    if (themeData.primaryColor) {
      document.documentElement.style.setProperty('--primary-color', themeData.primaryColor)
    }

    return themeData
  } catch (error) {
    console.error('Error in fetchThemeData:', error)
    throw error
  }
}