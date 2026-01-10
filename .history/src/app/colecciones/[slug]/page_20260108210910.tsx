import {
  getCollectionBySlug,
  getCollections,
  getProducts,
  getProductsByCollection,
} from "@/utils/supabase/api";
import CollectionNotFound from "./404";
import SectionHeader from "@/components/SectionHeader";
import SectionProductsWithSlug from "./_components/SectionProductsWithSlug";
import { notFound } from "next/navigation";
import { QueryClient } from "@tanstack/react-query";

const getCachedCollection = async (slug: string) => {
  return await getCollectionBySlug(slug);
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const collection = await getCachedCollection(slug);

  if (!collection) {
    return {
      title: "Colección no encontrada - Clover Studio",
      description: "Colección no encontrada - Clover Studio",
    };
  }

  return {
    title: `Clover Studio: ${collection.title}`,
    description: collection.description,
    openGraph: {
      title: `${collection.title}`,
      description: collection.description,
      url: `https://cloverstudio.es/colecciones/${slug}`,
      siteName: "Clover Studio",
      images: [
        {
          url: collection.image || "/logo.svg",
          width: 800,
          height: 600,
          alt: collection.title,
        },
      ],
      type: "article",
    },
  };
}

export async function loader({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const queryClient = new QueryClient();

  const collection = await getCachedCollection(slug);

  if (!collection) {
    notFound();
  }

  await queryClient.prefetchQuery({
    queryKey: ["products-by-collection", collection.id],
    queryFn: () => getProductsByCollection(collection.id),
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const collection = await getCollectionBySlug(slug);

  if (!collection) {
    notFound();
  }

  const queryClient = new QueryClient();

  return (
    <section className="container mx-auto px-4 py-12 min-h-screen">
      <SectionHeader
        title={collection.title}
        crumbs={[
          { label: "Inicio", href: "/" },
          { label: "Colecciones", href: "/colecciones" },
          {
            label: collection.title,
            href: `/colecciones/${slug}`,
          },
        ]}
      />
      <SectionProductsWithSlug collectionId={collection.id} />
    </section>
  );
}
