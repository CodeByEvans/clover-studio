import { getCollections } from "@/utils/supabase/collections";
import CollectionNotFound from "./404";
import { getProducts } from "@/utils/supabase/product";

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
    </section>
  );
};

export default CollectionPage;
