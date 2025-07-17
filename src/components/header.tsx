"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Heart } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useFavorites } from "@/contexts/favorites-context";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pendingScrollId, setPendingScrollId] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToId = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleScrollToId = (id: string) => {
    if (pathname === "/") {
      scrollToId(id);
    } else {
      setPendingScrollId(id);
      router.push(`/`);
    }
  };

  useEffect(() => {
    if (pathname === "/" && pendingScrollId) {
      setTimeout(() => {
        scrollToId(pendingScrollId);
        setPendingScrollId(null);
      }, 200);
    }
  }, [pathname, pendingScrollId, scrollToId]);

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Catálogo", href: "/catalogo" },
    { name: "Categorías", href: "categorias" },
    { name: "Sobre Nosotros", href: "/sobre-nosotros" },
    { name: "Contacto", href: "contacto" },
  ];

  const { favoritesCount } = useFavorites();

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Clover Studio"
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
            {navigation.map((item) =>
              item.href.includes("/") ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-[#8B1E3F] font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleScrollToId(item.href)}
                  className="text-gray-700 hover:text-[#8B1E3F] font-medium transition-colors duration-200"
                >
                  {item.name}
                </button>
              )
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/*<button className="p-2 text-gray-600 hover:text-[#8B1E3F] transition-colors cursor-pointer">
              <Search className="w-5 h-5" />
            </button>*/}
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
            {/* <button className="p-2 text-gray-600 hover:text-[#8B1E3F] transition-colors">
              <User className="w-5 h-5" />
            </button> */}
            {/* <button className="p-2 text-gray-600 hover:text-[#8B1E3F] transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#F8C8DC] text-[#8B1E3F] text-xs rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </button> */}

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
          <div className="lg:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => {
                if (item.href.includes("/")) {
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-700 hover:text-[#8B1E3F] font-medium transition-colors duration-200 py-2 m-auto"
                    >
                      {item.name}
                    </Link>
                  );
                } else {
                  return (
                    <button
                      key={item.name}
                      onClick={() => handleScrollToId(item.href)}
                      className="text-gray-700 hover:text-[#8B1E3F] font-medium transition-colors duration-200 py-2 m-auto"
                      role="link"
                      tabIndex={0}
                    >
                      {item.name}
                    </button>
                  );
                }
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
