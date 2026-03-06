'use client'
import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'
import { useMousePosition } from '@/hooks/useMousePosition'

export default function CustomCursor() {
  const { x, y } = useMousePosition()
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  const springConfig = { stiffness: 150, damping: 15 }
  const cursorX = useSpring(x, springConfig)
  const cursorY = useSpring(y, springConfig)

  useEffect(() => {
    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [data-cursor-hover]')) {
        setIsHovering(true)
      }
    }

    const handleHoverEnd = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [data-cursor-hover]')) {
        setIsHovering(false)
      }
    }

    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseover', handleHoverStart)
    document.addEventListener('mouseout', handleHoverEnd)

    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseover', handleHoverStart)
      document.removeEventListener('mouseout', handleHoverEnd)
    }
  }, [])

  return (
    <>
      {/* Cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        style={{
          x: x - 4,
          y: y - 4,
          width: 8,
          height: 8,
          backgroundColor: '#06b6d4',
          borderRadius: '50%',
          opacity: isHovering ? 0 : 1,
          scale: isClicking ? 0.5 : 1,
        }}
        animate={{ scale: isClicking ? 0.5 : 1 }}
      />
      {/* Cursor ring */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
          backgroundColor: isHovering ? 'rgba(6, 182, 212, 0.15)' : 'transparent',
          border: `2px solid ${isHovering ? '#06b6d4' : 'rgba(255,255,255,0.3)'}`,
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block"
      />
    </>
  )
}
