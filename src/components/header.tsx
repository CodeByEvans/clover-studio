"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, Heart, ShoppingBag, ChevronDown } from "lucide-react";
import { useFavorites } from "@/contexts/favorites-context";
import { useCart } from "@/contexts/cart-context";
import CartSidebar from "@/components/cart/cart-sidebar";
import SearchModal from "./search/search-modal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Productos", href: "/productos" },
  ];

  const categories = [
    { name: "Velas Aromáticas", href: "/categorias/velas-aromaticas" },
    { name: "Velas Decorativas", href: "/categorias/velas-decorativas" },
    { name: "Wax Melts", href: "/categorias/wax-melts" },
    { name: "Quemadores", href: "/categorias/quemadores" },
    { name: "Rosas Personalizadas", href: "/categorias/rosas-personalizadas" },
    { name: "Packs y Regalos", href: "/categorias/packs-regalos" },
  ];

  const { favoritesCount } = useFavorites();
  const { getTotalItems } = useCart();

  return (
    <>
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Clover Resin Studio"
                width={60}
                height={60}
                className="mr-3"
              />
              <div className="hidden sm:block">
                <div className="font-bold text-xl text-gray-900">CLOVER</div>
                <div className="text-sm text-[#999999] -mt-1">STUDIO</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-[#8B1E3F] font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}

              {/* Categories Dropdown */}
              <div className="relative group">
                <Link
                  href="/categorias"
                  className="text-gray-700 hover:text-[#8B1E3F] font-medium transition-colors duration-200 flex items-center gap-1"
                >
                  Categorías
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </Link>

                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="p-3">
                    <div className="mb-3 px-3 py-2">
                      <h3 className="font-semibold text-[#8B1E3F] text-sm">
                        Explorar por Categoría
                      </h3>
                      <p className="text-xs text-[#999999] mt-1">
                        Encuentra productos específicos
                      </p>
                    </div>
                    <div className="space-y-1">
                      {categories.map((category) => (
                        <Link
                          key={category.name}
                          href={category.href}
                          className="block px-3 py-3 text-gray-700 hover:text-[#8B1E3F] hover:bg-[#F8C8DC]/10 rounded-lg transition-all duration-200 group/item"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{category.name}</span>
                            <ChevronDown className="w-4 h-4 -rotate-90 opacity-0 group-hover/item:opacity-100 transition-all duration-200" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-gray-600 hover:text-[#8B1E3F] transition-colors hover:bg-gray-100 rounded-full"
                title="Buscar productos"
              >
                <Search className="w-5 h-5" />
              </button>
              <Link
                href="/favoritos"
                className="p-2 text-gray-600 hover:text-[#8B1E3F] transition-colors relative"
              >
                <Heart className="w-5 h-5" />
                {favoritesCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#F8C8DC] text-[#8B1E3F] text-xs rounded-full flex items-center justify-center font-bold">
                    {favoritesCount > 9 ? "9+" : favoritesCount}
                  </span>
                )}
              </Link>
              {/*<button className="p-2 text-gray-600 hover:text-[#8B1E3F] transition-colors">
                <User className="w-5 h-5" />
              </button>*/}
              <button
                onClick={() => setIsCartOpen(true)}
                className="p-2 text-gray-600 hover:text-[#8B1E3F] transition-all duration-300 relative transform hover:scale-110 active:scale-95"
              >
                <ShoppingBag className="w-5 h-5" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#F8C8DC] text-[#8B1E3F] text-xs rounded-full flex items-center justify-center font-bold animate-pulse">
                    {getTotalItems() > 9 ? "9+" : getTotalItems()}
                  </span>
                )}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-[#8B1E3F] transition-colors"
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
            <div className="lg:hidden py-4 border-t border-gray-100 animate-slide-up">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-[#8B1E3F] font-medium transition-colors duration-200 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile Categories */}
                <Link
                  href="/categorias"
                  className="text-gray-700 hover:text-[#8B1E3F] font-medium transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Categorías
                </Link>

                <div className="border-t border-gray-100 pt-4 mt-4">
                  <h3 className="font-semibold text-[#8B1E3F] mb-3">
                    Categorías Específicas
                  </h3>
                  <div className="space-y-2 pl-4">
                    {categories.map((category) => (
                      <Link
                        key={category.name}
                        href={category.href}
                        className="block text-gray-600 hover:text-[#8B1E3F] transition-colors duration-200 py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
