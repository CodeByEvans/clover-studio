import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-lg flex flex-col items-center gap-6">
        {/* Icono sutil */}
        <div className="w-24 h-24 rounded-full bg-[#8B1E3F]/10 flex items-center justify-center">
          <span className="text-5xl text-[#8B1E3F]">🕊️</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Esta página no existe
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed">
          Parece que la página que buscabas se ha perdido… o nunca llegó a
          existir. Tranquilidad, te llevamos a un lugar seguro.
        </p>

        <Link
          href="/"
          className="mt-4 inline-block bg-[#8B1E3F] hover:bg-[#6f182f] text-white px-8 py-3 rounded-full font-semibold transition-all"
        >
          Volver al inicio
        </Link>

        {/* Pequeño detalle estético */}
        <div className="mt-8 w-32 h-1 bg-[#8B1E3F]/20 rounded-full" />
      </div>
    </section>
  );
}
