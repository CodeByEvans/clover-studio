import { getCollections } from "@/utils/supabase/collections";
import { getProducts } from "@/utils/supabase/product";
import CollectionNotFound from "./404";
import SectionHeader from "@/components/SectionHeader";
import SectionProducts from "@/app/productos/_components/SectionProducts";
import SectionProductsWithSlug from "./_components/SectionProductsWithSlug";

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
