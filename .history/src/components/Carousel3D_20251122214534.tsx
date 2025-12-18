"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Products } from "@/types/product.type";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export const Carousel3D = ({ products }: { products: Products }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full py-6 md:py-12 overflow-hidden">
      {/* Contenedor del carrusel */}
      <div className="relative h-[420px] md:h-[520px] flex items-center justify-center">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000 }}
          loop
          spaceBetween={30}
          centeredSlides
          slidesPerView="auto"
          className="w-[240px] md:w-[380px] h-[320px] md:h-full flex items-center"
        >
          {products.map((product) => (
            <SwiperSlide
              key={product.id}
              className=" flex items-center justify-center"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-border/40 bg-background">
                {/* Imagen */}
                <div className="relative w-full h-full aspect-[3/4]">
                  <Image
                    src={product.portrait}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />

                {/* Texto */}
                <div className="absolute bottom-0 p-5 text-center flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {product.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {product.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Botones móviles */}
      {isMobile && (
        <div className="flex flex-col gap-4 mt-6">
          <Link href="/colecciones">
            <Button variant="default" size="lg" className="mx-auto w-52">
              Ver colecciones
            </Button>
          </Link>

          <Link
            href="https://wa.me/34691453544"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" size="lg" className="mx-auto w-52">
              Contacto
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Carousel3D;
