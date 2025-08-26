// Hero.tsx - Redesigned
import Image from "next/image";
import { ArrowRight, Sparkles, Star, Heart, Zap } from "lucide-react";

export default function Hero() {
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#FEFCF9] to-[#F9F7F3] overflow-hidden">
      {/* Enhanced floating decorative elements */}
      <div className="absolute top-20 left-10 opacity-20 animate-float">
        <Sparkles className="w-8 h-8 text-[#F8C8DC]" />
      </div>
      <div
        className="absolute bottom-32 right-16 opacity-20 animate-float"
        style={{ animationDelay: "1s" }}
      >
        <Sparkles className="w-6 h-6 text-[#D3B5E5]" />
      </div>
      <div
        className="absolute top-1/3 right-20 opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <Sparkles className="w-10 h-10 text-[#BEE8CC]" />
      </div>

      {/* Additional subtle floating elements */}
      <div className="absolute top-1/4 left-1/3 opacity-10 animate-soft-pulse">
        <Star className="w-4 h-4 text-[#D6BA8A]" />
      </div>
      <div
        className="absolute bottom-1/4 right-1/3 opacity-10 animate-soft-pulse"
        style={{ animationDelay: "1.5s" }}
      >
        <Heart className="w-5 h-5 text-[#F8C8DC]" />
      </div>
      <div
        className="absolute top-1/2 left-1/6 opacity-10 animate-soft-pulse"
        style={{ animationDelay: "0.8s" }}
      >
        <Zap className="w-3 h-3 text-[#BEE8CC]" />
      </div>

      {/* Gradient orbs for depth */}
      <div className="absolute top-16 right-1/4 w-32 h-32 bg-gradient-to-br from-[#F8C8DC]/10 to-[#D3B5E5]/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-[#BEE8CC]/10 to-[#FDE68A]/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-1/6 w-24 h-24 bg-gradient-to-br from-[#D3B5E5]/8 to-[#F8C8DC]/8 rounded-full blur-xl"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced Logo with subtle effects */}
          <div className="mb-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#F8C8DC]/20 via-transparent to-[#D3B5E5]/20 rounded-full blur-3xl scale-110"></div>
            <div className="relative">
              <Image
                src="/logo.svg"
                alt="Clover Resin Studio"
                width={320}
                height={320}
                className="mx-auto hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>

          {/* Enhanced Hero text with decorative elements */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-[#F8C8DC] to-transparent w-20"></div>
              <div className="w-2 h-2 bg-[#F8C8DC] rounded-full"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-[#D3B5E5] to-transparent w-20"></div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight">
              Donde las ideas toman
              <span className="block text-transparent bg-gradient-to-r from-[#F8C8DC] to-[#D3B5E5] bg-clip-text">
                Forma y color
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-[#999999] mb-12 max-w-3xl mx-auto leading-relaxed">
            Descubre nuestra colección de velas artesanales, wax melts y
            productos aromáticos únicos. Cada pieza está creada con amor para
            <span className="text-[#8B1E3F] font-medium">
              {" "}
              llenar tu hogar de calidez
            </span>{" "}
            y personalidad.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={() => scrollToId("catalogo")}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#F8C8DC] to-[#f5b8d1] rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-[#F8C8DC] hover:bg-[#f5b8d1] text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl transform group-hover:-translate-y-1 group-hover:scale-105 flex items-center gap-2">
                Ver Catálogo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>

            <button
              onClick={() => scrollToId("categorias")}
              className="group border-2 border-[#D6BA8A] text-[#8B1E3F] hover:bg-[#D6BA8A] hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform group-hover:-translate-y-1 backdrop-blur-sm bg-white/10"
            >
              Explorar Categorías
            </button>
          </div>

          {/* Enhanced Features with card design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Sparkles,
                title: "100% Artesanal",
                description:
                  "Cada producto es único y hecho a mano con dedicación",
                color: "from-[#BEE8CC] to-[#a8d4b8]",
              },
              {
                icon: Heart,
                title: "Aromas Únicos",
                description: "Fragancias exclusivas y envolventes que cautivan",
                color: "from-[#FDE68A] to-[#fcd34d]",
              },
              {
                icon: Star,
                title: "Envío Gratis",
                description: "En compras superiores a 50€ por toda España",
                color: "from-[#C9EAF3] to-[#7dd3fc]",
              },
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/60 relative overflow-hidden">
                  {/* Subtle background decoration */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#F8C8DC]/10 to-[#D3B5E5]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="relative mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                      >
                        <feature.icon className="w-8 h-8 text-[#8B1E3F] group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r ${feature.color} opacity-20 rounded-2xl scale-95 group-hover:scale-110 transition-all duration-500 -z-10 blur-sm`}
                      ></div>
                    </div>

                    <h3 className="font-bold text-gray-900 mb-3 text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#8B1E3F] group-hover:to-[#F8C8DC] group-hover:bg-clip-text transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-[#999999] leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>

                  {/* Subtle corner accent */}
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <div className="w-6 h-6 border-l-2 border-b-2 border-[#F8C8DC] rounded-bl-lg"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
