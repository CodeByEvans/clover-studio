import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-[#F9F7F3] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <Sparkles className="w-8 h-8 text-[#F8C8DC]" />
      </div>
      <div className="absolute bottom-32 right-16 opacity-20">
        <Sparkles className="w-6 h-6 text-[#D3B5E5]" />
      </div>
      <div className="absolute top-1/3 right-20 opacity-20">
        <Sparkles className="w-10 h-10 text-[#BEE8CC]" />
      </div>

      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/logo.svg"
              alt="Clover Resin Studio"
              width={300}
              height={300}
              className="mx-auto"
              priority
            />
          </div>

          {/* Hero text */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Donde las ideas toman
            <span className="block text-[#F8C8DC]">Forma y color</span>
            <span className="block"></span>
          </h1>

          <p className="text-xl md:text-2xl text-[#999999] mb-8 max-w-2xl mx-auto leading-relaxed">
            Descubre nuestra colección de velas artesanales, wax melts y
            productos aromáticos únicos. Cada pieza está creada con amor para
            llenar tu hogar de calidez y personalidad.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToId("catalogo")}
              className="bg-[#F8C8DC] hover:bg-[#f5b8d1] text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Ver Catálogo
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => scrollToId("categorias")}
              className="border-2 border-[#D6BA8A] text-[#8B1E3F] hover:bg-[#D6BA8A] hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Explorar Categorías
            </button>
          </div>

          {/* Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#BEE8CC] rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-[#8B1E3F]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                100% Artesanal
              </h3>
              <p className="text-[#999999]">
                Cada producto es único y hecho a mano
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FDE68A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-[#8B1E3F]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Aromas Únicos
              </h3>
              <p className="text-[#999999]">
                Fragancias exclusivas y envolventes
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#C9EAF3] rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-[#8B1E3F]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Envío Gratis</h3>
              <p className="text-[#999999]">En compras superiores a $50.000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
