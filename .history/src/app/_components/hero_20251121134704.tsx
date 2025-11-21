"use client";
import React, { useEffect } from "react";
import { useScrollToId } from "@/hooks/useScrollToId";
import { useNotifications } from "@/context/notifications-context";

import { Products } from "@/types/product.type";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Carousel3D from "@/components/Carousel3D";
import { useProductsContext } from "@/context/product-context";
import { getFeaturedProducts } from "@/utils/products";

export const Hero = () => {
  const { products } = useProductsContext();
  const { showSuccess, showError } = useNotifications();
  const { handleScrollToId } = useScrollToId();

  const featuredProducts: Products = getFeaturedProducts(products);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-20 overflow-hidden bg-gradient-to-br from-[#BEE8CC]/10 via-[#FEFCF9]/60 to-[#FDE68A]/20"
    >
      {/* Texto principal */}
      <div className="flex flex-col gap-6 max-w-2xl text-center lg:text-left">
        <p className="text-lg md:text-2xl text-gray-600 font-medium">
          Clover Studio
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Pequeños detalles que <span className="text-[#ae0006]">iluminan</span>{" "}
          grandes momentos
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Velas artesanales, wax melts y productos aromáticos únicos. Cada pieza
          creada con amor para llenar tu hogar de calidez y personalidad.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start">
          <Button variant="default" size="lg">
            Ver colecciones
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => handleScrollToId("contact")}
            asChild
          >
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

      {/* Decoraciones sutiles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#FDE68A]/20 rounded-full -z-10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#BEE8CC]/20 rounded-full -z-10 blur-3xl"></div>
    </motion.section>
  );
};

export default Hero;
