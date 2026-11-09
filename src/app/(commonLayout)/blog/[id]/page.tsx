import { blogService } from "@/services/blog.service";

const BlogDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const { data } = await blogService.getBlogPostById(id);

  const formattedDate = new Date(data?.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // const wordCount = blog?.content.split(/\s+/).length || 0;

  // const readingTime = Math.max(1, Math.ceil(wordCount / 200)); // Average reading speed: 200 words per minute
  return (
    <div>
      <h2>{data?.title}</h2>
      <p>{formattedDate}</p>
      <div dangerouslySetInnerHTML={{ __html: data?.content }} />
    </div>
  );
};

export default BlogDetailPage;
