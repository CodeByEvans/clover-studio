import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Products } from "@/types/Product";

export const FeaturedCollection = ({ products }: { products: Products }) => {
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

        {/* Galería de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product) => (
            <Link
              key={product.id}
              href={product.title}
              className="group relative bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 block"
            >
              <div className="relative aspect-square w-full rounded-2xl mb-4 overflow-hidden">
                <Image
                  src={product.portrait}
                  alt={product.title}
                  width={800}
                  height={800}
                  className="object-cover w-full h-full rounded-2xl"
                />
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
