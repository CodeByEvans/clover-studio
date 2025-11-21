import { collectionsAPI } from "@/services/api";
import { getCollections } from "@/utils/supabase/collections";
import { useQuery } from "@tanstack/react-query";

export const useCollections = () => {
  return useQuery({
    queryKey: ["collections"],
    queryFn: collectionsAPI.getAll,
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 10,
  });
};
