import {
  getCollection,
  getCollections,
  getProducts,
} from "@/utils/supabase/api";
import CollectionNotFound from "./404";
import SectionHeader from "@/components/SectionHeader";
import SectionProductsWithSlug from "./_components/SectionProductsWithSlug";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const collection = await getCollection(slug);

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

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Fetch collections y products
  const collections = await getCollections();
  const collection = collections.find((c) => c.slug === slug);

  if (!collection) return <CollectionNotFound />;

  const products = await getProducts();
  const collectionProducts = products.filter(
    (p) => p.collection.id === collection.id
  );

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
      <SectionProductsWithSlug slug={slug} />
    </section>
  );
}
