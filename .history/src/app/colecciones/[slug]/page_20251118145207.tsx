import { getCollections } from "@/utils/supabase/collections";
import { useParams } from "next/navigation";
import CollectionNotFound from "./404";

export const CollectionPage = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { slug } = params;

  const collections = await getCollections();

  const collection = collections.find((c) => c.slug === slug);

  if (!collection) {
    return <CollectionNotFound />;
  }

  return (
    <div>
      <h1>Colección encontrada: {collection?.title} </h1>
    </div>
  );
};

export default CollectionPage;
