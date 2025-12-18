import Hero from "@/components/hero";
import About from "@/components/about";
import FeaturedCollection from "@/components/featured-collection";
import Testimonials from "@/components/testimonials";
import { Products } from "@/types/Product";
import { getProducts } from "@/utils/supabase/Product";

export const Home = async () => {
  const products: Products = await getProducts();
  return (
    <main className="min-h-screen bg-white">
      <Hero products={products} />
      <About />
      <FeaturedCollection />
      <Testimonials />
    </main>
  );
};

export default Home;
