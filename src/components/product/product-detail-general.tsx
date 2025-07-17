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
import useProducts from "@/lib/queries/useProducts";
import { useCategories } from "@/lib/queries/useCategories";
import { CategoryType } from "@/lib/types/Category.type";
import ContactModal from "../contactModal";
import FavoriteButton from "../favorites/favorite-button";

interface ProductDetailGeneralProps {
  product: ProductType;
}

export default function ProductDetailGeneral({
  product,
}: ProductDetailGeneralProps) {
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

  if (productsLoading || categoriesLoading) return <div>Cargando...</div>;
  if (productsError || categoriesError) return <div>Error al cargar</div>;
  if (!products || !categories) return <div>No hay datos</div>;

  const category = categories.find(
    (category: CategoryType) => category.id === product.category
  );

  // Mock additional images for gallery
  const productImages = product.images.map((image) => image.large);

  return (
    <div className="min-h-screen bg-white">
      {showContactModal && (
        <ContactModal
          onClose={() => setShowContactModal(false)}
          productName={product.name}
          productSlug={product.slug}
        />
      )}
      {/* Breadcrumb */}
      <div className="bg-[#F9F7F3] py-4">
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
              {category?.name}
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
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
              colorScheme="general"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Badge */}
            {product.badge && (
              <div className="inline-block">
                <span className="bg-[#F8C8DC] text-[#8B1E3F] px-4 py-2 rounded-full text-sm font-semibold">
                  {product.badge}
                </span>
              </div>
            )}

            {/* Title and Category */}
            <div>
              <p className="text-[#999999] text-sm mb-2"> {category.name}</p>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
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
              <span className="text-gray-900 font-medium">
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
                <span className="bg-[#BEE8CC] text-[#8B1E3F] px-3 py-1 rounded-full text-sm font-semibold">
                  Ahorro {product.originalPrice - product.price}€
                </span>
              )}
            </div>

            {/* Description */}
            <div className="prose prose-gray max-w-none">
              <p className="text-[#999999] leading-relaxed">
                {product.description ||
                  "Producto artesanal único creado con los mejores materiales y técnicas tradicionales. Cada pieza es cuidadosamente elaborada para brindar una experiencia aromática excepcional que transformará tu espacio en un refugio de tranquilidad y bienestar."}
              </p>
            </div>

            {/* Features */}
            {product.features && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Características:
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-[#999999]"
                    >
                      <div className="w-2 h-2 bg-[#F8C8DC] rounded-full"></div>
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
                  className="flex-1 bg-[#8B1E3F] hover:bg-[#7a1a37] text-white py-4 px-6 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                  onClick={() => setShowContactModal(true)}
                >
                  <MessageCircle className="w-5 h-5" />
                  Consultar Disponibilidad
                </button>
                <FavoriteButton
                  className="border-2 border-[#F8C8DC] text-[#8B1E3F] hover:bg-[#F8C8DC] py-4 px-6 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                  product={product}
                  size="md"
                  variant="button"
                />
                <button className="border-2 border-gray-200 text-gray-600 hover:bg-gray-50 py-4 px-6 rounded-xl transition-colors flex items-center justify-center">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#BEE8CC] rounded-full flex items-center justify-center">
                  <Truck className="w-5 h-5 text-[#8B1E3F]" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">
                    Envío Gratis
                  </p>
                  <p className="text-xs text-[#999999]">Pedidos +50€</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F8C8DC] rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#8B1E3F]" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Garantía</p>
                  <p className="text-xs text-[#999999]">30 días</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FDE68A] rounded-full flex items-center justify-center">
                  <RotateCcw className="w-5 h-5 text-[#8B1E3F]" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">
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
          colorScheme="general"
          products={products}
          category={category}
        />
      </div>
    </div>
  );
}
