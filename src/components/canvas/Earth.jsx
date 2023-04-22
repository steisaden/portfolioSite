import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  // const earth = useGLTF("./planet/scene.gltf");
  const windy = useGLTF('./windy/scene.gltf')

  return (
       
      <primitive object={windy.scene} scale={2} position-y={0} rotation-y={0} />
    
  );
};

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Add event listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)')
    
    //set the initial value for the isMobile state variable
    setIsMobile(mediaQuery.matches)

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    } 

    // Add the callback function aa a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange)

    // Remove the listener when the component is unmounted 
    return () => { mediaQuery.removeEventListener('change', handleMediaQueryChange)}
  }, [])
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {isMobile ? null : <Earth />}

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;