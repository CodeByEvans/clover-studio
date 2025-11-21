import { Products } from "@/types/product.type";
import { getProducts } from "@/utils/supabase/product";
import Hero from "./_components/hero";
import FeaturedCollection from "./_components/featured-collection";
import Testimonials from "./_components/testimonials";
import { useProducts } from "@/hooks/use-products";
import LoadingLayout from "./loading";

export default async function Home() {
  // Product fetch
  const { data: products, error, status } = useProducts();

  if (status === "pending") {
    return <LoadingLayout />;
  }

  if (status === "error") {
    return <p>Error al cargar los productos: {(error as Error).message}</p>;
  }

  // Featured products filter
  const featuredProduts: Products = products.filter(
    (product) => product.featured
  );

  return (
    <main className="min-h-screen bg-white">
      <Hero products={featuredProduts} />
      <FeaturedCollection products={featuredProduts} />
      <Testimonials />
    </main>
  );
}
