"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProductNotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">
        😕 Producto no encontrado
      </h1>
      <p className="text-gray-600 mb-6">
        Lo sentimos, el producto que buscas no existe, fue eliminado o está
        temporalmente fuera de stock.
      </p>
      <Link
        href="/productos"
        className="inline-flex items-center gap-2 bg-[#39a459] hover:bg-[#2d8446] text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300"
      >
        <ArrowLeft className="w-5 h-5" />
        Volver al catálogo
      </Link>
    </div>
  );
}
