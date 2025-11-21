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
  isLoadingCollections: boolean;
  isLoading: boolean;
  productsError: Error | null;
  collectionsError: Error | null;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const {
    data: products,
    status: productsStatus,
    error: productsError,
  } = useProducts();

  const {
    data: collections,
    status: collectionsStatus,
    error: collectionsError,
  } = useCollections();

  const isLoadingProducts = productsStatus === "pending";
  const IsLoadingCollections = collectionsStatus === "pending";
  const isLoading = isLoadingProducts || IsLoadingCollections;

  return (
    <DataContext.Provider
      value={{
        products: products ?? [],
        categories: collections ?? [],
        isLoadingProducts,
        isLoadingCollections: IsLoadingCollections,
        isLoading,
        productsError: productsError as Error | null,
        collectionsError: collectionsError as Error | null,
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
