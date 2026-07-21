"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2, Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { socialLinks } from "@/constants/navigation";
import { siteConfig } from "@/constants/site";
import { fadeUp, slideInLeft, slideInRight, viewportOnce } from "@/lib/motion";

type Status = "idle" | "loading" | "success";

const contactDetails = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: siteConfig.links.email },
  { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
  { icon: MapPin, label: "Location", value: siteConfig.location, href: undefined },
];

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate async submission (wire up to an API route / email service)
    await new Promise((r) => setTimeout(r, 1600));
    setStatus("success");
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="container flex flex-col gap-16">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          description="Have a project in mind or just want to connect? My inbox is always open."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Info */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-6"
          >
            <p className="text-lg text-muted-foreground">
              Whether you have a question, a project proposal, or just want to
              say hi, I&apos;ll get back to you as soon as I can.
            </p>

            <div className="flex flex-col gap-4">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;
                const content = (
                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl transition-colors hover:border-primary/30">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">
                        {detail.label}
                      </p>
                      <p className="text-sm font-medium">{detail.value}</p>
                    </div>
                  </div>
                );
                return detail.href ? (
                  <a key={detail.label} href={detail.href}>
                    {content}
                  </a>
                ) : (
                  <div key={detail.label}>{content}</div>
                );
              })}
            </div>

            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-muted-foreground transition-all hover:scale-110 hover:border-primary/40 hover:text-primary"
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="John Doe" required />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <motion.button
              type="submit"
              disabled={status !== "idle"}
              whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
              whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
              className="group relative flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-brand-gradient font-medium text-white shadow-lg shadow-primary/25 transition-shadow hover:shadow-primary/40 disabled:opacity-80"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
              {status === "loading" && (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              )}
              {status === "success" && (
                <>
                  <Check className="h-4 w-4" />
                  Message Sent
                </>
              )}
              {status === "idle" && (
                <>
                  Send Message
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
