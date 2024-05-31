import { useGLTF } from '@react-three/drei'
import fairyScene from '../assets/3d/fairyscene.glb'

const FairyScene = () => {
    const fairy = useGLTF(fairyScene);
  return (
    <mesh>
        <primitive object={fairy.scene} />
    </mesh>
  )
}

export default FairyScene