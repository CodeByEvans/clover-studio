import { Product } from "@/types/product.type";

type SortKey = "featured" | "price-asc" | "price-desc" | "relevancia";

const sortFunctions: Record<SortKey, (a: Product, b: Product) => number> = {
  featured: (a, b) => Number(b.featured) - Number(a.featured),
  "price-asc": (a, b) => a.price - b.price,
  "price-desc": (a, b) => b.price - a.price,
  relevancia: () => 0, // mantiene el orden original
};

export function sortProducts(products: Product[], sortBy: SortKey) {
  const sorted = [...products];
  const sortFn = sortFunctions[sortBy];
  if (sortFn) sorted.sort(sortFn);
  return sorted;
}
