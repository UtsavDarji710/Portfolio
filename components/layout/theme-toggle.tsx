"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = theme !== "light";

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md transition-colors hover:bg-white/[0.08]"
    >
      {mounted && (
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? (
            <Moon className="h-[18px] w-[18px] text-primary" />
          ) : (
            <Sun className="h-[18px] w-[18px] text-amber-500" />
          )}
        </motion.span>
      )}
    </button>
  );
}
