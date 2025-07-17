"use client";

import { useState, useMemo } from "react";
import ProductGrid from "./product.grid";
import CatalogFilters from "./catalog-filters";
import CatalogSearch from "../catalog-search";
import { ProductType } from "@/lib/types/Product.type";
import { CategoryType } from "@/lib/types/Category.type";
import { useSearchParams } from "next/navigation";

export type SortOption =
  | "name"
  | "price-low"
  | "price-high"
  | "rating"
  | "newest";
export type ViewMode = "grid" | "list";

export default function CatalogContent({
  products,
  categories,
}: {
  products: ProductType[];
  categories: CategoryType[];
}) {
  const searchParams = useSearchParams();

  const categorySlug = searchParams.get("categoria") || "all";

  const categoryId = useMemo(() => {
    if (categorySlug === "all") return null;
    const matched = categories.find(
      (category) => category.slug === categorySlug
    );
    return matched?.id || null;
  }, [categorySlug, categories]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categoryId || "all");
  const [selectedPriceRange, setSelectedPriceRange] = useState(
    searchParams.get("precio") || "all"
  );
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(
    searchParams.get("caracteristicas")?.split(",") || []
  );
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const onFeaturesChange = (feature: string) => {
    setSelectedFeatures((prev) => {
      if (prev.includes(feature)) {
        return prev.filter((f) => f !== feature);
      } else {
        return [...prev, feature];
      }
    });
  };

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      const matchesFeatures =
        selectedFeatures.length === 0 ||
        selectedFeatures.includes(product.badge?.toLowerCase() ?? "");

      const matchesPriceRange = (() => {
        if (selectedPriceRange === "all") return true;
        const price = product.price;
        switch (selectedPriceRange) {
          case "0-10":
            return price <= 10;
          case "10-20":
            return price > 10 && price <= 20;
          case "20-30":
            return price > 20 && price <= 30;
          case "30+":
            return price > 30;
          default:
            return true;
        }
      })();

      return (
        matchesSearch && matchesCategory && matchesPriceRange && matchesFeatures
      );
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "newest":
          return b.id - a.id;
        default:
          return 0;
      }
    });

    return filtered;
  }, [
    searchTerm,
    selectedCategory,
    selectedPriceRange,
    sortBy,
    selectedFeatures,
    products,
  ]);

  // Pagination
  const totalPages = Math.ceil(
    filteredAndSortedProducts.length / productsPerPage
  );
  const paginatedProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="lg:w-80 flex-shrink-0">
          <CatalogFilters
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedPriceRange={selectedPriceRange}
            onPriceRangeChange={setSelectedPriceRange}
            selectedFeatures={selectedFeatures}
            onFeaturesChange={onFeaturesChange}
            totalProducts={filteredAndSortedProducts.length}
            categories={categories}
            products={products}
          />
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <CatalogSearch
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            sortBy={sortBy}
            onSortChange={setSortBy}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            totalProducts={filteredAndSortedProducts.length}
            currentPage={currentPage}
          />

          <ProductGrid
            products={paginatedProducts}
            viewMode={viewMode}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            categories={categories}
            onChangeSearchTerm={setSearchTerm}
          />
        </main>
      </div>
    </div>
  );
}
