import { getCollections } from "@/utils/supabase/collections";
import { getProducts } from "@/utils/supabase/product";
import CollectionNotFound from "./404";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import ProductsSection from "./ProductsSection";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Fetch collections y products
  const collections = await getCollections();
  const collection = collections.find((c) => c.slug === slug);

  if (!collection) return <CollectionNotFound />;

  const products = await getProducts();
  const filteredProducts = products.filter(
    (p) => p.collection.id === collection.id
  );

  return (
    <section className="container mx-auto px-4 py-12 min-h-screen">
      <header className=" flex flex-col items-center justify-center gap-4 border-b border-gray-200 pb-12">
        <Breadcrumbs
          crumbs={[
            { label: "Inicio", href: "/" },
            { label: "Colecciones", href: "/colecciones" },
            {
              label: collection.title,
              href: `/colecciones/${collection.slug}`,
            },
          ]}
        />
        {/* Collection Header */}
        <div className=" text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#8B1E3F] mb-3">
            {collection.title}
          </h1>
        </div>
      </header>

      <ProductsSection filteredProducts={filteredProducts} />
    </section>
  );
}
