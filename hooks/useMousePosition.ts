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
    let timeoutId: ReturnType<typeof setTimeout>
    
    const updateMousePosition = (e: MouseEvent) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }, 10)
    }

    window.addEventListener('mousemove', updateMousePosition)
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      clearTimeout(timeoutId)
    }
  }, [])

  return mousePosition
}
