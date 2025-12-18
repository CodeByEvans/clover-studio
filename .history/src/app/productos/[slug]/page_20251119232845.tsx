import { getProducts } from "@/utils/supabase/product";
import ProductNotFound from "./404";
import { Products } from "@/types/product.type";
import SwiperCarousel from "@/components/common/SwiperCarousel";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // Obtener todos los productos
  const products: Products = await getProducts();

  // Buscar el producto por slug
  const product = products.find((p) => p.slug === slug);

  if (!product) return <ProductNotFound />;
  return (
    <section>
      <section className="container mx-auto px-4 py-12 min-h-screen">
        <div>
          <SwiperCarousel images={product.images} />
        </div>
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
        </div>
      </section>
    </section>
  );
}
