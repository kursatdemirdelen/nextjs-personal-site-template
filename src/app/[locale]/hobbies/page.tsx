import { PageLayout, HobbyCard, Section } from "@/components";
import { hobbies } from "@/data";
import { getTranslations, setRequestLocale } from "next-intl/server";

interface HobbiesProps {
  params: Promise<{ locale: string }>;
}

export default async function Hobbies({ params }: HobbiesProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();

  return (
    <PageLayout>
      <Section
        className="py-16"
        title={t("hobbies.title")}
        description={t("hobbies.description")}
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {hobbies.map((hobby) => (
            <HobbyCard key={hobby.title} hobby={hobby} />
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}
