"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Products } from "@/types/Product";

type Carousel3DProps = {
  products: Products;
};

export const Carousel3D = ({ products }: Carousel3DProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % products.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
  };

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

  const getStatusBadge = (status: string) => {
    const badges = {
      activo: {
        label: "Activo",
        color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      },
      "no-operativo": {
        label: "No Operativo",
        color: "bg-orange-500/20 text-orange-300 border-orange-500/30",
      },
      "en-desarrollo": {
        label: "En Desarrollo",
        color: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      },
    };
    return badges[status as keyof typeof badges] || badges.activo;
  };

  return (
    <div className="relative w-full py-12 overflow-hidden">
      {/* Carousel Container */}
      <div
        className="relative h-[480px] flex items-center justify-center mb-8"
        style={{ perspective: "2000px" }}
      >
        <AnimatePresence initial={false}>
          {products.map((product, index) => {
            const { position, isActive, absPos } = getCardPosition(index);

            if (absPos > 2) return null;

            return (
              <motion.div
                key={product.title}
                className="absolute w-[380px] h-[500px] cursor-pointer"
                initial={false}
                animate={{
                  x: position * 420,
                  z: isActive ? 0 : -300 - absPos * 100,
                  rotateY: position * -20,
                  scale: isActive ? 1 : 0.75 - absPos * 0.1,
                  opacity: absPos > 2 ? 0 : 1,
                  zIndex: 10 - absPos,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.23, 1, 0.32, 1],
                }}
                onClick={() => setActiveIndex(index)}
              >
                <motion.div
                  className={`relative w-full h-full bg-gradient-to-br backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-border/50`}
                  whileHover={{ scale: isActive ? 1.04 : 1.02 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 13,
                    duration: 0.3,
                  }}
                >
                  {/* Project Image */}
                  <div className="relative h-40 overflow-hidden">
                    {product.portrait.endsWith(".gif") ? (
                      <img
                        src={product.portrait}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Image
                        src={product.portrait}
                        alt={product.title}
                        fill
                        className="object-cover"
                        sizes="380px"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
                  </div>

                  {/* Content */}
                  <div className="relative p-5 space-y-2.5">
                    {/* Title */}
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-xl font-bold text-foreground">
                        {product.title}
                      </h3>
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-muted-foreground">
                      {product.description}
                    </p>

                    {/* Category */}
                    <div className="flex flex-wrap gap-1.5 pt-1.5">
                      {product.category}
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-primary/5 opacity-0 pointer-events-none"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4 mt-6">
        <motion.button
          onClick={prev}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-card hover:bg-accent text-foreground p-3 rounded-full shadow-lg border border-border transition-colors cursor-pointer"
          aria-label="Proyecto anterior"
        >
          <ChevronLeft size={20} />
        </motion.button>
        <motion.button
          onClick={next}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-card hover:bg-accent text-foreground p-3 rounded-full shadow-lg border border-border transition-colors cursor-pointer"
          aria-label="Siguiente proyecto"
        >
          <ChevronRight size={20} />
        </motion.button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {products.map((product, index) => (
          <motion.button
            key={product.title}
            onClick={() => setActiveIndex(index)}
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
