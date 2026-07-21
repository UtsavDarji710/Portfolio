"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { education } from "@/constants/data";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function Education() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container flex flex-col gap-16">
        <SectionHeading eyebrow="Education" title="Academic foundation" />

        <div className="mx-auto w-full max-w-2xl">
          {education.map((item) => (
            <motion.div
              key={item.degree}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-gradient opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />

              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-lg shadow-primary/30">
                  <GraduationCap className="h-7 w-7" />
                </div>

                <div className="flex flex-1 flex-col gap-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-xl font-bold">{item.degree}</h3>
                    <span className="text-sm font-medium text-muted-foreground">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-primary">{item.field}</p>
                  <p className="text-muted-foreground">{item.institution}</p>
                  <div className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-400">
                    <Award className="h-4 w-4" />
                    {item.score}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
