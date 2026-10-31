"use client";

import { cn } from "cn";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getDashboardUrl } from "@/constants/role";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { SessionUser, UserAvatar, UserMenu, useSignOut } from "./user-menu";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface NavbarProps {
  className?: string;
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
    className?: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const Navbar = ({
  logo = {
    url: "/",
    src: "/images/logo.svg",
    alt: "logo",
    title: "InkForge",
  },
  menu = [
    { title: "Home", url: "/" },
    {
      title: "Blog",
      url: "/blogs",
    },
    {
      title: "About",
      url: "/about",
    },
  ],
  auth = {
    login: { title: "Login", url: "/login" },
    // age "sign-up" chilo (leading "/" chhilo na), route name er sathe milie nio
    signup: { title: "Sign up", url: "/sign-up" },
  },
  className,
}: NavbarProps) => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user as SessionUser | undefined;
  const signOut = useSignOut();
  console.log("navbar role:", user?.role);
  return (
    <section className={cn("py-4", className)}>
      <div className="container mx-auto px-4">
        {/* Desktop Menu */}
        <nav
          aria-label="Main"
          className="hidden items-center justify-between lg:flex"
        >
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link href={logo.url} className="flex items-center gap-2">
              <img
                src={logo.src}
                className="max-h-8 dark:invert"
                alt={logo.alt}
              />
              <span className="text-lg font-semibold tracking-tighter">
                {logo.title}
              </span>
            </Link>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <ModeToggle />
            {isPending ? (
              // layout shift charte skeleton
              <div
                className="h-8 w-8 animate-pulse rounded-full bg-muted"
                aria-hidden="true"
              />
            ) : user ? (
              <>
                <UserMenu user={user} />
              </>
            ) : (
              <>
                <Button asChild variant="outline" size="sm">
                  <Link href={auth.login.url}>{auth.login.title}</Link>
                </Button>
                <Button asChild size="sm">
                  <Link href={auth.signup.url}>{auth.signup.title}</Link>
                </Button>
              </>
            )}
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href={logo.url} className="flex items-center gap-2">
              <img
                src={logo.src}
                className="max-h-8 dark:invert"
                alt={logo.alt}
              />
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link href={logo.url} className="flex items-center gap-2">
                      <img
                        src={logo.src}
                        className="max-h-8 dark:invert"
                        alt={logo.alt}
                      />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  {menu.map((item) => renderMobileMenuItem(item))}

                  <div className="flex flex-col gap-3">
                    <ModeToggle />
                    {isPending ? (
                      <div
                        className="h-10 animate-pulse rounded-md bg-muted"
                        aria-hidden="true"
                      />
                    ) : user ? (
                      <>
                        <div className="flex items-center gap-3 rounded-lg border p-3">
                          <UserAvatar user={user} className="size-10" />
                          <div className="min-w-0">
                            <p className="truncate text-sm font-medium">
                              {user.name}
                            </p>
                            <p className="truncate text-xs text-muted-foreground">
                              {user.email}
                            </p>
                          </div>
                        </div>
                        <Button asChild>
                          <Link href={getDashboardUrl(user.role)}>
                            Dashboard
                          </Link>
                        </Button>
                        <Button variant="outline" onClick={signOut}>
                          Log out
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button asChild variant="outline">
                          <Link href={auth.login.url}>{auth.login.title}</Link>
                        </Button>
                        <Button asChild>
                          <Link href={auth.signup.url}>
                            {auth.signup.title}
                          </Link>
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        asChild
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        <Link href={item.url}>{item.title}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  return (
    <Link key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </Link>
  );
};

export { Navbar };
