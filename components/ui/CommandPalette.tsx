'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Terminal, Github, Mail, Download, User, Code, BarChart3, Briefcase, MessageSquare } from 'lucide-react'

interface Command {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  action: () => void
  shortcut?: string
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const commands: Command[] = [
    { id: 'hero', title: 'Go to Home', description: 'Navigate to the hero section', icon: <User className="w-4 h-4" />, action: () => scrollTo('hero') },
    { id: 'about', title: 'About Me', description: 'Learn more about me', icon: <User className="w-4 h-4" />, action: () => scrollTo('about') },
    { id: 'projects', title: 'View Projects', description: 'Browse my portfolio projects', icon: <Code className="w-4 h-4" />, action: () => scrollTo('projects') },
    { id: 'skills', title: 'My Skills', description: 'See my technical skills', icon: <BarChart3 className="w-4 h-4" />, action: () => scrollTo('skills') },
    { id: 'experience', title: 'Experience', description: 'View my work experience', icon: <Briefcase className="w-4 h-4" />, action: () => scrollTo('experience') },
    { id: 'contact', title: 'Contact Me', description: 'Get in touch', icon: <MessageSquare className="w-4 h-4" />, action: () => scrollTo('contact') },
    { id: 'github', title: 'Open GitHub', description: 'Visit my GitHub profile', icon: <Github className="w-4 h-4" />, action: () => window.open('https://github.com', '_blank'), shortcut: '⌘G' },
    { id: 'email', title: 'Send Email', description: 'Send me an email', icon: <Mail className="w-4 h-4" />, action: () => window.open('mailto:alex@example.com'), shortcut: '⌘E' },
    { id: 'resume', title: 'Download Resume', description: 'Download my resume PDF', icon: <Download className="w-4 h-4" />, action: () => window.open('/resume.pdf', '_blank'), shortcut: '⌘R' },
  ]

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  const filteredCommands = commands.filter(cmd =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.description.toLowerCase().includes(query.toLowerCase())
  )

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(prev => !prev)
      }
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
      setQuery('')
      setSelectedIndex(0)
    }
  }, [isOpen])

  const handleKeyNav = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex(prev => Math.min(prev + 1, filteredCommands.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(prev => Math.max(prev - 1, 0))
    } else if (e.key === 'Enter' && filteredCommands[selectedIndex]) {
      filteredCommands[selectedIndex].action()
      setIsOpen(false)
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-1.5 glass rounded-lg text-[#94a3b8] text-sm hover:text-white transition-colors"
      >
        <Terminal className="w-3.5 h-3.5" />
        <span>⌘K</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[9997] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
            <motion.div
              className="relative w-full max-w-xl glass rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.95, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-3 p-4 border-b border-[rgba(255,255,255,0.08)]">
                <Search className="w-5 h-5 text-[#94a3b8]" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type a command or search..."
                  className="flex-1 bg-transparent text-white placeholder-[#94a3b8] outline-none text-sm"
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setSelectedIndex(0) }}
                  onKeyDown={handleKeyNav}
                />
                <kbd className="px-2 py-1 text-xs bg-[rgba(255,255,255,0.05)] rounded text-[#94a3b8]">ESC</kbd>
              </div>
              <div className="max-h-80 overflow-y-auto py-2">
                {filteredCommands.map((cmd, i) => (
                  <button
                    key={cmd.id}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                      i === selectedIndex ? 'bg-[rgba(99,102,241,0.15)] text-white' : 'text-[#94a3b8] hover:bg-[rgba(255,255,255,0.05)]'
                    }`}
                    onClick={() => { cmd.action(); setIsOpen(false) }}
                  >
                    <span className="text-primary">{cmd.icon}</span>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-white">{cmd.title}</div>
                      <div className="text-xs text-[#94a3b8]">{cmd.description}</div>
                    </div>
                    {cmd.shortcut && (
                      <kbd className="px-2 py-1 text-xs bg-[rgba(255,255,255,0.05)] rounded text-[#94a3b8]">{cmd.shortcut}</kbd>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
