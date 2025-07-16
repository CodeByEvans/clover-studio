"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, Heart, ShoppingBag } from "lucide-react";
import { ProductType } from "@/lib/types/Product.type";
import { CategoryType } from "@/lib/types/Category.type";

interface RelatedProductsProps {
  currentProduct: ProductType;
  colorScheme: "general" | "sober" | "colorful";
  products: ProductType[];
  category: CategoryType;
}

export default function RelatedProducts({
  currentProduct,
  colorScheme,
  products,
  category,
}: RelatedProductsProps) {
  // Get related products from the same category, excluding current product
  const relatedProducts = products
    .filter(
      (product) =>
        product.category === currentProduct.category &&
        product.id !== currentProduct.id
    )
    .slice(0, 4);

  if (relatedProducts.length === 0) {
    return null;
  }

  const getColorClasses = () => {
    switch (colorScheme) {
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

  return (
    <section className="mt-16">
      <div className="text-center mb-12">
        <h2 className={`text-3xl md:text-4xl font-bold ${colors.title} mb-4`}>
          Productos Relacionados
        </h2>
        <p className="text-[#999999] max-w-2xl mx-auto">
          Descubre otros productos de la misma categoría que podrían interesarte
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <div
            key={product.id}
            className={`group rounded-2xl overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-1 border ${colors.card}`}
          >
            {/* Product Image */}
            <div className="relative overflow-hidden">
              <Image
                src={product.images[0].large || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Badge */}
              {product.badge && (
                <div
                  className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold ${
                    colorScheme === "sober"
                      ? "bg-[#8B1E3F] text-white"
                      : colorScheme === "colorful"
                      ? "bg-gradient-to-r from-[#F8C8DC] to-[#D3B5E5] text-[#8B1E3F]"
                      : "bg-[#F8C8DC] text-[#8B1E3F]"
                  }`}
                >
                  {product.badge}
                </div>
              )}

              {/* Wishlist Button */}
              <button
                className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  console.log(product);
                }}
              >
                <Heart className="w-4 h-4 text-gray-600 hover:text-[#8B1E3F]" />
              </button>
            </div>

            {/* Product Info */}
            <div className="p-4">
              <div className={`text-xs ${colors.category} mb-1`}>
                {category.name}
              </div>

              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B1E3F] transition-colors line-clamp-2">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < Math.floor(product.rating)
                          ? colorScheme === "sober"
                            ? "text-[#D6BA8A] fill-current"
                            : "text-[#FDE68A] fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-[#999999]">
                  ({product.reviews})
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between mb-3">
                <span className={`text-lg font-bold ${colors.price}`}>
                  {product.price}€
                </span>
              </div>

              {/* CTA Button */}
              <Link href={`/catalogo/${product.slug}`}>
                <button
                  className={`w-full py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm ${colors.button}`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  Ver Producto
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <Link
          href={`/catalogo?categoria=${category.slug}`}
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
            colorScheme === "sober"
              ? "border-2 border-[#8B1E3F] text-[#8B1E3F] hover:bg-[#8B1E3F] hover:text-white"
              : colorScheme === "colorful"
              ? "border-2 border-[#F8C8DC] text-[#8B1E3F] hover:bg-[#F8C8DC]"
              : "border-2 border-[#F8C8DC] text-[#8B1E3F] hover:bg-[#F8C8DC]"
          }`}
        >
          Ver Todos en {category.name}
          <svg
            className="w-4 h-4"
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
    </section>
  );
}
