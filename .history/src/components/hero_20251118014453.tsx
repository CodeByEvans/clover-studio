"use client";
import React from "react";
import { useScrollToId } from "@/hooks/useScrollToId";
import { useNotifications } from "@/contexts/notifications-context";
import Carousel3D from "./common/Carousel3D";
import { Products } from "@/types/Product";
import { Button } from "./ui/button";

type HeroProps = {
  products: Products;
};

export const Hero = ({ products }: HeroProps) => {
  const { showSuccess, showError } = useNotifications();
  const { handleScrollToId } = useScrollToId();

  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-8 md:px-12 lg:px-20 gap-12 lg:gap-20 overflow-hidden bg-gradient-to-br from-[#BEE8CC]/10 via-[#FEFCF9]/60 to-[#FDE68A]/20">
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
          >
            Contacto
          </Button>
        </div>
      </div>

      {/* Carousel */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <Carousel3D products={products} />
      </div>

      {/* Decoraciones sutiles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#FDE68A]/20 rounded-full -z-10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#BEE8CC]/20 rounded-full -z-10 blur-3xl"></div>
    </section>
  );
};

export default Hero;
