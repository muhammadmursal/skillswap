"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function RotatingIcosahedron() {
  const meshRef = useRef(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
   <mesh ref={meshRef}>
  <icosahedronGeometry args={[1.8, 0]} />
  <meshBasicMaterial color="#a855f7" wireframe transparent opacity={0.6} />
</mesh>
  );
}

export default function FloatingShape() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <RotatingIcosahedron />
    </Canvas>
  );
}