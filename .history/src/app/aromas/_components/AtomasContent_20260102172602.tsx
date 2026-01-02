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
  return (
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
  );
};
