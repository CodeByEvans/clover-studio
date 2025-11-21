import { getProducts } from "@/utils/supabase/product";
import { useQuery } from "@tanstack/react-query";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    staleTime: 1000 * 60, // 5 minutes
    cacheTime: 1000 * 60 * 60, // 1 hour
  });
};
