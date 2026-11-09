// const AboutPage = async () => {
//   // await new Promise((resolve)=>setTimeout(resolve,2000));
//   // throw new Error("something went wrong")
//   return <div>AboutPage</div>;
// };

// export default AboutPage;

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Eye,
  LockKeyhole,
  MessageSquareText,
  PenLine,
  ShieldCheck,
  UserPlus,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "InkForge is a secure, role-based blogging platform where you can write, publish and discuss stories with a moderated community.",
  openGraph: {
    title: "About InkForge",
    description: "Forge your thoughts, publish your stories.",
    type: "website",
  },
};

const features = [
  {
    icon: PenLine,
    title: "Write and publish",
    text: "Create posts with a title, rich content, tags and a thumbnail. Edit or delete your own posts whenever you like.",
  },
  {
    icon: MessageSquareText,
    title: "Join the conversation",
    text: "Comment on published posts and reply to other readers in threaded discussions.",
  },
  {
    icon: ShieldCheck,
    title: "Moderated by admins",
    text: "Admins review comments and can approve or reject them, so discussions stay useful and respectful.",
  },
  {
    icon: LockKeyhole,
    title: "Secure by design",
    text: "Sign in with email and password or Google. Passwords are securely hashed and access is enforced at the API level.",
  },
];

const steps = [
  {
    icon: UserPlus,
    title: "Create an account",
    text: "Register with your email, or continue with Google in one click.",
  },
  {
    icon: PenLine,
    title: "Write your story",
    text: "Add a title and content, choose tags, then publish or keep it as a draft.",
  },
  {
    icon: Users,
    title: "Connect with readers",
    text: "Readers comment on your post, and approved comments appear publicly.",
  },
];

const roles = [
  {
    name: "Visitor",
    description: "Not logged in",
    icon: Eye,
    can: ["Read all published posts", "See author and publish date"],
  },
  {
    name: "User",
    description: "Registered member",
    icon: PenLine,
    can: [
      "Create, update and delete own posts",
      "Comment on published posts",
      "Manage own profile",
    ],
  },
  {
    name: "Admin",
    description: "Platform moderator",
    icon: ShieldCheck,
    can: [
      "Manage all posts",
      "Approve or reject comments",
      "Keep the community healthy",
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4">
      {/* Hero */}
      <section
        aria-labelledby="about-heading"
        className="mx-auto max-w-4xl py-16 text-center md:py-24"
      >
        <Badge variant="secondary">About InkForge</Badge>
        <h1
          id="about-heading"
          className="mt-5 text-balance text-4xl font-bold tracking-tight md:text-6xl"
        >
          Forge your thoughts, publish your stories.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
          InkForge is a secure, role-based blogging platform. Write what you
          know, share it with readers, and talk about it in a community that
          stays moderated and respectful.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/register">
              Start writing <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/blog">Browse blogs</Link>
          </Button>
        </div>
      </section>

      {/* Mission */}
      <section
        aria-labelledby="mission-heading"
        className="mx-auto grid max-w-6xl gap-8 border-t py-16 md:grid-cols-[1fr_2fr] md:py-20"
      >
        <h2
          id="mission-heading"
          className="text-2xl font-semibold tracking-tight md:text-3xl"
        >
          Why we built it
        </h2>
        <div className="space-y-4 text-lg leading-8 text-muted-foreground">
          <p>
            Good writing deserves a clean place to live. We wanted a platform
            that is simple for writers, pleasant for readers, and safe for
            everyone involved.
          </p>
          <p>
            That is why every post belongs to its author, every comment can be
            moderated, and every action is checked against your role before it
            happens.
          </p>
        </div>
      </section>

      {/* Features */}
      <section
        aria-labelledby="features-heading"
        className="mx-auto max-w-6xl border-t py-16 md:py-20"
      >
        <h2
          id="features-heading"
          className="text-2xl font-semibold tracking-tight md:text-3xl"
        >
          What you can do
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, text }) => (
            <Card key={title}>
              <CardHeader>
                <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-muted">
                  <Icon className="size-5" aria-hidden />
                </div>
                <CardTitle>{title}</CardTitle>
                <CardDescription className="text-sm leading-6">
                  {text}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section
        aria-labelledby="steps-heading"
        className="mx-auto max-w-6xl border-t py-16 md:py-20"
      >
        <h2
          id="steps-heading"
          className="text-2xl font-semibold tracking-tight md:text-3xl"
        >
          How it works
        </h2>
        <ol className="mt-8 grid gap-8 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="flex gap-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full border text-sm font-semibold">
                {i + 1}
              </span>
              <div>
                <h3 className="flex items-center gap-2 font-semibold">
                  <Icon className="size-4 text-muted-foreground" aria-hidden />
                  {title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Roles */}
      <section
        aria-labelledby="roles-heading"
        className="mx-auto max-w-6xl border-t py-16 md:py-20"
      >
        <h2
          id="roles-heading"
          className="text-2xl font-semibold tracking-tight md:text-3xl"
        >
          A place for everyone
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Access on InkForge is based on roles, so you only see and do what fits
          your account.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {roles.map(({ name, description, icon: Icon, can }) => (
            <Card key={name}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{name}</CardTitle>
                  <Icon className="size-5 text-muted-foreground" aria-hidden />
                </div>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {can.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mb-16 max-w-6xl rounded-2xl bg-primary px-6 py-14 text-center text-primary-foreground md:mb-24 md:py-16">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Ready to forge your first story?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
          Create a free account and publish your first post in minutes.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" variant="secondary">
            <Link href="/register">Create account</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <Link href="/login">I already have an account</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
