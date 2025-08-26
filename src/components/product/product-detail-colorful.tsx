"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Share2,
  Star,
  MessageCircle,
  Truck,
  Shield,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import ProductImageGallery from "./product-image-gallery";
import RelatedProducts from "./related-products";
import useProducts from "@/lib/hooks/useProducts";
import FavoriteButton from "../favorites/favorite-button";
import LoadingLayout from "../common/LoadingLayout";
import { shareContent } from "@/lib/utils";
import { Product } from "@/lib/types/Product";
import { useCart } from "@/contexts/cart-context";
import { useNotifications } from "@/contexts/notifications-context";

interface ProductDetailColorfulProps {
  product: Product;
}

export default function ProductDetailColorful({
  product,
}: ProductDetailColorfulProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  const { addToCart } = useCart();
  const { showSuccess } = useNotifications();

  const {
    data: products,
    isLoading: productsLoading,
    error: productsError,
  } = useProducts();

  if (productsLoading) {
    return <LoadingLayout message="Cargando producto..." />;
  }
  if (productsError) return <div>Error al cargar</div>;
  if (!products) return <div>No hay datos</div>;

  const productImages = product.images.map((image) => image.large);

  const handleAddToCart = (product: Product) => {
    addToCart(product, 1);

    showSuccess(
      "¡Producto Agregado!",
      `${product.name} (${product.price}€) ha sido añadido al carrito`,
      4000
    );
  };

  // Handle Share
  const handleShare = () => {
    shareContent({
      title: "Clover Studio",
      text: "Mira este sitio de productos aromáticos únicos",
      url: window.location.href,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8C8DC]/20 to-[#C9EAF3]/20">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-30">
        <Sparkles className="w-8 h-8 text-[#D3B5E5]" />
      </div>
      <div className="absolute bottom-32 right-16 opacity-30">
        <Sparkles className="w-6 h-6 text-[#BEE8CC]" />
      </div>
      <div className="absolute top-1/3 right-20 opacity-30">
        <Sparkles className="w-10 h-10 text-[#FDE68A]" />
      </div>

      {/* Breadcrumb */}
      <div className="bg-[#EFE6DD] py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-[#999999]">
            <Link href="/" className="hover:text-[#8B1E3F]">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/categorias" className="hover:text-[#8B1E3F]">
              Categorias
            </Link>
            <span>/</span>
            <Link
              href={`/categorias/${product.category?.slug}`}
              className="hover:text-[#8B1E3F]"
            >
              {product.category.name}
            </Link>
            <span>/</span>
            <span className="text-[#8B1E3F] font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 relative">
        {/* Back Button */}
        <Link
          href="/productos"
          className="inline-flex items-center gap-2 text-[#999999] hover:text-[#8B1E3F] mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver al catálogo
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <ProductImageGallery
              images={productImages}
              selectedImage={selectedImage}
              onImageSelect={setSelectedImage}
              productName={product.name}
              colorScheme="colorful"
            />
          </div>

          {/* Product Info */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-[#F8C8DC]/50 space-y-6">
            {/* Badge */}
            {product.badge && (
              <div className="inline-block">
                <span className="bg-gradient-to-r from-[#F8C8DC] to-[#D3B5E5] text-[#8B1E3F] px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  ✨ {product.badge}
                </span>
              </div>
            )}

            {/* Title and Category */}
            <div>
              <p className="text-[#D3B5E5] text-sm mb-2 font-medium">
                {product.category.name}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#8B1E3F] to-[#D3B5E5] bg-clip-text text-transparent mb-4">
                {product.name}
              </h1>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? "text-[#FDE68A] fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-[#8B1E3F] font-medium">
                {product.rating}
              </span>
              <span className="text-[#999999]">
                ({product.reviews} reseñas)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-4xl font-bold text-[#8B1E3F]">
                {product.price}€
              </span>
              {product.originalPrice && (
                <span className="text-2xl text-[#999999] line-through">
                  {product.originalPrice}€
                </span>
              )}
              {product.originalPrice && (
                <span className="bg-gradient-to-r from-[#BEE8CC] to-[#FDE68A] text-[#8B1E3F] px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                  🎉 Ahorro {product.originalPrice - product.price}€
                </span>
              )}
            </div>

            {/* Description */}
            <div className="prose prose-gray max-w-none">
              <p className="text-[#999999] leading-relaxed">
                {product.description ||
                  "Una creación vibrante y llena de personalidad que aporta alegría y color a cualquier espacio. Diseñada para quienes buscan expresar su individualidad a través de aromas únicos y diseños innovadores que despiertan los sentidos."}
              </p>
            </div>

            {/* Features */}
            {product.features && (
              <div>
                <h3 className="font-semibold text-[#8B1E3F] mb-3">
                  Características:
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-[#999999]"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-[#F8C8DC] to-[#D3B5E5] rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="flex-1 bg-[#8B1E3F] hover:bg-[#7a1a37] text-white py-4 px-6 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  onClick={() => handleAddToCart(product)}
                >
                  <MessageCircle className="w-5 h-5" />
                  Añadir al carrito
                </button>
                <FavoriteButton
                  className="border-2 border-[#BEE8CC] text-[#8B1E3F] hover:bg-[#BEE8CC] py-4 px-6 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  product={product}
                  size="md"
                  variant="button"
                />{" "}
                <button
                  className="border-2 border-[#FDE68A] text-[#8B1E3F] hover:bg-[#FDE68A] py-4 px-6 rounded-xl transition-colors flex items-center justify-center cursor-pointer"
                  onClick={handleShare}
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#F8C8DC]/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#BEE8CC] rounded-full flex items-center justify-center shadow-md">
                  <Truck className="w-5 h-5 text-[#8B1E3F]" />
                </div>
                <div>
                  <p className="font-medium text-[#8B1E3F] text-sm">
                    Envío Gratis
                  </p>
                  <p className="text-xs text-[#999999]">Pedidos +50€</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FDE68A] rounded-full flex items-center justify-center shadow-md">
                  <Shield className="w-5 h-5 text-[#8B1E3F]" />
                </div>
                <div>
                  <p className="font-medium text-[#8B1E3F] text-sm">Garantía</p>
                  <p className="text-xs text-[#999999]">30 días</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#C9EAF3] rounded-full flex items-center justify-center shadow-md">
                  <RotateCcw className="w-5 h-5 text-[#8B1E3F]" />
                </div>
                <div>
                  <p className="font-medium text-[#8B1E3F] text-sm">
                    Devoluciones
                  </p>
                  <p className="text-xs text-[#999999]">Fácil y rápido</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <RelatedProducts
          currentProduct={product}
          colorScheme="colorful"
          products={products}
          category={product.category}
        />
      </div>
    </div>
  );
}
