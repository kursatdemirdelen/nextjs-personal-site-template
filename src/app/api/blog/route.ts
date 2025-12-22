import { NextResponse } from "next/server";
import { getAllBlogPosts } from "@/utils/mdx";

export async function GET() {
  const posts = await getAllBlogPosts();
  return NextResponse.json(posts);
}
