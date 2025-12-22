type Locale = "tr" | "en";

const translations = {
  tr: {
    today: "Bugün",
    yesterday: "Dün",
    daysAgo: (n: number) => `${n} gün önce`,
    weekAgo: "1 hafta önce",
    weeksAgo: (n: number) => `${n} hafta önce`,
    monthAgo: "1 ay önce",
    monthsAgo: (n: number) => `${n} ay önce`,
    yearAgo: "1 yıl önce",
    yearsAgo: (n: number) => `${n} yıl önce`,
  },
  en: {
    today: "Today",
    yesterday: "Yesterday",
    daysAgo: (n: number) => `${n} days ago`,
    weekAgo: "1 week ago",
    weeksAgo: (n: number) => `${n} weeks ago`,
    monthAgo: "1 month ago",
    monthsAgo: (n: number) => `${n} months ago`,
    yearAgo: "1 year ago",
    yearsAgo: (n: number) => `${n} years ago`,
  },
};

export function getRelativeTime(dateString: string, locale: Locale = "en"): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const t = translations[locale];

  if (diffInDays === 0) return t.today;
  if (diffInDays === 1) return t.yesterday;
  if (diffInDays < 7) return t.daysAgo(diffInDays);
  if (diffInDays < 30) {
    const weeks = Math.floor(diffInDays / 7);
    return weeks === 1 ? t.weekAgo : t.weeksAgo(weeks);
  }
  if (diffInDays < 365) {
    const months = Math.floor(diffInDays / 30);
    return months === 1 ? t.monthAgo : t.monthsAgo(months);
  }
  const years = Math.floor(diffInDays / 365);
  return years === 1 ? t.yearAgo : t.yearsAgo(years);
}

export function formatDate(dateString: string, locale: Locale = "en"): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale === "tr" ? "tr-TR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
