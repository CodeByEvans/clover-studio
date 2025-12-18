"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function FeaturesSection() {
  const features = [
    {
      title: "Cera de soja sin parafinas",
      desc: "Todas nuestras velas están hechas con cera vegetal de soja, sin presencia de materiales tóxicos.",
    },
    {
      title: "Basadas en la aromaterapia",
      desc: "Utilizamos la ciencia de la aromaterapia para crear velas para diferentes necesidades.",
    },
    {
      title: "55 horas de quemado",
      desc: "Gracias a su fórmula, nuestras velas duran más para que puedas disfrutarlas por mucho tiempo.",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      {/* Desktop */}
      <div className="hidden md:flex justify-center gap-10 px-6">
        {features.map((feat, i) => (
          <div
            key={i}
            className="max-w-sm p-8 rounded-2xl shadow-sm 
            bg-[linear-gradient(135deg,#fff9f0,#fdf5e6)]
            text-center"
          >
            <h3 className="text-2xl font-semibold text-[#2a2a2a] mb-3">
              {feat.title}
            </h3>
            <p className="text-[#4a4a4a] leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </div>

      {/* Mobile Swiper */}
      <div className="md:hidden px-4">
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
                className="p-8 rounded-2xl shadow-sm 
                bg-[linear-gradient(135deg,#fff9f0,#fdf5e6)]
                text-center"
              >
                <h3 className="text-xl font-semibold text-[#2a2a2a] mb-3">
                  {feat.title}
                </h3>
                <p className="text-[#4a4a4a] leading-relaxed">{feat.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
