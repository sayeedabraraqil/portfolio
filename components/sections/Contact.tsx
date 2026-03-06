'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { personalInfo, socialLinks } from '@/lib/data'
import { staggerContainer, fadeInUp, slideInLeft, slideInRight } from '@/lib/animations'
import { Mail, MapPin, Github, Linkedin, Twitter, Send, Loader2, CheckCircle2 } from 'lucide-react'
import toast from 'react-hot-toast'

const socialIcons: Record<string, React.ReactNode> = {
  github: <Github className="w-5 h-5" />,
  linkedin: <Linkedin className="w-5 h-5" />,
  twitter: <Twitter className="w-5 h-5" />,
  mail: <Mail className="w-5 h-5" />,
}

export default function Contact() {
  const { ref, inView } = useScrollAnimation()
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formState.name) newErrors.name = 'Name is required'
    if (!formState.email) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formState.email)) newErrors.email = 'Invalid email format'
    if (!formState.message) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setStatus('loading')
    await new Promise(r => setTimeout(r, 2000))
    setStatus('success')
    toast.success('Message sent successfully!')
    setTimeout(() => {
      setStatus('idle')
      setFormState({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 sm:py-32">
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
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Contact</span>
              <div className="w-8 h-px bg-primary" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Let&apos;s Work <span className="gradient-text">Together</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left */}
            <motion.div variants={slideInLeft}>
              <p className="text-[#94a3b8] mb-8 leading-relaxed">
                I&apos;m currently open to new opportunities. Whether you have a project in mind or just want to connect, feel free to reach out.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-[#94a3b8]">
                  <div className="w-10 h-10 glass rounded-full flex items-center justify-center text-accent">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-3 text-[#94a3b8]">
                  <div className="w-10 h-10 glass rounded-full flex items-center justify-center text-accent">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>{personalInfo.location}</span>
                </div>
              </div>
              <div className="flex gap-3">
                {socialLinks.map(link => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass rounded-full flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-primary transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={link.name}
                  >
                    {socialIcons[link.icon]}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div variants={slideInRight}>
              <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 space-y-6">
                {[
                  { name: 'name', label: 'Name', type: 'text' },
                  { name: 'email', label: 'Email', type: 'email' },
                  { name: 'subject', label: 'Subject', type: 'text' },
                ].map(field => (
                  <div key={field.name} className="relative">
                    <input
                      type={field.type}
                      value={formState[field.name as keyof typeof formState]}
                      onChange={e => {
                        setFormState(prev => ({ ...prev, [field.name]: e.target.value }))
                        setErrors(prev => ({ ...prev, [field.name]: '' }))
                      }}
                      placeholder={field.label}
                      className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-[#94a3b8] outline-none transition-all focus:border-primary ${
                        errors[field.name] ? 'border-red-500/50' : 'border-white/10'
                      }`}
                    />
                    {errors[field.name] && <p className="text-red-400 text-xs mt-1">{errors[field.name]}</p>}
                  </div>
                ))}
                <div className="relative">
                  <textarea
                    value={formState.message}
                    onChange={e => {
                      setFormState(prev => ({ ...prev, message: e.target.value }))
                      setErrors(prev => ({ ...prev, message: '' }))
                    }}
                    placeholder="Message"
                    rows={4}
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-[#94a3b8] outline-none transition-all focus:border-primary resize-none ${
                      errors.message ? 'border-red-500/50' : 'border-white/10'
                    }`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>
                <motion.button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-xl font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-neon-primary disabled:opacity-70"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {status === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
                  {status === 'success' && <CheckCircle2 className="w-4 h-4" />}
                  {status === 'idle' && <Send className="w-4 h-4" />}
                  {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
