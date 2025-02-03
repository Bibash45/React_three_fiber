import * as THREE from "three";
import { useLoader, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Particles = () => {
  const snowRef = useRef();
  const texture = useLoader(THREE.TextureLoader, "./img/snow.jpg");
  const verticesAmount = 2000;
  const positionArray = new Float32Array(verticesAmount * 3);

  // Fill the position array with random positions
  for (let i = 0; i < verticesAmount; i++) {
    positionArray[i * 3] = (Math.random() - 0.5) * 10; // X
    positionArray[i * 3 + 1] = (Math.random() - 0.5) * 10; // Y
    positionArray[i * 3 + 2] = (Math.random() - 0.5) * 10; // Z
  }

  useFrame((state, delta) => {
    // Rotate the particles
    if (snowRef.current) {
      snowRef.current.rotation.y += delta * 0.0001;
      snowRef.current.rotation.x += delta * 0.0001;
      snowRef.current.rotation.z += delta * 0.0001;
    }

    // Optional: Move the camera in a circular path
    state.camera.position.x = Math.sin(state.clock.elapsedTime) * 5; // Adjust the multiplier for distance
    state.camera.position.z = Math.cos(state.clock.elapsedTime) * 5; // Add Z movement for a circular effect
    state.camera.lookAt(0, 0, 0); // Ensure the camera looks at the center
  });

  return (
    <points ref={snowRef} zoom={false} opacity={0.5}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={verticesAmount}
          itemSize={3}
          array={positionArray}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        map={texture}
        transparent={true}
        depthWrite={false} // Disable depth writing
      />
    </points>
  );
};

export default Particles;