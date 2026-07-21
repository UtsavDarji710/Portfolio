"use client";

import { useEffect, useRef, useState } from "react";

export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Desktop-only (fine pointer) and respect reduced-motion.
    const isFine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isFine || reduced) return;
    setEnabled(true);

    let targetX = -300;
    let targetY = -300;
    let currentX = -300;
    let currentY = -300;
    let rafId = 0;
    let running = false;

    const render = () => {
      // Ease toward the pointer.
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      const el = glowRef.current;
      if (el) {
        el.style.transform = `translate3d(${currentX - 200}px, ${
          currentY - 200
        }px, 0)`;
      }

      // Stop the loop once we've essentially caught up — saves CPU while idle.
      if (
        Math.abs(targetX - currentX) < 0.5 &&
        Math.abs(targetY - currentY) < 0.5
      ) {
        running = false;
        return;
      }
      rafId = requestAnimationFrame(render);
    };

    const start = () => {
      if (!running) {
        running = true;
        rafId = requestAnimationFrame(render);
      }
    };

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      start();
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={glowRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[55] h-[400px] w-[400px] rounded-full"
      style={{
        willChange: "transform",
        background:
          "radial-gradient(circle, rgba(139,92,246,0.12) 0%, rgba(59,130,246,0.06) 40%, transparent 70%)",
      }}
    />
  );
}
