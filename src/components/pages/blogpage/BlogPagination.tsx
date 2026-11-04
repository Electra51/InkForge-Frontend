"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export function BlogPagination({
  page,
  totalPages,
}: {
  page: number;
  totalPages: number;
}) {
  const pathname = usePathname();
  const params = useSearchParams();
  if (totalPages <= 1) return null;

  // existing filter gula rekhe shudhu page bodlay
  const href = (p: number) => {
    const next = new URLSearchParams(params.toString());
    next.set("page", String(p));
    return `${pathname}?${next.toString()}`;
  };

  return (
    <nav
      className="mt-12 flex items-center justify-center gap-3"
      aria-label="Pagination"
    >
      <Button asChild variant="outline" disabled={page <= 1}>
        <Link href={href(page - 1)} aria-disabled={page <= 1}>
          Previous
        </Link>
      </Button>
      <span className="text-sm text-muted-foreground">
        Page {page} of {totalPages}
      </span>
      <Button asChild variant="outline" disabled={page >= totalPages}>
        <Link href={href(page + 1)} aria-disabled={page >= totalPages}>
          Next
        </Link>
      </Button>
    </nav>
  );
}
