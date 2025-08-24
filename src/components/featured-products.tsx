"use client";
import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingBag } from "lucide-react";
import { ProductType } from "@/lib/types/Product.type";
import { CategoryType } from "@/lib/types/Category.type";
import FavoriteButton from "./favorites/favorite-button";
import { useState } from "react";
import ContactModal from "./contactModal";

interface FeaturedProductsProps {
  featuredProducts: ProductType[];
  categories: CategoryType[];
}

export default function FeaturedProducts({
  featuredProducts,
  categories,
}: FeaturedProductsProps) {
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null
  );
  return (
    <section id="catalogo" className="py-20 bg-white">
      {showContactModal && (
        <ContactModal
          onClose={() => setShowContactModal(false)}
          productName={selectedProduct?.name || ""}
          productSlug={selectedProduct?.slug || ""}
        />
      )}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Productos Destacados
          </h2>
          <p className="text-xl text-[#999999] max-w-2xl mx-auto">
            Descubre nuestros productos más populares y las últimas creaciones
            de nuestro estudio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product: ProductType) => {
            const category = categories.find(
              (category: CategoryType) => category.id === product.category
            );
            const categoryName = category?.name || product.category;

            return (
              <div
                key={product.id}
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border ${
                  product.type === "sober"
                    ? "border-[#EFE6DD]"
                    : "border-gray-100"
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
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 brightness-90"
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

                  {/* Wishlist Button */}
                  <FavoriteButton
                    product={product}
                    variant="icon"
                    className="absolute top-4 right-4"
                  />
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="text-sm text-[#999999] mb-2">
                    {categoryName}
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
                      {product.rating} ({product.reviews} reseñas)
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
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                      product.type === "sober"
                        ? "bg-[#8B1E3F] hover:bg-[#7a1a37] text-white"
                        : "bg-[#F8C8DC] hover:bg-[#f5b8d1] text-[#8B1E3F]"
                    }`}
                    onClick={() => {
                      setSelectedProduct(product);
                      setShowContactModal(true);
                    }}
                  >
                    <ShoppingBag className="w-5 h-5" />
                    Consultar Disponibilidad
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/catalogo"
            className="inline-flex items-center gap-2 bg-[#D6BA8A] hover:bg-[#c9a876] text-[#8B1E3F] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Ver Todo el Catálogo
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
