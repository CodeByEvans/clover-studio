"use client";
import { productsAPI } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

interface UseProductsOptions {
  search?: string;
  collection?: string;
  page?: number;
  perPage?: number;
}

export const useProducts = ({
  search,
  collection,
  page = 1,
  perPage = 15,
}: UseProductsOptions = {}) => {
  return useQuery({
    queryKey: ["products", search, collection, page, perPage],
    queryFn: () =>
      productsAPI.list({
        search,
        collection,
        page,
        perPage,
      }),
    staleTime: 1000 * 60, // 1 minuto
    gcTime: 1000 * 60 * 10, // 10 minutos
  });
};

export const useFeaturedProducts = () => {
  return useQuery({
    queryKey: ["featured-products"],
    queryFn: productsAPI.getFeatured,
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 10,
  });
};

export const useProductsByCollection = (collectionSlug: string) => {
  return useQuery({
    queryKey: ["products", collectionSlug],
    queryFn: () => productsAPI.getByCollection(collectionSlug),
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 10,
  });
};
