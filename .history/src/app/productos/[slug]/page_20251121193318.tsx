import ProductNotFound from "./404";
import SwiperCarousel from "@/components/SwiperCarousel";
import Link from "next/link";
import AddToCartSection from "./_components/AddToCartSection";
import { useProductsContext } from "@/context/product-context";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { products } = useProductsContext();

  // Search product by slug
  const product = products.find((p) => p.slug === slug);
  if (!product) return <ProductNotFound />;

  // Related products filter
  const relatedProducts = products.filter(
    (p) => p.collection.id === product.collection.id && p.id !== product.id
  );

  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Producto principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <SwiperCarousel images={product.images} />
          </div>

          <div className="flex flex-col justify-start md:justify-center gap-4">
            <h1 className="text-4xl font-extrabold text-[#8B1E3F]">
              {product.title}
            </h1>
            <h2 className="text-2xl font-semibold mt-2">{product.price} €</h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              {product.description}
            </p>

            <AddToCartSection product={product} />
          </div>
        </div>

        {/* Productos relacionados */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Productos relacionados</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  href={`/productos/${p.slug}`}
                  className="block border rounded-lg p-2 hover:shadow-lg transition-shadow"
                >
                  <img
                    src={p.images[0]}
                    alt={p.title}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <h4 className="mt-2 font-semibold text-sm">{p.title}</h4>
                  <p className="text-gray-600 text-sm">{p.price} €</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
