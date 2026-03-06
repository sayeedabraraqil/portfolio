'use client'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface ShapeProps {
  position: [number, number, number]
  rotationSpeed: [number, number, number]
  color: string
  geometry: 'icosahedron' | 'torusKnot' | 'octahedron'
  size: number
  offset: number
}

function Shape({ position, rotationSpeed, color, geometry, size, offset }: ShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed[0]
      meshRef.current.rotation.y += rotationSpeed[1]
      meshRef.current.rotation.z += rotationSpeed[2]
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + offset) * 0.3
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      {geometry === 'icosahedron' && <icosahedronGeometry args={[size, 0]} />}
      {geometry === 'torusKnot' && <torusKnotGeometry args={[size * 0.5, size * 0.15, 64, 8]} />}
      {geometry === 'octahedron' && <octahedronGeometry args={[size, 0]} />}
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        wireframe
        transparent
        opacity={0.7}
      />
    </mesh>
  )
}

export default function FloatingGeometry() {
  const shapes: ShapeProps[] = [
    { position: [-2.5, 0, -2], rotationSpeed: [0.005, 0.01, 0], color: '#6366f1', geometry: 'icosahedron', size: 0.6, offset: 0 },
    { position: [2.5, 0.5, -1.5], rotationSpeed: [0.008, 0.005, 0.003], color: '#8b5cf6', geometry: 'torusKnot', size: 0.4, offset: 1 },
    { position: [0, -1, -3], rotationSpeed: [0.003, 0.008, 0.005], color: '#06b6d4', geometry: 'octahedron', size: 0.5, offset: 2 },
  ]

  return (
    <>
      {shapes.map((shape, i) => (
        <Shape key={i} {...shape} />
      ))}
    </>
  )
}
