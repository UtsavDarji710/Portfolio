import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  gradient: string;
  skills: Skill[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  highlights: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
  gradient: string;
}

export interface Achievement {
  value: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  score: string;
  period: string;
}
