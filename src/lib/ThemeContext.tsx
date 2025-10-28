'use client'

import { createContext, useContext, ReactNode } from 'react'
import { useSearchParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { fetchThemeData } from './api'
import type { ThemeData } from './types'

interface ThemeContextType {
  theme: ThemeData | null
  isLoading: boolean
  error: Error | null
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams()
  const brandParams = searchParams.get('brand') || ''
  const langParams = searchParams.get('lang') || 'id'

  const { data: theme, isLoading, error } = useQuery({
    queryKey: ['theme', brandParams, langParams],
    queryFn: () => fetchThemeData(brandParams, langParams),
    staleTime: 1000 * 60 * 5,
    retry: 1,
    refetchOnWindowFocus: false,
  })

  const value = {
    theme: theme || null,
    isLoading,
    error: error instanceof Error ? error : error ? new Error('An error occurred') : null
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}