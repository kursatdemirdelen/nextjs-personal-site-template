import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/config/mdx-components";

interface BlogContentProps {
  content: string;
}

export function BlogContent({ content }: BlogContentProps) {
  return (
    <div className="mt-8 text-[--color-foreground]">
      <MDXRemote source={content} components={mdxComponents} />
    </div>
  );
}
