'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Download, ChevronDown, ArrowRight } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { personalInfo } from '@/lib/data'

const BackgroundScene = dynamic(() => import('@/components/three/BackgroundScene'), { ssr: false })

const roles = ['Full Stack Developer', 'Creative Engineer', 'UI/UX Designer', 'Problem Solver']

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole(prev => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <BackgroundScene />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm mb-6 animate-float"
          >
            <span className="w-2 h-2 bg-neon rounded-full animate-pulse" />
            <span className="text-[#94a3b8]">Available for work</span>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <p className="text-[#94a3b8] text-lg mb-2">Hi, I&apos;m</p>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-4 leading-none">
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>
          </motion.div>

          <motion.div variants={fadeInUp} className="h-16 mb-6">
            <motion.p
              key={currentRole}
              className="text-2xl sm:text-3xl text-[#94a3b8] font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {roles[currentRole]}
            </motion.p>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-[#94a3b8] text-lg max-w-xl mb-8 leading-relaxed"
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <motion.button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-6 py-3 bg-primary rounded-xl font-semibold text-white shadow-neon-primary hover:shadow-neon-cyan transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 glass rounded-xl font-semibold hover:border-primary transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
              <Download className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#94a3b8]"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs tracking-widest">SCROLL TO EXPLORE</span>
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  )
}
