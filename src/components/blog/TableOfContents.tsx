interface HeadingItem {
  id: string;
  text: string;
  level: number; // 1, 2, 3
}

interface TableOfContentsProps {
  headings: HeadingItem[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  if (!headings || headings.length === 0) return null;

  return (
    <nav aria-label="İçindekiler" className="mt-8 mb-10">
      <div className="text-sm font-semibold text-[--color-muted] mb-3">
        İçindekiler
      </div>
      <ul className="space-y-2">
        {headings.map((h) => (
          <li
            key={h.id}
            className={h.level === 1 ? "ml-0" : h.level === 2 ? "ml-4" : "ml-8"}
          >
            <a
              href={`#${h.id}`}
              className="text-[--color-foreground] hover:text-[--color-accent] transition-colors"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
