"use client";

import Image from "next/image";
import { Star, Heart, ShoppingBag, Eye } from "lucide-react";
import type { ViewMode } from "./catalog-content";
import type { ProductType } from "@/lib/types/Product.type";
import { CategoryType } from "@/lib/types/Category.type";
import { Dispatch, useState } from "react";
import ContactModal from "../contactModal";
import Link from "next/link";
import FavoriteButton from "../favorites/favorite-button";

interface ProductGridProps {
  products: ProductType[];
  viewMode: ViewMode;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  categories: CategoryType[];
  onChangeSearchTerm: (term: string) => void;
}

export default function ProductGrid({
  products,
  viewMode,
  currentPage,
  totalPages,
  onPageChange,
  categories,
  onChangeSearchTerm,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="w-12 h-12 text-gray-400" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          No se encontraron productos
        </h3>
        <p className="text-[#999999] mb-6">
          Intenta ajustar tus filtros o términos de búsqueda
        </p>
        <button
          className="bg-[#F8C8DC] hover:bg-[#f5b8d1] text-[#8B1E3F] px-6 py-3 rounded-xl font-semibold transition-colors"
          onClick={() => onChangeSearchTerm("")}
        >
          Ver Todos los Productos
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Products Grid/List */}
      <div
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            : "space-y-6"
        }
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            viewMode={viewMode}
            categories={categories}
          />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-12">
          <button
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Anterior
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentPage === page
                  ? "bg-[#8B1E3F] text-white"
                  : "border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Siguiente
          </button>
        </div>
      )}
    </>
  );
}

function ProductCard({
  product,
  viewMode,
  categories,
}: {
  product: ProductType;
  viewMode: ViewMode;
  categories: CategoryType[];
}) {
  const category = categories.find(
    (category: CategoryType) => category.id === product.category
  );
  const categoryName = category?.name || product.category;

  const getColorClasses = () => {
    switch (product.type) {
      case "sober":
        return {
          title: "text-[#8B1E3F]",
          card: "bg-white border-[#EFE6DD] hover:shadow-xl",
          button: "bg-[#8B1E3F] hover:bg-[#7a1a37] text-white",
          price: "text-[#8B1E3F]",
          category: "text-[#D6BA8A]",
        };
      case "colorful":
        return {
          title:
            "bg-gradient-to-r from-[#8B1E3F] to-[#D3B5E5] bg-clip-text text-transparent",
          card: "bg-white/80 backdrop-blur-sm border-[#F8C8DC]/50 hover:shadow-2xl",
          button:
            "bg-gradient-to-r from-[#F8C8DC] to-[#D3B5E5] hover:from-[#f5b8d1] hover:to-[#c9a8db] text-[#8B1E3F]",
          price: "text-[#8B1E3F]",
          category: "text-[#D3B5E5]",
        };
      default:
        return {
          title: "text-gray-900",
          card: "bg-white border-gray-100 hover:shadow-xl",
          button: "bg-[#F8C8DC] hover:bg-[#f5b8d1] text-[#8B1E3F]",
          price: "text-[#8B1E3F]",
          category: "text-[#999999]",
        };
    }
  };

  const colors = getColorClasses();

  if (viewMode === "list") {
    return (
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="relative md:w-64 h-48 md:h-auto overflow-hidden">
            <Image
              src={product.images[0].large || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
            {product.badge && (
              <div
                className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold ${
                  product.badge === "Bestseller"
                    ? "bg-[#8B1E3F] text-white"
                    : product.badge === "Nuevo"
                    ? "bg-[#BEE8CC] text-[#8B1E3F]"
                    : product.badge === "Exclusivo"
                    ? "bg-[#D3B5E5] text-[#8B1E3F]"
                    : product.badge === "Oferta"
                    ? "bg-[#FDE68A] text-[#8B1E3F]"
                    : "bg-[#F8C8DC] text-[#8B1E3F]"
                }`}
              >
                {product.badge}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="text-sm text-[#999999] mb-1">
                  {categoryName}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-[#FDE68A] fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-[#999999]">
                    {product.rating} ({product.reviews} reseñas)
                  </span>
                </div>
              </div>

              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Heart className="w-5 h-5 text-gray-400 hover:text-[#8B1E3F]" />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-[#8B1E3F]">
                  {product.price}€
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-[#999999] line-through">
                    {product.originalPrice}€
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Eye className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2 ${
                    product.type === "sober"
                      ? "bg-[#8B1E3F] hover:bg-[#7a1a37] text-white"
                      : "bg-[#F8C8DC] hover:bg-[#f5b8d1] text-[#8B1E3F]"
                  }`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  Consultar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid view (default)
  return (
    <div
      className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border ${
        product.type === "sober" ? "border-[#EFE6DD]" : "border-gray-100"
      }`}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <Image
          src={product.images[0].large || "/placeholder.svg"}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badge */}
        {product.badge && (
          <div
            className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold ${
              product.badge === "Bestseller"
                ? "bg-[#8B1E3F] text-white"
                : product.badge === "Nuevo"
                ? "bg-[#BEE8CC] text-[#8B1E3F]"
                : product.badge === "Exclusivo"
                ? "bg-[#D3B5E5] text-[#8B1E3F]"
                : product.badge === "Oferta"
                ? "bg-[#FDE68A] text-[#8B1E3F]"
                : "bg-[#F8C8DC] text-[#8B1E3F]"
            }`}
          >
            {product.badge}
          </div>
        )}

        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <FavoriteButton
            product={product}
            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
            variant="icon"
          />
          <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
            <Eye className="w-5 h-5 text-gray-600 hover:text-[#8B1E3F]" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="text-sm text-[#999999] mb-2">{categoryName}</div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#8B1E3F] transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? "text-[#FDE68A] fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-[#999999]">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-[#8B1E3F]">
            {product.price}€
          </span>
          {product.originalPrice && (
            <span className="text-lg text-[#999999] line-through">
              {product.originalPrice}€
            </span>
          )}
        </div>

        {/* CTA Button */}
        <Link href={`/catalogo/${product.slug}`} className="w-full">
          <button
            className={`w-full py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm ${colors.button}`}
          >
            <ShoppingBag className="w-5 h-5" />
            Ver Producto
          </button>
        </Link>
      </div>
    </div>
  );
}
