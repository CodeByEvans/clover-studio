"use client";
import React from "react";
import Carousel3D from "./common/Carousel3D";
import { Products } from "@/types/Product";

type HeroProps = {
  products: Products;
};

export const Hero = ({ products }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#FFF8F0] via-[#FEF3E6] to-[#FDEBC9] overflow-hidden px-4 md:px-16">
      {/* Encabezado sencillo */}
      <div className="text-center mb-12 z-10">
        <h1 className="text-3xl md:text-4xl font-serif text-gray-800 mb-2">
          Clover Studio
        </h1>
        <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto">
          Productos artesanales hechos con cariño. Velas, quemadores y detalles
          que llenan de calidez tu hogar.
        </p>
      </div>

      {/* Carousel principal */}
      <div className="w-full max-w-[1200px] relative z-10 shadow-2xl rounded-3xl overflow-hidden bg-gradient-to-br from-[#FFF7EE]/50 to-[#FFE6C5]/30 p-6">
        <Carousel3D products={products} />
      </div>

      {/* Fondo decorativo estilo artesanal */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply opacity-25 blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
