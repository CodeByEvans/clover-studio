"use client";

import type React from "react";

import { Heart } from "lucide-react";
import { useFavorites } from "@/contexts/favorites-context";
import { ProductType } from "@/lib/types/Product.type";

interface FavoriteButtonProps {
  product: ProductType;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant: "icon" | "button";
}

export default function FavoriteButton({
  product,
  className = "",
  size = "md",
  variant,
}: FavoriteButtonProps) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const isProductFavorite = isFavorite(product.id);

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isProductFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  if (variant === "icon") {
    return (
      <button
        onClick={handleToggleFavorite}
        className={`${
          sizeClasses[size]
        } bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-200 ${
          isProductFavorite
            ? "text-red-500"
            : "text-gray-600 hover:text-[#8B1E3F]"
        } ${className}`}
        title={
          isProductFavorite ? "Quitar de favoritos" : "Agregar a favoritos"
        }
        aria-pressed={isProductFavorite}
      >
        <Heart
          className={`${iconSizes[size]} ${
            isProductFavorite ? "fill-current" : ""
          }`}
        />
      </button>
    );
  }

  if (variant === "button") {
    return (
      <button
        onClick={handleToggleFavorite}
        className={`border-2 border-[#BEE8CC] text-[#8B1E3F] hover:bg-[#BEE8CC] py-4 px-6 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 ${className}`}
        title={
          isProductFavorite ? "Quitar de favoritos" : "Agregar a favoritos"
        }
        aria-pressed={isProductFavorite}
      >
        <Heart
          className={`${iconSizes[size]} ${
            isProductFavorite ? "fill-current" : ""
          }`}
        />
        {isProductFavorite ? "En Favoritos" : "Agregar a Favoritos"}
      </button>
    );
  }

  return null; // por si en el futuro agregas más variantes
}
