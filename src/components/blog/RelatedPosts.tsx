import Link from "next/link";
import { BlogPost } from "@/types";
import { Tag } from "@/components";

interface RelatedPostsProps {
  currentSlug: string;
  currentTags: string[];
  allPosts: BlogPost[];
}

export default function RelatedPosts({
  currentSlug,
  currentTags,
  allPosts,
}: RelatedPostsProps) {
  // Calculate similarity score based on shared tags
  const postsWithScore = allPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      const sharedTags = post.tags.filter((tag) =>
        currentTags.includes(tag)
      ).length;
      return { post, score: sharedTags };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  // Get top 3 related posts, fallback to latest posts if not enough
  let relatedPosts = postsWithScore.slice(0, 3).map((item) => item.post);

  if (relatedPosts.length < 3) {
    const remaining = 3 - relatedPosts.length;
    const latestPosts = allPosts
      .filter(
        (post) =>
          post.slug !== currentSlug &&
          !relatedPosts.some((rp) => rp.slug === post.slug)
      )
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, remaining);

    relatedPosts = [...relatedPosts, ...latestPosts];
  }

  if (relatedPosts.length === 0) return null;

  return (
    <section className="mt-16 pt-8 border-t border-[--color-border]">
      <h2 className="text-2xl font-bold mb-6 tracking-[--heading-tracking]">
        İlgili Yazılar
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {relatedPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block"
          >
            <article className="border border-[--color-border] rounded-[--radius-sm] p-4 hover:border-[--color-accent] card-transition bg-[--surface-1] h-full">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-[--color-accent] line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-[--color-muted] mb-3 line-clamp-2">
                {post.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {post.tags.slice(0, 2).map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
