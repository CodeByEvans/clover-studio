import { useParams } from "next/navigation";

export const Collection = () => {
  const { slug } = useParams();

  return (
    <div>
      <h1>Este es el {slug}</h1>
    </div>
  );
};

export default Collection;
