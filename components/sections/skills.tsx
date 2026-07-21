"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillCategories } from "@/constants/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { SkillCategory } from "@/types";

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="container flex flex-col gap-16">
        <SectionHeading
          eyebrow="Skills & Tools"
          title="A modern, battle-tested tech stack"
          description="Technologies I use to build fast, reliable, and scalable products across the full stack."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SkillCard({ category }: { category: SkillCategory }) {
  const Icon = category.icon;
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-colors hover:border-white/20"
    >
      <div
        className={cn(
          "absolute inset-x-0 -top-px h-px bg-gradient-to-r opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          category.gradient
        )}
      />
      <div
        className={cn(
          "absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20",
          category.gradient
        )}
      />

      <div className="mb-6 flex items-center gap-3">
        <div
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6",
            category.gradient
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold">{category.title}</h3>
      </div>

      <div className="flex flex-col gap-4">
        {category.skills.map((skill, i) => (
          <div key={skill.name} className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-foreground/80">{skill.name}</span>
              <span className="text-xs text-muted-foreground">
                {skill.level}%
              </span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                className={cn(
                  "h-full rounded-full bg-gradient-to-r",
                  category.gradient
                )}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.1 + i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
