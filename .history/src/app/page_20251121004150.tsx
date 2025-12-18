import { Products } from "@/types/product.type";
import { getProducts } from "@/utils/supabase/product";
import Hero from "./_components/hero";
import About from "./_components/about";
import FeaturedCollection from "./_components/featured-collection";
import Testimonials from "./_components/testimonials";

export default async function Home() {
  // Product fetch
  const products: Products = await getProducts();

  // Featured products filter
  const featuredProduts: Products = products.filter(
    (product) => product.featured
  );

  return (
    <main className="min-h-screen bg-white">
      <Hero products={featuredProduts} />
      <FeaturedCollection products={featuredProduts} />
      <About />
      <Testimonials />
    </main>
  );
}
