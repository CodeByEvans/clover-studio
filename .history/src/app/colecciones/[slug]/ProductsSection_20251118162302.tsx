"use client";

import { Products } from "@/types/product.type";
import ProductFilters from "./ProductFilters";
import { useState } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export const ProductsSection = ({
  filteredProducts,
}: {
  filteredProducts: Products;
}) => {
  const [sortedProducts, setSortedProducts] = useState(filteredProducts);

  const handleSort = (value: string) => {
    let sorted = [...filteredProducts];
    if (value === "precio") {
      sorted.sort((a, b) => a.price - b.price);
    }
    // si quieres relevancia puedes añadir lógica
    setSortedProducts(sorted);
  };

  return (
    <section>
      <ProductFilters onSort={handleSort} />
      {sortedProducts.length > 0 ? (
        <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden text-center">
              <CardHeader className="p-2">
                <Image
                  src={product.portrait}
                  alt={product.title}
                  title={product.title}
                  width={300}
                  height={300}
                  className="w-full h-60 object-cover rounded-md"
                />
                <CardTitle className="mt-2 text-md font-semibold">
                  {product.title}
                </CardTitle>
                <p className="text-sm text-gray-700 mt-1">
                  ${product.price.toFixed(2)}
                </p>
              </CardHeader>
            </Card>
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

export default ProductsSection;
