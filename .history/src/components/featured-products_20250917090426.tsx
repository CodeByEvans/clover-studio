// FeaturedProducts.tsx - Redesigned
"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  ShoppingBag,
  Sparkles,
  Heart,
  Zap,
  ArrowRight,
} from "lucide-react";

import { CategoryType } from "@/lib/types/Category.type";
import FavoriteButton from "./favorites/favorite-button";
import { Product } from "@/lib/types/Product";
import { useCart } from "@/contexts/cart-context";
import { useNotifications } from "@/contexts/notifications-context";

interface FeaturedProductsProps {
  featuredProducts: Product[];
  categories: CategoryType[];
}

export default function FeaturedProducts({
  featuredProducts,
}: FeaturedProductsProps) {
  const { addToCart } = useCart();
  const { showSuccess } = useNotifications();

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault(); // Prevenir navegación
    e.stopPropagation(); // Evitar que el evento burbujee
    addToCart(product);
    showSuccess(
      "¡Producto Agregado!",
      `${product.name} (${product.price}€) ha sido añadido al carrito`,
      3000
    );
  };

  return (
    <section
      id="catalogo"
      className="py-24 bg-gradient-to-br from-white via-[#FEFCF9] to-[#F9F7F3] relative overflow-hidden"
    >
      {/* Enhanced floating elements */}
      <div className="absolute top-16 left-16 opacity-15 animate-float">
        <Sparkles className="w-12 h-12 text-[#F8C8DC]" />
      </div>
      <div
        className="absolute bottom-20 right-20 opacity-15 animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        <Heart className="w-8 h-8 text-[#D3B5E5]" />
      </div>
      <div
        className="absolute top-1/3 left-1/4 opacity-10 animate-soft-pulse"
        style={{ animationDelay: "0.8s" }}
      >
        <Star className="w-6 h-6 text-[#BEE8CC]" />
      </div>
      <div className="absolute bottom-1/3 left-1/3 opacity-10 animate-soft-pulse">
        <Zap className="w-4 h-4 text-[#FDE68A]" />
      </div>

      {/* Gradient orbs for depth */}
      <div className="absolute top-20 right-1/5 w-40 h-40 bg-gradient-to-br from-[#F8C8DC]/10 to-[#D3B5E5]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-24 left-1/5 w-56 h-56 bg-gradient-to-br from-[#BEE8CC]/8 to-[#FDE68A]/8 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced section header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Star className="w-5 h-5 text-[#F8C8DC]" />
            <div className="h-px bg-gradient-to-r from-[#F8C8DC] via-[#D3B5E5] to-[#BEE8CC] w-24"></div>
            <Sparkles className="w-4 h-4 text-[#D3B5E5]" />
            <div className="h-px bg-gradient-to-r from-[#BEE8CC] via-[#D3B5E5] to-[#F8C8DC] w-24"></div>
            <Heart className="w-5 h-5 text-[#BEE8CC]" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Productos
            <span className="block text-transparent bg-gradient-to-r from-[#8B1E3F] to-[#F8C8DC] bg-clip-text">
              Destacados
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-[#999999] max-w-3xl mx-auto leading-relaxed">
            Descubre nuestros productos más populares y las
            <span className="text-[#8B1E3F] font-medium">
              {" "}
              últimas creaciones
            </span>{" "}
            de nuestro estudio artesanal
          </p>

          {/* Enhanced mini-stats */}
          <div className="flex justify-center gap-8 mt-12 flex-wrap">
            {[
              {
                number: "4.9",
                label: "Rating Promedio",
                icon: Star,
                color: "from-[#FDE68A] to-[#fcd34d]",
              },
              {
                number: "500+",
                label: "Clientes Felices",
                icon: Heart,
                color: "from-[#F8C8DC] to-[#f5b8d1]",
              },
              {
                number: "100%",
                label: "Garantía de Calidad",
                icon: Sparkles,
                color: "from-[#BEE8CC] to-[#a8d4b8]",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-3">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className="w-6 h-6 text-[#8B1E3F]" />
                  </div>
                </div>
                <div className="text-xl font-bold text-[#8B1E3F] mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-[#999999] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product: Product) => {
            return (
              <div key={product.id} className="group relative">
                <Link href={`/productos/${product.slug}`} className="block">
                  <div
                    className={`bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border relative cursor-pointer ${
                      product.type === "sober"
                        ? "border-[#EFE6DD]/60"
                        : "border-white/60"
                    }`}
                  >
                    {/* Enhanced background decoration */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#F8C8DC]/10 to-[#D3B5E5]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-20 transition-all duration-500 z-20">
                      <div className="flex gap-1">
                        <div className="w-1 h-1 bg-[#F8C8DC] rounded-full"></div>
                        <div className="w-1 h-1 bg-[#D3B5E5] rounded-full"></div>
                        <div className="w-1 h-1 bg-[#BEE8CC] rounded-full"></div>
                      </div>
                    </div>

                    {/* Enhanced Product Image */}
                    <div className="relative overflow-hidden">
                      <Image
                        src={product.images[0].large || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 brightness-95"
                      />

                      {/* Enhanced Badge */}
                      {product.badge && (
                        <div className="absolute top-6 left-6 z-10">
                          <div
                            className={`px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm transform group-hover:scale-105 transition-transform duration-300 ${
                              product.badge === "Bestseller"
                                ? "bg-[#8B1E3F]/90 text-white border border-[#8B1E3F]/20"
                                : product.badge === "Nuevo"
                                ? "bg-[#BEE8CC]/90 text-[#8B1E3F] border border-[#BEE8CC]/30"
                                : product.badge === "Exclusivo"
                                ? "bg-[#D3B5E5]/90 text-[#8B1E3F] border border-[#D3B5E5]/30"
                                : product.badge === "Oferta"
                                ? "bg-[#FDE68A]/90 text-[#8B1E3F] border border-[#FDE68A]/30"
                                : "bg-[#F8C8DC]/90 text-[#8B1E3F] border border-[#F8C8DC]/30"
                            }`}
                          >
                            {product.badge}
                          </div>
                        </div>
                      )}

                      {/* Enhanced Wishlist Button */}
                      <div
                        className="absolute top-6 right-6 z-10"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                      >
                        <FavoriteButton
                          product={product}
                          variant="icon"
                          className="bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white hover:scale-110 transition-all duration-300"
                        />
                      </div>

                      {/* Subtle overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Enhanced Product Info */}
                    <div className="p-8 relative z-10">
                      <div className="text-sm text-[#999999] mb-3 font-medium">
                        {product.category.name}
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#8B1E3F] group-hover:to-[#F8C8DC] group-hover:bg-clip-text transition-all duration-300 leading-tight">
                        {product.name}
                      </h3>

                      {/* Enhanced Rating */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 transition-colors duration-200 ${
                                i < Math.floor(product.rating)
                                  ? "text-[#FDE68A] fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-[#999999] group-hover:text-gray-700 transition-colors duration-300">
                          {product.rating} ({product.reviews} reseñas)
                        </span>
                      </div>

                      {/* Enhanced Price */}
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-3xl font-bold text-[#8B1E3F]">
                          {product.price}€
                        </span>
                        {product.originalPrice && (
                          <span className="text-lg text-[#999999] line-through">
                            {product.originalPrice}€
                          </span>
                        )}
                        {product.originalPrice && (
                          <span className="text-sm bg-[#BEE8CC] text-[#8B1E3F] px-2 py-1 rounded-full font-semibold">
                            -
                            {Math.round(
                              (1 - product.price / product.originalPrice) * 100
                            )}
                            %
                          </span>
                        )}
                      </div>

                      {/* Enhanced CTA Button */}
                      <button
                        className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer transform hover:-translate-y-1 hover:shadow-xl relative overflow-hidden ${
                          product.type === "sober"
                            ? "bg-[#8B1E3F] hover:bg-[#7a1a37] text-white shadow-lg"
                            : "bg-[#F8C8DC] hover:bg-[#f5b8d1] text-[#8B1E3F] shadow-lg"
                        }`}
                        onClick={(e) => handleAddToCart(e, product)}
                      >
                        {/* Subtle button decoration */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

                        <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                        <span className="relative z-10">Añadir al carrito</span>
                      </button>
                    </div>

                    {/* Subtle corner accent */}
                    <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                      <div className="w-8 h-8 border-l-2 border-b-2 border-[#F8C8DC] rounded-bl-xl"></div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Enhanced View All Button */}
        <div className="text-center mt-16">
          <Link href="/productos" className="group relative inline-flex">
            <div className="absolute inset-0 bg-gradient-to-r from-[#D6BA8A] to-[#c9a876] rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-[#D6BA8A] hover:bg-[#c9a876] text-[#8B1E3F] px-10 py-5 rounded-full font-semibold text-xl transition-all duration-300 shadow-xl transform group-hover:-translate-y-2 group-hover:scale-105 flex items-center gap-3">
              Ver Todo el Catálogo
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
