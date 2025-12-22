interface TagProps {
  label: string;
}

export default function Tag({ label }: TagProps) {
  return (
    <span className="text-xs px-2 py-1 bg-[--surface-2] text-[--color-foreground] rounded-[--radius-sm] border border-[--color-border]">
      {label}
    </span>
  );
}
