'use client'
import { useState, useEffect } from 'react'

interface MousePosition {
  x: number
  y: number
}

export function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
    y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0,
  })

  useEffect(() => {
    let rafId: number
    let pendingX = 0
    let pendingY = 0

    const updateMousePosition = (e: MouseEvent) => {
      pendingX = e.clientX
      pendingY = e.clientY
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        setMousePosition({ x: pendingX, y: pendingY })
      })
    }

    window.addEventListener('mousemove', updateMousePosition)
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return mousePosition
}
