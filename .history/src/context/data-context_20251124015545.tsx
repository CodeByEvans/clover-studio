// providers/data-provider.tsx
"use client";
import { createContext, useContext, ReactNode } from "react";
import { useProducts } from "@/hooks/use-products";
import { Products } from "@/types/product.type";
import { Collections } from "@/types/collection.type";
import { useCollections } from "@/hooks/use-collections";
import { useNavigation } from "@/hooks/use-navigation";
import { Navigation } from "@/types/navigation.type";

type DataContextType = {
  products: Products;
  collections: Collections;
  navigation: Navigation;
  isLoadingProducts: boolean;
  isLoadingCollections: boolean;
  isLoadingNavigation: boolean;
  isLoading: boolean;
  productsError: Error | null;
  collectionsError: Error | null;
  navigationError: Error | null;
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

  const {
    data: navigation,
    status: navigationStatus,
    error: navigationError,
  } = useNavigation();

  const isLoadingProducts = productsStatus === "pending";
  const IsLoadingCollections = collectionsStatus === "pending";
  const isLoadingNavigation = navigationStatus === "pending";
  const isLoading =
    isLoadingProducts || IsLoadingCollections || isLoadingNavigation;

  return (
    <DataContext.Provider
      value={{
        products: products ?? [],
        collections: collections ?? [],
        navigation: navigation ?? [],
        isLoadingProducts,
        isLoadingCollections: IsLoadingCollections,
        isLoadingNavigation,
        isLoading,
        productsError: productsError as Error | null,
        collectionsError: collectionsError as Error | null,
        navigationError: navigationError as Error | null,
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
