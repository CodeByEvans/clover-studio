"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { useState } from "react";

export default function SwiperCarousel({ images }: { images: string[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
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
    </div>
  );
}
