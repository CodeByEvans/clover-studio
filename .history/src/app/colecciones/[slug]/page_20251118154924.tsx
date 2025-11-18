import { getCollections } from "@/utils/supabase/collections";
import { getProducts } from "@/utils/supabase/product";
import CollectionNotFound from "./404";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

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
      {/* Collection Header */}
      <div className="mb-12 text-center">
        {/* Título de la colección */}
        <h1 className="text-5xl font-extrabold text-[#8B1E3F] mb-3">
          {collection.title}
        </h1>

        {/* Título de la categoría (si existe) */}
        {collection.category && (
          <h2 className="text-lg text-gray-500 uppercase tracking-wide mb-2">
            {collection.category.title}
          </h2>
        )}

        {/* Descripción con clamp */}
        {collection.description && (
          <p className="text-gray-600 text-base line-clamp-2 max-w-xl mx-auto">
            {collection.description}
          </p>
        )}
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <CardHeader className="p-0">
                <Image
                  src={product.portrait}
                  alt={product.title}
                  title={product.title}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <CardTitle className="p-4 text-lg font-semibold">
                  {product.title}
                </CardTitle>
                <CardDescription className="p-4 line-clamp-1">
                  {product.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </section>
      ) : (
        <p className="text-center text-gray-500 mt-6">
          No hay productos disponibles en esta colección.
        </p>
      )}
    </section>
  );
};

export default CollectionPage;
