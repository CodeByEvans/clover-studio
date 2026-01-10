import { navigationAPI } from "@/services/api";
import { Navigation } from "@/@types/navigation.type";
import { useQuery } from "@tanstack/react-query";

export const useNavigation = () => {
  return useQuery<Navigation>({
    queryKey: ["navigation"],
    queryFn: navigationAPI.getAll,
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 10,
  });
};
