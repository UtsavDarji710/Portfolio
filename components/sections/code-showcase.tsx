"use client";

import { motion } from "framer-motion";
import { Sparkles, Terminal, Cpu, Cloud } from "lucide-react";

const codeLines = [
  { t: "const", v: " engineer", eq: " = {", color: "text-violet-400" },
  { indent: true, t: "name:", v: " 'Utsav Darji',", color: "text-blue-400" },
  { indent: true, t: "stack:", v: " ['Next.js', 'Node'],", color: "text-blue-400" },
  { indent: true, t: "cloud:", v: " 'GCP',", color: "text-blue-400" },
  { indent: true, t: "focus:", v: " 'AI · SaaS · Scale',", color: "text-blue-400" },
  { t: "};", v: "", color: "text-violet-400" },
];

export function CodeShowcase() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      {/* glow ring */}
      <div className="absolute inset-6 rounded-full bg-brand-gradient opacity-20 blur-3xl" />

      {/* rotating orbit */}
      <motion.div
        className="absolute inset-0 rounded-full border border-white/5"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-lg shadow-primary/50" />
        <span className="absolute bottom-10 -left-1 h-2 w-2 rounded-full bg-accent shadow-lg shadow-accent/50" />
      </motion.div>

      {/* main code card */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute left-1/2 top-1/2 w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-2xl p-5 shadow-2xl"
      >
        <div className="mb-4 flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-green-400/80" />
          <span className="ml-2 text-xs text-muted-foreground">engineer.ts</span>
        </div>
        <pre className="font-mono text-[13px] leading-relaxed">
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.15 }}
              className={line.indent ? "pl-4" : ""}
            >
              <span className={line.color}>{line.t}</span>
              <span className="text-foreground/70">{line.v}</span>
              {line.eq && <span className="text-foreground/70">{line.eq}</span>}
            </motion.div>
          ))}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="inline-block h-4 w-2 translate-y-0.5 bg-primary"
          />
        </pre>
      </motion.div>

      {/* floating badges */}
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
        className="bottom-10 left-2"
        delay={0.6}
        icon={<Cloud className="h-4 w-4 text-violet-400" />}
        label="Cloud Native"
      />
      <FloatingBadge
        className="bottom-2 right-6"
        delay={1.8}
        icon={<Sparkles className="h-4 w-4 text-amber-400" />}
        label="Real-time"
      />
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
      className={`glass absolute flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium shadow-lg ${className}`}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {icon}
      {label}
    </motion.div>
  );
}
