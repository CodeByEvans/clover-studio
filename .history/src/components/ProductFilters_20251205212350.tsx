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
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export const ProductFilters = ({
  onSort,
  onPriceChange,
  onCollectionChange,
}: {
  onSort: (value: string) => void;
  onPriceChange: (min: number, max: number) => void;
  onCollectionChange?: (value: string) => void;
}) => {
  const [sort, setSort] = useState("featured");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50]);

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
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Filtros</Button>
        </SheetTrigger>

        <SheetContent side="left" className="w-[300px] p-6">
          <SheetHeader>
            <SheetTitle>Filtros</SheetTitle>
          </SheetHeader>

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
            <Button
              className="mt-4"
              variant="outline"
              onClick={() => {
                const initialRange: [number, number] = [0, 50];
                setPriceRange(initialRange);
                onPriceChange(initialRange[0], initialRange[1]);
              }}
            >
              Limpiar Filtros
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex items-center gap-2">
          <p>Ordenar por:</p>
          <Select value={sort} onValueChange={handleChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Destacados" />
            </SelectTrigger>
            <SelectContent>
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
