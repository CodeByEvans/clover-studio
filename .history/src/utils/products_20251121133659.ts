import { Products } from "@/types/product.type";

export const getFeaturedProducts = (products: Products): Products => {
  products.filter((product) => product.featured);
  return products;
};
