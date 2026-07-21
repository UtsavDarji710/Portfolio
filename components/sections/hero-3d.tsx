"use client";

import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Icosahedron,
  MeshDistortMaterial,
  AdaptiveDpr,
  PerformanceMonitor,
} from "@react-three/drei";
import type { Group } from "three";

const PRIMARY = "#3B82F6";
const ACCENT = "#8B5CF6";

function MorphingCore() {
  return (
    <Float speed={1.4} rotationIntensity={0.8} floatIntensity={1}>
      {/* Solid distorted core — no envmap needed, lit purely by scene lights */}
      <Icosahedron args={[1.15, 16]}>
        <MeshDistortMaterial
          color={ACCENT}
          emissive={PRIMARY}
          emissiveIntensity={0.35}
          roughness={0.35}
          metalness={0.3}
          distort={0.35}
          speed={1.5}
        />
      </Icosahedron>
      {/* Wireframe shell */}
      <Icosahedron args={[1.4, 1]}>
        <meshBasicMaterial color={PRIMARY} wireframe transparent opacity={0.22} />
      </Icosahedron>
    </Float>
  );
}

function OrbitingShape({
  position,
  color,
  children,
}: {
  position: [number, number, number];
  color: string;
  children: React.ReactNode;
}) {
  return (
    <Float speed={1.8} rotationIntensity={1.8} floatIntensity={1.3}>
      <mesh position={position}>
        {children}
        <meshStandardMaterial
          color={color}
          roughness={0.4}
          metalness={0.2}
          emissive={color}
          emissiveIntensity={0.25}
        />
      </mesh>
    </Float>
  );
}

function ParallaxRig({ children }: { children: React.ReactNode }) {
  const ref = useRef<Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const { x, y } = state.pointer;
    ref.current.rotation.y += (x * 0.5 - ref.current.rotation.y) * 0.04;
    ref.current.rotation.x += (-y * 0.35 - ref.current.rotation.x) * 0.04;
  });

  return <group ref={ref}>{children}</group>;
}

export default function Hero3D({ active = true }: { active?: boolean }) {
  const [dpr, setDpr] = useState(1.5);

  return (
    <Canvas
      // Only run the render loop while the hero is on screen.
      frameloop={active ? "always" : "never"}
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={dpr}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      className="!absolute inset-0"
    >
      {/* Drop resolution automatically if the GPU starts to struggle */}
      <PerformanceMonitor
        onDecline={() => setDpr(1)}
        onIncline={() => setDpr(1.5)}
      />
      <AdaptiveDpr pixelated />

      <Suspense fallback={null}>
        <ambientLight intensity={0.7} />
        <pointLight position={[5, 5, 5]} intensity={90} color={PRIMARY} />
        <pointLight position={[-5, -3, 2]} intensity={70} color={ACCENT} />
        <directionalLight position={[0, 3, 4]} intensity={1.2} />

        <ParallaxRig>
          <MorphingCore />
          <OrbitingShape position={[2.2, 1.1, -1]} color={PRIMARY}>
            <torusGeometry args={[0.35, 0.14, 12, 32]} />
          </OrbitingShape>
          <OrbitingShape position={[-2.3, -0.6, -0.5]} color={ACCENT}>
            <octahedronGeometry args={[0.42, 0]} />
          </OrbitingShape>
          <OrbitingShape position={[1.8, -1.4, 0.5]} color={PRIMARY}>
            <icosahedronGeometry args={[0.3, 0]} />
          </OrbitingShape>
        </ParallaxRig>
      </Suspense>
    </Canvas>
  );
}
