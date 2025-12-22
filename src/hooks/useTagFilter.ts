import { useMemo } from "react";

/**
 * Generic hook for filtering items by tag
 * @param items - Array of items with tags property
 * @param selectedTag - Currently selected tag or null for all items
 * @returns Filtered array of items
 */
export function useTagFilter<T extends { tags: string[] }>(
  items: T[],
  selectedTag: string | null
): T[] {
  return useMemo(() => {
    if (!selectedTag) return items;
    return items.filter((item) => item.tags.includes(selectedTag));
  }, [items, selectedTag]);
}

/**
 * Get all unique tags from an array of items
 * @param items - Array of items with tags property
 * @returns Sorted array of unique tags
 */
export function useUniqueTags<T extends { tags: string[] }>(
  items: T[]
): string[] {
  return useMemo(() => {
    const tags = new Set(items.flatMap((item) => item.tags));
    return Array.from(tags).sort();
  }, [items]);
}
