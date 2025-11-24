"use server";
import Hero from "./_components/hero";
import FeaturedCollection from "./_components/featured-collection";
import Testimonials from "./_components/testimonials";

export default async function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <FeaturedCollection />
      <Testimonials />
    </main>
  );
}
