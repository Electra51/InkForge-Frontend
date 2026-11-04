"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Search, Star, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

export function BlogFilters({ tags }: { tags: string[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const [pending, startTransition] = useTransition();
  const [search, setSearch] = useState(params.get("search") ?? "");

  const activeTag = params.get("tag");
  const featured = params.get("featured") === "true";
  const sort = params.get("sort") ?? "latest";

  // URL update helper: value empty hole param muche dey, page 1 e reset kore
  const update = (changes: Record<string, string | null>) => {
    const next = new URLSearchParams(params.toString());
    Object.entries(changes).forEach(([k, v]) =>
      v ? next.set(k, v) : next.delete(k),
    );
    next.delete("page");
    startTransition(() => router.push(`${pathname}?${next.toString()}`));
  };

  // search debounce: 400ms thamle URL update hobe
  useEffect(() => {
    if (search === (params.get("search") ?? "")) return;
    const t = setTimeout(() => update({ search: search.trim() || null }), 400);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const hasFilters = !!(search || activeTag || featured);

  return (
    <div className="space-y-4" aria-busy={pending}>
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Title ba content diye khujo..."
            className="pl-9"
            aria-label="Search posts"
          />
        </div>

        <Select value={sort} onValueChange={(v) => update({ sort: v })}>
          <SelectTrigger className="sm:w-44" aria-label="Sort posts">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="latest">Latest</SelectItem>
            <SelectItem value="oldest">Oldest</SelectItem>
            <SelectItem value="popular">Most viewed</SelectItem>
          </SelectContent>
        </Select>

        <Button
          variant={featured ? "default" : "outline"}
          onClick={() => update({ featured: featured ? null : "true" })}
          aria-pressed={featured}
        >
          <Star className="size-4" /> Featured
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {tags.map((tag) => (
          <Badge
            key={tag}
            asChild
            variant={activeTag === tag ? "default" : "secondary"}
            className="cursor-pointer"
          >
            <button
              onClick={() => update({ tag: activeTag === tag ? null : tag })}
            >
              #{tag}
            </button>
          </Badge>
        ))}

        {hasFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setSearch("");
              startTransition(() => router.push(pathname));
            }}
          >
            <X className="size-4" /> Clear filters
          </Button>
        )}
      </div>
    </div>
  );
}
