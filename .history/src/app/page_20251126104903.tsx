"use server";
import Hero from "./_components/hero";
import FeaturedCollection from "./_components/featured-collection";
import Testimonials from "./_components/testimonials";
import About from "./_components/about";

export default async function Home() {
  return (
    <>
      <Hero />
      <FeaturedCollection />
      <Testimonials />
    </>
  );
}
