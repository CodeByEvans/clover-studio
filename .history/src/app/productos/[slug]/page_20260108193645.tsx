import SectionProduct from "./_components/SectionProduct";
import { RelatedProducts } from "./_components/RelatedProducts";
import { getProductBySlug } from "@/utils/supabase/api";
import { productsAPI } from "@/services/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { notFound } from "next/navigation";

/* ---------------- METADATA ---------------- */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

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

/* ---------------- PAGE ---------------- */

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["product", product.id],
    queryFn: () => productsAPI.getProductById(product.id),
  });

  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <SectionProduct slug={slug} />
        </HydrationBoundary>

        <RelatedProducts slug={slug} />
      </div>
    </section>
  );
}
