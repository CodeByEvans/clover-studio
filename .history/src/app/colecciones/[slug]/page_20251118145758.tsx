import { getCollections } from "@/utils/supabase/collections";
import { useParams } from "next/navigation";
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
    (p) => p.collection === collection?.id
  );

  console.log(products.map((p) => p.collection));

  if (!collection) {
    return <CollectionNotFound />;
  }

  return (
    <div>
      <h1>Estos son los productos encontrados: {filteredProducts.length} </h1>
    </div>
  );
};

export default CollectionPage;
