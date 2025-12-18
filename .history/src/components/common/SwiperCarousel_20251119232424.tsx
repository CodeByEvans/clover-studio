"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ProductGallery({ images }: { images: string[] }) {
  return (
    <div className="w-full">
      <Swiper spaceBetween={10} slidesPerView={1}>
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} alt={`img-${i}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
