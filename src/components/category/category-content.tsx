"use client";
// CategoryContent.tsx
import { useState, useMemo } from "react";
import ProductGrid from "@/components/products/product-grid";
import CategoryHeader from "./category-header";
import CategoryFilters from "./category-filters";
import useProducts from "@/lib/hooks/useProducts";
import LoadingLayout from "../common/LoadingLayout";
import { Heart } from "lucide-react";
import ProductsSearch from "./category-search";

export type SortOption =
  | "name"
  | "price-low"
  | "price-high"
  | "rating"
  | "newest";
export type ViewMode = "grid" | "list";

interface CategoryContentProps {
  categoryId: string;
  category: {
    name: string;
    description: string;
    type: "sober" | "colorful";
  };
}

export default function CategoryContent({
  categoryId,
  category,
}: CategoryContentProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const productsPerPage = 12;

  const { data: products, isLoading, isError } = useProducts();

  // Filter products for this category
  const categoryProducts = products?.filter(
    (product) => product.category.id === categoryId
  );

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    if (
      !products ||
      !Array.isArray(products) ||
      products.length === 0 ||
      !categoryProducts
    ) {
      return [];
    }
    const filtered = categoryProducts.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

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

      return matchesSearch && matchesPriceRange;
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
  }, [products, categoryProducts, searchTerm, selectedPriceRange, sortBy]);

  // Pagination
  const totalPages = Math.ceil(
    filteredAndSortedProducts.length / productsPerPage
  );
  const paginatedProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  if (isLoading) {
    return <LoadingLayout message="Cargando productos..." />;
  }
  if (isError) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-[#FEFCF9] to-[#F9F7F3] flex items-center justify-center">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/60 text-center max-w-md">
          <div className="w-16 h-16 bg-gradient-to-br from-[#F8C8DC] to-[#f5b8d1] rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-[#8B1E3F]" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ¡Oops! Algo salió mal
          </h2>
          <p className="text-[#999999] mb-6">
            No pudimos cargar los productos en este momento. Por favor,
            inténtalo de nuevo.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-gradient-to-r from-[#F8C8DC] to-[#f5b8d1] text-[#8B1E3F] px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <CategoryHeader
        category={category}
        totalProducts={categoryProducts?.length ?? 0}
        colorScheme={category.type}
      />

      {/* Simple Main Content Section */}
      <section className="relative py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Simple Sidebar */}
            <aside className="lg:w-80 flex-shrink-0">
              <div className="sticky top-8">
                <CategoryFilters
                  selectedPriceRange={selectedPriceRange}
                  onPriceRangeChange={setSelectedPriceRange}
                  searchTerm={searchTerm}
                  onSearchChange={setSearchTerm}
                  sortBy={sortBy}
                  onSortChange={setSortBy}
                  viewMode={viewMode}
                  onViewModeChange={setViewMode}
                  totalProducts={filteredAndSortedProducts.length}
                  colorScheme={category.type}
                  products={categoryProducts || []}
                  selectedFeatures={selectedFeatures}
                  onFeaturesChange={setSelectedFeatures}
                />
              </div>
            </aside>

            {/* Simple Main Content */}
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

              <div className="relative">
                <ProductGrid
                  products={paginatedProducts}
                  viewMode={viewMode}
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
