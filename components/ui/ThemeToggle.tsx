'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'light') {
      setIsDark(false)
      document.documentElement.classList.add('light')
    }
  }, [])

  const toggle = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    if (!newTheme) {
      document.documentElement.classList.add('light')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.remove('light')
      localStorage.setItem('theme', 'dark')
    }
  }

  return (
    <button
      onClick={toggle}
      className="relative w-10 h-10 rounded-full glass flex items-center justify-center hover:border-primary transition-colors"
      aria-label="Toggle theme"
    >
      <motion.div
        animate={{ rotate: isDark ? 0 : 180, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-[#94a3b8]" />
        ) : (
          <Sun className="w-4 h-4 text-[#94a3b8]" />
        )}
      </motion.div>
    </button>
  )
}
