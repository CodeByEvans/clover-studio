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
}: {
  onSort: (value: string) => void;
}) => {
  const [sort, setSort] = useState("relevancia");

  const handleChange = (value: string) => {
    setSort(value);
    onSort(value); // avisas al padre que cambió el orden
  };

  return (
    <div className="mb-8 flex flex-wrap items-center gap-4 justify-between">
      <Select>Filtros</Select>
      <div className="flex items-center gap-2">
        <p>Ordenar por:</p>
        <Select value={sort} onValueChange={handleChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Relevancia" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="relevancia">Relevancia</SelectItem>
            <SelectItem value="precio">Precio</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ProductFilters;
