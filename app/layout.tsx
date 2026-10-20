import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Lunails | Luxury Nail Home Studio in Union City, NJ',
  description:
    'Lunails is a cozy, premium nail home studio in Union City, NJ offering manicures, Softgel, PolyGel, Dual System and custom nail art with personalized attention. Book online today.',
  keywords: [
    'nail salon Union City NJ',
    'Softgel nails',
    'PolyGel nails',
    'nail art',
    'manicure',
    'home nail studio',
    'Lunails',
  ],
  openGraph: {
    title: 'Lunails | Luxury Nail Home Studio',
    description:
      'Premium nails with personalized attention in a cozy home studio in Union City, NJ.',
    images: ['/images/hero.png'],
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#fbf7f2',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} scroll-smooth`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
