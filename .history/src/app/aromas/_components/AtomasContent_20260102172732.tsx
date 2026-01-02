"use client";
import { Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useData } from "@/context/data-context";
import { useState } from "react";

export const AromasContent = () => {
  const { fragrances, fragranceCategories } = useData();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = [
    "Todos",
    ...new Set(fragranceCategories.map((fragrance) => fragrance.name)),
  ];

  const filteredFrangrances = fragrances.filter((fragrance) => {
    const matchSearch = fragrance.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchCategory =
      selectedCategory === "Todos" ||
      fragrance.category.name === selectedCategory;
    return matchSearch && matchCategory;
  });
  return (
    <>
      {/* Filters */}
      <section className="py-8 bg-white border-b border-border sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="flex-1">
              <div className="relative">
                <InputGroup>
                  <InputGroupInput
                    placeholder="Buscar aroma..."
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <InputGroupAddon>
                    <Search className="text-muted-foreground" />
                  </InputGroupAddon>
                </InputGroup>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    selectedCategory === cat
                      ? "bg-primary text-white"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Aromas Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {filteredFrangrances.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredFrangrances.map((fragrance) => (
                <div
                  key={fragrance.id}
                  className="bg-white rounded-lg p-6 border border-border hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-lg mb-2">
                    {fragrance.name}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">
                      <span className="font-medium">Categoría:</span>{" "}
                      {fragrance.category.name}
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Intensidad:</span>{" "}
                      {fragrance.intensity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No se encontraron aromas con esos criterios.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default AromasContent;
