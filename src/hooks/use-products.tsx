"use client";
import { productsAPI } from "@/services/api";
import { Product, Products } from "@/types/product.type";
import { useQuery } from "@tanstack/react-query";

interface UseProductsOptions {
  collection?: string;
  page?: number;
  perPage?: number;
}

export const useProducts = ({
  collection,
  page = 1,
  perPage = 15,
}: UseProductsOptions = {}) => {
  return useQuery<Products>({
    queryKey: ["products", collection, page, perPage],
    queryFn: () =>
      productsAPI.getList({
        collection,
        page,
        perPage,
      }),
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 10,
  });
};

export const useFeaturedProducts = () => {
  return useQuery<Products>({
    queryKey: ["featured-products"],
    queryFn: productsAPI.getFeatured,
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 10,
  });
};

export const useProductsByCollection = (collectionId: string) => {
  return useQuery<Products>({
    queryKey: ["products-by-collection", collectionId],
    queryFn: () => productsAPI.getByCollection(collectionId),
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 10,
  });
};

export const useProduct = (productId: string) => {
  return useQuery<Product>({
    queryKey: ["product", productId],
    queryFn: async () => productsAPI.getProductById(productId),
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 10,
  });
};
