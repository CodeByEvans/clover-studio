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
    <section className="min-h-screen bg-gradient-to-br from-[#BEE8CC]/5 via-[#FEFCF9] to-[#FDE68A]/8 overflow-hidden relative">
      <div className="absolute top-10 left-0 w-48 h-48 bg-gradient-to-br from-[#ae0006]/10 to-[#8B1E3F]/5 rounded-full blur-3xl -z-10">
        <small>Clover Studio</small>
        <h1>
          Pequeños detalles que <span>iluminan</span> grandes momentos
        </h1>
        <p>
          Velas artesanales, wax melts y productos aromáticos únicos. Cada pieza
          creada con amor para llenar tu hogar de calidez y personalidad.
        </p>
      </div>
      <Carousel3D products={products} />
    </section>
  );
};

export default Hero;
