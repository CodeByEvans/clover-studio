"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, Mail, Phone } from "lucide-react";
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
        {/* Logo with glow */}
        <div className="flex items-center justify-center mb-6 relative">
          {/* Glow únicamente detrás del logo */}
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 bg-gradient-to-r from-[#F8C8DC]/40 to-[#D3B5E5]/40 rounded-full blur-xl -z-10"></div>
            <Image
              src="/logo.svg"
              alt="Clover Studio Logo"
              width={100}
              height={100}
              className="brightness-0 invert"
            />
          </div>
        </div>

        {/* Short description */}
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Creamos productos aromáticos únicos que transforman espacios y
          despiertan emociones. Cada pieza es una{" "}
          <span className="text-[#F8C8DC] font-medium">obra de arte</span> hecha
          con amor.
        </p>

        {/* CTA buttons to sections */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => handleScrollToId(section.id)}
              className="bg-[#8B1E3F] hover:bg-[#6a1530] px-6 py-3 rounded-full font-semibold text-white flex items-center gap-2 transition-all duration-300 cursor-pointer"
            >
              {section.label} <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>
          ))}
        </div>

        {/* Contact info */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link
            href="mailto:ceci@cloverstudio.es"
            className="flex items-center gap-2 bg-[#BEE8CC]/20 hover:bg-[#BEE8CC]/40 px-4 py-2 rounded-full transition-colors"
          >
            <Mail className="w-5 h-5 text-[#BEE8CC]" /> Email
          </Link>
          <Link
            href="https://wa.me/34691453544"
            className="flex items-center gap-2 bg-[#39a459]/20 hover:bg-[#39a459]/40 px-4 py-2 rounded-full transition-colors"
          >
            <Phone className="w-5 h-5 text-[#39a459]" /> WhatsApp
          </Link>
        </div>

        <p className="text-gray-500 mt-16 text-sm">
          © 2025 Clover Studio. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
