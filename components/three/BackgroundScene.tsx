'use client'
import { Canvas } from '@react-three/fiber'
import ParticleField from './ParticleField'
import FloatingGeometry from './FloatingGeometry'

export default function BackgroundScene() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 2]}
        frameloop="always"
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#6366f1" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#06b6d4" />
        <ParticleField />
        <FloatingGeometry />
      </Canvas>
    </div>
  )
}
