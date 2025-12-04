"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";
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
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="mb-4 md:mb-0">
          Filtros
        </Button>
      </DialogTrigger>

      <DialogContent className="w-full max-w-xs md:max-w-sm h-full fixed top-0 right-0 p-6 bg-white shadow-lg overflow-auto">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <DialogTitle>Filtros de productos</DialogTitle>
            <DialogClose asChild>
              <Button variant="ghost">Cerrar</Button>
            </DialogClose>
          </div>

          {/* Slider de precio */}
          <div className="flex flex-col gap-2">
            <p>
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

          {/* Select de orden */}
          <div className="flex flex-col gap-2">
            <p>Ordenar por:</p>
            <Select value={sort} onValueChange={handleChange}>
              <SelectTrigger className="w-full">
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
      </DialogContent>
    </Dialog>
  );
};

export default ProductFilters;
