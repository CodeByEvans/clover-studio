"use client";

import Hero from "@/components/hero";
import Categories from "@/components/categories";
import FeaturedProducts from "@/components/featured-products";
import CallToAction from "@/components/call-to-action";
import Newsletter from "@/components/newsletter";
import { useCategories } from "@/lib/hooks/useCategories";
import useProducts from "@/lib/hooks/useProducts";
import { ProductType } from "@/lib/types/Product.type";
import LoadingLayout from "@/components/common/LoadingLayout";

export default function Home() {
  const {
    data: categories,
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useCategories();
  const {
    data: products,
    isLoading: productsLoading,
    error: productsError,
  } = useProducts();

  if (categoriesLoading || productsLoading) {
    return <LoadingLayout message="Cargando productos..." />;
  }
  if (categoriesError || productsError) return <div>Error al cargar</div>;
  if (!categories || !products) return <div>No hay datos</div>;

  const featuredProducts = products.sort(
    (a: ProductType, b: ProductType) => b.rating - a.rating
  );

  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Categories />
      <FeaturedProducts
        featuredProducts={featuredProducts}
        categories={categories}
      />
      <CallToAction />
      <Newsletter />
    </main>
  );
}
