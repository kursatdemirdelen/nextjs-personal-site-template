export default function BlogPostCardSkeleton() {
  return (
    <div className="border border-[--color-border] rounded-[--radius-sm] p-6 bg-[--surface-1] animate-pulse">
      {/* Date and read time */}
      <div className="flex items-center gap-3 mb-3">
        <div className="h-4 bg-[--surface-2] rounded w-24"></div>
        <div className="h-4 w-1 bg-[--surface-2] rounded"></div>
        <div className="h-4 bg-[--surface-2] rounded w-20"></div>
      </div>

      {/* Title */}
      <div className="mb-2">
        <div className="h-8 bg-[--surface-2] rounded w-3/4 mb-2"></div>
        <div className="h-8 bg-[--surface-2] rounded w-1/2"></div>
      </div>

      {/* Description */}
      <div className="mb-4 space-y-2">
        <div className="h-4 bg-[--surface-2] rounded w-full"></div>
        <div className="h-4 bg-[--surface-2] rounded w-5/6"></div>
      </div>

      {/* Tags */}
      <div className="flex gap-2 mb-4">
        <div className="h-6 bg-[--surface-2] rounded-full w-16"></div>
        <div className="h-6 bg-[--surface-2] rounded-full w-20"></div>
        <div className="h-6 bg-[--surface-2] rounded-full w-16"></div>
      </div>

      {/* Read more button */}
      <div className="h-4 bg-[--surface-2] rounded w-28"></div>
    </div>
  );
}
