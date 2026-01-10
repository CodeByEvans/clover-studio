import { headerHighlightsAPI } from "@/services/api";
import { HeaderHighlights } from "@/@types/header_hightlights.type";
import { useQuery } from "@tanstack/react-query";

export const useHeaderHighlights = () => {
  return useQuery<HeaderHighlights>({
    queryKey: ["header-highlights"],
    queryFn: headerHighlightsAPI.getAll,
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 10,
  });
};
