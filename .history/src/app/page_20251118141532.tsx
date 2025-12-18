import Hero from "@/components/hero";
import About from "@/components/about";
import FeaturedCollection from "@/components/featured-collection";
import Testimonials from "@/components/testimonials";
import { Products } from "@/types/Product";
import { getProducts } from "@/utils/supabase/product";

export default async function Home() {
  // Fetch de productos
  const products: Products = await getProducts();
  const featuredProduts: Products = products.filter(
    (product) => product.featured
  );
  return (
    <main className="min-h-screen bg-white">
      <Hero products={featuredProduts} />
      <About />
      <FeaturedCollection products={featuredProduts} />
      <Testimonials />
    </main>
  );
}
