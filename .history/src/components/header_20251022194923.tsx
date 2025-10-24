"use client";
import { ArrowDown } from "lucide-react";
import { useScrollToId } from "@/hooks/useScrollToId";

export default function Footer() {
  const { handleScrollToId } = useScrollToId();

  const sections = [
    { label: "Colección", id: "coleccion-destacada" },
    { label: "Personalizados", id: "productos-personalizados" },
    { label: "Reseñas", id: "reseñas" },
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden py-20">
      {/* Decorative floating orbs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#F8C8DC]/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#BEE8CC]/10 rounded-full blur-3xl animate-soft-pulse"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Descubre lo que tenemos para ti
        </h2>

        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Explora nuestras colecciones, productos personalizados y lee lo que
          dicen nuestros clientes. ¡Todo diseñado para crear experiencias
          únicas!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => handleScrollToId(section.id)}
              className="bg-[#8B1E3F] hover:bg-[#6a1530] px-6 py-3 rounded-full font-semibold text-white flex items-center gap-2 transition-all duration-300"
            >
              {section.label} <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>
          ))}
        </div>

        <p className="text-gray-500 mt-16 text-sm">
          © 2025 Clover Studio. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
