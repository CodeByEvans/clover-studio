"use client";

import type React from "react";

import Image from "next/image";
import Link from "next/link";
import { Star, Heart, ShoppingBag, Eye, Trash2 } from "lucide-react";
import { useFavorites } from "@/contexts/favorites-context";
import { CategoryType } from "@/lib/types/Category.type";
import { Product } from "@/lib/types/Product";

interface FavoriteProductCardProps {
  product: Product;
  category: CategoryType;
  viewMode: "grid" | "list";
}

export default function FavoriteProductCard({
  product,
  category,
  viewMode,
}: FavoriteProductCardProps) {
  const { removeFromFavorites } = useFavorites();

  const handleRemoveFromFavorites = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    removeFromFavorites(product.id);
  };

  if (viewMode === "list") {
    return (
      <div
        className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border ${
          product.type === "sober" ? "border-[#EFE6DD]" : "border-gray-100"
        }`}
      >
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="relative md:w-64 h-48 md:h-auto overflow-hidden">
            <Link href={`/catalogo/${product.slug}`}>
              <Image
                src={product.images[0].large || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </Link>
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
              <div className="flex-1">
                <div className="text-sm text-[#999999] mb-1">
                  {category.name}
                </div>
                <Link href={`/catalogo/${product.id}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-[#8B1E3F] transition-colors">
                    {product.name}
                  </h3>
                </Link>

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

              <button
                onClick={handleRemoveFromFavorites}
                className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                title="Quitar de favoritos"
              >
                <Trash2 className="w-5 h-5" />
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
                <Link
                  href={`/catalogo/${product.slug}`}
                  className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Eye className="w-5 h-5 text-gray-600" />
                </Link>
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
        <Link href={`/catalogo/${product.slug}`}>
          <Image
            src={product.images[0].large || "/placeholder.svg"}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

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
          <button
            onClick={handleRemoveFromFavorites}
            className="w-10 h-10 bg-red-500/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
            title="Quitar de favoritos"
          >
            <Heart className="w-5 h-5 text-white fill-current" />
          </button>
          <Link
            href={`/catalogo/${product.slug}`}
            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
          >
            <Eye className="w-5 h-5 text-gray-600 hover:text-[#8B1E3F]" />
          </Link>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="text-sm text-[#999999] mb-2">
          {product.category.name}
        </div>

        <Link href={`/catalogo/${product.slug}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#8B1E3F] transition-colors">
            {product.name}
          </h3>
        </Link>

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
        <button
          className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
            product.type === "sober"
              ? "bg-[#8B1E3F] hover:bg-[#7a1a37] text-white"
              : "bg-[#F8C8DC] hover:bg-[#f5b8d1] text-[#8B1E3F]"
          }`}
        >
          <ShoppingBag className="w-5 h-5" />
          Consultar Disponibilidad
        </button>
      </div>
    </div>
  );
}
