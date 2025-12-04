"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

export const ProductFilters = ({
  onSort,
  onPriceChange,
}: {
  onSort: (value: string) => void;
  onPriceChange: (min: number, max: number) => void;
}) => {
  const [sort, setSort] = useState("relevancia");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);

  const handleChange = (value: string) => {
    setSort(value);
    onSort(value);
  };

  const handleSliderChange = (value: [number, number]) => {
    setPriceRange(value);
    onPriceChange(value[0], value[1]);
  };

  return (
    <div className="w-full my-4 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
      <div className="flex flex-col">
        <p className="mb-2">
          Rango de precio: {priceRange[0]}€ - {priceRange[1]}€
        </p>
        <Slider
          value={priceRange}
          onValueChange={handleSliderChange}
          min={0}
          max={50}
          step={1}
        />
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex items-center gap-2">
          <p>Ordenar por:</p>
          <Select value={sort} onValueChange={handleChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Relevancia" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevancia">Relevancia</SelectItem>
              <SelectItem value="featured">Destacados</SelectItem>
              <SelectItem value="price-asc">Precio (asc)</SelectItem>
              <SelectItem value="price-desc">Precio (desc)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
