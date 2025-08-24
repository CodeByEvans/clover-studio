"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Heart,
  Trash2,
  Share2,
  ShoppingBag,
  Grid,
  List,
  Filter,
  ArrowLeft,
} from "lucide-react";
import { useFavorites } from "@/contexts/favorites-context";
import FavoriteProductCard from "./favorite-product-card";
import FavoritesEmpty from "./favorites-empty";
import { useCategories } from "@/lib/hooks/useCategories";
import { CategoryType } from "@/lib/types/Category.type";
import LoadingLayout from "../common/LoadingLayout";

type ViewMode = "grid" | "list";
type SortOption = "recent" | "name" | "price-low" | "price-high" | "category";

const sortOptions = [
  { value: "recent" as SortOption, label: "Agregados Recientemente" },
  { value: "name" as SortOption, label: "Nombre A-Z" },
  { value: "price-low" as SortOption, label: "Precio: Menor a Mayor" },
  { value: "price-high" as SortOption, label: "Precio: Mayor a Menor" },
  { value: "category" as SortOption, label: "Por Categoría" },
];

export default function FavoritesContent() {
  const { favorites, clearFavorites, favoritesCount } = useFavorites();
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [sortBy, setSortBy] = useState<SortOption>("recent");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { data: categoriesData, isLoading, isError } = useCategories();

  if (isLoading) {
    return <LoadingLayout message="Cargando favoritos..." />;
  }

  if (isError) {
    return <div>Error</div>;
  }

  // Get unique categories from favorites
  const categories = [
    "all",
    ...new Set(favorites.map((product) => product.category)),
  ];

  // Filter and sort favorites
  const filteredAndSortedFavorites = favorites
    .filter(
      (product) =>
        selectedCategory === "all" || product.category === selectedCategory
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "category":
          return a.category.localeCompare(b.category);
        case "recent":
        default:
          return 0; // Keep original order (most recent first)
      }
    });

  if (favoritesCount === 0) {
    return <FavoritesEmpty />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/catalogo"
          className="inline-flex items-center gap-2 text-[#999999] hover:text-[#8B1E3F] mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver al catálogo
        </Link>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Heart className="w-10 h-10 text-[#F8C8DC] fill-current" />
              Mis Favoritos
            </h1>
            <p className="text-[#999999]">
              {favoritesCount}{" "}
              {favoritesCount === 1
                ? "producto guardado"
                : "productos guardados"}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={clearFavorites}
              className="flex items-center gap-2 text-[#999999] hover:text-red-500 transition-colors"
            >
              <Trash2 className="w-5 h-5" />
              Limpiar Todo
            </button>
            {/*<button className="flex items-center gap-2 text-[#999999] hover:text-[#8B1E3F] transition-colors">
              <Share2 className="w-5 h-5" />
              Compartir Lista
            </button>*/}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Category Filter */}
          <div className="flex items-center gap-4">
            <Filter className="w-5 h-5 text-[#999999]" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-[#F8C8DC] focus:border-transparent outline-none"
            >
              <option value="all">Todas las Categorías</option>
              {categories.slice(1).map((categoryId) => {
                return (
                  <option key={categoryId} value={categoryId}>
                    {
                      categoriesData?.find(
                        (category: CategoryType) => category.id === categoryId
                      )?.name
                    }
                  </option>
                );
              })}
            </select>
          </div>

          <div className="flex items-center gap-4">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="border border-gray-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-[#F8C8DC] focus:border-transparent outline-none"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            {/* View Mode Toggle */}
            <div className="flex bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === "grid"
                    ? "bg-white shadow-sm text-[#8B1E3F]"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
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
        <div className="mt-4 text-sm text-[#999999]">
          Mostrando {filteredAndSortedFavorites.length} de {favoritesCount}{" "}
          productos favoritos
        </div>
      </div>

      {/* Products Grid/List */}
      <div
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            : "space-y-6"
        }
      >
        {filteredAndSortedFavorites.map((product) => (
          <FavoriteProductCard
            key={product.id}
            product={product}
            category={
              categoriesData?.find(
                (category: CategoryType) => category.id === product.category
              )!
            }
            viewMode={viewMode}
          />
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Listo para consultar tus favoritos?
          </h3>
          <p className="text-[#999999] mb-6">
            Contacta con nosotros para consultar disponibilidad y precios
            especiales de tus productos favoritos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://wa.me/573001234567?text=Hola! Me interesan algunos productos de mi lista de favoritos"
              target="_blank"
              className="bg-[#8B1E3F] hover:bg-[#7a1a37] text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              Consultar Favoritos por WhatsApp
            </Link>
            <Link
              href="/catalogo"
              className="border-2 border-[#F8C8DC] text-[#8B1E3F] hover:bg-[#F8C8DC] px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Seguir Explorando
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
