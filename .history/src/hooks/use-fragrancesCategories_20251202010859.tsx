import { fraganceCategoriesAPI } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export const useFragrancesCategories = () => {
  return useQuery({
    queryKey: ["fragrancesCategories"],
    queryFn: fraganceCategoriesAPI.getAll,
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 10,
  });
};
