'use client'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { personalInfo, skills } from '@/lib/data'
import { slideInLeft, slideInRight } from '@/lib/animations'

export default function About() {
  const { ref, inView } = useScrollAnimation()

  const allSkills = [...skills.frontend, ...skills.backend].slice(0, 8)

  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">About Me</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black mb-6">
              Crafting <span className="gradient-text">Digital</span> Experiences
            </h2>
            <p className="text-[#94a3b8] leading-relaxed mb-4">
              {personalInfo.bio}
            </p>
            <p className="text-[#94a3b8] leading-relaxed mb-8">
              I believe in the power of clean code and thoughtful design. When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open source, or designing creative interfaces.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { value: '5+', label: 'Years Experience' },
                { value: '50+', label: 'Projects Done' },
                { value: '30+', label: 'Happy Clients' },
              ].map(item => (
                <div key={item.label} className="glass rounded-xl p-4 text-center">
                  <div className="text-2xl font-black gradient-text">{item.value}</div>
                  <div className="text-xs text-[#94a3b8] mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl" />
            <div className="relative glass rounded-3xl p-8">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary to-accent mb-6 flex items-center justify-center text-5xl font-black text-white">
                AC
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{personalInfo.name}</h3>
              <p className="text-[#94a3b8] text-center text-sm mb-6">{personalInfo.title}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {allSkills.map(skill => (
                  <span key={skill} className="px-3 py-1 glass rounded-full text-xs text-[#94a3b8] hover:text-white hover:border-primary transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
