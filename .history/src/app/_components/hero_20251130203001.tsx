"use client";
import React, { useEffect } from "react";
import { useScrollToId } from "@/hooks/useScrollToId";

import { Products } from "@/types/product.type";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Carousel3D from "@/components/Carousel3D";
import { getFeaturedProducts } from "@/utils/products";
import { useData } from "@/context/data-context";

export const Hero = () => {
  const { products } = useData();

  const featuredProducts: Products = getFeaturedProducts(products);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative flex flex-col-reverse lg:flex-row items-center justify-center lg:gap-20 overflow-hidden bg-gradient-to-br from-[#BEE8CC]/10 via-[#FEFCF9]/60 to-[#FDE68A]/20"
    >
      {/* Texto principal */}
      <div className="hidden md:flex flex-col gap-6 max-w-2xl text-center lg:text-left">
        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 font-medium">
          Clover Studio
        </p>

        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
          Pequeños detalles que <span className="text-[#ae0006]">iluminan</span>{" "}
          grandes momentos
        </h1>
        <p className="text-lg lg:text-xl text-gray-700">
          Velas artesanales, wax melts y productos aromáticos únicos. Cada pieza
          creada con amor para llenar tu hogar de calidez y personalidad.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start">
          <Button variant="default" size="lg" className="bg-[#18905a]">
            Ver colecciones
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <a
              href="https://wa.me/34691453544"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contacto
            </a>
          </Button>
        </div>
      </div>

      {/* Carousel */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end flex-col text-center relative">
        <Carousel3D products={featuredProducts} />
      </div>
    </motion.section>
  );
};

export default Hero;
