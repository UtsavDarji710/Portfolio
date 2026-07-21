"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Lightweight IntersectionObserver hook.
 * Used to pause expensive work (like a WebGL render loop) when a
 * section is scrolled out of view.
 */
export function useInView<T extends HTMLElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.05, rootMargin: "100px", ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}
