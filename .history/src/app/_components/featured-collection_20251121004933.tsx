// components/home/FeaturedCollection.tsx
"use client";

import { Products } from "@/types/product.type";
import Image from "next/image";
import Link from "next/link";

interface FeaturedCollectionProps {
  products: Products;
}

export const FeaturedCollection = ({ products }: FeaturedCollectionProps) => {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/productos/${product.slug}`}
              className="group relative bg-white p-4 rounded-2xl shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 block"
            >
              <div className="relative w-full aspect-square overflow-hidden rounded-xl mb-4">
                <Image
                  src={product.portrait}
                  alt={product.title}
                  width={800}
                  height={800}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-lg font-bold mt-2">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
