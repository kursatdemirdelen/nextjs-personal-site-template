"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLocale = locale === "tr" ? "en" : "tr";

    // Replace the locale segment in the pathname
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");

    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-2 py-1 text-sm border border-[--color-border] rounded-[--radius-sm] hover:border-[--color-accent] hover:text-[--color-accent] transition-colors"
      aria-label={locale === "tr" ? "Switch to English" : "Türkçe'ye geç"}
    >
      {locale === "tr" ? "EN" : "TR"}
    </button>
  );
}
