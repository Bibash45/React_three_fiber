import { OrbitControls } from "@react-three/drei";
import { useControls, button } from "leva";

const Scenes = () => {
  const { position, color, wireframe, click, scale } = useControls({
    position: {
      value: [0, 0, 0],
      min: -10,
      max: 10,
      step: 0.01,
    },
    color: {
      value: "white",
      wireframe: false,
    },
    wireframe: {
      value: false,
    },
    click: button(() => console.log("click")),
    scale: { options: [1, 2, 3] },
  });

  const sphereTweak = useControls("sphere", {
    xRotation: 0,
  });
  return (
    <>
      <OrbitControls />
      <directionalLight position={[0, 2, 4]} intensity={1} />
      <ambientLight intensity={0.5} />

      <mesh position={position} scale={scale}>
        <boxGeometry />
        <meshStandardMaterial color={color} />
        <meshStandardMaterial color={color} wireframe={wireframe} />
      </mesh>
    </>
  );
};

export default Scenes;
