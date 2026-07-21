"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Terminal, Cpu, Cloud, Sparkles } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";
import { CodeShowcase } from "./code-showcase";

// Three.js is heavy and browser-only — load it lazily on the client.
const Hero3D = dynamic(() => import("./hero-3d"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-40 w-40 animate-pulse rounded-full bg-brand-gradient opacity-20 blur-3xl" />
    </div>
  ),
});

export function HeroVisual() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const reducedMotion = usePrefersReducedMotion();

  // Respect reduced-motion: skip WebGL entirely and show the CSS showcase.
  if (reducedMotion) {
    return <CodeShowcase />;
  }

  return (
    <div ref={ref} className="relative mx-auto aspect-square w-full max-w-md">
      {/* soft glow behind the 3D object */}
      <div className="absolute inset-10 rounded-full bg-brand-gradient opacity-20 blur-3xl" />

      {/* 3D scene — render loop pauses when scrolled out of view */}
      <Hero3D active={inView} />

      {/* Floating code snippet badges layered on top */}
      <FloatingBadge
        className="left-0 top-6"
        delay={0}
        icon={<Terminal className="h-4 w-4 text-emerald-400" />}
        label="99.9% uptime"
      />
      <FloatingBadge
        className="right-0 top-24"
        delay={1.2}
        icon={<Cpu className="h-4 w-4 text-blue-400" />}
        label="AI Powered"
      />
      <FloatingBadge
        className="bottom-12 left-2"
        delay={0.6}
        icon={<Cloud className="h-4 w-4 text-violet-400" />}
        label="Cloud Native"
      />
      <FloatingBadge
        className="bottom-4 right-6"
        delay={1.8}
        icon={<Sparkles className="h-4 w-4 text-amber-400" />}
        label="Real-time"
      />

      {/* mini code chip */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-xl px-4 py-2 font-mono text-[11px] shadow-lg"
      >
        <span className="text-violet-400">const</span>{" "}
        <span className="text-blue-400">dev</span>{" "}
        <span className="text-foreground/60">= </span>
        <span className="text-emerald-400">&apos;Utsav&apos;</span>
      </motion.div>
    </div>
  );
}

function FloatingBadge({
  className,
  icon,
  label,
  delay,
}: {
  className: string;
  icon: React.ReactNode;
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      className={`glass absolute z-10 flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium shadow-lg ${className}`}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {icon}
      {label}
    </motion.div>
  );
}
