import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

const Scenes = () => {
  const texture = useLoader(THREE.TextureLoader, "./img/1.png");
  return (
    <>
      <mesh>
        <planeGeometry args={[4, 4]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    </>
  );
};

export default Scenes;
