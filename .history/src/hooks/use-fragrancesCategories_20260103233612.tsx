import { fraganceCategoriesAPI } from "@/services/api";
import { FragranceCategories } from "@/types/fragances.type";
import { useQuery } from "@tanstack/react-query";

export const useFragrancesCategories = () => {
  return useQuery<FragranceCategories>({
    queryKey: ["fragrancesCategories"],
    queryFn: fraganceCategoriesAPI.getAll,
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 10,
  });
};
