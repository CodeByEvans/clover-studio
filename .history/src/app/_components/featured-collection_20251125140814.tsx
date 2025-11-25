// components/home/FeaturedCollection.tsx
"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useData } from "@/context/data-context";
import { Products } from "@/types/product.type";
import { getFeaturedProducts } from "@/utils/products";
import Image from "next/image";
import Link from "next/link";

export const FeaturedCollection = () => {
  const { collections } = useData();
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

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              href={`/productos/${collection.slug}`}
              className="group block"
            >
              <Card className="overflow-hidden text-center hover:scale-105 transition-all duration-300 shadow rounded-2xl">
                <CardHeader className="p-2">
                  <div className="relative w-full aspect-square overflow-hidden rounded-xl">
                    <Image
                      src={collection.image}
                      alt={collection.title}
                      title={collection.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardTitle className="mt-2 text-md font-semibold">
                    {collection.title}
                  </CardTitle>
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
