import { getProducts } from "@/utils/supabase/product";
import ProductNotFound from "./404";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // Obtener todos los productos
  const products = await getProducts();

  // Buscar el producto por slug
  const product = products.find((p) => p.slug === slug);

  if (!product) return <ProductNotFound />;
  return (
    <section>
      <section>
        <div>
          <Image
            src={product.image}
            alt={product.title}
            title={product.title}
            width={300}
            height={300}
          />
        </div>
        <div></div>
      </section>
    </section>
  );
}
