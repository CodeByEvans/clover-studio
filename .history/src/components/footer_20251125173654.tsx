"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  Instagram,
  BadgeInfo,
  FileText,
  ShieldCheck,
} from "lucide-react";
import { useData } from "@/context/data-context";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
  const { navigation } = useData();

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden py-24">
      {/* Decorative floating orbs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#F8C8DC]/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#BEE8CC]/10 rounded-full blur-3xl animate-soft-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Logo + Newsletter */}
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

        {/* Main Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Navegación */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navegación</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              {navigation.map((item, i) => (
                <li key={i}>
                  <Link
                    href={`/${item.slug}`}
                    className="hover:text-white transition"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Políticas & Ayuda */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex gap-2 items-center">
              <FileText size={18} /> Políticas & Ayuda
            </h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <Link href="/faq" className="hover:text-white transition">
                  Preguntas Frecuentes (FAQ)
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-de-servicio"
                  className="hover:text-white transition"
                >
                  Política de Servicio
                </Link>
              </li>
              <li>
                <Link
                  href="/devoluciones"
                  className="hover:text-white transition"
                >
                  Cambios & Devoluciones
                </Link>
              </li>
              <li>
                <Link
                  href="/privacidad"
                  className="hover:text-white transition"
                >
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Redes Sociales</h4>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-center gap-3">
                <Instagram size={20} className="text-[#F8C8DC]" />
                <Link
                  href="https://instagram.com"
                  className="hover:text-white transition"
                >
                  Instagram
                </Link>
              </li>

              <li className="flex items-center gap-3">
                <SiTiktok size={20} className="text-white" />
                <Link
                  href="https://tiktok.com"
                  className="hover:text-white transition"
                >
                  TikTok
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#39a459]" />
                <Link
                  href="https://wa.me/34691453544"
                  className="hover:text-white transition text-gray-300 text-sm"
                >
                  WhatsApp directo
                </Link>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#BEE8CC]" />
                <Link
                  href="mailto:ceci@cloverstudio.es"
                  className="hover:text-white transition text-gray-300 text-sm"
                >
                  ceci@cloverstudio.es
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* Bottom */}
        <p className="text-gray-500 text-center text-sm">
          © 2025 Clover Studio. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
