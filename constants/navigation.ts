import { Github, Linkedin, Globe, Mail } from "lucide-react";
import type { NavItem, SocialLink } from "@/types";
import { siteConfig } from "./site";

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: siteConfig.links.github, icon: Github },
  { label: "LinkedIn", href: siteConfig.links.linkedin, icon: Linkedin },
  { label: "Portfolio", href: siteConfig.links.portfolio, icon: Globe },
  { label: "Email", href: siteConfig.links.email, icon: Mail },
];
