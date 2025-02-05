import * as THREE from "three";
import React, { useRef } from "react";
import { useEffect } from "react";

const Custom = () => {
  const meshRef = useRef();

  // Define vertices for a triangle
  const positionArray = new Float32Array([0, 0, 0, 0, 1, 0, 1, 0, 0]);

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positionArray, 3)
      );
      meshRef.current.geometry.computeVertexNormals();
    }
  }, []);

  return (
    <mesh ref={meshRef} position={[2, 0, 0]}>
      <meshBasicMaterial color="red" side={THREE.DoubleSide} />
    </mesh>
  );
};

export default Custom;
