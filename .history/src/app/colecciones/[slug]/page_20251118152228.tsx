import { getCollections } from "@/utils/supabase/collections";
import CollectionNotFound from "./404";
import { getProducts } from "@/utils/supabase/product";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export const CollectionPage = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { slug } = params;

  //fetch of collections and products
  const collections = await getCollections();
  const products = await getProducts();

  // Filter collection by slug
  const collection = collections.find((c) => c.slug === slug);

  // Filter products by collection id
  const filteredProducts = products.filter(
    (p) => p.collection.id === collection?.id
  );

  if (!collection) {
    return <CollectionNotFound />;
  }

  return (
    <section>
      <div>
        <h1>{collection.title}</h1>
        <p>{collection.description}</p>
      </div>
      <section>
        {filteredProducts.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <Image
                src={product.portrait}
                alt={product.title}
                width={500}
                height={500}
              />
              <CardTitle>{product.title}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </section>
    </section>
  );
};

export default CollectionPage;
