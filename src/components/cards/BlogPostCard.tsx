import Link from "next/link";
import Tag from "../ui/Tag";
import type { BlogPost } from "@/types";
import { getRelativeTime } from "@/utils/dateFormat";
import { getReadingTime } from "@/utils/readingTime";
import { useTranslations, useLocale } from "next-intl";

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const t = useTranslations("common");
  const locale = useLocale() as "tr" | "en";
  const readTime = post.readTime ?? getReadingTime(post.description);

  return (
    <Link href={`/blog/${post.slug}`} className="block">
      <article className="border border-[--color-border] rounded-[--radius-sm] p-6 hover:border-[--color-accent] card-transition group bg-[--surface-1]">
        <div className="flex items-center gap-3 text-sm text-[--color-muted] mb-3">
          <time title={post.date}>{getRelativeTime(post.date, locale)}</time>
          <span>•</span>
          <span>{readTime}</span>
        </div>
        <h2 className="text-2xl font-semibold mb-2 group-hover:text-[--color-accent] transition-colors tracking-(--heading-tracking)">
          {post.title}
        </h2>
        <p className="text-[--color-muted] mb-4">{post.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
        <div className="inline-flex items-center gap-2 text-sm text-[--color-accent] hover:text-[--color-accent-hover] transition-colors group-hover:gap-3 font-medium">
          {t("readMore")}
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </article>
    </Link>
  );
}
