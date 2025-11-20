import { getProducts } from "@/utils/supabase/product";
import ProductNotFound from "./404";
import SwiperCarousel from "@/components/SwiperCarousel";
import { Products } from "@/types/product.type";
import { Button } from "@/components/ui/button";
import QuantitySelector from "./_components/QuantitySelector";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Get all products
  const products: Products = await getProducts();

  // Find product by slug
  const product = products.find((p) => p.slug === slug);

  if (!product) return <ProductNotFound />;

  const relatedProducts = products.filter(
    (p) => p.collection.id === product.collection.id
  );

  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <SwiperCarousel images={product.images} />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold">{product.title}</h1>
            <h2 className="text-2xl font-semibold mt-4">{product.price} €</h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              {product.description}
            </p>
            <div className="mt-6 flex flex-raw items-center gap-4">
              <QuantitySelector />
              <Button className="mt-4">Añadir al carrito</Button>
            </div>
          </div>
        </div>
        <div className="flex">
          <h3 className="text-2xl font-bold mb-6">Productos relacionados</h3>
          {relatedProducts.length > 0 && (
            <div className="mt-16 w-full">
              productos relacionados {relatedProducts.length}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
