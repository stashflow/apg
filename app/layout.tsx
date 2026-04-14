import type { Metadata } from 'next'
import { Space_Grotesk, Space_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-space-mono',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'meade study plan.',
  description: 'exam-ready notes for AP Environmental Science, APUSH, AP Lang, and AP CSP — built to guarantee a 5.',
  generator: 'meade study plan.',
}

export const viewport = {
  themeColor: '#050d1a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${spaceMono.variable} bg-navy`}>
      <body className="font-sans antialiased bg-navy text-white min-h-screen">
        {children}
      </body>
    </html>
  )
}
