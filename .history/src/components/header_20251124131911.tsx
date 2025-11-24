"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight, ShoppingCartIcon } from "lucide-react";
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
            className="absolute left-1/2 -translate-x-1/2 flex items-center h-full"
          >
            <Image
              src="/logo.svg"
              alt="Clover Studio Logo"
              width={48}
              className="transition-transform duration-300 h-full w-auto max-h-6 object-contain"
            />
          </Link>

          {/* CARRITO */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="flex items-center">
              <ShoppingCartIcon className="size-6" />
            </Button>
          </div>
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

          <div className="flex  items-center max-w-xl w-max">
            <Select
              value={selectedCollection}
              onValueChange={setSelectedCollection}
            >
              <SelectTrigger className="w-[180px] rounded-r-none bg-gray-100 text-gray-700 font-light text-xs hidden md:flex">
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
              <Button variant="outline" className="bg-gray-100 rounded-l-none">
                <Search className="w-5 h-5" />
              </Button>
            </InputGroup>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="default" className="flex items-center">
              <ShoppingCartIcon className="size-6" />
              Carrito
            </Button>
          </div>
        </div>

        {/* ----------------- FILA 2 MÓVIL: SEARCHBAR ----------------- */}
        <div className="md:hidden w-full pb-3">
          <InputGroup className="w-full">
            <InputGroupInput placeholder="Buscar en Clover Studio..." />
            <Button variant="outline" className="bg-gray-100 rounded-l-none">
              <Search className="w-5 h-5" />
            </Button>
          </InputGroup>
        </div>

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
