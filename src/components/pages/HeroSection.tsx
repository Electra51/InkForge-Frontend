import { Eye, PenLine, Search } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  /** Topic chips under the search bar. Later, feed this from your top tags query. */
  topics?: string[];
  className?: string;
}

const DEFAULT_TOPICS = ["Next.js", "TypeScript", "React", "Prisma", "Career"];

// Heading font is wired up in app/layout.tsx (see usage notes).
const headingFont = "font-[family-name:var(--font-heading)]";

export function HeroSection({
  topics = DEFAULT_TOPICS,
  className,
}: HeroSectionProps) {
  return (
    <section aria-labelledby="hero-heading" className={className}>
      <div className="container mx-auto grid items-center gap-14 px-4 py-14 md:py-20 lg:grid-cols-12 lg:gap-10 lg:py-28">
        {/* Left: copy + actions */}
        <div className="lg:col-span-6">
          <h1
            id="hero-heading"
            className={cn(
              headingFont,
              "text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl",
            )}
          >
            Write the post you keep meaning to write.
          </h1>

          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            InkForge gives you a clean editor, a public page for every post, and
            readers who can comment. Draft privately, publish when it&apos;s
            ready.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              {/* Proxy/middleware redirects logged-out users to /login?callbackUrl=... */}
              <Link href="/dashboard/posts">
                <PenLine aria-hidden="true" />
                Start writing
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/blog">Read the blog</Link>
            </Button>
          </div>

          {/* Plain GET form: works without JS and stays server-rendered */}
          <form
            action="/blog"
            method="GET"
            role="search"
            className="mt-12 flex max-w-md gap-2"
          >
            <label htmlFor="hero-search" className="sr-only">
              Search posts by title
            </label>
            <Input
              id="hero-search"
              name="search"
              type="search"
              placeholder="Search posts by title"
              autoComplete="off"
              className="h-10"
            />
            <Button
              type="submit"
              variant="secondary"
              size="icon"
              className="size-10 shrink-0"
              aria-label="Search"
            >
              <Search aria-hidden="true" />
            </Button>
          </form>

          {topics.length > 0 && (
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="text-sm text-muted-foreground">
                Browse by topic:
              </span>
              <ul className="flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <li key={topic}>
                    <Link
                      href={`/blog?tag=${encodeURIComponent(topic.toLowerCase())}`}
                      className="inline-flex rounded-full border px-3 py-1 text-sm text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      {topic}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right: sample post preview (decorative) */}
        <div
          aria-hidden="true"
          className="relative mx-auto w-full max-w-md lg:col-span-6 lg:max-w-lg lg:justify-self-end"
        >
          <div className="absolute inset-0 hidden translate-x-4 translate-y-4 rounded-xl border bg-muted/50 sm:block" />

          <article className="relative rounded-xl border bg-card p-6 text-card-foreground shadow-sm sm:p-8">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs font-medium">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                Published
              </span>
              <span className="text-xs text-muted-foreground">6 min read</span>
            </div>

            <p
              className={cn(
                headingFont,
                "mt-6 text-2xl font-semibold leading-snug tracking-tight sm:text-3xl",
              )}
            >
              Why I moved my side project to the App Router
              <span className="ml-1 inline-block h-6 w-0.5 translate-y-1 bg-foreground motion-safe:animate-pulse sm:h-7" />
            </p>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Server Components changed how I think about data fetching. Here is
              what I kept, what I rewrote, and what I would skip next time.
            </p>

            <ul className="mt-5 flex flex-wrap gap-2 text-xs">
              {["nextjs", "typescript", "architecture"].map((tag) => (
                <li
                  key={tag}
                  className="rounded-md bg-secondary px-2 py-1 text-secondary-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center justify-between border-t pt-4">
              <div className="flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                  NR
                </span>
                <div className="text-sm leading-tight">
                  <p className="font-medium">Nadia Rahman</p>
                  <p className="text-xs text-muted-foreground">Oct 27, 2026</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <Eye className="size-3.5" />
                1.2k
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
