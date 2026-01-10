"use client";
import { productsAPI } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: productsAPI.getAll,
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 10,
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
