// providers/data-provider.tsx
"use client";
import { createContext, useContext, ReactNode } from "react";
import { useProducts } from "@/hooks/use-products";
import { Products } from "@/types/product.type";
import { Collections } from "@/types/collection.type";
import { useCollections } from "@/hooks/use-collections";
type DataContextType = {
  products: Products;
  categories: Collections;
  isLoadingProducts: boolean;
  isLoadingCategories: boolean;
  isLoading: boolean;
  productsError: Error | null;
  categoriesError: Error | null;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const {
    data: products,
    status: productsStatus,
    error: productsError,
  } = useProducts();

  const {
    data: categories,
    status: categoriesStatus,
    error: categoriesError,
  } = useCollections();

  const isLoadingProducts = productsStatus === "pending";
  const isLoadingCategories = categoriesStatus === "pending";
  const isLoading = isLoadingProducts || isLoadingCategories;

  return (
    <DataContext.Provider
      value={{
        products: products ?? [],
        categories: categories ?? [],
        isLoadingProducts,
        isLoadingCategories,
        isLoading,
        productsError: productsError as Error | null,
        categoriesError: categoriesError as Error | null,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used within DataProvider");
  return context;
};
