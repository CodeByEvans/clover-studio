"use server";
import Hero from "./_components/hero";
import CollectionsSection from "./_components/CollectionsSection";
import Testimonials from "./_components/testimonials";
import FeaturesSection from "./_components/FeaturesSection";
import FloatingWhatsappIcon from "@/components/FloatingWhatsappIcon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clover Studio: Velas decorativas, Wax Melts y Más",
};

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
