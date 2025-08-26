import { notFound } from "next/navigation";
import CategoryContent from "@/components/category/category-content";
import { getCategories } from "@/services/client/categoryApi";
import React from "react";
import { CategoryType } from "@/lib/types/Category.type";

export async function generateStaticParams() {
  const categories = await getCategories();
  return Object.keys(categories).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const categories = await getCategories();
  const { slug } = await params;
  const category = categories.find((cat: CategoryType) => cat.slug === slug);

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
  params: { slug: string };
}) {
  const categories = await getCategories();
  const { slug } = await params;
  const category = categories.find((cat: CategoryType) => cat.slug === slug);

  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F9F7F3]">
      <CategoryContent categoryId={category.id} category={category} />
    </main>
  );
}
