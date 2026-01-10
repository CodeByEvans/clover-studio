import {
  getCollectionBySlug,
  getProductsByCollection,
} from "@/utils/supabase/api";
import CollectionNotFound from "./404";
import SectionHeader from "@/components/SectionHeader";
import SectionProductsWithSlug from "./_components/SectionProductsWithSlug";
import { notFound } from "next/navigation";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { cache } from "react";

const getCachedCollection = cache(async (slug: string) => {
  return await getCollectionBySlug(slug);
});

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

export async function loader(slug: string) {
  const queryClient = new QueryClient();

  const collection = await getCachedCollection(slug);

  if (!collection) {
    notFound();
  }

  await queryClient.prefetchQuery({
    queryKey: ["products-by-collection", collection.id],
    queryFn: () => getProductsByCollection(collection.id),
  });

  return {
    dehydratedState: dehydrate(queryClient),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = await getCachedCollection(slug);

  if (!collection) {
    notFound();
  }

  const { dehydratedState } = await loader(slug);
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
      <HydrationBoundary state={dehydratedState}>
        <SectionProductsWithSlug collectionId={collection.id} />
      </HydrationBoundary>
    </section>
  );
}
