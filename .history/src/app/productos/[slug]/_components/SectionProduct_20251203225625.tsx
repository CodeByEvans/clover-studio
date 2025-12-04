"use client";

import { useData } from "@/context/data-context";
import ProductNotFound from "../404";
import AddToCartSection from "./AddToCartSection";
import SwiperCarousel from "@/components/SwiperCarousel";
import { useState } from "react";
import { Fragrance } from "@/types/fragances.type";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const SectionProduct = ({ slug }: { slug: string }) => {
  const [selectedFragrance, setSelectedFragrance] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const { products, fragrances, fragranceCategories } = useData();

  const filteredFragrances = selectedCategory
    ? fragrances.filter((f) => f.category.id === selectedCategory)
    : [];

  // Search product by slug
  const product = products.find((p) => p.slug === slug);
  if (!product) return <ProductNotFound />;

  const needsFragrance = product.collection.slug !== "quemadores";

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <SwiperCarousel images={product.images} />
      </div>

      <div className="flex flex-col justify-start md:justify-center gap-4">
        <h1 className="text-4xl font-extrabold text-[#8B1E3F]">
          {product.title}
        </h1>
        <h2 className="text-2xl font-semibold mt-2">{product.price} €</h2>
        <p className="text-gray-700 mt-4 leading-relaxed">
          {product.description}
        </p>

        {needsFragrance && (
          <div className="mt-6 flex flex-col gap-4">
            <label className="font-semibold text-gray-800">
              Elige tu fragancia
            </label>

            {/* FILTRO POR CATEGORÍA */}
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger>
                <SelectValue placeholder="Filtrar por categoría" />
              </SelectTrigger>
              <SelectContent>
                {fragranceCategories.map((cat) => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* SELECT FINAL DE FRAGANCIA */}
            {filteredFragrances.length > 0 && (
              <Select
                value={selectedFragrance}
                onValueChange={setSelectedFragrance}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Elige tu aroma" />
                </SelectTrigger>
                <SelectContent>
                  {filteredFragrances.map((fragrance: Fragrance) => (
                    <SelectItem key={fragrance.id} value={fragrance.id}>
                      {fragrance.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>
        )}

        <AddToCartSection product={product} />
      </div>
    </section>
  );
};

export default SectionProduct;
