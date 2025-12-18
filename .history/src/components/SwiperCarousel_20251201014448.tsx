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
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        modules={[Thumbs]}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="border-2 border-transparent rounded-md overflow-hidden aspect-[1/1]">
              <Image
                src={src}
                width={500}
                height={500}
                alt={`img-${i}`}
                className="object-cover w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[Thumbs]}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        breakpoints={{
          640: { slidesPerView: 4 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
        }}
        className="mt-4 px-4"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i} className="cursor-pointer">
            <div
              className={`border-2 border-transparent rounded-md overflow-hidden transition-all duration-200 filter ${
                currentIndex === i ? "grayscale-0" : "grayscale"
              } hover:grayscale-0 hover:shadow-md aspect-[1/1]`}
            >
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
