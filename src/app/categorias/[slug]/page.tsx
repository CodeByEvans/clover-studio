import { notFound } from "next/navigation";
import CategoryContent from "@/components/category/category-content";
import { getCategories } from "@/services/client/categoryApi";
import React from "react";
import { CategoryType } from "@/lib/types/Category.type";

export async function generateStaticParams() {
  const categories = await getCategories();
  // categories es un array de CategoryType
  return categories.map((cat: CategoryType) => ({
    slug: cat.slug.toString(),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const categories = await getCategories();
  const category = categories.find(
    (cat: CategoryType) => cat.slug.toString() === resolvedParams.slug
  );

  if (!category) {
    return {
      title: "Categoría no encontrada - Clover Studio",
    };
  }

  return {
    title: `${category.name} - Clover Studio`,
    description: `${
      category.description
    } - Descubre nuestra colección de ${category.name.toLowerCase()}.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const categories = await getCategories();
  const category = categories.find(
    (cat: CategoryType) => cat.slug.toString() === resolvedParams.slug
  );

  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F9F7F3]">
      <CategoryContent categoryId={category.id} category={category} />
    </main>
  );
}
