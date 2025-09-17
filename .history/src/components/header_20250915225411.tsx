"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, Heart, ShoppingBag, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { useFavorites } from "@/contexts/favorites-context";
import { useCart } from "@/contexts/cart-context";
import CartSidebar from "@/components/cart/cart-sidebar";
import SearchModal from "./search/search-modal";
import { useData } from "@/contexts/data-context";

export default function Header({}: {}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [menuClass, setMenuClass] = useState("");
  const pathname = usePathname();
  const { products, categories } = useData();

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Productos", href: "/productos" },
  ];

  const { favoritesCount } = useFavorites();
  const { getTotalItems } = useCart();

  // Cerrar menú al cambiar de página
  useEffect(() => {
    if (isMenuOpen) handleMenuClose();
    setShowCategories(false);
  }, [pathname]);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
    setMenuClass("menu-enter");
  };

  const handleMenuClose = () => {
    setMenuClass("menu-exit");
    setTimeout(() => {
      setIsMenuOpen(false);
      setMenuClass("");
    }, 300);
  };

  return (
    <>
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-40 h-[135px]">
        <div className="container mx-auto lg:px-10 px-4 h-full flex items-center justify-between relative">
          {/* Navegación escritorio */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#8B1E3F] font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}

            {/* Dropdown Categorías */}
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
                  <h3 className="font-semibold text-[#8B1E3F] text-sm mb-2">
                    Explorar por Categoría
                  </h3>
                  <div className="space-y-1">
                    {categories.map((cat) => (
                      <Link
                        key={cat.name}
                        href={`/colecciones/${cat.slug}`}
                        className="block px-3 py-3 text-gray-700 hover:text-[#8B1E3F] hover:bg-[#F8C8DC]/10 rounded-lg transition-all duration-200"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Clover  Studio"
                width={120}
                height={120}
              />
            </Link>
          </div>

          {/* Acciones escritorio */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-gray-600 hover:text-[#8B1E3F] transition-all duration-300  hover:bg-gray-100 rounded-full transform hover:scale-110 cursor-pointer"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link
              href="/favoritos"
              className="p-2 text-gray-600 hover:text-[#8B1E3F] transition-all duration-300 hover:scale-110 transform relative"
            >
              <Heart className="w-5 h-5" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#F8C8DC] text-[#8B1E3F] text-xs rounded-full flex items-center justify-center font-bold">
                  {favoritesCount > 9 ? "9+" : favoritesCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 text-gray-600 hover:text-[#8B1E3F] transition-all duration-300 relative transform hover:scale-110 cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#F8C8DC] text-[#8B1E3F] text-xs rounded-full flex items-center justify-center font-bold animate-pulse">
                  {getTotalItems() > 9 ? "9+" : getTotalItems()}
                </span>
              )}
            </button>
          </div>

          {/* Acciones móvil */}
          <div className="lg:hidden flex items-center justify-between w-full px-4 relative z-50">
            {/* Carrito */}
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

            {/* Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="Clover Studio"
                  width={120}
                  height={120}
                />
              </Link>
            </div>

            {/* Buscar + Menú */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-gray-600 hover:text-[#8B1E3F] transition-colors rounded-full"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  if (isMenuOpen) {
                    handleMenuClose();
                  } else {
                    handleMenuOpen();
                  }
                }}
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

          {/* Panel móvil con animación */}
          {isMenuOpen && (
            <div
              className={`lg:hidden fixed top-[135px] left-0 w-full bg-white border-t border-gray-100 shadow-md z-40 ${menuClass}`}
            >
              <nav className="flex flex-col p-4 space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-[#8B1E3F] font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
                {/* Categorías con toggle */}
                <div>
                  <button
                    onClick={() => setShowCategories(!showCategories)}
                    className="flex items-center justify-between w-full text-gray-700 hover:text-[#8B1E3F] font-medium transition-colors duration-200"
                  >
                    <Link href="/categorias">Categorías</Link>
                    <ChevronDown
                      className={`w-4 h-4 transform transition-transform ${
                        showCategories ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {showCategories && (
                    <div className="mt-2 pl-4 space-y-2">
                      {categories.map((cat) => (
                        <Link
                          key={cat.name}
                          href={`/colecciones/${cat.slug}`}
                          className="block text-gray-600 hover:text-[#8B1E3F] transition-colors duration-200"
                        >
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={products}
        categories={categories}
      />
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
