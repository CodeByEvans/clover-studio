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
            <Image src={src} width={500} height={500} alt={`img-${i}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        modules={[Thumbs]}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        className="mt-4 px-10"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i} aria-disabled>
            <Image src={src} width={100} height={100} alt={`img-${i}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
