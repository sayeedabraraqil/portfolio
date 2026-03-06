'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import CommandPalette from './CommandPalette'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.5 }
    )
    navLinks.forEach(link => {
      const el = document.getElementById(link.href.slice(1))
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (href: string) => {
    const el = document.getElementById(href.slice(1))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setIsMobileOpen(false)
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'py-5'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <motion.a
          href="#"
          className="text-xl font-bold gradient-text"
          whileHover={{ scale: 1.05 }}
        >
          AC
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className={`text-sm relative group transition-colors ${
                activeSection === link.href.slice(1) ? 'text-white' : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${
                activeSection === link.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <CommandPalette />
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 glass rounded-full flex items-center justify-center hover:border-primary transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-[#0a0a0f]/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-2xl font-bold text-[#94a3b8] hover:text-white transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {link.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
