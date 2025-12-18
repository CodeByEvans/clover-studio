import { getCollections } from "@/utils/supabase/collections";
import { getProducts } from "@/utils/supabase/product";
import CollectionNotFound from "./404";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export const CollectionPage = async ({
  params,
}: {
  params: { slug: string };
}) => {
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
    <section className="container mx-auto px-4 py-12">
      <Breadcrumbs
        crumbs={[
          { label: "Inicio", href: "/" },
          { label: "Colecciones", href: "/colecciones" },
          { label: collection.title, href: `/colecciones/${collection.slug}` },
        ]}
      />
      {/* Collection Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#8B1E3F] mb-3">
          {collection.title}
        </h1>

        {collection.category && (
          <h2 className="text-sm sm:text-lg text-gray-500 uppercase tracking-wide mb-2">
            {collection.category.title}
          </h2>
        )}

        {collection.description && (
          <p className="text-gray-600 text-base line-clamp-2 max-w-xl mx-auto">
            {collection.description}
          </p>
        )}
      </div>
    </section>
  );
};

export default CollectionPage;
