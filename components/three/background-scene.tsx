"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Group, Points as ThreePoints } from "three";

function makeCloud(count: number, spread: number, depth: number) {
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    arr[i * 3] = (Math.random() - 0.5) * spread;
    arr[i * 3 + 1] = (Math.random() - 0.5) * spread;
    arr[i * 3 + 2] = (Math.random() - 0.5) * depth;
  }
  return arr;
}

function StarLayer({
  count,
  spread,
  depth,
  size,
  color,
  opacity,
  speed,
}: {
  count: number;
  spread: number;
  depth: number;
  size: number;
  color: string;
  opacity: number;
  speed: number;
}) {
  const ref = useRef<ThreePoints>(null);
  const positions = useMemo(
    () => makeCloud(count, spread, depth),
    [count, spread, depth]
  );

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * speed;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        color={color}
        transparent
        opacity={opacity}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function ParallaxField() {
  const group = useRef<Group>(null);
  const scrollY = useRef(0);

  useFrame((state) => {
    if (!group.current) return;
    // Ease group toward the pointer for gentle parallax.
    const { x, y } = state.pointer;
    group.current.rotation.y += (x * 0.15 - group.current.rotation.y) * 0.03;
    group.current.rotation.x += (-y * 0.1 - group.current.rotation.x) * 0.03;

    // Drift vertically with scroll for a sense of depth.
    const target = -(window.scrollY || 0) * 0.0012;
    scrollY.current += (target - scrollY.current) * 0.05;
    group.current.position.y = scrollY.current;
  });

  return (
    <group ref={group}>
      <StarLayer
        count={2200}
        spread={22}
        depth={12}
        size={0.03}
        color="#64748b"
        opacity={0.5}
        speed={0.01}
      />
      <StarLayer
        count={700}
        spread={18}
        depth={8}
        size={0.05}
        color="#3B82F6"
        opacity={0.6}
        speed={0.02}
      />
      <StarLayer
        count={400}
        spread={16}
        depth={6}
        size={0.06}
        color="#8B5CF6"
        opacity={0.6}
        speed={0.03}
      />
    </group>
  );
}

export default function BackgroundScene({
  active = true,
}: {
  active?: boolean;
}) {
  return (
    <Canvas
      frameloop={active ? "always" : "never"}
      camera={{ position: [0, 0, 6], fov: 60 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
    >
      <ParallaxField />
    </Canvas>
  );
}
