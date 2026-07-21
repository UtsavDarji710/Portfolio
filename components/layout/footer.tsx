import { socialLinks } from "@/constants/navigation";
import { siteConfig } from "@/constants/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient text-xs font-bold text-white">
            UD
          </span>
          <p className="text-sm text-muted-foreground">
            © {year} {siteConfig.name}. Crafted with precision.
          </p>
        </div>

        <div className="flex items-center gap-3">
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
      </div>
    </footer>
  );
}
