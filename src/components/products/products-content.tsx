"use client";

import { useState, useMemo, useEffect } from "react";
import ProductGrid from "./product-grid";
import ProductsFilters from "./products-filters";
import ProductsSearch from "./products-search";
import useProducts from "@/lib/hooks/useProducts";
import LoadingLayout from "../common/LoadingLayout";
import { useCategories } from "@/lib/hooks/useCategories";
import { useSearchParams } from "next/navigation";

export type SortOption =
  | "name"
  | "price-low"
  | "price-high"
  | "rating"
  | "newest";
export type ViewMode = "grid" | "list";

export default function ProductsContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  useEffect(() => {
    setSearchTerm(searchQuery);
  }, [searchQuery]);

  const {
    data: products,
    isLoading: productsLoading,
    isError: productsError,
  } = useProducts();
  const {
    data: categories,
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useCategories(); // Assuming categories are fetched similarly

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    if (!products || !Array.isArray(products) || products.length === 0) {
      return [];
    }
    const filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        product.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.features?.some((feature) =>
          feature.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "all" || product.category.id === selectedCategory;

      const matchesPriceRange = (() => {
        if (selectedPriceRange === "all") return true;
        const price = product.price;
        switch (selectedPriceRange) {
          case "0-20000":
            return price <= 20000;
          case "20000-40000":
            return price > 20000 && price <= 40000;
          case "40000-60000":
            return price > 40000 && price <= 60000;
          case "60000+":
            return price > 60000;
          default:
            return true;
        }
      })();

      const matchesFeatures =
        selectedFeatures.length === 0 ||
        selectedFeatures.some((feature) =>
          product.badge?.toLowerCase().includes(feature.toLowerCase())
        );

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
    products,
    searchTerm,
    selectedCategory,
    selectedPriceRange,
    selectedFeatures,
    sortBy,
  ]);

  // Pagination
  const totalPages = Math.ceil(
    filteredAndSortedProducts.length / productsPerPage
  );
  const paginatedProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  if (productsLoading || categoriesLoading) {
    return <LoadingLayout message="Cargando productos..." />;
  }

  if (productsError || categoriesError) {
    return <div className="text-center py-20">Error al cargar productos</div>;
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-white to-[#F9F7F3] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Catálogo de Productos
            </h1>
            <p className="text-xl text-[#999999] mb-8">
              Explora nuestra colección completa de productos aromáticos
              artesanales con filtros avanzados para encontrar exactamente lo
              que buscas.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-80 flex-shrink-0">
            <ProductsFilters
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              selectedPriceRange={selectedPriceRange}
              onPriceRangeChange={setSelectedPriceRange}
              selectedFeatures={selectedFeatures}
              onFeaturesChange={setSelectedFeatures}
              totalProducts={filteredAndSortedProducts.length}
              categories={categories}
              products={products || []}
            />
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <ProductsSearch
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              sortBy={sortBy}
              onSortChange={setSortBy}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              totalProducts={filteredAndSortedProducts.length}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />

            <ProductGrid
              products={paginatedProducts}
              viewMode={viewMode}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </main>
        </div>
      </div>
    </div>
  );
}
