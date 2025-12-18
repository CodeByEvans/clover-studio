import { Product, Products } from "@/types/product.type";
import Hero from "./_components/hero";
import FeaturedCollection from "./_components/featured-collection";
import Testimonials from "./_components/testimonials";
import { useProducts } from "@/hooks/use-products";
import LoadingLayout from "./loading";

export default async function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <FeaturedCollection />
      <Testimonials />
    </main>
  );
}
