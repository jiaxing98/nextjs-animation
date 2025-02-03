import { Text } from '@react-three/drei'

export default function Font() {
  const src = '/fonts/PPNeueMontreal-Bold.otf'
  const textOption = {
    color: 'white',
    anchorX: 'center' as const,
    anchorY: 'middle' as const,
  }

  return (
    <group>
      <Text font={src} position={[0, 0, -0.1]} fontSize={0.4} {...textOption}>
        404
      </Text>

      <Text
        font={src}
        position={[0, -0.15, -0.1]}
        fontSize={0.03}
        {...textOption}
      >
        The link is broken
      </Text>
    </group>
  )
}
