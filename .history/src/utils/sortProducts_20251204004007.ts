import { Product } from "@/types/product.type";

export type SortKey = "featured" | "price-asc" | "price-desc" | "relevancia";

const sortFunctions: Record<SortKey, (a: Product, b: Product) => number> = {
  featured: (a, b) => Number(b.featured) - Number(a.featured),
  "price-asc": (a, b) => a.price - b.price,
  "price-desc": (a, b) => b.price - a.price,
  relevancia: () => 0, // mantiene el orden original
};

export function sortProducts(
  products: Product[],
  sortBy: SortKey,
  minPrice?: number,
  maxPrice?: number
) {
  let filtered = products;
  if (minPrice !== undefined)
    filtered = filtered.filter((p) => p.price >= minPrice);
  if (maxPrice !== undefined)
    filtered = filtered.filter((p) => p.price <= maxPrice);

  const sorted = [...filtered];
  const sortFn = sortFunctions[sortBy];
  if (sortFn) sorted.sort(sortFn);

  return sorted;
}
