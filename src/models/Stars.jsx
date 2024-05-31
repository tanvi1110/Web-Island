import { useGLTF } from '@react-three/drei'
import starsScene from '../assets/3d/stars.glb'

const Stars = () => {
    const stars = useGLTF(starsScene);
  return (
    <mesh>
        <primitive object={stars.scene} />
    </mesh>
  )
}

export default Stars