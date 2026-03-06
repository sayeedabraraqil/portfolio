'use client'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'

export function useMagneticEffect<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const deltaX = e.clientX - centerX
      const deltaY = e.clientY - centerY
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
      const maxDistance = 100

      if (distance < maxDistance) {
        const force = (maxDistance - distance) / maxDistance
        gsap.to(element, {
          x: deltaX * force * 0.4,
          y: deltaY * force * 0.4,
          duration: 0.3,
          ease: 'power2.out',
        })
      }
    }

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
      })
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return ref
}
