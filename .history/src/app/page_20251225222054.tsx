"use server";
import Hero from "./_components/hero";
import FeaturedCollection from "./_components/featured-collection";
import Testimonials from "./_components/testimonials";
import FeaturesSection from "./_components/FeaturesSection";
import FloatingWhatsappIcon from "@/components/FloatingWhatsappIcon";

export default async function Home() {
  return (
    <>
      <Hero />
      <FeaturedCollection />
      <FeaturesSection />
      <Testimonials />
      <FloatingWhatsappIcon />
    </>
  );
}
