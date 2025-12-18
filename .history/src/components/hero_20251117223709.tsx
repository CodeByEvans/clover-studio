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
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Bienvenido a Clover Studio
        </h1>
      </div>
      <div>
        <Carousel3D products={products} />
      </div>
    </section>
  );
};

export default Hero;
