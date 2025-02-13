import { useControls } from "leva";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

const SphereScene = () => {
  const texture = useLoader(THREE.TextureLoader, "./img/2.jpg");
  const { position, rotation } = useControls("sphere", {
    position: {
      value: [0, 0, 0], // Initial position
      min: -10,
      max: 10,
      step: 0.01,
    },
    rotation: {
      value: [0, 0, 0], // Initial rotation in radians
      min: -Math.PI,
      max: Math.PI,
      step: 0.01,
    },
  });

  return (
    <>
      <ambientLight />
      <directionalLight position={[5, 5, 5]} />
      <mesh position={position} rotation={rotation}>
        {" "}
        {/* Use both position and rotation */}
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </>
  );
};

export default SphereScene;
