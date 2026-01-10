// components/home/FeaturedCollection.tsx
"use client";

import { useCollections } from "@/hooks/use-collections";
import { collectionsAPI } from "@/services/api";
import { Collection, Collections } from "@/types/collection.type";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

export const CollectionsSection = () => {
  const { data: collections = [] } = useCollections();

  const isMobile = useMediaQuery({ maxWidth: 640 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
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
          viewport={isMobile ? {} : { once: true, margin: "-100px" }}
        >
          {collections.map((collection: Collection) => (
            <motion.div
              key={collection.id}
              variants={cardVariants}
              {...(isMobile
                ? {
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: { once: true, amount: 0.35 },
                  }
                : {})}
            >
              <Link
                href={`/colecciones/${collection.slug}`}
                className="group block overflow-hidden rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300 bg-white h-[400px] sm:h-[200px] lg:h-[200px]"
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
