"use client";

import { motion } from "framer-motion";
import { Briefcase, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { experiences } from "@/constants/data";
import { viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { ExperienceItem } from "@/types";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="container flex flex-col gap-16">
        <SectionHeading
          eyebrow="Experience"
          title="My professional journey"
          description="Building and shipping production software that serves real users at scale."
        />

        <div className="relative mx-auto w-full max-w-4xl">
          {/* vertical spine */}
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-primary via-accent to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="flex flex-col gap-10 md:gap-4">
            {experiences.map((exp, i) => (
              <TimelineRow key={exp.role + exp.period} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineRow({ exp, index }: { exp: ExperienceItem; index: number }) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative md:grid md:grid-cols-2 md:gap-x-12">
      {/* Node — always centered on the spine */}
      <span className="absolute left-5 top-6 z-10 -translate-x-1/2 md:left-1/2">
        <span className="flex h-9 w-9 items-center justify-center rounded-full border-4 border-background bg-brand-gradient text-white shadow-lg shadow-primary/40">
          <Briefcase className="h-4 w-4" />
        </span>
      </span>

      {/* Card — pushed to one side on desktop, always right of the spine on mobile */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className={cn(
          "ml-14 md:ml-0",
          isLeft
            ? "md:col-start-1 md:pr-6 md:text-right"
            : "md:col-start-2 md:row-start-1 md:pl-6"
        )}
      >
        <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-colors hover:border-primary/30">
          <div
            className={cn(
              "flex flex-col gap-2",
              isLeft && "md:items-end"
            )}
          >
            <div className="flex flex-wrap items-center gap-2">
              {exp.current && (
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                  <Sparkles className="h-3 w-3" />
                  Current
                </span>
              )}
              <span className="text-xs font-medium text-muted-foreground">
                {exp.period}
              </span>
            </div>
            <h3 className="text-lg font-semibold">{exp.role}</h3>
            <p className="text-sm text-primary">{exp.company}</p>
          </div>

          <ul className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
            {exp.highlights.map((h) => (
              <li
                key={h}
                className={cn(
                  "flex items-start gap-2",
                  isLeft && "md:flex-row-reverse md:text-right"
                )}
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-primary to-accent" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
