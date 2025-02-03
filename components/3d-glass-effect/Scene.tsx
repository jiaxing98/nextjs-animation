import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Model from './Model'

export default function Scene() {
  return (
    <Canvas>
      <Model />
      <directionalLight intensity={2} position={[0, 2, 3]} />
      <Environment preset="city" />
    </Canvas>
  )
}
