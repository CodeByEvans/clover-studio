"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import Image from "next/image";
import { useState } from "react";
import { Swiper as SwiperClass } from "swiper";

export default function SwiperCarousel({ images }: { images: string[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        modules={[Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="border-2 border-transparent rounded-md overflow-hidden">
              <Image src={src} fill alt={`img-${i}`} className="object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        modules={[Thumbs]}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4} // puedes ajustar a 5 si quieres
        className="mt-4 px-4"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i} className="cursor-pointer">
            <div className="border-2 border-transparent rounded-md overflow-hidden swiper-slide-thumb-active:border-blue-500">
              <Image
                src={src}
                width={80}
                height={80}
                alt={`thumb-${i}`}
                className="object-cover w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
