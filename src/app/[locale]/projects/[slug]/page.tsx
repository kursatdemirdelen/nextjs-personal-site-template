import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { PageLayout, DetailPageHeader, DetailPageFooter } from "@/components";
import { projects } from "@/data";
import { siteConfig } from "@/data";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

interface Params {
  params: Promise<{ slug: string; locale: string }>;
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects.map((project) => ({
      locale,
      slug: project.slug,
    }))
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Proje bulunamadı",
    };
  }

  const url = `${siteConfig.url}/projects/${slug}`;

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: project.title,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug, locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];
  if (!project) return notFound();

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <PageLayout>
      <article className="py-16 max-w-3xl mx-auto">
        {/* Proje Navigasyonu */}
        <nav className="flex justify-between items-center mb-8 text-sm">
          {prevProject ? (
            <Link
              href={`/${locale}/projects/${prevProject.slug}`}
              className="flex items-center gap-2 text-[--color-muted] hover:text-[--color-accent] transition-colors"
            >
              <span>←</span>
              <span>{prevProject.title}</span>
            </Link>
          ) : (
            <span></span>
          )}
          {nextProject ? (
            <Link
              href={`/${locale}/projects/${nextProject.slug}`}
              className="flex items-center gap-2 text-[--color-muted] hover:text-[--color-accent] transition-colors"
            >
              <span>{nextProject.title}</span>
              <span>→</span>
            </Link>
          ) : (
            <span></span>
          )}
        </nav>

        <DetailPageHeader
          backHref={`/${locale}/projects`}
          backLabel=""
          title={project.title}
        >
          <p className="text-lg text-[--color-muted] leading-relaxed mb-6">
            {project.description}
          </p>
          {project.url && (
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[--color-accent] hover:text-[--color-accent-hover] transition-colors text-sm font-medium"
            >
              {t("common.viewOnGithub")}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
          )}
        </DetailPageHeader>

        {/* Content */}
        <div className="space-y-12 mt-12">
          {/* Detaylı Açıklama */}
          {project.longDescription && (
            <section>
              <h2 className="text-2xl font-bold mb-4 tracking-[--heading-tracking]">
                {t("common.aboutProject")}
              </h2>
              <p className="text-[--color-foreground] leading-[1.8] text-base">
                {project.longDescription}
              </p>
            </section>
          )}

          {/* Özellikler */}
          {project.features && project.features.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-4 tracking-[--heading-tracking]">
                {t("common.features")}
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-[--color-foreground]"
                  >
                    <span className="text-[--color-accent] font-bold mt-0.5">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Teknolojiler */}
          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-[--heading-tracking]">
              {t("common.technologies")}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-[--surface-2] text-[--color-foreground] rounded-[--radius-sm] border border-[--color-border] text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>
        </div>

        <DetailPageFooter
          backHref={`/${locale}/projects`}
          backLabel={t("common.seeAllProjects")}
        />
      </article>
    </PageLayout>
  );
}
