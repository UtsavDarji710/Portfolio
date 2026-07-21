"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const NAV_OFFSET = 80; // height of the fixed navbar
const SNAP_THRESHOLD = 180; // only snap when stopping within this many px of a section top

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // --- Smooth anchor navigation (navbar + any #links) ---
    const handleAnchor = (e: Event) => {
      const target = (e.target as HTMLElement).closest(
        'a[href^="#"]'
      ) as HTMLAnchorElement | null;
      if (!target) return;
      const id = target.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: -NAV_OFFSET, duration: 1.2 });
      }
    };
    document.addEventListener("click", handleAnchor);

    // --- Gentle section snapping ---
    // When scrolling settles near the top of a section, ease it into
    // alignment. It only engages close to a boundary, so long sections
    // stay freely scrollable (no trapping).
    let snapTimer: ReturnType<typeof setTimeout>;
    let programmatic = false;

    const snapToNearest = () => {
      if (programmatic) return;
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("section[id]")
      );
      if (!sections.length) return;

      const scrollY = window.scrollY;
      let nearest: HTMLElement | null = null;
      let nearestDist = Infinity;

      for (const section of sections) {
        const top =
          section.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
        const dist = Math.abs(scrollY - top);
        if (dist < nearestDist) {
          nearestDist = dist;
          nearest = section;
        }
      }

      if (nearest && nearestDist > 6 && nearestDist < SNAP_THRESHOLD) {
        programmatic = true;
        lenis.scrollTo(nearest, {
          offset: -NAV_OFFSET,
          duration: 0.9,
          onComplete: () => {
            programmatic = false;
          },
        });
      }
    };

    const onScroll = () => {
      clearTimeout(snapTimer);
      // Wait until the user has stopped scrolling, then consider snapping.
      snapTimer = setTimeout(snapToNearest, 140);
    };
    lenis.on("scroll", onScroll);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(snapTimer);
      document.removeEventListener("click", handleAnchor);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
