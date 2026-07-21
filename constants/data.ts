import {
  Code2,
  Server,
  Database,
  Cloud,
  Network,
  Plug,
  Cloud as CloudIcon,
  Bot,
  CreditCard,
  LayoutDashboard,
  Radio,
} from "lucide-react";
import type {
  Stat,
  SkillCategory,
  ExperienceItem,
  Project,
  Achievement,
  EducationItem,
} from "@/types";

export const aboutText =
  "Software Engineer with 3+ years of experience building scalable web applications using Next.js, React, Node.js, PostgreSQL, Redis, and Google Cloud Platform.";

export const expertise = [
  "SaaS",
  "AI Products",
  "Cloud Infrastructure",
  "Real-time Applications",
  "Payments",
  "DevOps",
  "Mobile App Publishing",
];

export const stats: Stat[] = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 20, suffix: "+", label: "Projects" },
  { value: 10, suffix: "+", label: "Technologies" },
  { value: 1000, suffix: "+", label: "Hours Development" },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Code2,
    gradient: "from-blue-500 to-cyan-400",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "Redux Toolkit", level: 85 },
      { name: "React Query", level: 85 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML5", level: 98 },
      { name: "CSS3", level: 92 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    gradient: "from-violet-500 to-purple-400",
    skills: [
      { name: "Node.js", level: 92 },
      { name: "Express.js", level: 90 },
      { name: "Sails.js", level: 85 },
      { name: "REST APIs", level: 93 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    gradient: "from-emerald-500 to-teal-400",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "Firebase", level: 85 },
      { name: "Supabase", level: 82 },
      { name: "Redis", level: 84 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    gradient: "from-orange-500 to-amber-400",
    skills: [
      { name: "Google Cloud Platform", level: 88 },
      { name: "Docker", level: 84 },
      { name: "Serverless", level: 82 },
      { name: "Virtual Machines", level: 80 },
      { name: "Bash", level: 80 },
      { name: "CI/CD", level: 83 },
    ],
  },
  {
    title: "Architecture",
    icon: Network,
    gradient: "from-pink-500 to-rose-400",
    skills: [
      { name: "WebSockets", level: 88 },
      { name: "Socket.io", level: 87 },
      { name: "RBAC", level: 86 },
      { name: "Webhooks", level: 88 },
    ],
  },
  {
    title: "Integrations",
    icon: Plug,
    gradient: "from-indigo-500 to-blue-400",
    skills: [
      { name: "Stripe", level: 88 },
      { name: "Firebase Auth", level: 86 },
      { name: "Twilio", level: 82 },
      { name: "Git & GitHub", level: 92 },
      { name: "Jira", level: 85 },
      { name: "Postman", level: 90 },
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "Zignuts Technolab",
    period: "Jul 2023 – Present",
    current: true,
    highlights: [
      "Built scalable Next.js and Node.js applications",
      "Managed Google Cloud infrastructure",
      "Automated deployments using Bash",
      "Integrated Stripe and Twilio",
      "Built enterprise SaaS dashboards",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Zignuts Technolab",
    period: "Jan 2023 – Jun 2023",
    highlights: [
      "Candidate assessment platform",
      "Recruitment portal",
      "Admin dashboards",
      "Analytics systems",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "AI-Powered Enterprise Productivity & Collaboration Suite",
    description:
      "Built an enterprise collaboration platform featuring AI-powered workflows, Redis queues, multi-org architecture, role-based permissions, and real-time collaboration.",
    tech: ["Sails.js", "PostgreSQL", "Redis", "WebSockets", "Generative AI APIs"],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/utsavdarji",
    demo: "#",
    gradient: "from-blue-500 via-indigo-500 to-violet-500",
  },
  {
    title: "On-Demand Automotive Service Marketplace",
    description:
      "Built a multi-tenant marketplace with booking workflows, Stripe payments, RBAC, workshops, admin dashboard, and webhook-driven payment synchronization.",
    tech: ["Node.js", "Strapi", "PostgreSQL", "Stripe", "REST APIs"],
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/utsavdarji",
    demo: "#",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
  },
  {
    title: "Travel & Adventure Rental Platform",
    description:
      "Developed a travel booking platform with AI integrations, dynamic pricing, search, reservations, and a companion iOS application published on the Apple App Store.",
    tech: ["Next.js", "Tailwind CSS", "JavaScript", "AI", "App Store Connect"],
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/utsavdarji",
    demo: "#",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
];

export const achievements: Achievement[] = [
  { value: 50, suffix: "+", label: "Cloud Deployments", icon: CloudIcon },
  { value: 15, suffix: "+", label: "AI Integrations", icon: Bot },
  { value: 10, suffix: "+", label: "Payment Integrations", icon: CreditCard },
  { value: 12, suffix: "+", label: "Enterprise Dashboards", icon: LayoutDashboard },
  { value: 8, suffix: "+", label: "Real-time Systems", icon: Radio },
];

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Engineering",
    field: "Information Technology",
    institution: "CHARUSAT University",
    score: "CGPA: 8.86",
    period: "2019 – 2023",
  },
];
