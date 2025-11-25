"use client";

import { useState } from "react";
import { Search } from "lucide-react";

const aromas = [
  {
    id: 1,
    name: "Vainilla Francesa",
    category: "Gourmand",
    intensity: "Media",
  },
  { id: 2, name: "Canela y Clavo", category: "Especiado", intensity: "Fuerte" },
  { id: 3, name: "Lavanda Pura", category: "Floral", intensity: "Suave" },
  { id: 4, name: "Rosa Romántica", category: "Floral", intensity: "Media" },
  { id: 5, name: "Limón Fresco", category: "Cítrico", intensity: "Media" },
  { id: 6, name: "Naranja Amarga", category: "Cítrico", intensity: "Suave" },
  { id: 7, name: "Sándalo Exótico", category: "Oriental", intensity: "Media" },
  { id: 8, name: "Ámbar Nocturno", category: "Oriental", intensity: "Fuerte" },
  { id: 9, name: "Menta Silvestre", category: "Fresco", intensity: "Fuerte" },
  { id: 10, name: "Eucalipto Suave", category: "Fresco", intensity: "Media" },
  { id: 11, name: "Chocolate Negro", category: "Gourmand", intensity: "Media" },
  { id: 12, name: "Caramelo Salado", category: "Gourmand", intensity: "Suave" },
  {
    id: 13,
    name: "Cereza Silvestre",
    category: "Frutales",
    intensity: "Media",
  },
  { id: 14, name: "Melocotón Dulce", category: "Frutales", intensity: "Suave" },
  {
    id: 15,
    name: "Almendra Tostada",
    category: "Gourmand",
    intensity: "Media",
  },
  { id: 16, name: "Pimienta Rosa", category: "Especiado", intensity: "Media" },
  { id: 17, name: "Jazmín Nocturno", category: "Floral", intensity: "Fuerte" },
  { id: 18, name: "Musgo Blanco", category: "Fresco", intensity: "Suave" },
  {
    id: 19,
    name: "Almizcares Misterio",
    category: "Oriental",
    intensity: "Fuerte",
  },
  {
    id: 20,
    name: "Jengibre Picante",
    category: "Especiado",
    intensity: "Fuerte",
  },
  { id: 21, name: "Geranio Rosa", category: "Floral", intensity: "Media" },
  {
    id: 22,
    name: "Grapefruit Rosado",
    category: "Cítrico",
    intensity: "Media",
  },
  { id: 23, name: "Café Tostado", category: "Gourmand", intensity: "Fuerte" },
  { id: 24, name: "Té Verde Zen", category: "Fresco", intensity: "Suave" },
  { id: 25, name: "Frambuesa Dulce", category: "Frutales", intensity: "Suave" },
  {
    id: 26,
    name: "Bergamota Siciliana",
    category: "Cítrico",
    intensity: "Media",
  },
  {
    id: 27,
    name: "Cedro Majestuoso",
    category: "Oriental",
    intensity: "Media",
  },
  { id: 28, name: "Piña Tropical", category: "Frutales", intensity: "Media" },
  {
    id: 29,
    name: "Vetiver Profundo",
    category: "Oriental",
    intensity: "Fuerte",
  },
  { id: 30, name: "Rosas Antiguas", category: "Floral", intensity: "Media" },
];

export default function AromasPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = [
    "Todos",
    "Floral",
    "Cítrico",
    "Especiado",
    "Oriental",
    "Gourmand",
    "Fresco",
    "Frutales",
  ];

  const filteredAromas = aromas.filter((aroma) => {
    const matchSearch = aroma.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      selectedCategory === "Todos" || aroma.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  return (
    <>
      <section className="py-12 md:py-16 bg-white border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestros <span className="text-primary">Aromas</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Descubre nuestra colección de casi 30 aromas diferentes,
            cuidadosamente seleccionados para ofrecerte experiencias olfativas
            únicas.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-border sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="flex-1">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Busca un aroma..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
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
          {filteredAromas.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredAromas.map((aroma) => (
                <div
                  key={aroma.id}
                  className="bg-white rounded-lg p-6 border border-border hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-lg mb-2">{aroma.name}</h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">
                      <span className="font-medium">Categoría:</span>{" "}
                      {aroma.category}
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Intensidad:</span>{" "}
                      {aroma.intensity}
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
}
