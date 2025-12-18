"use client";
import React from "react";
import { useScrollToId } from "@/hooks/useScrollToId";
import { useNotifications } from "@/contexts/notifications-context";
import Carousel3D from "./common/Carousel3D";
import { Products } from "@/types/Product";

type HeroProps = {
  products: Products;
};

export const Hero = ({ products }: HeroProps) => {
  const [email, setEmail] = React.useState("");

  const { showSuccess, showError } = useNotifications();
  const { handleScrollToId } = useScrollToId();

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#BEE8CC]/10 via-[#FEFCF9]/50 to-[#FDE68A]/20 overflow-hidden px-4 md:px-16">
      {/* Texto principal */}
      <div className="text-center mb-12 z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Bienvenido a Clover Studio
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Descubre nuestras velas y quemadores artesanales, cada pieza hecha a
          mano con amor y cuidado.
        </p>
        <button
          onClick={() => handleScrollToId("products")}
          className="mt-6 px-6 py-3 bg-gradient-to-r from-yellow-400 to-green-300 text-gray-900 font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
        >
          Explorar productos
        </button>
      </div>

      {/* Carousel */}
      <div className="w-full max-w-[1200px] z-10">
        <Carousel3D products={products} />
      </div>

      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-yellow-200 via-transparent to-transparent opacity-30 pointer-events-none" />
    </section>
  );
};

export default Hero;
