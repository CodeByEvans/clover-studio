"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function FeaturesSection() {
  const features = [
    {
      title: "Cera de soja sin parafinas",
      desc: "Nuestras velas están hechas con cera vegetal de soja, sin materiales tóxicos.",
    },
    {
      title: "Basadas en la aromaterapia",
      desc: "Creamos velas terapéuticas que buscan armonía, calma y bienestar.",
    },
    {
      title: "55 horas de quemado",
      desc: "Una duración mayor para que disfrutes aún más de cada aroma.",
    },
  ];

  return (
    <section className="w-full py-20 bg-[#fcf5eb]">
      {/* Desktop */}
      <div className="hidden md:flex justify-center gap-12 px-6">
        {features.map((feat, i) => (
          <div
            key={i}
            className="max-w-[280px] h-[230px] p-10 rounded-3xl shadow-md 
            bg-white/70 backdrop-blur-sm border border-[#e9dcc3]
            text-center flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold text-[#2a2a2a] mb-4">
              {feat.title}
            </h3>
            <p className="text-[#4a4a4a] leading-relaxed text-sm">
              {feat.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile Swiper */}
      <div className="md:hidden px-8">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          className="w-full"
        >
          {features.map((feat, i) => (
            <SwiperSlide key={i}>
              <div
                className="p-10 rounded-3xl shadow-md 
                bg-white/70 backdrop-blur-sm border border-[#e9dcc3]
                text-center flex flex-col justify-center h-[230px]"
              >
                <h3 className="text-xl font-semibold text-[#2a2a2a] mb-3">
                  {feat.title}
                </h3>
                <p className="text-[#4a4a4a] leading-relaxed text-sm">
                  {feat.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
