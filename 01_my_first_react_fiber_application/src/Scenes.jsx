import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Custom from "./Custom";

const Scenes = () => {
  return (
    <>
      <OrbitControls />

      <Custom />

      <mesh>
        {/* <axesHelper args={[3]} />
        <gridHelper args={[10, 10, "red", "gray"]} /> */}
        <boxGeometry />
        <meshBasicMaterial color="green" side={THREE.DoubleSide} />
      </mesh>
    </>
  );
};

export default Scenes;

// creating custom geometry
// 1> create a Float32Array
// 2> put a value in the array
// 3> create a BufferAttribute using the Float32Array
// 4> add a BufferAttribute to the attributes of BufferGeometry
