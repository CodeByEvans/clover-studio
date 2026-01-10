import { collectionsAPI } from "@/services/api";
import { Collections } from "@/@types/collection.type";

import { useQuery } from "@tanstack/react-query";

export const useCollections = () => {
  return useQuery<Collections>({
    queryKey: ["collections"],
    queryFn: collectionsAPI.getAll,
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 10,
  });
};
