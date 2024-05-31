import { Canvas } from "@react-three/fiber"
import { Suspense, useState } from "react"
import Loader from "../components/Loader"

import Sky from "../models/Sky";
import NightScene from "../models/NightScene";
import Bird from "../models/Bird";
import Stars from "../models/Stars";
import FairyScene from "../models/FairyScene";
import Chestnut from "../models/Chestnut";
import Island from "../models/Island";
import Volcano from "../models/Volcano";
import HomeInfo from "../components/HomeInfo";

const Home = () => {
  const [currentStage, setCurrentStage] = useState(1)
  const [isRotating, setIsRotating] = useState(false)
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -35,-125]
    // let screenPosition = [0, -3,-4.5]
    // let screenPosition = [0, -3,-45]
    let rotation = [0, 0, 0]
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9]
    } else {
      screenScale = [1, 1, 1]
    }
    return [screenScale, screenPosition, rotation]
  };

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  return (

    <section className="w-full h-screen relative ">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage}/> }
      </div>
      <Canvas className={`w-full h-screen bg-transparent  ${isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}>
          {/* <div> POPUP </div> */}
          
        <Suspense fallback={<Loader />}>

          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          {/* <pointLight /> */}
          {/* <spotLight /> */}
          <hemisphereLight skyColor='#ffff00' groundColor="#ffff00" intensity={1} />
          {/* <Island 
          position = {islandPosition}
          scale = {islandScale}
          rotation={[0.1, 4.7077, 0]}
          isRotating = {isRotating}
          setIsRotating = {setIsRotating} 
          setCurrentStage = {setCurrentStage}
          /> */}
          {/* < Chestnut
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
          /> */}
          <Volcano 
             rotation={islandRotation}
             isRotating={isRotating}
             setIsRotating={setIsRotating}
             setCurrentStage={setCurrentStage}
             position={islandPosition}
          />
          <NightScene isRotating={isRotating}/> 
          <Sky isRotating={isRotating}/> 
          {/* <Stars /> */}
          {/* <FairyScene isRotating={isRotating} /> */}
          <Bird />
        </Suspense>
      </Canvas>

    </section>
  )
}

export default Home