import { getCollections } from "@/utils/supabase/collections";
import { useQuery } from "@tanstack/react-query";

export const useCollections = () => {
  return useQuery({
    queryKey: ["collections"],
    queryFn: getCollections,
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 10,
  });
};
