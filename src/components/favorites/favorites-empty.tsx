import Link from "next/link";
import { Heart, Sparkles, ArrowRight } from "lucide-react";

export default function FavoritesEmpty() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        {/* Empty State Illustration */}
        <div className="relative mb-8">
          <div className="w-32 h-32 bg-gradient-to-br from-[#F8C8DC]/20 to-[#D3B5E5]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-16 h-16 text-[#F8C8DC]" />
          </div>

          {/* Decorative sparkles */}
          <div className="absolute top-4 left-1/2 transform -translate-x-16">
            <Sparkles className="w-6 h-6 text-[#D3B5E5] opacity-60" />
          </div>
          <div className="absolute bottom-8 right-1/2 transform translate-x-16">
            <Sparkles className="w-4 h-4 text-[#BEE8CC] opacity-60" />
          </div>
          <div className="absolute top-12 right-1/2 transform translate-x-20">
            <Sparkles className="w-5 h-5 text-[#FDE68A] opacity-60" />
          </div>
        </div>

        {/* Content */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Tu Lista de Favoritos está Vacía
        </h1>

        <p className="text-xl text-[#999999] mb-8 leading-relaxed">
          Aún no has agregado productos a tu lista de favoritos. Explora nuestro
          catálogo y guarda los productos que más te gusten para encontrarlos
          fácilmente después.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/catalogo"
            className="bg-[#8B1E3F] hover:bg-[#7a1a37] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explorar Catálogo
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            href="/"
            className="border-2 border-[#F8C8DC] text-[#8B1E3F] hover:bg-[#F8C8DC] px-8 py-4 rounded-xl font-semibold transition-colors"
          >
            Volver al Inicio
          </Link>
        </div>

        {/* Tips */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            ¿Cómo usar tus favoritos?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#F8C8DC] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-[#8B1E3F]" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Guarda Productos
              </h4>
              <p className="text-sm text-[#999999]">
                Haz clic en el corazón de cualquier producto para agregarlo a
                favoritos
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#BEE8CC] rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-[#8B1E3F]" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Organiza tu Lista
              </h4>
              <p className="text-sm text-[#999999]">
                Filtra y ordena tus favoritos por categoría, precio o nombre
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#FDE68A] rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-6 h-6 text-[#8B1E3F]" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Consulta Fácilmente
              </h4>
              <p className="text-sm text-[#999999]">
                Contacta directamente para consultar tus productos favoritos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
