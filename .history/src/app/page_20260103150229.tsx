"use server";
import Hero from "./_components/hero";
import CollectionsSection from "./_components/CollectionsSection";
import Testimonials from "./_components/testimonials";
import FeaturesSection from "./_components/FeaturesSection";
import FloatingWhatsappIcon from "@/components/FloatingWhatsappIcon";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { collectionsAPI, productsAPI } from "@/services/api";

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["featured-products"],
    queryFn: productsAPI.getFeatured,
  });

  await queryClient.prefetchQuery({
    queryKey: ["collections"],
    queryFn: collectionsAPI.getAll,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

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
