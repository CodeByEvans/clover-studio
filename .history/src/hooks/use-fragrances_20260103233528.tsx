import { fragancesAPI } from "@/services/api";
import { Fragrances } from "@/types/fragances.type";
import { useQuery } from "@tanstack/react-query";

export const useFragrances = () => {
  return useQuery<Fragrances>({
    queryKey: ["fragrances"],
    queryFn: fragancesAPI.getAll,
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 10,
  });
};
