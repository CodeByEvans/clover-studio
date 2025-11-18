import { getCollections } from "@/utils/supabase/collections";
import { getProducts } from "@/utils/supabase/product";
import CollectionNotFound from "./404";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export const CollectionPage = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { slug } = params;

  // Fetch solo la colección necesaria
  const collections = await getCollections();
  const collection = collections.find((c) => c.slug === slug);

  if (!collection) {
    return <CollectionNotFound />;
  }

  // Traer productos solo de esta colección
  const products = await getProducts();
  const filteredProducts = products.filter(
    (p) => p.collection.id === collection.id
  );

  return (
    <section className="container mx-auto px-4 py-12">
      {/* Collection Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          {collection.title}
        </h1>
        {collection.description && (
          <p className="text-gray-600">{collection.description}</p>
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
