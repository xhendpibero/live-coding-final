'use client'

import Link from 'next/link'
import { useTheme } from '@/lib/ThemeContext'

const DEFAULT_BLOG_POSTS = [
  {
    title: 'Strategi Bisnis di Era Digital',
    summary: 'Bagaimana bisnis bisa beradaptasi dan berkembang di tengah transformasi digital global.',
  },
  {
    title: 'Optimasi Operasional dengan Teknologi',
    summary: 'Langkah-langkah praktis untuk meningkatkan efisiensi dan produktivitas bisnis Anda.',
  },
  {
    title: 'Studi Kasus: UKM yang Sukses Berinovasi',
    summary: 'Kisah nyata dari pelaku usaha yang berhasil memanfaatkan teknologi untuk pertumbuhan.',
  },
]

export default function MainContent() {
  const { theme, isLoading } = useTheme()

  if (isLoading) {
    return <div className="text-center py-12">Loading...</div>
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-6">
          {theme?.content?.heading || 'Selamat datang di GenericBrand'}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {theme?.content?.description ||
            'Kami membantu bisnis tumbuh dengan pendekatan modern, efisien, dan berbasis data.'}
        </p>
        <Link
          href="/about"
          className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
        >
          {theme?.content?.ctaText || 'Lihat Solusi Kami'}
        </Link>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(theme?.blogPosts || DEFAULT_BLOG_POSTS).map((post, index) => (
          <article
            key={index}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold text-primary mb-4">
              {post.title}
            </h2>
            <p className="text-gray-600">{post.summary}</p>
          </article>
        ))}
      </section>
    </main>
  )
}