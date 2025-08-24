import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/client/productApi";

const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};

export default useProducts;
