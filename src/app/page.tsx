"use server";
import Hero from "./_components/hero";
import CollectionsSection from "./_components/CollectionsSection";
import Testimonials from "./_components/testimonials";
import FeaturesSection from "./_components/FeaturesSection";
import FloatingWhatsappIcon from "@/components/FloatingWhatsappIcon";

export default async function Home() {
  return (
    <>
      <Hero />
      <CollectionsSection />
      <FeaturesSection />
      <Testimonials />
      <FloatingWhatsappIcon />
    </>
  );
}
