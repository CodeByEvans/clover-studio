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
} from "lucide-react";
import ProductImageGallery from "./product-image-gallery";
import RelatedProducts from "./related-products";
import { ProductType } from "@/lib/types/Product.type";
import useProducts from "@/lib/hooks/useProducts";
import { useCategories } from "@/lib/hooks/useCategories";
import { CategoryType } from "@/lib/types/Category.type";
import FavoriteButton from "../favorites/favorite-button";
import ContactModal from "../contactModal";
import LoadingLayout from "../common/LoadingLayout";
import { shareContent } from "@/lib/utils";

interface ProductDetailSoberProps {
  product: ProductType;
}

export default function ProductDetailSober({
  product,
}: ProductDetailSoberProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showContactModal, setShowContactModal] = useState(false);

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

  if (productsLoading || categoriesLoading) {
    return <LoadingLayout message="Cargando producto..." />;
  }
  if (productsError || categoriesError) return <div>Error al cargar</div>;
  if (!products || !categories) return <div>No hay datos</div>;

  const productImages = product.images.map((image) => image.large);

  const category = categories.find(
    (category: CategoryType) => category.id === product.category
  );
  // Handle Share
  const handleShare = () => {
    shareContent({
      title: "Clover Studio",
      text: "Mira este sitio de productos aromáticos únicos",
      url: window.location.href,
    });
  };

  return (
    <div className="min-h-screen bg-[#F9F7F3]">
      {showContactModal && (
        <ContactModal
          onClose={() => setShowContactModal(false)}
          productName={product.name}
          productSlug={product.slug}
        />
      )}
      {/* Breadcrumb */}
      <div className="bg-[#EFE6DD] py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-[#999999]">
            <Link href="/" className="hover:text-[#8B1E3F]">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/catalogo" className="hover:text-[#8B1E3F]">
              Catálogo
            </Link>
            <span>/</span>
            <Link
              href={`/catalogo?categoria=${category.slug}`}
              className="hover:text-[#8B1E3F]"
            >
              {category.name}
            </Link>
            <span>/</span>
            <span className="text-[#8B1E3F] font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          href="/catalogo"
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
              colorScheme="sober"
            />
          </div>

          {/* Product Info */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#EFE6DD] space-y-6">
            {/* Badge */}
            {product.badge && (
              <div className="inline-block">
                <span className="bg-[#8B1E3F] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {product.badge}
                </span>
              </div>
            )}

            {/* Title and Category */}
            <div>
              <p className="text-[#D6BA8A] text-sm mb-2 font-medium">
                {category.name}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-[#8B1E3F] mb-4">
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
                        ? "text-[#D6BA8A] fill-current"
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
                <span className="bg-[#D6BA8A] text-[#8B1E3F] px-3 py-1 rounded-full text-sm font-semibold">
                  Ahorro {product.originalPrice - product.price}€
                </span>
              )}
            </div>

            {/* Description */}
            <div className="prose prose-gray max-w-none">
              <p className="text-[#999999] leading-relaxed">
                {product.description ||
                  "Una pieza elegante y sofisticada que combina tradición artesanal con diseño contemporáneo. Creada con materiales premium y técnicas refinadas para ofrecer una experiencia aromática profunda y duradera que evoca serenidad y distinción."}
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
                      <div className="w-2 h-2 bg-[#D6BA8A] rounded-full"></div>
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
                  onClick={() => setShowContactModal(true)}
                >
                  <MessageCircle className="w-5 h-5" />
                  Consultar Disponibilidad
                </button>
                <FavoriteButton
                  className="border-2 border-[#BEE8CC] text-[#8B1E3F] hover:bg-[#BEE8CC] py-4 px-6 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  product={product}
                  size="md"
                  variant="button"
                />
                <button
                  className="border-2 border-[#EFE6DD] text-[#999999] hover:bg-[#EFE6DD] py-4 px-6 rounded-xl transition-colors flex items-center justify-center cursor-pointer"
                  onClick={handleShare}
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#EFE6DD]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#D6BA8A] rounded-full flex items-center justify-center">
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
                <div className="w-10 h-10 bg-[#EFE6DD] rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#8B1E3F]" />
                </div>
                <div>
                  <p className="font-medium text-[#8B1E3F] text-sm">Garantía</p>
                  <p className="text-xs text-[#999999]">30 días</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#999999] rounded-full flex items-center justify-center">
                  <RotateCcw className="w-5 h-5 text-white" />
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
          colorScheme="sober"
          products={products}
          category={category}
        />
      </div>
    </div>
  );
}
