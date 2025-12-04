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

export const ProductFilters = ({
  onSort,
  onPriceChange,
}: {
  onSort: (value: string) => void;
  onPriceChange?: (min: number, max: number) => void;
}) => {
  const [sort, setSort] = useState("relevancia");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const handleChange = (value: string) => {
    setSort(value);
    onSort(value);
  };

  const handlePriceApply = () => {
    if (onPriceChange) onPriceChange(minPrice, maxPrice);
    setSidebarOpen(false);
  };

  return (
    <div className="w-full my-4 flex flex-wrap items-center gap-4 justify-between relative">
      {/* Botón de filtros */}
      <Button variant="outline" onClick={() => setSidebarOpen(!sidebarOpen)}>
        Filtros
      </Button>

      {/* Sidebar simple */}
      {sidebarOpen && (
        <div className="absolute top-full left-0 w-64 bg-white border p-4 shadow-lg rounded mt-2 z-50">
          <h3 className="font-semibold mb-2">Rango de precios</h3>
          <div className="flex flex-col gap-2">
            <input
              type="number"
              placeholder="Mínimo"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              className="border px-2 py-1 rounded"
            />
            <input
              type="number"
              placeholder="Máximo"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="border px-2 py-1 rounded"
            />
            <Button variant="default" onClick={handlePriceApply}>
              Aplicar
            </Button>
          </div>
        </div>
      )}

      {/* Select de orden */}
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
  );
};

export default ProductFilters;
