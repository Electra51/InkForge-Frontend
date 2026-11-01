import { BlogCard } from "@/components/ui/BlogCard";
import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types";

const BlogsPage = async () => {
  const { data } = await blogService.getBlogPosts();

  console.log("data", data);
  return (
    <div className="grid grid-cols-4 gap-10 container mx-auto px-4 py-14 md:py-20">
      {data?.data?.map((post: BlogPost) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogsPage;
