import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  PageLayout,
  Tag,
  DetailPageHeader,
  DetailPageFooter,
  ShareButtons,
  ReadingProgress,
  RelatedPosts,
  TableOfContents,
} from "@/components";
import { formatDate, getRelativeTime } from "@/utils/dateFormat";
import { getReadingTime } from "@/utils/readingTime";
import { siteConfig } from "@/data";
import { getBlogPostBySlug, getAllBlogPosts } from "@/utils/mdx";
import { BlogContent } from "./BlogContent";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

interface Params {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return routing.locales.flatMap((locale) =>
    posts.map((post) => ({
      locale,
      slug: post.slug,
    }))
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const postData = await getBlogPostBySlug(slug);

  if (!postData) {
    return {
      title: "Yazı bulunamadı",
    };
  }

  const { frontmatter } = postData;
  const url = `${siteConfig.url}/blog/${slug}`;

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      url,
      type: "article",
      publishedTime: frontmatter.date,
      authors: [siteConfig.name],
      tags: frontmatter.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.title,
      description: frontmatter.description,
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug, locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();
  const postData = await getBlogPostBySlug(slug);

  if (!postData) return notFound();

  const { frontmatter, content, headings } = postData;
  const readTime = frontmatter.readTime ?? getReadingTime(content);
  const localeType = locale as "tr" | "en";

  // Get all posts for related posts
  const allPosts = await getAllBlogPosts();
  return (
    <PageLayout>
      <ReadingProgress />
      <article className="py-16 max-w-3xl mx-auto">
        <DetailPageHeader
          backHref={`/${locale}/blog`}
          backLabel={t("common.backToBlog")}
          title={frontmatter.title}
        >
          <div className="flex flex-wrap items-center gap-4 text-sm text-[--color-muted] mb-6">
            <time title={frontmatter.date}>
              {getRelativeTime(frontmatter.date, localeType)}
            </time>
            <span>•</span>
            <span>{formatDate(frontmatter.date, localeType)}</span>
            <span>•</span>
            <span>{readTime}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {frontmatter.tags.map((tag: string) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
          <div className="mt-6">
            <ShareButtons slug={frontmatter.slug} title={frontmatter.title} />
          </div>
        </DetailPageHeader>

        {/* Table of Contents */}
        <TableOfContents headings={headings} />

        {/* MDX Content */}
        <BlogContent content={content} />

        {/* Related Posts */}
        <RelatedPosts
          currentSlug={frontmatter.slug}
          currentTags={frontmatter.tags}
          allPosts={allPosts}
        />

        <DetailPageFooter
          backHref={`/${locale}/blog`}
          backLabel={t("common.seeAllPosts")}
        />
      </article>
    </PageLayout>
  );
}
