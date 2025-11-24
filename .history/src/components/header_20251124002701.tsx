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

export default function Header() {
  const { collections }: { collections: Collections } = useData();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState<string>("all");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-40 px-4 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {isMobile && (
            <CiSearch className="w-6 h-6 text-gray-600 hover:text-[#8B1E3F] transition-colors" />
          )}
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

          <div className="flex items-center">
            <Select
              value={selectedCollection}
              onValueChange={setSelectedCollection}
            >
              <SelectTrigger className="w-[180px]  rounded-r-none bg-gray-100 text-gray-700 font-light text-xs ">
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
            <InputGroup className=" max-w-xs hidden md:flex rounded-l-none">
              <InputGroupInput placeholder="Buscar el Clover Studio..." />
              <Button onClick={() => console.log(selectedCollection)}>
                <Search className="w-5 h-5" />
              </Button>
            </InputGroup>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="https://wa.me/34691453544"
              className="group relative inline-flex"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 bg-[#39a459] rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-[#39a459] hover:bg-[#2d8446] text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl transform group-hover:-translate-y-1 flex items-center gap-2">
                Contáctanos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 animate-slide-down">
            <nav className="flex flex-col space-y-4">
              {collections.map((collection) => (
                <Link
                  href={`/colecciones/${collection.slug}`}
                  key={collection.id}
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-700 text-left hover:text-[#8B1E3F] font-medium transition-colors duration-200 py-2"
                >
                  {collection.title}
                </Link>
              ))}
              {/* CTA button in mobile menu */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link
                  href="https://wa.me/34691453544"
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                  rel="noopener noreferrer"
                  className="block w-full bg-[#39a459] hover:bg-[#2d8446] text-white px-6 py-3 rounded-full font-semibold text-center transition-colors duration-300 cursor-pointer"
                >
                  Contáctanos
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
      <div className="container mx-auto py-2 px-4">
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-10">
          {collections.map((collection) => (
            <Link
              href={`/colecciones/${collection.slug}`}
              key={collection.id}
              className="text-gray-700 hover:text-[#8B1E3F] font-medium transition-colors duration-200 hover:underline hover:underline-offset-4 cursor-pointer lg:text-sm"
            >
              {collection.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
