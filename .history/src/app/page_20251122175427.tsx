import Hero from "./_components/hero";
import FeaturedCollection from "./_components/featured-collection";
import Testimonials from "./_components/testimonials";
import { useCollections } from "@/hooks/use-collections";

export default async function Home() {
  const collections = useCollections();
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <FeaturedCollection />
      <Testimonials />
    </main>
  );
}
