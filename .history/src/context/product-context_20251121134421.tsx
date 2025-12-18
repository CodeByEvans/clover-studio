"use client";
import { createContext, useContext, ReactNode } from "react";
import { useProducts } from "@/hooks/use-products";
import { Product } from "@/types/product.type";
import LoadingLayout from "@/app/loading";

type ProductsContextType = {
  products: Product[];
};

const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const { data: products, status, error } = useProducts();

  if (status === "pending") return <LoadingLayout />;
  if (status === "error") return <p>Error: {(error as Error).message}</p>;

  return (
    <ProductsContext.Provider value={{ products: products! }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  const context = useContext(ProductsContext);
  if (!context)
    throw new Error("useProductsContext must be used within ProductsProvider");
  return context;
};
