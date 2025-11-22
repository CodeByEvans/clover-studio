"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Products } from "@/types/product.type";
import { Button } from "./ui/button";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type Carousel3DProps = {
  products: Products;
};

export const Carousel3D = ({ products }: Carousel3DProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!products.length) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 4000); // Cambia cada 4 segundos, ajusta a tu gusto

    return () => clearInterval(interval);
  }, [products.length]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getCardPosition = (index: number) => {
    const diff = index - activeIndex;
    const totalItems = products.length;

    let position = diff;
    if (diff > totalItems / 2) position = diff - totalItems;
    if (diff < -totalItems / 2) position = diff + totalItems;

    const isActive = position === 0;
    const absPos = Math.abs(position);

    return { position, isActive, absPos };
  };

  return (
    <div className="relative w-full py-6 md:py-12 overflow-hidden">
      {/* Carousel Container */}
      <div
        className="relative h-[50vh] md:h-[480px] flex items-center justify-center mb-8"
        style={{ perspective: "2000px" }}
      >
        <Swiper>
          {products.map((product, index) => {
            return (
              <SwiperSlide key={product.id}>
                <div>
                  <h2>{product.title}</h2>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {isMobile && (
        <div className="flex flex-col gap-4">
          <Link href="/colecciones">
            <Button variant="default" size="lg" className="mx-auto block w-50">
              Ver colecciones
            </Button>
          </Link>
          <Link
            href="https://wa.me/34691453544"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="secondary"
              size="lg"
              className="mx-auto block w-50"
            >
              Contacto
            </Button>
          </Link>
        </div>
      )}

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {products.map((product, index) => (
          <motion.button
            key={product.title}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              index === activeIndex
                ? "w-8 bg-primary"
                : "w-2 bg-muted hover:bg-muted-foreground"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Ver ${product.title}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel3D;
