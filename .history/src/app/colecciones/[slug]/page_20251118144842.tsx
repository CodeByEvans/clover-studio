import { getCollections } from "@/utils/supabase/collections";
import { useParams } from "next/navigation";

export const CollectionPage = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { slug } = params;

  const collections = await getCollections();

  return (
    <div>
      <h1>Este es el slug: {slug} </h1>
    </div>
  );
};

export default CollectionPage;
