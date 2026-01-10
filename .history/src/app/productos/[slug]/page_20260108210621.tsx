import SectionProduct from "./_components/SectionProduct";
import { RelatedProducts } from "./_components/RelatedProducts";
import { getProductBySlug } from "@/utils/supabase/api";
import { fragranceCategoriesAPI, fragrancesAPI } from "@/services/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { notFound } from "next/navigation";
import { cache } from "react";

const getCachedProduct = cache(async (slug: string) => {
  return await getProductBySlug(slug);
});

/* ---------------- METADATA ---------------- */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = await getCachedProduct(slug);

  if (!product) {
    return {
      title: "Producto no encontrado - Clover Studio",
      description: "Producto no encontrado - Clover Studio",
    };
  }

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      url: `https://cloverstudio.es/productos/${slug}`,
      siteName: "Clover Studio",
      images: [
        {
          url: product.images?.[0] || "/logo.svg",
          width: 800,
          height: 600,
          alt: product.title,
        },
      ],
      type: "article",
    },
  };
}

/* ---------------- LOADER ---------------- */

export async function loader() {
  const queryClient = new QueryClient();

  try {
    await Promise.all([
      queryClient.prefetchQuery({
        queryKey: ["fragrances"],
        queryFn: fragrancesAPI.getAll,
      }),

      queryClient.prefetchQuery({
        queryKey: ["fragrance-categories"],
        queryFn: fragranceCategoriesAPI.getAll,
      }),
    ]);
  } catch (error) {
    console.error("Error prefetching data:", error);
  }

  return {
    dehydratedState: dehydrate(queryClient),
  };
}

/* ---------------- PAGE ---------------- */

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = await getCachedProduct(slug);

  if (!product) {
    notFound();
  }
  const { dehydratedState } = await loader();

  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <HydrationBoundary state={dehydratedState}>
          <SectionProduct product={product} />
        </HydrationBoundary>

        <RelatedProducts product={product} />
      </div>
    </section>
  );
}
