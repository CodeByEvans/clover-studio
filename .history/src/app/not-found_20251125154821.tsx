"use client"; // opcional, si vas a usar hooks

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Página no encontrada
      </h2>
      <p className="text-gray-600 mb-8">
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
