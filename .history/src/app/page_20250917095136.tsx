"use client";

import Hero from "@/components/hero";
import FeaturedProducts from "@/components/featured-products";
import CallToAction from "@/components/call-to-action";
import Newsletter from "@/components/newsletter";
import { useCategories } from "@/lib/hooks/useCategories";
import useProducts from "@/lib/hooks/useProducts";
import LoadingLayout from "@/components/common/LoadingLayout";
import { Product } from "@/lib/types/Product";
import About from "@/components/about";

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
    (a: Product, b: Product) => b.rating - a.rating
  );

  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <FeaturedProducts />
      <CallToAction />
      <Newsletter />
    </main>
  );
}
