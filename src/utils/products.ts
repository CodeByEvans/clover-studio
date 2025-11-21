import { Products } from "@/types/product.type";

export const getFeaturedProducts = (products: Products): Products => {
  return products.filter((product) => product.featured);
};
