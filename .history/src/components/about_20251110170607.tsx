"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function About() {
  return (
    <section
      id="sobre-nosotros"
      className="py-20 lg:py-32 bg-[#FEFCF9] relative overflow-hidden"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-10 right-0 w-48 h-48 bg-gradient-to-br from-[#ae0006]/10 to-[#8B1E3F]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-0 w-64 h-64 bg-gradient-to-br from-[#309551]/10 to-[#246B3D]/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Texto */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Nuestra Historia:
              <span className="block text-[#ae0006]">Más Allá de una Vela</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Hola, soy la persona detrás de Clover Studio. Todo comenzó con una
              curiosidad simple y una pasión por crear con mis propias manos.
              Siempre he creído que los pequeños detalles tienen el poder de
              transformar un espacio y hacer que un hogar se sienta como un
              refugio.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Lo que empezó como un pasatiempo para encontrar el aroma perfecto
              se convirtió en una obsesión por la artesanía de calidad. Dediqué
              incontables horas a investigar ceras, fragancias y mechas para que
              cada vela no solo oliera increíble, sino que también fuera segura
              y sostenible.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-semibold max-w-2xl mx-auto lg:mx-0 text-[#246B3D]">
              En Clover Studio, no solo creamos velas, creamos experiencias.
              Cada pieza es hecha con amor para llenar tu vida de calidez y
              magia.
            </p>
          </div>

          {/* Swiper de imágenes */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-3xl">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop
                className="rounded-3xl h-[400px]  lg:h-[600px] w-[400px]  lg:w-[600px]"
              >
                {["history-1.webp", "history-2.webp", "history-3.webp"].map(
                  (img, index) => (
                    <SwiperSlide key={index}>
                      <Image
                        src={`/${img}`}
                        alt={`Historia ${index + 1} - Clover Studio`}
                        width={800}
                        height={800}
                        className="object-cover w-full h-full"
                      />
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </div>

            {/* Efectos decorativos */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#BEE8CC] rounded-full mix-blend-multiply opacity-50 blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FDE68A] rounded-full mix-blend-multiply opacity-50 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
