import Hero from "@/components/hero";
import About from "@/components/about";
import FeaturedCollection from "@/components/featured-collection";
import Testimonials from "@/components/testimonials";
import { getProducts } from "@/utils/supabase/product";

export default function Home() {
  const products = getProducts();
  return (
    <main className="min-h-screen bg-white">
      <Hero products={products} />
      <About />
      <FeaturedCollection />
      <Testimonials />
    </main>
  );
}
