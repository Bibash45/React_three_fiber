import { OrbitControls } from "@react-three/drei";
import Particles from "./Particles";

const Scenes = () => {
  return (
    <>
      <OrbitControls />
      {/* <mesh>
        <planeGeometry />
        <meshBasicMaterial />
      </mesh> */}

      <Particles />
    </>
  );
};

export default Scenes;
