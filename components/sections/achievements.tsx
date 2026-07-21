"use client";

import { motion } from "framer-motion";
import { Counter } from "@/components/ui/counter";
import { achievements } from "@/constants/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Achievements() {
  return (
    <section className="relative py-16">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl sm:p-12">
          <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5"
          >
            {achievements.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-3xl font-bold text-gradient sm:text-4xl">
                    <Counter value={item.value} suffix={item.suffix} />
                  </div>
                  <p className="text-xs text-muted-foreground sm:text-sm">
                    {item.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
