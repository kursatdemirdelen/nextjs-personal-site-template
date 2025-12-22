"use client";

import { useState } from "react";
import {
  PageLayout,
  BlogPostCard,
  BlogPostCardSkeleton,
  Section,
} from "@/components";
import { useBlogPosts, useTagFilter, useUniqueTags } from "@/hooks";
import { useTranslations } from "next-intl";

export default function Blog() {
  const t = useTranslations();
  const { posts: blogPosts, isLoading } = useBlogPosts();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags from blog posts
  const allTags = useUniqueTags(blogPosts);

  // Filter posts by selected tag
  const filteredPosts = useTagFilter(blogPosts, selectedTag);

  return (
    <PageLayout>
      <Section
        className="py-16"
        title={t("blog.title")}
        description={t("blog.description")}
      >
        {/* Tag Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-4 py-2 rounded-[--radius-sm] text-sm transition-colors ${
              selectedTag === null
                ? "bg-[--color-accent] text-[--color-background] font-semibold"
                : "bg-[--surface-2] text-[--color-foreground] border border-[--color-border] hover:border-[--color-accent]"
            }`}
          >
            {t("common.allPosts")} ({blogPosts.length})
          </button>
          {allTags.map((tag) => {
            const count = blogPosts.filter((post) =>
              post.tags.includes(tag)
            ).length;
            return (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-[--radius-sm] text-sm transition-colors ${
                  selectedTag === tag
                    ? "bg-[--color-accent] text-[--color-background] font-semibold"
                    : "bg-[--surface-2] text-[--color-foreground] border border-[--color-border] hover:border-[--color-accent]"
                }`}
              >
                {tag} ({count})
              </button>
            );
          })}
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {isLoading ? (
            // Loading skeletons
            <>
              <BlogPostCardSkeleton />
              <BlogPostCardSkeleton />
              <BlogPostCardSkeleton />
            </>
          ) : filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))
          ) : (
            <p className="text-[--color-muted] text-center py-12">
              &quot;{selectedTag}&quot; {t("common.noPostsFound")}
            </p>
          )}
        </div>
      </Section>
    </PageLayout>
  );
}
