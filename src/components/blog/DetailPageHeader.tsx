import Link from "next/link";

interface DetailPageHeaderProps {
  backHref: string;
  backLabel: string;
  title: string;
  children?: React.ReactNode;
}

export default function DetailPageHeader({
  backHref,
  backLabel,
  title,
  children,
}: DetailPageHeaderProps) {
  return (
    <header className="mb-8">
      {/* Back link - only show if backLabel exists */}
      {backLabel && (
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-sm text-[--color-muted] hover:text-[--color-accent] transition-colors mb-8"
        >
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
          {backLabel}
        </Link>
      )}

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-(--heading-tracking)">
        {title}
      </h1>

      {/* Optional metadata */}
      {children}
    </header>
  );
}
