import { OrbitControls } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import Model from "./model";
import { useFrame, useLoader } from "@react-three/fiber";
import Bike  from "./Bike";

const Scenes = () => {
  const cubeRef = useRef();
  const texture = useLoader(THREE.TextureLoader, "./model/load.webp");


  useFrame((_, delta) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.y -= delta * 0.1;
      cubeRef.current.rotation.x -= delta * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} /> {/* Adjusted intensity */}
      <directionalLight />
      <pointLight position={[10, 10, 10]} intensity={1} /> <OrbitControls />
      <Suspense
        fallback={
          <mesh ref={cubeRef}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
          </mesh>
        }
      >
        {true ? <Model /> : <Bike scale={0.85} position={-0.5,0.75,0}  />}
      </Suspense>
    </>
  );
};

export default Scenes;

// 12:10
