export interface Banner {
  image: string
  alt: string
}

export interface Content {
  heading: string
  description: string
  ctaText: string
}

export interface FooterContent {
  about: {
    title: string
    text: string
  }
  contact: {
    title: string
    email: string
    phone: string
    address: string
  }
  articles: {
    title: string
    links: string[]
  }
  copyright: string
}

export interface ThemeData {
  logo?: string
  primaryColor?: string
  banners?: Banner[]
  content?: Content
  blogPosts?: Array<{ title: string; summary: string }>
  footer?: FooterContent
}
