// components/home/FeaturedCollection.tsx
"use client";

import { useData } from "@/context/data-context";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export const CollectionsSection = () => {
  const { collections } = useData();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="coleccion-destacada"
      className=" py-20 lg:py-32 bg-white relative"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-3">
            Elige como <span className=" text-[#ae0006]">perfumar</span> tu
            mundo
          </h1>
          <p className="text-lg sm:text-xl text-gray-600"></p>
        </div>

        {/* Grid de colecciones */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {collections.map((collection) => (
            <motion.div key={collection.id} variants={cardVariants}>
              <Link
                href={`/colecciones/${collection.slug}`}
                className="group block overflow-hidden rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300 bg-white h-[250px] sm:h-[300px] lg:h-[350px]"
              >
                <div className="flex flex-col sm:flex-row h-full">
                  {/* Imagen */}
                  <div className="relative w-full sm:w-1/3 aspect-[4/3] sm:aspect-auto overflow-hidden">
                    <Image
                      src={collection.image}
                      alt={collection.title}
                      title={collection.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      unoptimized={process.env.NODE_ENV === "development"}
                    />
                  </div>

                  {/* Contenido */}
                  <div className="flex flex-col justify-between p-6 flex-1">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">
                        {collection.title}
                      </h2>
                      <p className="mt-2 text-sm text-gray-600">
                        {collection.description}
                      </p>
                    </div>

                    <div className="mt-4">
                      <span className="inline-flex items-center text-[#ae0006] font-medium">
                        Explorar
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CollectionsSection;
