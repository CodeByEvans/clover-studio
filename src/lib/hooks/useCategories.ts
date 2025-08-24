import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../services/client/categoryApi";

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
}
