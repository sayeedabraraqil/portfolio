'use client'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { experience } from '@/lib/data'
import { staggerContainer, fadeInUp, slideInLeft, slideInRight } from '@/lib/animations'
import { Briefcase, GraduationCap } from 'lucide-react'

export default function Experience() {
  const { ref, inView } = useScrollAnimation()

  return (
    <section id="experience" className="py-20 sm:py-32">
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
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Journey</span>
              <div className="w-8 h-px bg-primary" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Center line */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 top-0 w-px bg-gradient-to-b from-primary to-accent hidden lg:block"
              initial={{ height: 0 }}
              animate={inView ? { height: '100%' } : { height: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />

            <div className="space-y-12">
              {experience.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  variants={i % 2 === 0 ? slideInLeft : slideInRight}
                  className={`relative flex items-center gap-8 ${
                    i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`w-full lg:w-5/12 ${i % 2 === 0 ? 'lg:text-right' : ''}`}>
                    <div className="glass rounded-2xl p-6 hover:border-primary/50 transition-all group">
                      <div className="flex items-center gap-2 mb-1" style={{ justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                        {exp.type === 'work' ? (
                          <Briefcase className="w-4 h-4 text-primary" />
                        ) : (
                          <GraduationCap className="w-4 h-4 text-accent" />
                        )}
                        <span className="text-xs text-[#94a3b8]">{exp.period}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-1">{exp.role}</h3>
                      <p className="text-primary text-sm font-semibold mb-2">{exp.company}</p>
                      <p className="text-[#94a3b8] text-sm mb-4">{exp.description}</p>
                      <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? 'lg:justify-end' : ''}`}>
                        {exp.tech.map(t => (
                          <span key={t} className="px-2 py-1 text-xs glass rounded-full text-[#94a3b8]">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <motion.div
                      className="w-4 h-4 rounded-full bg-primary border-2 border-[#0a0a0f] shadow-neon-primary z-10"
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 0.5 + i * 0.2 }}
                    />
                  </div>

                  <div className="hidden lg:block w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
