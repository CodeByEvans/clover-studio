"use client";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, Phone, MapPin, Heart } from "lucide-react";
import { useScrollToId } from "@/hooks/useScrollToId";

export default function Footer() {
  const { handleScrollToId } = useScrollToId();
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <Image
                src="/logo.svg"
                alt="Clover Studio"
                width={60}
                height={60}
                className="mr-3 brightness-0 invert"
              />
              <div>
                <div className="font-bold text-xl">CLOVER</div>
                <div className="text-sm text-gray-400 -mt-1">STUDIO</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Creamos productos aromáticos únicos que transforman espacios y
              despiertan emociones. Cada pieza es una obra de arte hecha con
              amor.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/clover_resinstudio/"
                className="w-10 h-10 bg-[#F8C8DC] rounded-full flex items-center justify-center hover:bg-[#f5b8d1] transition-colors"
              >
                <Instagram className="w-5 h-5 text-[#8B1E3F]" />
              </Link>
              {/* <Link
                href="#"
                className="w-10 h-10 bg-[#F8C8DC] rounded-full flex items-center justify-center hover:bg-[#f5b8d1] transition-colors"
              >
                <Facebook className="w-5 h-5 text-[#8B1E3F]" />
              </Link> */}
              <Link
                href=""
                className="w-10 h-10 bg-[#F8C8DC] rounded-full flex items-center justify-center hover:bg-[#f5b8d1] transition-colors"
              >
                <Mail className="w-5 h-5 text-[#8B1E3F]" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-[#F8C8DC] transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/catalogo"
                  className="text-gray-400 hover:text-[#F8C8DC] transition-colors"
                >
                  Catálogo
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre-nosotros"
                  className="text-gray-400 hover:text-[#F8C8DC] transition-colors"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToId("contacto")}
                  className="text-gray-400 hover:text-[#F8C8DC] transition-colors cursor-pointer"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-lg mb-6">Categorías</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/categoria/velas-aromaticas"
                  className="text-gray-400 hover:text-[#F8C8DC] transition-colors"
                >
                  Velas Aromáticas
                </Link>
              </li>
              <li>
                <Link
                  href="/categoria/velas-decorativas"
                  className="text-gray-400 hover:text-[#F8C8DC] transition-colors"
                >
                  Velas Decorativas
                </Link>
              </li>
              <li>
                <Link
                  href="/categoria/wax-melts"
                  className="text-gray-400 hover:text-[#F8C8DC] transition-colors"
                >
                  Wax Melts
                </Link>
              </li>
              <li>
                <Link
                  href="/categoria/quemadores"
                  className="text-gray-400 hover:text-[#F8C8DC] transition-colors"
                >
                  Quemadores
                </Link>
              </li>
              <li>
                <Link
                  href="/categoria/packs-regalos"
                  className="text-gray-400 hover:text-[#F8C8DC] transition-colors"
                >
                  Packs y Regalos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#F8C8DC] mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>Torrejón de Ardoz, Madrid, España</p>
                  <p>Entregas a nivel nacional</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#F8C8DC] flex-shrink-0" />
                <span className="text-gray-400">+34 691 45 35 44</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#F8C8DC] flex-shrink-0" />
                <span className="text-gray-400">ceci@cloverstudio.es</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h4 className="font-semibold mb-2 text-[#F8C8DC]">
                Horarios de Atención
              </h4>
              <p className="text-sm text-gray-400">Lun - Vie: 9:00 - 18:00</p>
              <p className="text-sm text-gray-400">Sáb: 10:00 - 14:00</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Clover Studio. Todos los derechos reservados.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/politica-privacidad"
                className="text-gray-400 hover:text-[#F8C8DC] transition-colors"
              >
                Política de Privacidad
              </Link>
              <Link
                href="/terminos-condiciones"
                className="text-gray-400 hover:text-[#F8C8DC] transition-colors"
              >
                Términos y Condiciones
              </Link>
              <div className="flex items-center space-x-1 text-gray-400">
                <span>Hecho con</span>
                <Heart className="w-4 h-4 text-[#F8C8DC] fill-current" />
                <span>en España</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
