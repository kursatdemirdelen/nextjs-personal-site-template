import { useState, useEffect } from "react";
import type { BlogPost } from "@/types";

interface UseBlogPostsReturn {
  posts: BlogPost[];
  isLoading: boolean;
  error: Error | null;
}

/**
 * Hook for fetching blog posts from API
 * @returns Object containing posts, loading state, and error
 */
export function useBlogPosts(): UseBlogPostsReturn {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;

    async function fetchPosts() {
      try {
        setIsLoading(true);
        const response = await fetch("/api/blog");
        
        if (!response.ok) {
          throw new Error(`Failed to fetch posts: ${response.statusText}`);
        }

        const data = await response.json();
        
        if (mounted) {
          setPosts(data);
          setError(null);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err : new Error("Unknown error"));
          console.error("Error loading blog posts:", err);
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    }

    fetchPosts();

    return () => {
      mounted = false;
    };
  }, []);

  return { posts, isLoading, error };
}
