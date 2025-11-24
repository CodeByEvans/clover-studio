import { headerHighlightsAPI } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export const useHeaderHighlights = () => {
  return useQuery({
    queryKey: ["header-highlights"],
    queryFn: headerHighlightsAPI.getAll,
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 10,
  });
};
