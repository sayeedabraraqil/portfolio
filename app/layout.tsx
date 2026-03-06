import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import LoadingScreen from '@/components/ui/LoadingScreen'
import CustomCursor from '@/components/ui/CustomCursor'
import ScrollProgress from '@/components/ui/ScrollProgress'
import Navbar from '@/components/ui/Navbar'
import SmoothScroll from '@/components/layout/SmoothScroll'

export const metadata: Metadata = {
  title: 'Alex Chen | Full Stack Developer',
  description: 'Portfolio of Alex Chen - Full Stack Developer specializing in React, Next.js, and AI-powered applications',
  keywords: ['developer', 'portfolio', 'react', 'nextjs', 'full stack'],
  openGraph: {
    title: 'Alex Chen | Full Stack Developer',
    description: 'Portfolio of Alex Chen - Full Stack Developer specializing in React, Next.js, and AI-powered applications',
    url: 'https://alexchen.dev',
    siteName: 'Alex Chen Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Chen | Full Stack Developer',
    description: 'Portfolio of Alex Chen - Full Stack Developer',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
        <LoadingScreen />
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: '#f0f0ff',
              backdropFilter: 'blur(20px)',
            },
          }}
        />
      </body>
    </html>
  )
}
