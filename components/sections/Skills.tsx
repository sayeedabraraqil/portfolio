'use client'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { skills } from '@/lib/data'
import { staggerContainer, fadeInUp, scaleIn } from '@/lib/animations'
import { Code2, Server, Wrench, Lightbulb } from 'lucide-react'

const skillCategories = [
  { title: 'Frontend', icon: <Code2 className="w-6 h-6" />, items: skills.frontend, color: '#6366f1' },
  { title: 'Backend', icon: <Server className="w-6 h-6" />, items: skills.backend, color: '#8b5cf6' },
  { title: 'Tools', icon: <Wrench className="w-6 h-6" />, items: skills.tools, color: '#06b6d4' },
  { title: 'Other', icon: <Lightbulb className="w-6 h-6" />, items: skills.other, color: '#10b981' },
]

export default function Skills() {
  const { ref, inView } = useScrollAnimation()

  return (
    <section id="skills" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Skills</span>
              <div className="w-8 h-px bg-primary" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Tech <span className="gradient-text">Stack</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat) => (
              <motion.div
                key={cat.title}
                variants={scaleIn}
                className="glass rounded-2xl p-6 group hover:border-primary/50 transition-all duration-300"
                whileHover={{ y: -8, boxShadow: `0 20px 40px ${cat.color}20` }}
              >
                <div className="flex items-center gap-3 mb-4" style={{ color: cat.color }}>
                  {cat.icon}
                  <h3 className="font-bold">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map(skill => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs rounded-lg bg-white/5 text-[#94a3b8] hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
