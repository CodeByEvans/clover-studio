import { useParams } from "next/navigation";

export const CollectionPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  return (
    <div>
      <h1>Este es el slug: {slug} </h1>
    </div>
  );
};

export default CollectionPage;
