import { getProducts } from "@/utils/supabase/product";
import { useQuery } from "@tanstack/react-query";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 10,
  });
};
