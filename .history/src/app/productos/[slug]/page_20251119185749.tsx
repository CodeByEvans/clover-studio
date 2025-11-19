import { getProducts } from "@/utils/supabase/product";
import ProductNotFound from "./404";

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
      <h1>Producto</h1>
    </section>
  );
}
