"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useProductsContext } from "@/context/product-context";
import ProductNotFound from "../404";
import AddToCartSection from "./AddToCartSection";
import SwiperCarousel from "@/components/SwiperCarousel";

export const SectionProduct = ({ slug }: { slug: string }) => {
  const { products } = useProductsContext();

  // Search product by slug
  const product = products.find((p) => p.slug === slug);
  if (!product) return <ProductNotFound />;

  return (
    <section className="container mx-auto px-0 md:px-6 lg:px-20 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <SwiperCarousel images={product.images} />
        </div>

        <div className="flex flex-col justify-start md:justify-center gap-4">
          <h1 className="text-4xl font-extrabold text-[#8B1E3F]">
            {product.title}
          </h1>
          <h2 className="text-2xl font-semibold mt-2">{product.price} €</h2>
          <p className="text-gray-700 mt-4 leading-relaxed">
            {product.description}
          </p>

          <AddToCartSection product={product} />
        </div>
      </div>
    </section>
  );
};

export default SectionProduct;
