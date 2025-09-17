import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#BEE8CC]/5 via-[#FEFCF9] to-[#FDE68A]/8 overflow-hidden relative">
      {/* Fondo artesanal minimalista */}
      <div className="absolute inset-0">
        {/* Formas orgánicas de fondo - Verde más intenso */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#10B981]/20 to-[#059669]/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-br from-[#10B981]/18 to-[#059669]/12 rounded-full blur-2xl"></div>

        {/* Formas orgánicas de fondo - Amarillo */}
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-br from-[#FDE68A]/20 to-[#fcd34d]/12 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-28 h-28 bg-gradient-to-br from-[#FDE68A]/15 to-[#fcd34d]/10 rounded-full blur-2xl"></div>

        {/* Texturas artesanales sutiles */}
        <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-gradient-to-br from-[#10B981]/10 to-transparent rounded-full opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-gradient-to-br from-[#FDE68A]/10 to-transparent rounded-full opacity-30"></div>

        {/* Líneas orgánicas sutiles */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          viewBox="0 0 1200 800"
          fill="none"
        >
          <path
            d="M100,400 Q300,200 500,400 T900,350"
            stroke="#10B981"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M200,600 Q400,450 600,550 T1000,500"
            stroke="#FDE68A"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M50,150 Q250,100 450,180 T800,120"
            stroke="#10B981"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      {/* Elementos decorativos flotantes - verde más intenso */}
      <div className="absolute top-20 left-10 opacity-15 animate-pulse">
        <Sparkles className="w-8 h-8 text-[#10B981]" />
      </div>
      <div
        className="absolute bottom-32 right-16 opacity-15 animate-pulse"
        style={{ animationDelay: "1s" }}
      >
        <Sparkles className="w-6 h-6 text-[#FDE68A]" />
      </div>
      <div
        className="absolute top-1/2 left-1/6 opacity-10 animate-pulse"
        style={{ animationDelay: "2s" }}
      >
        <Sparkles className="w-5 h-5 text-[#059669]" />
      </div>

      <div className="container mx-auto px-4 min-h-screen flex items-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Contenido izquierdo */}
          <div className="space-y-8">
            {/* Logo pequeño */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-[#10B981] to-[#FDE68A] rounded-full flex items-center justify-center shadow-lg relative">
                {/* Logo de trébol simple */}
                <svg
                  className="w-7 h-7 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C10.5 2 9.2 2.8 8.5 4C7.8 2.8 6.5 2 5 2C2.8 2 1 3.8 1 6C1 7.5 1.8 8.8 3 9.5C1.8 10.2 1 11.5 1 13C1 15.2 2.8 17 5 17C6.5 17 7.8 16.2 8.5 15C9.2 16.2 10.5 17 12 17C12.5 17 13 16.8 13.4 16.6C13.8 17.5 14.7 18 15.5 18C17.4 18 19 16.4 19 14.5C19 13.7 18.7 12.9 18.1 12.3C19.3 11.7 20 10.4 20 9C20 6.8 18.2 5 16 5C14.5 5 13.2 5.8 12.5 7C12.2 6.4 11.8 5.9 11.3 5.5C11.7 3.6 11.9 2.8 12 2Z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#8B1E3F]">
                Clover Studio
              </h2>
            </div>

            {/* Título principal */}
            <div>
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6">
                Pequeños detalles que
                <span className="block text-transparent bg-gradient-to-r from-[#10B981] to-[#8B1E3F] bg-clip-text">
                  iluminan
                </span>
                grandes momentos
              </h1>
            </div>

            {/* Descripción */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-lg">
              Velas artesanales, wax melts y productos aromáticos únicos.
              <span className="text-[#8B1E3F] font-semibold">
                {" "}
                Cada pieza creada con amor
              </span>{" "}
              para llenar tu hogar de calidez y personalidad.
            </p>

            {/* Email Capture Form */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 px-6 py-4 rounded-full border-2 border-gray-200 focus:border-[#10B981] focus:outline-none text-lg transition-all duration-300"
                />
                <button className="group relative overflow-hidden whitespace-nowrap">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#10B981] to-[#FDE68A] opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-r from-[#10B981] to-[#FDE68A] text-[#8B1E3F] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg transform group-hover:-translate-y-1 group-hover:shadow-xl flex items-center justify-center gap-2">
                    Lista VIP
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
              </div>

              <p className="text-sm text-gray-500 max-w-md">
                <span className="font-semibold text-[#8B1E3F]">
                  Sé la primera en conocer
                </span>{" "}
                nuestro lanzamiento y obtén
                <span className="font-semibold text-[#FDE68A]">
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
                className="group text-[#8B1E3F] hover:text-[#10B981] font-medium text-lg transition-all duration-300 flex items-center gap-2"
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
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#10B981]/20 to-[#FDE68A]/20 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-[#FDE68A]/15 to-[#10B981]/15 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>

              {/* Marco de la imagen con efectos */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 group-hover:shadow-3xl transition-all duration-500 border border-gray-100">
                {/* Imagen placeholder - aquí irían las velas reales */}
                <div className="aspect-square bg-gradient-to-br from-[#FEFCF9] to-[#F9F7F3] rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Simulación de velas artesanales */}
                  <div className="absolute inset-4 grid grid-cols-2 gap-4">
                    {/* Vela 1 - Verde intenso */}
                    <div className="bg-gradient-to-b from-[#10B981] to-[#059669] rounded-full opacity-80 shadow-lg transform rotate-3 hover:rotate-6 transition-transform duration-500"></div>
                    {/* Vela 2 - Amarillo */}
                    <div className="bg-gradient-to-b from-[#FDE68A] to-[#fcd34d] rounded-full opacity-80 shadow-lg transform -rotate-2 hover:-rotate-6 transition-transform duration-500"></div>
                    {/* Vela 3 - Rojo suave */}
                    <div className="bg-gradient-to-b from-[#F87171] to-[#dc2626] rounded-full opacity-80 shadow-lg transform rotate-1 hover:rotate-4 transition-transform duration-500"></div>
                    {/* Vela 4 - Verde claro */}
                    <div className="bg-gradient-to-b from-[#34D399] to-[#10B981] rounded-full opacity-80 shadow-lg transform -rotate-3 hover:-rotate-6 transition-transform duration-500"></div>
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
                  <Sparkles className="w-6 h-6 text-[#10B981]" />
                </div>
                <div className="absolute bottom-4 left-4 opacity-20">
                  <Sparkles className="w-4 h-4 text-[#FDE68A]" />
                </div>
              </div>
            </div>

            {/* Elementos flotantes alrededor de la imagen */}
            {/* Elementos flotantes alrededor de la imagen */}
            <div
              className="absolute -top-4 right-1/4 bg-white rounded-full p-3 shadow-lg animate-bounce"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="w-3 h-3 bg-[#10B981] rounded-full"></div>
            </div>
            <div
              className="absolute -bottom-4 left-1/4 bg-white rounded-full p-2 shadow-lg animate-bounce"
              style={{ animationDelay: "1s" }}
            >
              <div className="w-2 h-2 bg-[#FDE68A] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
