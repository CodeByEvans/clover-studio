"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useData } from "@/context/product-context";
import ProductFilters from "@/components/ProductFilters";
import { Products } from "@/types/product.type";

export const SectionProductsWithSlug = ({ slug }: { slug: string }) => {
  const { products } = useData();

  const [sectionProducts, setSectionProducts] = useState<Products>([]);
  const [sortedProducts, setSortedProducts] = useState(products);

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.collection.slug === slug
    );
    setSectionProducts(filteredProducts);
  });

  const handleSort = (value: string) => {
    let sorted = [...sectionProducts];
    if (value === "precio") {
      sorted.sort((a, b) => a.price - b.price);
    }
    // si quieres relevancia puedes añadir lógica
    setSortedProducts(sorted);
  };

  return (
    <section className="container mx-auto px-0 md:px-6 lg:px-20 min-h-screen">
      <ProductFilters onSort={handleSort} />
      {sortedProducts.length > 0 ? (
        <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full px-0 md:px-6 lg:px-20">
          {products.map((product) => (
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
