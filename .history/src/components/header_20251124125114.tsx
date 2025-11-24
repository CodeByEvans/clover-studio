"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { CiSearch } from "react-icons/ci";
import { Collection, Collections } from "@/types/collection.type";
import { useData } from "@/context/data-context";
import { InputGroup, InputGroupInput } from "./ui/input-group";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { Navigation } from "@/types/navigation.type";

export interface HeaderProps {
  collections: Collections;
  navigation: Navigation;
}

export default function Header() {
  const { collections, navigation }: HeaderProps = useData();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState("all");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto px-4">
        {/* ----------------- FILA 1 MÓVIL ----------------- */}
        <div className="flex items-center justify-between h-20 relative md:hidden">
          {/* placeholder para balancear el logo */}
          <div className="w-6" />

          {/* LOGO CENTRADO */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 flex items-center"
          >
            <Image
              src="/logo.svg"
              alt="Clover Studio Logo"
              width={55}
              height={55}
              className="transition-transform duration-300"
            />
          </Link>

          {/* CARRITO */}
          <CiSearch className="w-6 h-6 text-gray-600 hover:text-[#8B1E3F] transition-colors" />
        </div>

        {/* ----------------- FILA 1 DESKTOP ----------------- */}
        <div className="hidden md:flex items-center justify-between h-20">
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.svg"
              alt="Clover Studio Logo"
              width={60}
              height={60}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </Link>

          <div className="flex items-center max-w-xl w-max">
            <Select
              value={selectedCollection}
              onValueChange={setSelectedCollection}
            >
              <SelectTrigger className="w-[180px] rounded-r-none bg-gray-100 text-gray-700 font-light text-xs hidden md:block">
                <SelectValue placeholder="Todas las colecciones" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Colecciones</SelectLabel>
                  <SelectItem value="all">Todas las colecciones</SelectItem>
                  {collections.map((collection: Collection) => (
                    <SelectItem value={collection.slug} key={collection.id}>
                      {collection.title}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <InputGroup className="hidden md:flex rounded-l-none">
              <InputGroupInput placeholder="Buscar en Clover Studio..." />
              <Button
                variant="outline"
                onClick={() => console.log(selectedCollection)}
                className="bg-gray-100 rounded-l-none"
              >
                <Search className="w-5 h-5" />
              </Button>
            </InputGroup>
          </div>

          <div className="hidden lg:block">
            <Link
              href="https://wa.me/34691453544"
              className="group relative inline-flex"
            >
              <div className="absolute inset-0 bg-[#39a459] rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-[#39a459] hover:bg-[#2d8446] text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl transform group-hover:-translate-y-1 flex items-center gap-2">
                Contáctanos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          </div>

          <div className="flex items-center space-x-4 lg:hidden">
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

        {/* ----------------- FILA 2 MÓVIL: SEARCHBAR ----------------- */}
        <div className="md:hidden w-full pb-3">
          <InputGroup className="w-full">
            <InputGroupInput placeholder="Buscar en Clover Studio..." />
            <Button className="bg-gray-100">
              <Search className="w-5 h-5" />
            </Button>
          </InputGroup>
        </div>

        {/* ----------------- MOBILE MENU (ya lo tenías) ----------------- */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 animate-slide-down">
            <nav className="flex flex-col space-y-4">
              {navigation.map((n) => (
                <Link
                  href={`/colecciones/${n.slug}`}
                  key={n.id}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-[#8B1E3F] font-medium py-2"
                >
                  {n.title}
                </Link>
              ))}

              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link
                  href="https://wa.me/34691453544"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full bg-[#39a459] hover:bg-[#2d8446] text-white px-6 py-3 rounded-full font-semibold text-center"
                >
                  Contáctanos
                </Link>
              </div>
            </nav>
          </div>
        )}

        {/* ----------------- FILA 3 MÓVIL: NAV SCROLL ----------------- */}
        <nav className="md:hidden w-full overflow-x-auto whitespace-nowrap scrollbar-none py-2">
          <div className="flex space-x-6 px-2">
            {navigation.map((n) => (
              <Link
                key={n.id}
                href={`/colecciones/${n.slug}`}
                className="text-gray-700 hover:text-[#8B1E3F] font-medium text-sm"
              >
                {n.title}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* NAV DESKTOP (igual que antes) */}
      <div className="container mx-auto py-2 px-4 hidden lg:block">
        <nav className="flex items-center space-x-10">
          {navigation.map((n) => (
            <Link
              href={`/colecciones/${n.slug}`}
              key={n.id}
              className="text-gray-700 hover:text-[#8B1E3F] font-medium transition-colors duration-200 hover:underline hover:underline-offset-4 cursor-pointer lg:text-sm"
            >
              {n.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
