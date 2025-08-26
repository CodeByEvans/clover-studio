"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import {
  Search,
  X,
  Clock,
  TrendingUp,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import useProducts from "@/lib/hooks/useProducts";
import { useCategories } from "@/lib/hooks/useCategories";
import { Product } from "@/lib/types/Product";
import { CategoryType } from "@/lib/types/Category.type";
import LoadingLayout from "../common/LoadingLayout";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const popularSearches = [
  "velas lavanda",
  "wax melts tropical",
  "quemadores cerámica",
  "rosas personalizadas",
  "packs regalo",
  "velas decorativas",
];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  // HOOKS: se llaman siempre, sin condicionales
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    data: products,
    isLoading: productsLoading,
    error: productsError,
  } = useProducts();
  const {
    data: categories,
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useCategories();

  const trendingProducts =
    products
      ?.filter((p) => p.badge === "Bestseller" || p.badge === "Nuevo")
      .slice(0, 4) || [];

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("clover-recent-searches");
    if (saved) {
      try {
        setRecentSearches(JSON.parse(saved));
      } catch (error) {
        console.error("Error loading recent searches:", error);
      }
    }
  }, []);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Search functionality
  useEffect(() => {
    if (!products) return;

    if (searchTerm.trim().length === 0) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const timer = setTimeout(() => {
      const filtered = products.filter((product) => {
        const searchLower = searchTerm.toLowerCase();
        return (
          product.name.toLowerCase().includes(searchLower) ||
          product.category.name.toLowerCase().includes(searchLower) ||
          product.description?.toLowerCase().includes(searchLower) ||
          product.features?.some((feature) =>
            feature.toLowerCase().includes(searchLower)
          )
        );
      });
      setSearchResults(filtered.slice(0, 8));
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, products]);

  if (productsLoading || categoriesLoading)
    return <LoadingLayout message="Cargando..." />;
  if (productsError || categoriesError) return <div>Error al cargar</div>;
  if (!products || !categories) return <div>No hay datos</div>;

  const handleSearch = (term: string) => {
    if (term.trim()) {
      // Add to recent searches
      const newRecentSearches = [
        term,
        ...recentSearches.filter((s) => s !== term),
      ].slice(0, 5);
      setRecentSearches(newRecentSearches);
      localStorage.setItem(
        "clover-recent-searches",
        JSON.stringify(newRecentSearches)
      );

      // Navigate to search results
      window.location.href = `/productos?search=${encodeURIComponent(term)}`;
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch(searchTerm);
    }
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem("clover-recent-searches");
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-x-0 top-0 z-50 bg-white shadow-2xl">
        <div className="container mx-auto px-4">
          {/* Search Header */}
          <div className="flex items-center gap-4 py-6 border-b border-gray-100">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Buscar productos, categorías, aromas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full pl-14 pr-4 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-[#F8C8DC] focus:ring-0 outline-none transition-colors"
              />
              {isSearching && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-5 h-5 border-2 border-[#F8C8DC] border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-3 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Search Content */}
          <div className="py-6 max-h-[70vh] overflow-y-auto">
            {searchTerm.trim() === "" ? (
              /* Default State */
              <div className="space-y-8">
                {/* Recent Searches */}
                {recentSearches.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-[#8B1E3F]" />
                        Búsquedas Recientes
                      </h3>
                      <button
                        onClick={clearRecentSearches}
                        className="text-sm text-[#999999] hover:text-[#8B1E3F] transition-colors"
                      >
                        Limpiar
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {recentSearches.map((search, index) => (
                        <button
                          key={index}
                          onClick={() => handleSearch(search)}
                          className="px-4 py-2 bg-gray-100 hover:bg-[#F8C8DC] text-gray-700 hover:text-[#8B1E3F] rounded-full transition-colors text-sm"
                        >
                          {search}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Popular Searches */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-[#8B1E3F]" />
                    Búsquedas Populares
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => handleSearch(search)}
                        className="px-4 py-2 bg-[#F8C8DC]/20 hover:bg-[#F8C8DC] text-[#8B1E3F] rounded-full transition-colors text-sm font-medium"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Explorar Categorías
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {categories.map((category: CategoryType) => (
                      <Link
                        key={category.id}
                        href={`/categorias/${category.slug}`}
                        onClick={onClose}
                        className="p-4 bg-gray-50 hover:bg-[#F8C8DC]/20 rounded-xl transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900 group-hover:text-[#8B1E3F]">
                            {category.name}
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#8B1E3F] transform group-hover:translate-x-1 transition-all" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Trending Products */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#8B1E3F]" />
                    Productos Destacados
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {trendingProducts.map((product) => (
                      <Link
                        key={product.id}
                        href={`/productos/${product.id}`}
                        onClick={onClose}
                        className="group"
                      >
                        <div className="bg-gray-50 rounded-xl p-3 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                          <div className="aspect-square bg-white rounded-lg overflow-hidden mb-3">
                            <Image
                              src={
                                product.images[0].large || "/placeholder.svg"
                              }
                              alt={product.name}
                              width={150}
                              height={150}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <h4 className="font-medium text-gray-900 text-sm mb-1 line-clamp-2 group-hover:text-[#8B1E3F]">
                            {product.name}
                          </h4>
                          <p className="text-xs text-[#999999] mb-2">
                            {product.category.name}
                          </p>
                          <p className="font-bold text-[#8B1E3F]">
                            €{product.price}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Search Results */
              <div>
                {searchResults.length > 0 ? (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {searchResults.length} resultado
                        {searchResults.length !== 1 ? "s" : ""} para &quot;
                        {searchTerm}&quot;
                      </h3>
                      <Link
                        href={`/productos?search=${encodeURIComponent(
                          searchTerm
                        )}`}
                        onClick={onClose}
                        className="text-[#8B1E3F] hover:text-[#7a1a37] font-medium text-sm flex items-center gap-1"
                      >
                        Ver todos
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                    <div className="space-y-4">
                      {searchResults.map((product) => (
                        <Link
                          key={product.id}
                          href={`/productos/${product.id}`}
                          onClick={onClose}
                          className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-xl transition-colors group"
                        >
                          <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={
                                product.images[0].large || "/placeholder.svg"
                              }
                              alt={product.name}
                              width={64}
                              height={64}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 group-hover:text-[#8B1E3F] mb-1">
                              {product.name}
                            </h4>
                            <p className="text-sm text-[#999999] mb-2">
                              {product.category.name}
                            </p>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-[#8B1E3F]">
                                €{product.price}
                              </span>
                              {product.badge && (
                                <span className="px-2 py-1 bg-[#F8C8DC] text-[#8B1E3F] text-xs rounded-full font-medium">
                                  {product.badge}
                                </span>
                              )}
                            </div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#8B1E3F] transform group-hover:translate-x-1 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* No Results */
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      No se encontraron resultados
                    </h3>
                    <p className="text-[#999999] mb-6">
                      No encontramos productos que coincidan con &quot;
                      {searchTerm}&quot;
                    </p>
                    <div className="space-y-3">
                      <p className="text-sm text-gray-600">Intenta con:</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {popularSearches.slice(0, 3).map((search, index) => (
                          <button
                            key={index}
                            onClick={() => setSearchTerm(search)}
                            className="px-3 py-1 bg-[#F8C8DC]/20 hover:bg-[#F8C8DC] text-[#8B1E3F] rounded-full transition-colors text-sm"
                          >
                            {search}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
