"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingBag, Eye, Plus } from "lucide-react";

import { useCart } from "@/contexts/cart-context";
import FavoriteButton from "@/components/favorites/favorite-button";
import ProductQuickViewModal from "./product-quick-view-modal";
import { Product } from "@/lib/types/Product";
import { useNotifications } from "@/contexts/notifications-context";

export type ViewMode = "grid" | "list";

interface ProductGridProps {
  products: Product[];
  viewMode: ViewMode;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function ProductGrid({
  products,
  viewMode,
  currentPage,
  totalPages,
  onPageChange,
}: ProductGridProps) {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(
    null
  );
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const handleQuickView = (product: Product, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  const closeQuickView = () => {
    setIsQuickViewOpen(false);
    setQuickViewProduct(null);
  };

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
        <button className="bg-[#F8C8DC] hover:bg-[#f5b8d1] text-[#8B1E3F] px-6 py-3 rounded-xl font-semibold transition-colors">
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
            onQuickView={handleQuickView}
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

      {/* Quick View Modal */}
      <ProductQuickViewModal
        product={quickViewProduct}
        isOpen={isQuickViewOpen}
        onClose={closeQuickView}
      />
    </>
  );
}

function ProductCard({
  product,
  viewMode,
  onQuickView,
}: {
  product: Product;
  viewMode: ViewMode;
  onQuickView: (product: Product, e: React.MouseEvent) => void;
}) {
  const { addToCart } = useCart();
  const { showSuccess } = useNotifications();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);

    showSuccess(
      "¡Producto Agregado!",
      `${product.name} (${product.price}€) ha sido añadido al carrito`,
      3000
    );
  };

  const priceInEuros = `${product.price}€`;
  const originalPriceInEuros = product.originalPrice
    ? `${product.originalPrice}€`
    : undefined;

  if (viewMode === "list") {
    return (
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <Link
            href={`/productos/${product.slug}`}
            className="relative md:w-64 h-48 md:h-auto overflow-hidden"
          >
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
          </Link>

          {/* Content */}
          <div className="flex-1 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="text-sm text-[#999999] mb-1">
                  {product.category.name}
                </div>
                <Link href={`/productos/${product.id}`}>
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

              <FavoriteButton product={product} variant="icon" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-[#8B1E3F]">
                  {priceInEuros}
                </span>
                {originalPriceInEuros && (
                  <span className="text-lg text-[#999999] line-through">
                    {originalPriceInEuros}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => onQuickView(product, e)}
                  className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Eye className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  onClick={handleAddToCart}
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2 ${
                    product.type === "sober"
                      ? "bg-[#8B1E3F] hover:bg-[#7a1a37] text-white"
                      : "bg-[#F8C8DC] hover:bg-[#f5b8d1] text-[#8B1E3F]"
                  }`}
                >
                  <Plus className="w-4 h-4" />
                  Añadir
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
      <Link
        href={`/productos/${product.slug}`}
        className="relative overflow-hidden block"
      >
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
          <FavoriteButton product={product} variant="icon" />
          <button
            onClick={(e) => onQuickView(product, e)}
            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
          >
            <Eye className="w-5 h-5 text-gray-600 hover:text-[#8B1E3F]" />
          </button>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-6">
        <div className="text-sm text-[#999999] mb-2">
          {product.category.name}
        </div>

        <Link href={`/productos/${product.id}`}>
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
            {priceInEuros}
          </span>
          {originalPriceInEuros && (
            <span className="text-lg text-[#999999] line-through">
              {originalPriceInEuros}
            </span>
          )}
        </div>

        {/* CTA Button */}
        <button
          onClick={handleAddToCart}
          className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
            product.type === "sober"
              ? "bg-[#8B1E3F] hover:bg-[#7a1a37] text-white"
              : "bg-[#F8C8DC] hover:bg-[#f5b8d1] text-[#8B1E3F]"
          }`}
        >
          <Plus className="w-5 h-5" />
          Añadir al Carrito
        </button>
      </div>
    </div>
  );
}
