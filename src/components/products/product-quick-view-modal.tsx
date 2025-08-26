"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Star, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/cart-context";
import FavoriteButton from "@/components/favorites/favorite-button";
import { Product } from "@/lib/types/Product";

interface ProductQuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductQuickViewModal({
  product,
  isOpen,
  onClose,
}: ProductQuickViewModalProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!isOpen || !product) return null;

  const priceInEuros = `€${product.price}`;
  const originalPriceInEuros = product.originalPrice
    ? `${product.originalPrice}€`
    : undefined;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900">Vista Rápida</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Image */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden">
                <Image
                  src={product.images[0].large || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Badge */}
              {product.badge && (
                <div className="inline-block">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      product.type === "sober"
                        ? "bg-[#8B1E3F] text-white"
                        : "bg-[#F8C8DC] text-[#8B1E3F]"
                    }`}
                  >
                    {product.badge}
                  </span>
                </div>
              )}

              {/* Title and Category */}
              <div>
                <p className="text-[#999999] text-sm mb-2">
                  {product.category.name}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h3>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
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
                <span className="text-gray-900 font-medium">
                  {product.rating}
                </span>
                <span className="text-[#999999]">
                  ({product.reviews} reseñas)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-[#8B1E3F]">
                  {priceInEuros}
                </span>
                {originalPriceInEuros && (
                  <span className="text-xl text-[#999999] line-through">
                    {originalPriceInEuros}
                  </span>
                )}
              </div>

              {/* Description */}
              <div className="prose prose-gray max-w-none">
                <p className="text-[#999999] leading-relaxed">
                  {product.description ||
                    "Producto artesanal único creado con los mejores materiales y técnicas tradicionales."}
                </p>
              </div>

              {/* Features */}
              {product.features && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Características:
                  </h4>
                  <ul className="space-y-2">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-[#999999]"
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${
                            product.type === "sober"
                              ? "bg-[#D6BA8A]"
                              : "bg-[#F8C8DC]"
                          }`}
                        ></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Quantity and Actions */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label className="font-medium text-gray-900">Cantidad:</label>
                  <div className="flex items-center border border-gray-200 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 hover:bg-gray-50 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 border-x border-gray-200">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 hover:bg-gray-50 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleAddToCart}
                    className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 ${
                      product.type === "sober"
                        ? "bg-[#8B1E3F] hover:bg-[#7a1a37] text-white"
                        : "bg-[#F8C8DC] hover:bg-[#f5b8d1] text-[#8B1E3F]"
                    }`}
                  >
                    <ShoppingBag className="w-5 h-5" />
                    Añadir al Carrito
                  </button>

                  <FavoriteButton product={product} variant="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
