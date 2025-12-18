import Image from "next/image";

export default function () {
  return (
    <div className="flex flex-col items-center mb-20">
      <div className="relative w-24 h-24 mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8C8DC]/40 to-[#D3B5E5]/40 rounded-full blur-xl -z-10"></div>
        <Image
          src="/logo.svg"
          alt="Clover Studio Logo"
          width={100}
          height={100}
          className="brightness-0 invert"
        />
      </div>

      <div className="w-full max-w-lg text-center">
        <h3 className="text-xl font-semibold mb-3">
          Únete a nuestra newsletter
        </h3>
        <p className="text-gray-300 mb-5 text-sm">
          Accede a descuentos exclusivos y novedades antes que nadie.
        </p>

        <form className="flex gap-3 justify-center">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="w-full max-w-xs px-4 py-3 rounded-lg bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:border-[#F8C8DC]"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-[#F8C8DC] text-gray-900 font-semibold hover:bg-[#f5b5cf] transition"
          >
            Suscribirme
          </button>
        </form>
      </div>
    </div>
  );
}
