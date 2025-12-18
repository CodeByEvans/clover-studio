import Hero from "@/components/hero";
import About from "@/components/about";
import FeaturedCollection from "@/components/featured-collection";
import Testimonials from "@/components/testimonials";
import { Products } from "@/types/product.type";
import { getProducts } from "@/utils/supabase/product";
import { getCollections } from "@/utils/supabase/collections";

export default async function Home() {
  // Product fetch
  const products: Products = await getProducts();

  // Featured products filter
  const featuredProduts: Products = products.filter(
    (product) => product.featured
  );

  // Collection fetch
  const collections = await getCollections();

  return (
    <main className="min-h-screen bg-white">
      <Hero products={featuredProduts} />
      <About />
      <FeaturedCollection products={featuredProduts} />
      <Testimonials />
    </main>
  );
}
