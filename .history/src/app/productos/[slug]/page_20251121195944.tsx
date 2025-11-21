import ProductNotFound from "./404";
import SwiperCarousel from "@/components/SwiperCarousel";
import Link from "next/link";
import AddToCartSection from "./_components/AddToCartSection";
import { useProductsContext } from "@/context/product-context";
import SectionProduct from "./_components/SectionProduct";
import { RelatedProducts } from "./_components/RelatedProducts";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <SectionProduct slug={slug} />

        {/* Productos relacionados */}
        <RelatedProducts slug={slug} />
      </div>
    </section>
  );
}
