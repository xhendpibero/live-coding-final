'use client'

import Header from '@/components/Header'
import Banner from '@/components/Banner'
import MainContent from '@/components/MainContent'
import Footer from '@/components/Footer'
import { useTheme } from '@/lib/ThemeContext'
import Loading from '@/components/Loading'

export default function Home() {
  const { isLoading } = useTheme()

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Banner />
      <MainContent />
      <Footer />
    </div>
  )
}