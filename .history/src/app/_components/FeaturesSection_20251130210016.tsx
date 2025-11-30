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
  ];

  return (
    <section className="w-full py-20 bg-[#f8e9df]">
      {/* Desktop */}
      <div className="hidden md:flex justify-center gap-10 px-6">
        {features.map((feat, i) => (
          <div
            key={i}
            className="
              max-w-[330px]
              h-[220px]
              px-10 py-12
              rounded-[38px]
              bg-[#f4dfd3]
              text-center
              flex flex-col justify-center
            "
          >
            <h3 className="text-[26px] font-semibold text-[#2e2e2e] leading-snug mb-2">
              {feat.title}
            </h3>
            <p className="text-lg text-muted-foreground font-medium leading-relaxed">
              {feat.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile swiper */}
      <div className="md:hidden px-10">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1}
        >
          {features.map((feat, i) => (
            <SwiperSlide key={i}>
              <div
                className="
                  h-[220px]
                  px-10 py-12
                  rounded-[38px]
                  bg-[#f4dfd3]
                  text-center
                  flex flex-col justify-center
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
      </div>
    </section>
  );
}
