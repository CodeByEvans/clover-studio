import { fragancesAPI } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export const useFragrances = () => {
  return useQuery({
    queryKey: ["fragrances"],
    queryFn: fragancesAPI.getAll,
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 10,
  });
};
