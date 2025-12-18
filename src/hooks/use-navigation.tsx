import { navigationAPI } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export const useNavigation = () => {
  return useQuery({
    queryKey: ["navigation"],
    queryFn: navigationAPI.getAll,
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 10,
  });
};
