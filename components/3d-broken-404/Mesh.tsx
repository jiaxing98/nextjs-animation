import { Float, MeshTransmissionMaterial } from '@react-three/drei'
import { useControls } from 'leva'

export default function Mesh({ data }: any) {
  const materialProps = useControls({
    thickness: { value: 0.275, min: 0, max: 1, step: 0.01 },
    ior: { value: 1.8, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.75, min: 0, max: 1 },
    resolution: { value: 300 },
  })

  return (
    <Float>
      <mesh {...data}>
        <MeshTransmissionMaterial
          roughness={0}
          transmission={0.99}
          {...materialProps}
        />
      </mesh>
    </Float>
  )
}
