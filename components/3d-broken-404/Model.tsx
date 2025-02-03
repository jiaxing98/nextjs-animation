import { useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import Font from './Font'
import Mesh from './Mesh'

export default function Model() {
  const { viewport } = useThree()
  const { nodes } = useGLTF('/media/broken-404/shards.glb')

  return (
    <group scale={viewport.width / 1.5}>
      {nodes.Scene.children.map((mesh, i) => {
        return <Mesh key={i} data={mesh} />
      })}
      <Font />
    </group>
  )
}
