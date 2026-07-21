"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Counter } from "@/components/ui/counter";
import { FloatingShapes } from "@/components/ui/gradient-blobs";
import { aboutText, expertise, stats } from "@/constants/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <FloatingShapes />
      <div className="container flex flex-col gap-16">
        <SectionHeading
          eyebrow="About Me"
          title="Engineering products that scale and delight"
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-6"
          >
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground">
              {aboutText}
            </motion.p>
            <motion.p variants={fadeUp} className="text-base text-muted-foreground">
              I love turning complex problems into elegant, performant systems —
              from real-time collaboration engines to AI-driven workflows and
              production-grade cloud infrastructure.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              {expertise.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-foreground/80 transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-gradient opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30" />
                <div className="text-4xl font-bold text-gradient sm:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
