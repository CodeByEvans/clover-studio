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
  const [selectedFragranceId, setSelectedFragranceId] = useState<string>("");

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedIntensity, setSelectedIntensity] = useState<string>("");
  const { products, fragrances, fragranceCategories } = useData();

  const filteredFragrances = fragrances.filter((f) => {
    const matchCategory = selectedCategory
      ? f.category.id === selectedCategory
      : false;
    const matchIntensity = selectedIntensity
      ? f.intensity === selectedIntensity
      : false;
    return matchCategory && matchIntensity;
  });

  const intensities = selectedCategory
    ? [
        ...new Set(
          fragrances
            .filter((f) => f.category.id === selectedCategory)
            .map((f) => f.intensity)
        ),
      ]
    : [];

  const selectedFragrance = filteredFragrances.find(
    (f) => f.id === selectedFragranceId
  );

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
                <SelectValue placeholder="Elige una categoría" />
              </SelectTrigger>
              <SelectContent>
                {fragranceCategories.map((cat) => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {selectedCategory && (
              <Select
                value={selectedIntensity}
                onValueChange={setSelectedIntensity}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Elige una intensidad" />
                </SelectTrigger>
                <SelectContent>
                  {intensities.map((intensity) => (
                    <SelectItem key={intensity} value={intensity}>
                      {intensity}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}

            {/* SELECT FINAL DE FRAGANCIA */}
            {filteredFragrances.length > 0 && (
              <Select
                value={selectedFragranceId}
                onValueChange={setSelectedFragranceId}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Elige tu aroma" />
                </SelectTrigger>
                <SelectContent>
                  {filteredFragrances.map((fragrance: Fragrance) => (
                    <SelectItem key={fragrance.id} value={fragrance.id}>
                      {fragrance.name} · {fragrance.intensity}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>
        )}

        <AddToCartSection product={product} fragrance={selectedFragrance} />
      </div>
    </section>
  );
};

export default SectionProduct;
