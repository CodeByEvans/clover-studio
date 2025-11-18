import Hero from "@/components/hero";
import About from "@/components/about";
import FeaturedCollection from "@/components/featured-collection";
import Testimonials from "@/components/testimonials";
import { Products } from "@/types/Product";
import { getProducts } from "@/utils/supabase/product";

export default async function Home() {
  const products: Products = await getProducts();
  return (
    <main className="min-h-screen bg-white">
      <Hero products={products} />
      <About />
      <FeaturedCollection products={products} />
      <Testimonials />
    </main>
  );
}
