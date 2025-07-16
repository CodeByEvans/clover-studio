import { Sparkles } from "lucide-react";

export default function CatalogHeader() {
  return (
    <section className="bg-gradient-to-br from-white to-[#F9F7F3] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-8 h-8 text-[#F8C8DC]" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Catálogo Completo
            </h1>
            <Sparkles className="w-8 h-8 text-[#D3B5E5]" />
          </div>

          <p className="text-xl text-[#999999] mb-8">
            Descubre toda nuestra colección de productos aromáticos artesanales.
            Cada pieza está cuidadosamente elaborada para transformar tu espacio
            en un refugio de momentos únicos.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#8B1E3F]">20+</div>
              <div className="text-sm text-[#999999]">Productos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#8B1E3F]">6</div>
              <div className="text-sm text-[#999999]">Categorías</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#8B1E3F]">25+</div>
              <div className="text-sm text-[#999999]">Aromas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#8B1E3F]">100%</div>
              <div className="text-sm text-[#999999]">Artesanal</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
