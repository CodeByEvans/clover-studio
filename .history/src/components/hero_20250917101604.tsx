import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#BEE8CC]/5 via-[#FEFCF9] to-[#FDE68A]/8 overflow-hidden relative">
      {/* Fondo artesanal minimalista */}
      <div className="absolute inset-0">
        {/* Formas orgánicas de fondo - Verde Clover */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#309551]/20 to-[#246B3D]/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-br from-[#309551]/18 to-[#246B3D]/12 rounded-full blur-2xl"></div>

        {/* Formas orgánicas de fondo - Amarillo cálido */}
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-br from-[#F59E0B]/20 to-[#D97706]/12 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-28 h-28 bg-gradient-to-br from-[#F59E0B]/15 to-[#D97706]/10 rounded-full blur-2xl"></div>

        {/* Texturas artesanales sutiles */}
        <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-gradient-to-br from-[#309551]/10 to-transparent rounded-full opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-gradient-to-br from-[#F59E0B]/10 to-transparent rounded-full opacity-30"></div>

        {/* Líneas orgánicas sutiles */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          viewBox="0 0 1200 800"
          fill="none"
        >
          <path
            d="M100,400 Q300,200 500,400 T900,350"
            stroke="#309551"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M200,600 Q400,450 600,550 T1000,500"
            stroke="#F59E0B"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M50,150 Q250,100 450,180 T800,120"
            stroke="#309551"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 min-h-screen flex items-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Contenido izquierdo */}
          <div className="space-y-8">
            {/* Logo pequeño */}
            <div className="flex items-center gap-3">
              <div className="w-14 h-14  rounded-full flex items-center justify-center shadow-lg relative">
                <img
                  src="/logo.svg"
                  alt="Clover Studio"
                  width={80}
                  height={80}
                  loading="lazy"
                />
              </div>
              <h2 className="text-2xl font-bold">Clover Studio</h2>
            </div>

            {/* Título principal */}
            <div>
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6">
                Pequeños detalles que
                <span className="block text-transparent bg-gradient-to-r from-[#ae0006] to-[#8B1E3F] bg-clip-text">
                  iluminan
                </span>
                grandes momentos
              </h1>
            </div>

            {/* Descripción */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-lg">
              Velas artesanales, wax melts y productos aromáticos únicos. Cada
              pieza creada con amor para llenar tu hogar de calidez y
              personalidad.
            </p>

            {/* Email Capture Form */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 px-6 py-4 rounded-full border-2 border-gray-200 focus:border-[#309551] focus:outline-none text-lg transition-all duration-300"
                />
                <button className="group relative inline-flex w-40">
                  {/* Efecto de brillo detrás del botón, ahora con el color verde */}
                  <div className="absolute inset-0 bg-[#39a459] rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Contenido principal del botón */}
                  <div className="relative bg-[#39a459] hover:bg-[#2d8446] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl transform group-hover:-translate-y-1 group-hover:scale-105 flex items-center justify-center gap-2">
                    Únete a nuestra lista VIP
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
              </div>

              <p className="text-sm text-gray-500 max-w-md">
                Sé el primero en conocer nuestro lanzamiento y obtén
                <span className="font-semibold text-[#d8ab2d]">
                  {" "}
                  20% de descuento
                </span>{" "}
                en tu primera compra.
              </p>
            </div>

            {/* CTA Secundario */}
            <div>
              <button
                onClick={() => scrollToId("sobre-nosotros")}
                className="group  font-medium text-lg transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                Conoce nuestra historia
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Imagen derecha */}
          <div className="relative">
            {/* Contenedor principal de la imagen */}
            <div className="relative group">
              {/* Efectos decorativos de fondo */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#309551]/20 to-[#F59E0B]/20 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-[#F59E0B]/15 to-[#309551]/15 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>

              {/* Marco de la imagen con efectos */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 group-hover:shadow-3xl transition-all duration-500 border border-gray-100">
                {/* Imagen placeholder - aquí irían las velas reales */}
                <div className="aspect-square bg-gradient-to-br from-[#FEFCF9] to-[#F9F7F3] rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Simulación de velas artesanales */}
                  <div className="absolute inset-4 grid grid-cols-2 gap-4">
                    {/* Vela 1 - Verde Clover */}
                    <div className="bg-gradient-to-b from-[#309551] to-[#246B3D] rounded-full opacity-80 shadow-lg transform rotate-3 hover:rotate-6 transition-transform duration-500"></div>
                    {/* Vela 2 - Amarillo cálido */}
                    <div className="bg-gradient-to-b from-[#F59E0B] to-[#D97706] rounded-full opacity-80 shadow-lg transform -rotate-2 hover:-rotate-6 transition-transform duration-500"></div>
                    {/* Vela 3 - Rojo cálido */}
                    <div className="bg-gradient-to-b from-[#DC2626] to-[#B91C1C] rounded-full opacity-80 shadow-lg transform rotate-1 hover:rotate-4 transition-transform duration-500"></div>
                    {/* Vela 4 - Verde claro */}
                    <div className="bg-gradient-to-b from-[#4ADE80] to-[#309551] rounded-full opacity-80 shadow-lg transform -rotate-3 hover:-rotate-6 transition-transform duration-500"></div>
                  </div>

                  {/* Efectos de llama */}
                  <div className="absolute top-8 left-1/4 w-2 h-4 bg-gradient-to-t from-[#FDE68A] to-[#f59e0b] rounded-full opacity-60 animate-pulse"></div>
                  <div
                    className="absolute top-8 right-1/4 w-2 h-4 bg-gradient-to-t from-[#FDE68A] to-[#f59e0b] rounded-full opacity-60 animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>

                  {/* Texto overlay */}
                  <div className="absolute bottom-6 left-6 right-6 text-center">
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-sm">
                      <p className="text-[#8B1E3F] font-semibold text-sm">
                        Velas Artesanales
                      </p>
                      <p className="text-gray-600 text-xs">Hechas con amor</p>
                    </div>
                  </div>
                </div>

                {/* Decoración en las esquinas */}
                <div className="absolute top-4 right-4 opacity-20">
                  <Sparkles className="w-6 h-6 text-[#309551]" />
                </div>
                <div className="absolute bottom-4 left-4 opacity-20">
                  <Sparkles className="w-4 h-4 text-[#F59E0B]" />
                </div>
              </div>
            </div>

            {/* Elementos flotantes alrededor de la imagen */}
            {/* Elementos flotantes alrededor de la imagen */}
            <div
              className="absolute -top-4 right-1/4 bg-white rounded-full p-3 shadow-lg animate-bounce"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="w-3 h-3 bg-[#309551] rounded-full"></div>
            </div>
            <div
              className="absolute -bottom-4 left-1/4 bg-white rounded-full p-2 shadow-lg animate-bounce"
              style={{ animationDelay: "1s" }}
            >
              <div className="w-2 h-2 bg-[#F59E0B] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
