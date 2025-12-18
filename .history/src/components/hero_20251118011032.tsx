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
  const [email, setEmail] = React.useState("");

  const { showSuccess, showError } = useNotifications();
  const { handleScrollToId } = useScrollToId();

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#BEE8CC]/5 via-[#FEFCF9] to-[#FDE68A]/8 overflow-hidden relative flex flex-raw items-center justify-center px-8 md:px-16 lg:px-32 xl:px-48">
      <div className="flex flex-col gap-8 max-w-2xl">
        <div className="flex flex-col gap-4">
          <p className="text-lg md:text-2xl text-[#484848] ">Clover Studio</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Pequeños detalles que{" "}
            <span className="text-[#ae0006]">iluminan</span> grandes momentos
          </h1>
          <p className="text-lg md:text-xl">
            Velas artesanales, wax melts y productos aromáticos únicos. Cada
            pieza creada con amor para llenar tu hogar de calidez y
            personalidad.
          </p>
        </div>
        <div className="flex gap-2">
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
      <Carousel3D products={products} />
    </section>
  );
};

export default Hero;
