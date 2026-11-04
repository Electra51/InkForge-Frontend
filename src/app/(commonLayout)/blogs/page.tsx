// import { BlogCard } from "@/components/ui/BlogCard";
// import { blogService } from "@/services/blog.service";
// import { BlogPost } from "@/types";

// const BlogsPage = async () => {
//   const { data } = await blogService.getBlogPosts(
//     {
//       isFeatured: true,
//       search: "",
//     },
//     {
//       cache: "no-store",
//       revalidate: 10, //revalidate korle 60 sec por por data update hobe
//     },
//   );

//   console.log("data", data);
//   return (
//     <div className="grid grid-cols-4 gap-10 container mx-auto px-4 py-14 md:py-20">
//       {data?.data?.map((post: BlogPost) => (
//         <BlogCard key={post.id} post={post} />
//       ))}
//     </div>
//   );
// };

// export default BlogsPage;

import { BlogFilters } from "@/components/pages/blogpage/BlogFilters";
import { BlogPagination } from "@/components/pages/blogpage/BlogPagination";
import { BlogCard } from "@/components/ui/BlogCard";
import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types";

type SearchParams = Promise<{
  search?: string;
  tag?: string;
  sort?: string;
  featured?: string;
  page?: string;
}>;

// tag list backend theke ante chaile blogService.getTags() banaw
const TAGS = ["nextjs", "prisma", "react", "typescript", "career"];
const LIMIT = 9;

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams;
  const page = Number(sp.page ?? 1);

  const { data } = await blogService.getBlogPosts(
    {
      search: sp.search ?? "",
      tag: sp.tag,
      sort: sp.sort ?? "latest", // latest | oldest | popular
      isFeatured: sp.featured === "true" ? true : undefined,
      page,
      limit: LIMIT,
    },
    // no-store ar revalidate ekshathe dile Next warning dey, tai shudhu revalidate
    { revalidate: 10 },
  );

  const posts: BlogPost[] = data?.data ?? [];
  const totalPages: number = data?.meta?.totalPages ?? 1;
  const hasFilters = !!(sp.search || sp.tag || sp.featured);

  return (
    <main className="container mx-auto px-4 py-12 md:py-16">
      <header className="mb-10 max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Blogs</h1>
        <p className="mt-3 text-muted-foreground">
          Notun lekha, tutorial ar notes. Search kore ba tag diye khuje nao.
        </p>
      </header>

      <BlogFilters tags={TAGS} />

      {posts.length === 0 ? (
        <div className="mt-16 rounded-xl border border-dashed p-12 text-center">
          <p className="font-medium">Kono post paoa jayni</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Onno keyword diye search koro ba filter muche dao.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post, i) => (
            <BlogCard
              key={post.id}
              post={post}
              // prothom featured post ta boro dekhabe (filter na thakle)
              // featured={!hasFilters && page === 1 && i === 0 && post.isFeatured}
            />
          ))}
        </div>
      )}

      <BlogPagination page={page} totalPages={totalPages} />
    </main>
  );
}
