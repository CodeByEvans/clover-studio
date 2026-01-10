import SectionProduct from "./_components/SectionProduct";
import { RelatedProducts } from "./_components/RelatedProducts";
import { getProduct } from "@/utils/supabase/api";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = await getProduct(slug);

  if (!product) {
    return {
      title: "Producto no encontrado - Clover Studio",
      description: "Producto no encontrado - Clover Studio",
    };
  }

  return {
    title: `${product.title}`,
    description: product.description,
    openGraph: {
      title: `${product.title}`,
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

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <SectionProduct slug={slug} />

        {/* Productos relacionados */}
        <RelatedProducts slug={slug} />
      </div>
    </section>
  );
}
