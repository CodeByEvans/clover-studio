"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Instagram,
  Mail,
  Phone,
  MapPin,
  Heart,
  Sparkles,
  Star,
  Clock,
  Shield,
} from "lucide-react";
import { useScrollToId } from "@/hooks/useScrollToId";

export default function Footer() {
  const { handleScrollToId } = useScrollToId();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Enhanced floating elements */}
      <div className="absolute top-12 left-16 opacity-8 animate-float">
        <Sparkles className="w-8 h-8 text-[#F8C8DC]" />
      </div>
      <div
        className="absolute bottom-16 right-20 opacity-8 animate-float"
        style={{ animationDelay: "1s" }}
      >
        <Star className="w-6 h-6 text-[#D3B5E5]" />
      </div>
      <div
        className="absolute top-1/3 right-1/4 opacity-5 animate-soft-pulse"
        style={{ animationDelay: "0.5s" }}
      >
        <Heart className="w-5 h-5 text-[#BEE8CC]" />
      </div>

      {/* Subtle gradient orbs */}
      <div className="absolute top-20 right-1/5 w-48 h-48 bg-gradient-to-br from-[#F8C8DC]/5 to-[#D3B5E5]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-16 left-1/4 w-56 h-56 bg-gradient-to-br from-[#BEE8CC]/4 to-[#FDE68A]/4 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Enhanced Brand Section */}
          <div className="lg:col-span-1">
            <div className="relative mb-8">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#F8C8DC]/10 to-[#D3B5E5]/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <div className="flex items-center mb-4">
                  <div className="relative">
                    <Image
                      src="/logo.svg"
                      alt="Clover Studio"
                      width={60}
                      height={60}
                      className="mr-4 brightness-0 invert"
                    />
                    <div className="absolute -inset-1 bg-[#F8C8DC]/20 rounded-full blur-sm -z-10"></div>
                  </div>
                  <div>
                    <div className="font-bold text-2xl bg-gradient-to-r from-[#F8C8DC] to-[#D3B5E5] bg-clip-text text-transparent">
                      CLOVER
                    </div>
                    <div className="text-sm text-[#F8C8DC] -mt-1 font-medium">
                      STUDIO
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Creamos productos aromáticos únicos que transforman espacios y
                  despiertan emociones. Cada pieza es una
                  <span className="text-[#F8C8DC] font-medium">
                    {" "}
                    obra de arte
                  </span>{" "}
                  hecha con amor.
                </p>

                {/* Enhanced social links */}
                <div className="flex space-x-4">
                  <Link
                    href="https://www.instagram.com/clover_resinstudio/"
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#F8C8DC] to-[#f5b8d1] rounded-full blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                    <div className="relative w-12 h-12 bg-gradient-to-r from-[#F8C8DC] to-[#f5b8d1] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Instagram className="w-6 h-6 text-[#8B1E3F]" />
                    </div>
                  </Link>
                  <Link
                    href="mailto:ceci@cloverstudio.es"
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#BEE8CC] to-[#a8d4b8] rounded-full blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                    <div className="relative w-12 h-12 bg-gradient-to-r from-[#BEE8CC] to-[#a8d4b8] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Mail className="w-6 h-6 text-[#8B1E3F]" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-3 h-3 bg-gradient-to-r from-[#F8C8DC] to-[#f5b8d1] rounded-full"></div>
              <h3 className="font-bold text-xl">Enlaces Rápidos</h3>
            </div>
            <ul className="space-y-4">
              {[
                { href: "/", label: "Inicio" },
                { href: "/productos", label: "Catálogo" },
                { href: "/categorias", label: "Categorias" },
                {
                  label: "Contacto",
                  onClick: () => handleScrollToId("contacto"),
                },
              ].map((link, index) => (
                <li key={index}>
                  {link.onClick ? (
                    <button
                      onClick={link.onClick}
                      className="text-gray-400 hover:text-[#F8C8DC] transition-colors duration-300 cursor-pointer flex items-center gap-2 group"
                    >
                      <div className="w-1 h-1 bg-[#F8C8DC] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#F8C8DC] transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <div className="w-1 h-1 bg-[#F8C8DC] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Categories */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-3 h-3 bg-gradient-to-r from-[#D3B5E5] to-[#c19ed6] rounded-full"></div>
              <h3 className="font-bold text-xl">Categorías</h3>
            </div>
            <ul className="space-y-4">
              {[
                {
                  href: "/categorias/velas-aromaticas",
                  label: "Velas Aromáticas",
                },
                {
                  href: "/categorias/velas-decorativas",
                  label: "Velas Decorativas",
                },
                { href: "/categorias/wax-melts", label: "Wax Melts" },
                { href: "/categorias/quemadores", label: "Quemadores" },
                { href: "/categorias/packs-regalos", label: "Packs y Regalos" },
              ].map((category, index) => (
                <li key={index}>
                  <Link
                    href={category.href}
                    className="text-gray-400 hover:text-[#D3B5E5] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-[#D3B5E5] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Contact Info */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-3 h-3 bg-gradient-to-r from-[#BEE8CC] to-[#a8d4b8] rounded-full"></div>
              <h3 className="font-bold text-xl">Contacto</h3>
            </div>

            <div className="space-y-6">
              {/* Contact details */}
              <div className="space-y-4">
                <div className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#F8C8DC]/20 to-[#f5b8d1]/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5 text-[#F8C8DC]" />
                  </div>
                  <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    <p className="font-medium">
                      Torrejón de Ardoz, Madrid, España
                    </p>
                    <p className="text-sm">Entregas a nivel nacional</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#D3B5E5]/20 to-[#c19ed6]/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5 text-[#D3B5E5]" />
                  </div>
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    +34 691 45 35 44
                  </span>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#BEE8CC]/20 to-[#a8d4b8]/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-[#BEE8CC]" />
                  </div>
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    ceci@cloverstudio.es
                  </span>
                </div>
              </div>

              {/* Enhanced hours card */}
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/50 relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#FDE68A]/10 to-[#fcd34d]/10 rounded-full blur-xl"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#FDE68A] to-[#fcd34d] rounded-full flex items-center justify-center">
                      <Clock className="w-4 h-4 text-[#8B1E3F]" />
                    </div>
                    <h4 className="font-bold text-[#FDE68A] text-lg">
                      Horarios de Atención
                    </h4>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm text-gray-300 flex justify-between">
                      <span>Lun - Vie:</span>
                      <span className="font-medium">9:00 - 18:00</span>
                    </p>
                    <p className="text-sm text-gray-300 flex justify-between">
                      <span>Sábado:</span>
                      <span className="font-medium">10:00 - 14:00</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-gray-700/50 mt-16 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#F8C8DC] rounded-full"></div>
                <span>
                  © 2025 Clover Studio. Todos los derechos reservados.
                </span>
              </div>
            </div>

            {/* Legal links and made with love */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm">
              <div className="flex items-center space-x-6">
                <Link
                  href="/politica-privacidad"
                  className="text-gray-400 hover:text-[#F8C8DC] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <Shield className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Política de Privacidad
                </Link>
                <Link
                  href="/terminos-condiciones"
                  className="text-gray-400 hover:text-[#F8C8DC] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <Shield className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Términos y Condiciones
                </Link>
              </div>

              <div className="flex items-center space-x-2 text-gray-400 group">
                <span>Hecho con</span>
                <Heart className="w-4 h-4 text-[#F8C8DC] fill-current group-hover:scale-125 transition-transform duration-300" />
                <span>en España</span>
              </div>
            </div>
          </div>

          {/* Additional footer stats */}
          <div className="flex justify-center gap-12 mt-12 pt-8 border-t border-gray-700/30">
            {[
              { icon: Heart, number: "50+", label: "Clientes Felices" },
              { icon: Sparkles, number: "20+", label: "Productos Creados" },
              { icon: Star, number: "4.9", label: "Rating Promedio" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <stat.icon className="w-4 h-4 text-[#F8C8DC] group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-lg font-bold text-[#F8C8DC]">
                    {stat.number}
                  </span>
                </div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
