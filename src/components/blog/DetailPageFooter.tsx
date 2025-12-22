import Link from "next/link";

interface DetailPageFooterProps {
  backHref: string;
  backLabel: string;
}

export default function DetailPageFooter({
  backHref,
  backLabel,
}: DetailPageFooterProps) {
  return (
    <div className="border-t border-[--color-border] mt-12 pt-8">
      <Link
        href={backHref}
        className="inline-flex items-center gap-2 text-[--color-accent] hover:text-[--color-accent-hover] transition-colors font-medium"
      >
        <svg
          className="w-5 h-5"
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
    </div>
  );
}
