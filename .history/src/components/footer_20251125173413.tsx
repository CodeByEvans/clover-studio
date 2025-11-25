"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { useData } from "@/context/data-context";

export default function Footer() {
  const { navigation } = useData();

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden py-24">
      {/* Decorative floating orbs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#F8C8DC]/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#BEE8CC]/10 rounded-full blur-3xl animate-soft-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Logo + Newsletter Section */}
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

          {/* Newsletter */}
          <div className="w-full max-w-lg text-center">
            <h3 className="text-xl font-semibold mb-3">
              Únete a nuestra newsletter
            </h3>
            <p className="text-gray-300 mb-5 text-sm">
              Recibe descuentos, lanzamientos y contenido especial directamente
              en tu correo.
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

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Información */}
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

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-10">
          <Link
            href="https://facebook.com"
            className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition"
          >
            <Facebook size={20} />
          </Link>
          <Link
            href="https://instagram.com"
            className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition"
          >
            <Instagram size={20} />
          </Link>
          <Link
            href="https://twitter.com"
            className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition"
          >
            <Twitter size={20} />
          </Link>
        </div>

        {/* Bottom text */}
        <p className="text-gray-500 text-center text-sm">
          © 2025 Clover Studio. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
