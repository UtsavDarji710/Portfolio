"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/constants/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="container flex flex-col gap-16">
        <SectionHeading
          eyebrow="Featured Work"
          title="Projects I'm proud of"
          description="A selection of production applications spanning AI, marketplaces, real-time systems, and mobile."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-8"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} reverse={i % 2 === 1} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  reverse,
}: {
  project: Project;
  reverse: boolean;
}) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-colors hover:border-white/20 lg:grid-cols-2"
    >
      {/* Image */}
      <div
        className={cn(
          "relative aspect-[16/10] overflow-hidden lg:aspect-auto",
          reverse && "lg:order-2"
        )}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-tr opacity-60 mix-blend-multiply",
            project.gradient
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center gap-5 p-8 lg:p-10">
        <h3 className="text-2xl font-bold leading-tight tracking-tight">
          {project.title}
        </h3>
        <p className="text-muted-foreground">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
