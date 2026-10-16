"use client";

import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAuthRoute = pathname === "/login" || pathname === "/register";

  return (
    <>
      <Navbar />
      {children}
      {!isAuthRoute && <Footer />}
    </>
  );
}
