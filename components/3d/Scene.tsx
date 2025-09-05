"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import {
  Float,
  OrbitControls,
  Center,
  Environment,
  Sphere,
  Box,
  Torus,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function FloatingObject({
  position,
  geometry,
}: {
  position: [number, number, number];
  geometry: "sphere" | "box" | "torus";
}) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.5;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  const GeometryComponent = {
    sphere: Sphere,
    box: Box,
    torus: Torus,
  }[geometry];

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <GeometryComponent
        ref={mesh}
        position={position}
        args={
          geometry === "torus"
            ? [1, 0.3, 16, 32]
            : geometry === "sphere"
            ? [0.8]
            : [0.8, 0.8, 0.8]
        }
      >
        <meshStandardMaterial
          color={`hsl(${262}, 80%, ${60 + Math.sin(Date.now() * 0.001) * 10}%)`}
          metalness={0.8}
          roughness={0.2}
          emissive={`hsl(${262}, 80%, 30%)`}
          emissiveIntensity={0.2}
        />
      </GeometryComponent>
    </Float>
  );
}

function AnimatedText() {
  return (
    <Center>
      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.5}>
        <Box args={[3, 1, 0.3]}>
          <meshStandardMaterial
            color="hsl(262, 80%, 60%)"
            metalness={0.8}
            roughness={0.1}
            emissive="hsl(262, 80%, 30%)"
            emissiveIntensity={0.3}
          />
        </Box>
      </Float>
    </Center>
  );
}

export default function Scene() {
  return (
    <div className="w-full h-screen absolute inset-0 -z-10 opacity-60">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <Environment preset="night" />
          <ambientLight intensity={0.3} />
          <pointLight
            position={[10, 10, 10]}
            intensity={1.5}
            color="hsl(262, 80%, 60%)"
            castShadow
          />
          <pointLight
            position={[-10, -10, -10]}
            intensity={0.8}
            color="hsl(220, 80%, 60%)"
          />
          <directionalLight
            position={[0, 10, 5]}
            intensity={0.5}
            color="hsl(262, 80%, 70%)"
          />

          <AnimatedText />

          <FloatingObject position={[-4, 2, -2]} geometry="sphere" />
          <FloatingObject position={[4, -1, -3]} geometry="box" />
          <FloatingObject position={[-3, -2, -1]} geometry="torus" />
          <FloatingObject position={[3, 3, -4]} geometry="sphere" />
          <FloatingObject position={[0, -3, -2]} geometry="box" />
          <FloatingObject position={[-5, -1, -5]} geometry="torus" />
          <FloatingObject position={[5, 1, -5]} geometry="sphere" />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
            autoRotate
            autoRotateSpeed={0.3}
            enableDamping
            dampingFactor={0.05}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
