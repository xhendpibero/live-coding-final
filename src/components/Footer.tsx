'use client'

import { useTheme } from '@/lib/ThemeContext'

const DEFAULT_FOOTER_LINKS = [
  'Tren Digitalisasi 2025',
  'Tips Memilih Platform Bisnis',
  'Manfaat Data untuk Keputusan Strategis',
  'Kolaborasi Tim di Era Remote Work',
]

export default function Footer() {
  const { theme } = useTheme()

  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-4">
              {theme?.footer?.about?.title || 'Tentang Kami'}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {theme?.footer?.about?.text ||
                'GenericBrand adalah mitra strategis untuk bisnis yang ingin berkembang di era digital. Kami menyediakan solusi berbasis teknologi, data, dan pengalaman industri untuk membantu Anda mencapai tujuan bisnis secara berkelanjutan.'}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-4">
              {theme?.footer?.contact?.title || 'Kontak'}
            </h3>
            <div className="text-gray-300 space-y-2">
              <p>Email: {theme?.footer?.contact?.email || 'info@genericbrand.co'}</p>
              <p>
                Telepon: {theme?.footer?.contact?.phone || '+62 811 1234 5678'}
              </p>
              <p>
                Alamat:{' '}
                {theme?.footer?.contact?.address ||
                  'Jl. Bisnis No. 1, Jakarta, Indonesia'}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-4">
              {theme?.footer?.articles?.title || 'Artikel Terbaru'}
            </h3>
            <ul className="space-y-2">
              {(theme?.footer?.articles?.links || DEFAULT_FOOTER_LINKS).map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-300 text-sm">
          <p>
            {theme?.footer?.copyright ||
              '© 2025 GenericBrand. Semua hak dilindungi.'}
          </p>
        </div>
      </div>
    </footer>
  )
}