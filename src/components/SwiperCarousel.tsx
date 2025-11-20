"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

export default function SwiperCarousel({ images }: { images: string[] }) {
  return (
    <div className="w-full">
      <Swiper spaceBetween={10} slidesPerView={1}>
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <Image src={src} width={500} height={500} alt={`img-${i}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
