"use client";

import { Search, Grid, List, ChevronDown } from "lucide-react";

export type SortOption =
  | "name"
  | "price-low"
  | "price-high"
  | "rating"
  | "newest";
export type ViewMode = "grid" | "list";

interface ProductsSearchProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  totalProducts: number;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const sortOptions = [
  { value: "newest" as SortOption, label: "Más Recientes" },
  { value: "name" as SortOption, label: "Nombre A-Z" },
  { value: "price-low" as SortOption, label: "Precio: Menor a Mayor" },
  { value: "price-high" as SortOption, label: "Precio: Mayor a Menor" },
  { value: "rating" as SortOption, label: "Mejor Valorados" },
];

export default function ProductsSearch({
  searchTerm,
  onSearchChange,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
  totalProducts,
  currentPage,
}: ProductsSearchProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
      {/* Search and Controls */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-4">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar productos, categorías, aromas..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F8C8DC] focus:border-transparent outline-none"
          />
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as SortOption)}
              className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-[#F8C8DC] focus:border-transparent outline-none cursor-pointer"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>

          {/* View Mode Toggle */}
          <div className="flex bg-gray-100 rounded-xl p-1">
            <button
              onClick={() => onViewModeChange("grid")}
              className={`p-2 rounded-lg transition-all duration-200 ${
                viewMode === "grid"
                  ? "bg-white shadow-sm text-[#8B1E3F]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => onViewModeChange("list")}
              className={`p-2 rounded-lg transition-all duration-200 ${
                viewMode === "list"
                  ? "bg-white shadow-sm text-[#8B1E3F]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Results Info */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-sm text-[#999999]">
        <div>
          Mostrando {(currentPage - 1) * 12 + 1}-
          {Math.min(currentPage * 12, totalProducts)} de {totalProducts}{" "}
          productos
        </div>
        {searchTerm && (
          <div>
            Resultados para:{" "}
            <span className="font-semibold text-[#8B1E3F]">
              &quot;{searchTerm}&quot;
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
