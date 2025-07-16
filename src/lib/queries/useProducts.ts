import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/productApi";

const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};

export default useProducts;
