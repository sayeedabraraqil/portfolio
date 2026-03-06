'use client'
import { useScroll, useSpring, motion } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[9999] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #6366f1, #06b6d4, #8b5cf6)',
      }}
    />
  )
}
