"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Colección", id: "coleccion-destacada" },
    { name: "Personalizados", id: "productos-personalizados" },
    { name: "Reseñas", id: "reseñas" },
  ];

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo.svg"
                alt="Clover Studio Logo"
                width={60}
                height={60}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-12">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToId(item.id)}
                  className="text-gray-700 hover:text-[#8B1E3F] font-medium transition-colors duration-200 hover:underline hover:underline-offset-4 cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button
                onClick={() => scrollToId("contacto")}
                className="group relative inline-flex"
              >
                <div className="absolute inset-0 bg-[#39a459] rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-[#39a459] hover:bg-[#2d8446] text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl transform group-hover:-translate-y-1 flex items-center gap-2">
                  Contáctanos
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center space-x-4 lg:hidden">
              {/* CTA button for mobile */}
              <button
                onClick={() => scrollToId("contacto")}
                className="group relative"
              >
                <div className="relative bg-[#39a459] hover:bg-[#2d8446] text-white p-2 rounded-full transition-all duration-300 transform active:scale-95">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-600 hover:text-[#8B1E3F] transition-colors"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100 animate-slide-down">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToId(item.id);
                      setIsMenuOpen(false);
                    }}
                    className="text-gray-700 text-left hover:text-[#8B1E3F] font-medium transition-colors duration-200 py-2"
                  >
                    {item.name}
                  </button>
                ))}
                {/* CTA button in mobile menu */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => {
                      scrollToId("contacto");
                      setIsMenuOpen(false);
                    }}
                    className="block w-full bg-[#39a459] hover:bg-[#2d8446] text-white px-6 py-3 rounded-full font-semibold text-center transition-colors duration-300 cursor-pointer"
                  >
                    Contáctanos
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
