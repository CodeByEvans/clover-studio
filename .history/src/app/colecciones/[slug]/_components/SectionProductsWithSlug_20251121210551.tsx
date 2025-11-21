"use client";

import { useMemo, useState } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useData } from "@/context/product-context";
import ProductFilters from "@/components/ProductFilters";

export const SectionProductsWithSlug = ({ slug }: { slug: string }) => {
  const { products } = useData();
  const [sortBy, setSortBy] = useState<string>("relevancia");

  const sectionProducts = useMemo(() => {
    return products.filter((product) => product.collection.slug === slug);
  }, [products, slug]);

  const sortedProducts = useMemo(() => {
    const sorted = [...sectionProducts];

    if (sortBy === "precio-asc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortBy === "precio-desc") {
      sorted.sort((a, b) => b.price - a.price);
    }
    // "relevancia" mantiene orden original

    return sorted;
  }, [sectionProducts, sortBy]);

  const handleSort = (value: string) => {
    setSortBy(value);
  };

  return (
    <section className="container mx-auto px-0 md:px-6 lg:px-20 min-h-screen">
      <ProductFilters onSort={handleSort} />
      {sortedProducts.length > 0 ? (
        <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full px-0 md:px-6 lg:px-20">
          {sortedProducts.map((product) => (
            <Link
              key={product.id}
              href={`/productos/${product.slug}`}
              className="group block"
            >
              <Card className="overflow-hidden text-center hover:scale-105 transition-all duration-300 shadow rounded-2xl">
                <CardHeader className="p-2">
                  <div className="relative w-full aspect-square overflow-hidden rounded-xl">
                    <Image
                      src={product.portrait}
                      alt={product.title}
                      title={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardTitle className="mt-2 text-md font-semibold">
                    {product.title}
                  </CardTitle>
                  <p className="text-sm text-gray-700 mt-1">
                    ${product.price.toFixed(2)}
                  </p>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </section>
      ) : (
        <p className="text-center text-gray-500 mt-6">
          No hay productos disponibles en esta colección.
        </p>
      )}
    </section>
  );
};

export default SectionProductsWithSlug;
