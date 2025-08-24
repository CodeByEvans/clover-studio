"use client";
import CatalogHeader from "@/components/catalog/catalog-header";
import CatalogContent from "@/components/catalog/catalog-content";
import useProducts from "@/lib/hooks/useProducts";
import { useCategories } from "@/lib/hooks/useCategories";
import LoadingLayout from "@/components/common/LoadingLayout";

export default function CatalogoPage() {
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
    return <LoadingLayout message="Cargando productos..." />;
  }
  if (productsError || categoriesError) return <div>Error al cargar</div>;
  if (!products || !categories) return <div>No hay datos</div>;

  return (
    <main className="min-h-screen bg-[#F9F7F3]">
      <CatalogHeader />
      <CatalogContent products={products} categories={categories} />
    </main>
  );
}
