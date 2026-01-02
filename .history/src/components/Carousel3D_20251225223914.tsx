"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Products } from "@/types/product.type";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectCards, Pagination, Navigation } from "swiper/modules";

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
          effect={"cards"}
          grabCursor={true}
          modules={[Autoplay, EffectCards, Pagination, Navigation]}
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          centeredSlides
          slidesPerView="auto"
          className="w-[240px] md:w-[380px] h-[340px] md:h-full flex items-center"
        >
          {products.map((product) => (
            <SwiperSlide
              key={product.id}
              className=" flex items-center justify-center rounded-2xl"
            >
              <Link
                href={`/productos/${product.slug}`}
                className="w-full h-full"
              >
                <div className="relative w-full h-full overflow-hidden shadow-2xl border border-border/40 bg-background">
                  {/* Imagen */}
                  <div className="relative aspect-[3/4] w-full h-[360px]">
                    <Image
                      src={product.portrait}
                      alt={product.title}
                      fill
                      className="object-cover"
                      unoptimized={process.env.NODE_ENV === "development"}
                    />
                  </div>

                  {/* Texto */}
                  <div className="hidden md:flex text-center flex flex-col gap-2 p-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      {product.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {product.description}
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Botones móviles */}
      {isMobile && (
        <div className="px-6 text-center mb-6">
          <h1 className="text-3xl font-bold leading-tight">
            Pequeños detalles que{" "}
            <span className="text-[#cbc070]">iluminan</span> grandes momentos
          </h1>

          <p className="text-sm text-muted-foreground mt-3">
            Velas artesanales, wax melts y productos aromáticos únicos creados
            con amor.
          </p>

          <div className="flex flex-col gap-3 mt-6">
            <Link href="/colecciones">
              <Button className="w-full bg-[#18905a] hover:bg-[#18905a]/90">
                Ver colecciones
              </Button>
            </Link>

            <Link
              href="https://wa.me/34691453544"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" className="w-full border-[#cbc070]">
                Contacto
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel3D;
