import { getProducts } from "@/utils/supabase/product";
import ProductNotFound from "./404";
import SwiperCarousel from "@/components/common/SwiperCarousel";
import { Products } from "@/types/product.type";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Get all products
  const products: Products = await getProducts();

  // Find product by slug
  const product = products.find((p) => p.slug === slug);

  if (!product) return <ProductNotFound />;

  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <SwiperCarousel images={product.images} />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-semibold">{product.title}</h1>
            <h2 className="text-2xl font-semibold mt-4">${product.price}</h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
