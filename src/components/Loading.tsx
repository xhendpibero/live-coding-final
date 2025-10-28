'use client'

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-primary mb-4"></div>
      <p className="text-gray-600">Loading theme data...</p>
    </div>
  )
}