import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import nightScene from '../assets/3d/nightScene.glb'
import { useFrame } from '@react-three/fiber'

const NightScene = ({ isRotating }) => {
    const night = useGLTF(nightScene);
    const nightRef = useRef();
  
    // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
    // It ensures smooth animations by making the rotation frame rate-independent.
    // 'delta' represents the time in seconds since the last frame.
    useFrame((_, delta) => {
     
        nightRef.current.rotation.y += 0.15 * delta; // Adjust the rotation speed as needed
    
    });
  
    return (
      <mesh ref={nightRef}>
        // use the primitive element when you want to directly embed a complex 3D
        model or scene
        <primitive object={night.scene} />
      </mesh>
    );
  }

export default NightScene