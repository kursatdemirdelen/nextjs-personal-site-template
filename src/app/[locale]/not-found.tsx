import Link from "next/link";
import { PageLayout, Section } from "@/components";
import { getTranslations } from "next-intl/server";

export default async function NotFound() {
  const t = await getTranslations();

  return (
    <PageLayout>
      <Section className="py-32 text-center">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-[--color-accent] mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-4 tracking-(--heading-tracking)">
            {t("common.notFound")}
          </h2>
          <p className="text-[--color-muted] text-lg mb-8 max-w-md mx-auto">
            {t("common.notFoundDescription")}
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-[--color-accent] text-[--color-background] rounded-[--radius-sm] hover:bg-[--color-accent-hover] transition-colors font-semibold"
          >
            {t("common.goHome")}
          </Link>
          <Link
            href="/blog"
            className="px-6 py-3 border border-[--color-border] rounded-[--radius-sm] hover:border-[--color-accent] hover:text-[--color-accent] transition-colors"
          >
            {t("common.blog")}
          </Link>
        </div>
      </Section>
    </PageLayout>
  );
}
