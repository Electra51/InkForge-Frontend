// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardAction,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { BlogPost } from "@/types/blog.type";

// export function BlogCard({ post }: { post: BlogPost }) {
//   return (
//     <Card className="relative mx-auto w-full max-w-sm pt-0">
//       <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
//       <img
//         src={post.thumbnail || "https://avatar.vercel.sh/shadcn1"}
//         alt="Event cover"
//         className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
//       />
//       <CardHeader>
//         <CardAction>
//           <Badge variant="secondary">Featured</Badge>
//         </CardAction>
//         <CardTitle>{post.title}</CardTitle>
//         <CardDescription>{post.content}</CardDescription>
//       </CardHeader>
//       <CardFooter>
//         <Button className="w-full">View Event</Button>
//       </CardFooter>
//     </Card>
//   );
// }

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BlogPost } from "@/types/blog.type";
import Link from "next/link";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="relative mx-auto w-full max-w-sm overflow-hidden pt-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={post.thumbnail || "https://avatar.vercel.sh/shadcn1"}
        alt={post.title}
        className="aspect-video w-full object-cover"
      />

      <CardHeader>
        {post.isFeatured && (
          <CardAction>
            <Badge variant="secondary">Featured</Badge>
          </CardAction>
        )}
        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
        {/* line-clamp-3: shudhu 3 line dekhabe, baki ... diye kete dibe */}
        <CardDescription className="line-clamp-3">
          {post.content}
        </CardDescription>
      </CardHeader>

      <CardFooter className="mt-auto">
        <Button asChild className="w-full">
          <Link href={`/blog/${post.id}`}>View more</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
