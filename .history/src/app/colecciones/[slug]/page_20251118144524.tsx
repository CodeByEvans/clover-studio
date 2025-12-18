import { useParams } from "next/navigation";

export const CollectionPage = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <h1>Este es el slug: {params.slug} </h1>
    </div>
  );
};

export default CollectionPage;
