"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useState, useRef } from "react";

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

  return (
    <section className="w-full py-20 px-4 bg-[#e6f5ec]">
      {" "}
      {/* fondo verde muy suave */}
      {/* Desktop */}
      <div className="hidden md:flex justify-center gap-10">
        {features.map((feat, i) => (
          <div
            key={i}
            className="
              max-w-[320px]
              h-[250px]
              px-8 py-10
              rounded-[32px]
              bg-green-100
              text-center
              flex flex-col justify-center
              shadow-lg
              hover:shadow-2xl
              transition-shadow duration-300
            "
          >
            <h3 className="text-[24px] font-semibold text-[#2e2e2e] leading-snug mb-3">
              {feat.title}
            </h3>
            <p className="text-lg text-[#555555] font-medium leading-relaxed">
              {feat.desc}
            </p>
          </div>
        ))}
      </div>
      {/* Mobile Swiper */}
      <div className="md:hidden w-full">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          onSlideChange={(swiper) => setCurrent(swiper.activeIndex + 1)}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="w-full"
        >
          {features.map((feat, i) => (
            <SwiperSlide key={i} className="w-full">
              <div
                className="
                  max-w-[300px]
                  h-[240px]
                  px-6 py-8
                  rounded-[32px]
                  bg-green-100
                  text-center
                  flex flex-col justify-center
                  mx-auto
                  shadow-md
                  hover:shadow-xl
                  transition-shadow duration-300
                "
              >
                <h3 className="text-2xl font-semibold text-[#2e2e2e] mb-3 leading-snug">
                  {feat.title}
                </h3>
                <p className="text-base text-[#555555] font-medium leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation (1/3 + arrows) */}
        <div className="mt-6 flex items-center justify-center gap-6 text-[#2e2e2e] font-semibold">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="text-2xl px-3 hover:text-green-700 transition-colors"
          >
            {"<"}
          </button>

          <span className="text-lg">
            {current}/{features.length}
          </span>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="text-2xl px-3 hover:text-green-700 transition-colors"
          >
            {">"}
          </button>
        </div>
      </div>
    </section>
  );
}
