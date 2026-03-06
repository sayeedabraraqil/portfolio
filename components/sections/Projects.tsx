'use client'
import { useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { projects, Project } from '@/lib/data'
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations'
import { Github, ExternalLink, X } from 'lucide-react'

const categories = ['All', 'Web', 'Mobile', 'AI/ML', 'Open Source']

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.div
      variants={scaleIn}
      className="glass rounded-2xl overflow-hidden cursor-pointer group"
      whileHover={{ y: -8, boxShadow: `0 20px 60px ${project.color}30` }}
      onClick={onClick}
    >
      <div
        className="h-48 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${project.color}20, ${project.color}05)` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl font-black text-white"
            style={{ background: project.color }}
          >
            {project.title[0]}
          </div>
        </div>
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 text-xs rounded-full glass" style={{ color: project.color }}>
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-[#94a3b8] text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map(t => (
            <span key={t} className="px-2 py-1 text-xs glass rounded-full text-[#94a3b8]">{t}</span>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href={project.github} className="text-[#94a3b8] hover:text-white transition-colors" onClick={e => e.stopPropagation()}>
            <Github className="w-4 h-4" />
          </a>
          <a href={project.live} className="text-[#94a3b8] hover:text-white transition-colors" onClick={e => e.stopPropagation()}>
            <ExternalLink className="w-4 h-4" />
          </a>
          <span className="ml-auto text-xs text-primary">View Details →</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const { ref, inView } = useScrollAnimation()

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="py-20 sm:py-32">
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
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Portfolio</span>
              <div className="w-8 h-px bg-primary" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-[#94a3b8] max-w-xl mx-auto">A collection of projects that showcase my skills and passion for building great products.</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-neon-primary'
                    : 'glass text-[#94a3b8] hover:text-white hover:border-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <LayoutGroup>
            <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" layout>
              <AnimatePresence mode="popLayout">
                {filtered.map(project => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className={project.featured ? 'md:col-span-2 lg:col-span-2' : ''}
                  >
                    <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </LayoutGroup>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[9996] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />
            <motion.div
              className="relative w-full max-w-2xl glass rounded-3xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="h-48" style={{ background: `linear-gradient(135deg, ${selectedProject.color}30, ${selectedProject.color}10)` }}>
                <div className="absolute top-4 right-4">
                  <button onClick={() => setSelectedProject(null)} className="w-8 h-8 glass rounded-full flex items-center justify-center">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-black mb-2">{selectedProject.title}</h2>
                <p className="text-[#94a3b8] mb-4">{selectedProject.longDescription}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map(t => (
                    <span key={t} className="px-3 py-1 glass rounded-full text-sm text-primary">{t}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={selectedProject.github} className="flex items-center gap-2 px-4 py-2 glass rounded-xl text-sm hover:border-primary transition-colors">
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                  <a href={selectedProject.live} className="flex items-center gap-2 px-4 py-2 bg-primary rounded-xl text-sm hover:bg-secondary transition-colors">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
