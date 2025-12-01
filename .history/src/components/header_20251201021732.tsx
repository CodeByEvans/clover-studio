"use client";

// Imports
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Types imports
import { Collection, Collections } from "@/types/collection.type";
import { Navigation } from "@/types/navigation.type";
import { HeaderHighlights } from "@/types/header_hightlights.type";
import { useData } from "@/context/data-context";

// Icons imports
import { ShoppingCartIcon } from "lucide-react";
import { Search } from "lucide-react";

// Components imports
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
import { InputGroup, InputGroupInput } from "./ui/input-group";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";
import { useCart } from "@/context/cart-context";

export interface HeaderProps {
  collections: Collections;
  navigation: Navigation;
  headerHighlights: HeaderHighlights;
}

export default function Header() {
  const { openCart } = useCart();
  const { collections, navigation, headerHighlights }: HeaderProps = useData();
  const [selectedCollection, setSelectedCollection] = useState("all");

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-40 shadow-sm"
    >
      <section className="container mx-auto">
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
              width={90}
              height={90}
              className="transition-transform duration-300"
            />
          </Link>

          {/* CARRITO */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="flex items-center"
              onClick={openCart}
            >
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
              width={80}
              height={80}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </Link>

          <div className="flex  items-center max-w-4xl w-max">
            <InputGroup className="hidden md:flex rounded-l-none overflow-hidden">
              <Select
                value={selectedCollection}
                onValueChange={setSelectedCollection}
              >
                <SelectTrigger className="w-[180px] rounded-r-none bg-gray-100 text-gray-700 font-light text-sm hidden md:flex">
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
              <InputGroupInput placeholder="Buscar en Clover Studio..." />
              <Button variant="outline" className="bg-gray-100 rounded-l-none">
                <Search className="w-5 h-5" />
              </Button>
            </InputGroup>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="default"
              className="flex items-center"
              onClick={openCart}
            >
              <ShoppingCartIcon className="size-6" />
              Carrito
            </Button>
          </div>
        </div>

        {/* NAV DESKTOP  */}
        <div className="container mx-auto py-2 hidden lg:flex lg:justify-between">
          <nav className="flex items-center space-x-10">
            {navigation.map((n) => (
              <Link
                href={`/${n.slug}`}
                key={n.id}
                className="text-gray-700 hover:text-[#8B1E3F] font-medium transition-colors duration-200 hover:underline hover:underline-offset-4 cursor-pointer lg:text-base"
              >
                {n.title}
              </Link>
            ))}
          </nav>
          {/* Línea separadora */}
          <hr className="mt-2 border-gray-200" />
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            loop
            className="hidden md:flex items-center text-center w-1/2"
          >
            {headerHighlights.map((highlight) => (
              <SwiperSlide
                key={highlight.id}
                className="text-gray-600 font-light text-base"
              >{`${highlight.text}`}</SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ----------------- FILA 2 MÓVIL: SEARCHBAR ----------------- */}
        <div className="md:hidden w-full pb-3">
          <InputGroup className="w-full overflow-hidden">
            <InputGroupInput placeholder="Buscar en Clover Studio..." />
            <Button variant="outline" className="bg-gray-100 rounded-l-none">
              <Search className="w-5 h-5" />
            </Button>
          </InputGroup>
        </div>

        {/* ----------------- FILA 3 MÓVIL: NAV SCROLL ----------------- */}
        <nav className="md:hidden w-full overflow-x-auto scrollbar-none whitespace-nowrap scrollbar-none py-2 hide-scrollbar">
          <div className="flex space-x-6 px-2 w-full">
            {navigation.map((n) => (
              <Link
                key={n.id}
                href={`/${n.slug}`}
                className="text-gray-700 hover:text-[#8B1E3F] font-medium text-sm"
              >
                {n.title}
              </Link>
            ))}
          </div>
        </nav>
      </section>
    </motion.header>
  );
}
