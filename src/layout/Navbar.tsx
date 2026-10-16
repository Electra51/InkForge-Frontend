"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "../components/common/Logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname === "/login" || pathname === "/register") {
    return null;
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full  transition-colors duration-300 ${
        isScrolled ? "bg-persian-blue-800" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-30">
          {/* ===== LOGO ===== */}
          <Link href="/" className="shrink-0 pl-2">
            <Logo variant="default" />
          </Link>

          {/* ===== CENTER NAV LINKS (Desktop) ===== */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-white/90 hover:text-white text-sm md:text-base transition-colors duration-200 ${
                    isActive ? "font-medium -mt-2 text-white" : "font-normal"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* ===== RIGHT ACTIONS (Desktop) ===== */}
          <div className="hidden md:flex items-center gap-5">
            <Link
              href="/login"
              className="text-white/90 hover:text-white text-sm md:text-base  font-normal transition-colors duration-200"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="text-white/90 hover:text-white text-sm md:text-base  font-normal transition-colors duration-200"
            >
              Join Us
            </Link>
            <button
              className="text-white/90 hover:text-white transition-colors duration-200"
              aria-label="Cart"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </button>
          </div>

          {/* ===== MOBILE HAMBURGER ===== */}
          <button
            className="md:hidden text-white p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      <div
        className={`
          md:hidden absolute top-full left-0 right-0 bg-persian-blue-800/95 backdrop-blur-md
          border-t border-white/10 shadow-2xl
          transition-all duration-300 ease-in-out
          ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}
        `}
      >
        <div className="max-w-7xl mx-auto px-5 py-6 space-y-1">
          {/* Nav Links */}
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-white/90 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg text-base font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Divider */}
          <div className="border-t border-white/10 my-3" />

          {/* Auth Links */}
          <Link
            href="/login"
            onClick={() => setIsOpen(false)}
            className="block text-white/90 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg text-base font-medium transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            onClick={() => setIsOpen(false)}
            className="block text-white/90 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg text-base font-medium transition-colors"
          >
            Join Us
          </Link>

          {/* Cart Button */}
          <button
            className="flex items-center gap-3 w-full text-white/90 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg text-base font-medium transition-colors"
            aria-label="Cart"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            Cart
          </button>
        </div>
      </div>
    </nav>
  );
}
