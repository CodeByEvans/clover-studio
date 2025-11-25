// components/home/FeaturedCollection.tsx
"use client";

import { useData } from "@/context/data-context";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const FeaturedCollection = () => {
  const { collections } = useData();

  return (
    <section
      id="coleccion-destacada"
      className=" py-20 lg:py-32 bg-white relative"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2>
            Momentos de luz para{" "}
            <span className=" text-[#ae0006]">esta temporada</span>
          </h2>
          <h3>
            Descubre nuestras colecciones de luz y luces para decorar tu hogar.
          </h3>
        </div>

        {/* Grid de colecciones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              href={`/colecciones/${collection.slug}`}
              className="group block overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              {/* Imagen */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-[1] overflow-hidden rounded-t-2xl">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  title={collection.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Título */}
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-gray-900">
                  {collection.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {collection.description}
                </p>
              </div>

              {/* Botón */}
              <div className="p-4 text-left ">
                <button className="text-[#ae0006] py-2 px-4 rounded cursor-pointer">
                  Explorar
                  <ArrowRight className="inline-block ml-2" />
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
