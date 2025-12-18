// providers/data-provider.tsx
"use client";
import { createContext, useContext, ReactNode, useMemo } from "react";
import { useProducts } from "@/hooks/use-products";
import { Products } from "@/types/product.type";
import { Collections } from "@/types/collection.type";
import { useCollections } from "@/hooks/use-collections";
import { useNavigation } from "@/hooks/use-navigation";
import { Navigation } from "@/types/navigation.type";
import { HeaderHighlights } from "@/types/header_hightlights.type";
import { useHeaderHighlights } from "@/hooks/use-header-highlights";
import { FragranceCategories, Fragrances } from "@/types/fragances.type";
import { useFragrancesCategories } from "@/hooks/use-fragrancesCategories";
import { useFragrances } from "@/hooks/use-fragrances";

type DataContextType = {
  products: Products;
  collections: Collections;
  navigation: Navigation;
  headerHighlights: HeaderHighlights;
  fragrances: Fragrances;
  fragranceCategories: FragranceCategories;
  isLoadingProducts: boolean;
  isLoadingCollections: boolean;
  isLoadingNavigation: boolean;
  isLoadingHeaderHighlights: boolean;
  isLoadingFragrances: boolean;
  isLoadingFragranceCategories: boolean;
  isLoading: boolean;
  productsError: Error | null;
  collectionsError: Error | null;
  navigationError: Error | null;
  headerHighlightsError: Error | null;
  fragrancesError: Error | null;
  fragranceCategoriesError: Error | null;
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

  const orderedCollections = useMemo(() => {
    return collections
      ? [...collections].sort((a, b) => a.order - b.order)
      : [];
  }, [collections]);

  const {
    data: navigation,
    status: navigationStatus,
    error: navigationError,
  } = useNavigation();

  const {
    data: headerHighlights,
    status: headerHighlightsStatus,
    error: headerHighlightsError,
  } = useHeaderHighlights();

  const {
    data: fragrances,
    status: fragrancesStatus,
    error: fragrancesError,
  } = useFragrances();

  const {
    data: fragranceCategories,
    status: fragranceCategoriesStatus,
    error: fragranceCategoriesError,
  } = useFragrancesCategories();

  const isLoadingProducts = productsStatus === "pending";
  const IsLoadingCollections = collectionsStatus === "pending";
  const isLoadingNavigation = navigationStatus === "pending";
  const isLoadingHeaderHighlights = headerHighlightsStatus === "pending";
  const isLoadingFragrances = fragrancesStatus === "pending";
  const isLoadingFragranceCategories = fragranceCategoriesStatus === "pending";
  const isLoading =
    isLoadingProducts ||
    IsLoadingCollections ||
    isLoadingNavigation ||
    isLoadingHeaderHighlights ||
    isLoadingFragrances ||
    isLoadingFragranceCategories;

  return (
    <DataContext.Provider
      value={{
        products: products ?? [],
        collections: orderedCollections ?? [],
        navigation: navigation ?? [],
        headerHighlights: headerHighlights ?? [],
        fragranceCategories: fragranceCategories ?? [],
        fragrances: fragrances ?? [],
        isLoadingProducts,
        isLoadingCollections: IsLoadingCollections,
        isLoadingNavigation,
        isLoadingHeaderHighlights,
        isLoadingFragrances,
        isLoadingFragranceCategories,
        isLoading,
        productsError: productsError as Error | null,
        collectionsError: collectionsError as Error | null,
        navigationError: navigationError as Error | null,
        headerHighlightsError: headerHighlightsError as Error | null,
        fragrancesError: fragrancesError as Error | null,
        fragranceCategoriesError: fragranceCategoriesError as Error | null,
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
