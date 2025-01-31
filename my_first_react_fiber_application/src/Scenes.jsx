import * as THREE from "three";
import { useFrame, extend, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/Addons.js";
// import {OrbitControls} from "@react-three/drei"

extend({ OrbitControls: OrbitControls });

const Scenes = () => {
  const cubeRef = useRef();
  const planeRef = useRef();
  const { gl, camera } = useThree();
  // camera.position.x = 5

  useFrame((state, delta) => {
    // cubeRef.current.rotation.y += delta;
    // planeRef.current.rotation.y += delta;
    state.camera.position.x = Math.sin(state.clock.elapsedTime);
  });

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      {/* <OrbitControls /> */}
      {/* Plane */}
      <mesh ref={planeRef} position-x={-2}>
        <planeGeometry args={[2, 2]} />
        <meshBasicMaterial color="green" side={THREE.DoubleSide} />
      </mesh>

      {/* Cube */}
      <mesh ref={cubeRef} position-x={2} rotation-y={Math.PI * 0.25}>
        <boxGeometry />
        <meshBasicMaterial color="green" />
      </mesh>
    </>
  );
};

export default Scenes;
