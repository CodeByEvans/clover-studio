"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  const [current, setCurrent] = useState(1);
  const swiperRef = useRef<any>(null);

  const features = [
    {
      title: "Cera de soja 100% natural",
      desc: "Nuestras velas están hechas con cera vegetal de soja, sin materiales tóxicos.",
    },
    {
      title: "Hechas a mano",
      desc: "Cada vela es artesanal, cuidando cada detalle para ofrecer un producto único.",
    },
    {
      title: "Larga duración",
      desc: "Diseñadas para arder durante horas, disfrutando de su luz y aroma más tiempo.",
    },
  ];

  // Variants para animación
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = (i: number) => ({
    hidden: { opacity: 0, y: 50, x: i % 2 === 0 ? -50 : 50 },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      },
    },
  });

  return (
    <section className="w-full py-20 px-0 bg-[#e6f5ec]">
      {/* Desktop */}
      <motion.div
        className="hidden md:flex justify-center gap-10 px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {features.map((feat, i) => (
          <motion.div
            key={i}
            className="
              max-w-[330px]
              h-[240px]
              px-10 py-12
              bg-[#f4dfd3]
              text-center
              flex flex-col justify-center
              shadow-lg
              border
              border-green-200
              rounded-[38px]
            "
            variants={itemVariants(i)}
          >
            <h3 className="text-[26px] font-semibold text-[#2e2e2e] leading-snug mb-2">
              {feat.title}
            </h3>
            <p className="text-lg text-muted-foreground font-medium leading-relaxed">
              {feat.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile Swiper */}
      <div className="md:hidden w-full">
        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          onSlideChange={(swiper) => setCurrent(swiper.activeIndex + 1)}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="w-full"
        >
          {features.map((feat, i) => (
            <SwiperSlide key={i} className="w-full">
              <div
                className="
                  max-w-[330px]
                  h-[240px]
                  px-10 py-12
                  bg-green-100

                  text-center
                  flex flex-col justify-center
                  mx-auto
                  border
                  border-green-200
                  rounded-[38px]
                "
              >
                <h3 className="text-2xl font-semibold text-[#2e2e2e] mb-4 leading-snug">
                  {feat.title}
                </h3>
                <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation */}
        <div className="mt-6 flex items-center justify-center gap-6 text-[#2e2e2] font-semibold">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="text-2xl px-2"
          >
            {"<"}
          </button>

          <span className="text-lg">
            {current}/{features.length}
          </span>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="text-2xl px-2"
          >
            {">"}
          </button>
        </div>
      </div>
    </section>
  );
}
