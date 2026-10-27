import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface FooterLink {
  name: string;
  href: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  description?: string;
  sections?: FooterSection[];
  socialLinks?: FooterLink[];
  legalLinks?: FooterLink[];
  className?: string;
}

const defaultSections: FooterSection[] = [
  {
    title: "Explore",
    links: [
      { name: "Home", href: "/" },
      { name: "All posts", href: "/blog" },
      { name: "Popular posts", href: "/blog?sort=popular" },
      { name: "Latest posts", href: "/blog?sort=latest" },
    ],
  },
  {
    title: "Topics",
    links: [
      { name: "Next.js", href: "/blog?tag=nextjs" },
      { name: "TypeScript", href: "/blog?tag=typescript" },
      { name: "React", href: "/blog?tag=react" },
      { name: "Prisma", href: "/blog?tag=prisma" },
    ],
  },
  {
    title: "Write",
    links: [
      { name: "Start writing", href: "/dashboard/posts/new" },
      { name: "My posts", href: "/dashboard/posts" },
      { name: "Dashboard", href: "/dashboard" },
      { name: "Create account", href: "/register" },
    ],
  },
  {
    title: "InkForge",
    links: [
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Log in", href: "/login" },
    ],
  },
];

const defaultSocialLinks: FooterLink[] = [
  { name: "GitHub", href: "https://github.com/your-username", external: true },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/your-username",
    external: true,
  },
];

const defaultLegalLinks: FooterLink[] = [
  { name: "Terms and Conditions", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
];

const linkClass =
  "rounded-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

function FooterAnchor({
  link,
  className,
}: {
  link: FooterLink;
  className?: string;
}) {
  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(linkClass, className)}
      >
        {link.name}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link href={link.href} className={cn(linkClass, className)}>
      {link.name}
    </Link>
  );
}

export function Footer({
  description = "Forge your thoughts, publish your stories.",
  sections = defaultSections,
  socialLinks = defaultSocialLinks,
  legalLinks = defaultLegalLinks,
  className,
}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className={cn("border-t bg-background", className)}>
      <div className="container mx-auto px-4 py-14 md:py-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-6">
          {/* Brand */}
          <div className="col-span-2">
            <Link
              href="/"
              aria-label="InkForge home"
              className="inline-flex items-center gap-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Image
                src="/images/logo.svg"
                alt=""
                width={28}
                height={18}
                className="h-8 w-12"
              />
              <span className="text-lg font-semibold tracking-tight">
                InkForge
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              {description}
            </p>
          </div>

          {/* Link columns (max 4 so the grid never breaks) */}
          {sections.slice(0, 4).map((section) => (
            <nav key={section.title} aria-label={section.title}>
              <h2 className="mb-4 text-sm font-semibold tracking-tight">
                {section.title}
              </h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <FooterAnchor link={link} />
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t pt-8 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {year} InkForge. All rights reserved.</p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <FooterAnchor link={link} />
                </li>
              ))}
            </ul>
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <FooterAnchor link={link} className="underline" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
