"use client";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import { useData } from "@/context/data-context";

export default function Footer() {
  const { navigation } = useData();

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden py-20">
      {/* Decorative floating orbs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#F8C8DC]/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#BEE8CC]/10 rounded-full blur-3xl animate-soft-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Logo section */}
        <div className="flex items-center justify-center mb-10">
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

        {/* Description */}
        <p className="text-gray-300 mb-16 max-w-2xl mx-auto text-center">
          Creamos productos aromáticos únicos que transforman espacios y
          despiertan emociones. Cada pieza es una{" "}
          <span className="text-[#F8C8DC] font-medium">obra de arte</span> hecha
          con amor.
        </p>

        {/* Main grid - Información, Horario, Entrega, Contacto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Información (Navigation) */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Información</h4>
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

          {/* Horario */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Clock size={18} /> Horario
            </h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="text-white font-medium">Lunes - Viernes</li>
              <li>10:00 - 18:00</li>

              <li className="text-white font-medium mt-4">Sábado</li>
              <li>11:00 - 16:00</li>

              <li className="text-white font-medium mt-4">Domingo</li>
              <li className="text-red-400">Cerrado</li>
            </ul>
          </div>

          {/* Entrega */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <MapPin size={18} /> Entrega
            </h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <span className="text-white font-medium">Zona Local:</span>
                <p>Entregas dentro de la región</p>
              </li>
              <li>
                <span className="text-white font-medium">Tiempo:</span>
                <p>3–5 días hábiles</p>
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
        </div>

        {/* Bottom */}
        <p className="text-gray-500 text-center mt-10 text-sm">
          © 2025 Clover Studio. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
