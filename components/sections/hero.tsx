"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientBlobs } from "@/components/ui/gradient-blobs";
import { Particles } from "@/components/ui/particles";
import { socialLinks } from "@/constants/navigation";
import { siteConfig } from "@/constants/site";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { HeroVisual } from "./hero-visual";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <GradientBlobs />
      <Particles />
      <div className="absolute inset-0 -z-10 bg-grid-pattern bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />

      <div className="container grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-6"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-foreground/80 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new opportunities
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient-animated">Utsav Darji</span>
            <br />
            <span className="text-foreground/90">{siteConfig.role}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-base text-muted-foreground sm:text-lg"
          >
            {siteConfig.subtitle}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href="#projects">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={siteConfig.resumeUrl} download>
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href="#contact">
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-4 pt-2">
            <span className="text-sm text-muted-foreground">Follow me</span>
            <div className="h-px w-8 bg-white/15" />
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-muted-foreground transition-all hover:scale-110 hover:border-primary/40 hover:text-primary"
                >
                  <link.icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <HeroVisual />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground">
          Scroll
        </span>
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/15 p-1">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
