import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Contact from '@/components/sections/Contact'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.08)] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-2xl font-black gradient-text">AC</span>
            <p className="text-[#94a3b8] text-sm mt-1">Built with Next.js & ❤️</p>
          </div>
          <nav className="flex gap-6">
            {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-[#94a3b8] hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="flex gap-4">
            {[
              { icon: <Github className="w-4 h-4" />, href: 'https://github.com', label: 'GitHub' },
              { icon: <Linkedin className="w-4 h-4" />, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: <Twitter className="w-4 h-4" />, href: 'https://twitter.com', label: 'Twitter' },
              { icon: <Mail className="w-4 h-4" />, href: 'mailto:alex@example.com', label: 'Email' },
            ].map(item => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#94a3b8] hover:text-white transition-colors"
                aria-label={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="text-center mt-8 text-[#94a3b8] text-sm">
          © {new Date().getFullYear()} Alex Chen. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
