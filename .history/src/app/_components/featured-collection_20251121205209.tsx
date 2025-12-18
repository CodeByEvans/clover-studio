// components/home/FeaturedCollection.tsx
"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useData } from "@/context/product-context";
import { Products } from "@/types/product.type";
import { getFeaturedProducts } from "@/utils/products";
import Image from "next/image";
import Link from "next/link";

export const FeaturedCollection = () => {
  const { products } = useData();

  const featuredProducts: Products = getFeaturedProducts(products);
  return (
    <section
      id="coleccion-destacada"
      className="py-20 lg:py-32 bg-white relative"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Momentos de luz para
            <span className="block text-[#ae0006]">esta temporada</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre una selección especial de nuestros productos artesanales,
            hechos a mano con amor y dedicación.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
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
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
