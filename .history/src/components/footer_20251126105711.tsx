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
    <footer className="bg-gray-900 text-white relative overflow-hidden pt-10 pb-6">
      {/* Decorative floating orbs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#F8C8DC]/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#BEE8CC]/10 rounded-full blur-3xl animate-soft-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
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
                  href="https://instagram.com/byclover.studio"
                  target="_blank noreferrer"
                  className="hover:text-white transition"
                >
                  Instagram
                </Link>
              </li>

              <li className="flex items-center gap-3">
                <SiTiktok size={20} className="text-white" />
                <Link
                  href="https://tiktok.com/@byclover.studio"
                  target="_blank noreferrer"
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
