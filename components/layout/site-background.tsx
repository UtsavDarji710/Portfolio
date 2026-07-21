"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";

const BackgroundScene = dynamic(
  () => import("@/components/three/background-scene"),
  { ssr: false }
);

export function SiteBackground() {
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = useState(true);

  useEffect(() => {
    // Pause the render loop when the tab is not visible to save battery/CPU.
    const onVisibility = () => setActive(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () =>
      document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  if (reduced) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_90%)]"
    >
      <BackgroundScene active={active} />
    </div>
  );
}
