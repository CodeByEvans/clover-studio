"use client";
import { FeatureWithCount } from "@/lib/types/Category.type";
import { Product } from "@/lib/types/Product";
// CategoryFilters.tsx
import { Filter } from "lucide-react";

export type SortOption =
  | "name"
  | "price-low"
  | "price-high"
  | "rating"
  | "newest";
export type ViewMode = "grid" | "list";

const priceRanges = [
  { id: "all", name: "Todos los precios" },
  { id: "0-20000", name: "Hasta €5.00" },
  { id: "20000-40000", name: "€5.00 - €10.00" },
  { id: "40000-60000", name: "€10.00 - €15.00" },
  { id: "60000+", name: "Más de €15.00" },
];
const features = [
  { id: "Bestseller", name: "Más Vendidos", slug: "bestseller" },
  { id: "Nuevo", name: "Nuevos", slug: "nuevo" },
  { id: "Exclusivo", name: "Exclusivos", slug: "exclusivo" },
  { id: "Customizable", name: "Personalizables", slug: "personalizable" },
  { id: "Gift-ready", name: "Listos para Regalo", slug: "gift-ready" },
  { id: "Eco-friendly", name: "Eco-Friendly", slug: "eco-friendly" },
];

interface CategoryFiltersProps {
  selectedPriceRange: string;
  onPriceRangeChange: (range: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  totalProducts: number;
  colorScheme: "sober" | "colorful";
  products: Product[];
  selectedFeatures: string[];
  onFeaturesChange: (features: string[]) => void;
}

export default function CategoryFilters({
  selectedPriceRange,
  onPriceRangeChange,
  onSearchChange,
  totalProducts,
  colorScheme,
  products,
  selectedFeatures,
  onFeaturesChange,
}: CategoryFiltersProps) {
  const getColorClasses = () => {
    switch (colorScheme) {
      case "sober":
        return {
          primary: "bg-[#8B1E3F] text-white",
          secondary: "bg-[#D6BA8A] text-[#8B1E3F]",
          accent: "text-[#8B1E3F]",
          border: "border-[#EFE6DD]",
        };
      case "colorful":
        return {
          primary:
            "bg-gradient-to-r from-[#F8C8DC] to-[#D3B5E5] text-[#8B1E3F]",
          secondary: "bg-[#BEE8CC] text-[#8B1E3F]",
          accent: "text-[#8B1E3F]",
          border: "border-[#F8C8DC]",
        };
      default:
        return {
          primary: "bg-[#8B1E3F] text-white",
          secondary: "bg-[#F8C8DC] text-[#8B1E3F]",
          accent: "text-[#8B1E3F]",
          border: "border-gray-200",
        };
    }
  };

  const colors = getColorClasses();

  const featuresWithCount: FeatureWithCount[] = features.map((feature) => ({
    ...feature,
    count: products.filter((product) => product.badge === feature.id).length,
  }));

  const handleFeatureToggle = (featureId: string) => {
    if (selectedFeatures.includes(featureId)) {
      onFeaturesChange(selectedFeatures.filter((id) => id !== featureId));
    } else {
      onFeaturesChange([...selectedFeatures, featureId]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Filtros
          </h3>
          <p className="text-sm text-[#999999]">
            {totalProducts} productos encontrados
          </p>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-4">Rango de Precio</h4>
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <button
                key={range.id}
                onClick={() => onPriceRangeChange(range.id)}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                  selectedPriceRange === range.id
                    ? `${colors.secondary} shadow-md`
                    : "hover:bg-gray-50 text-gray-700"
                }`}
              >
                <span className="font-medium">{range.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-4">Características</h4>
          <div className="space-y-2">
            {featuresWithCount.map((feature) => (
              <label
                key={feature.id}
                className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={selectedFeatures.includes(feature.slug)}
                    onChange={() => handleFeatureToggle(feature.slug)}
                    className="w-4 h-4 text-[#8B1E3F] border-gray-300 rounded focus:ring-[#F8C8DC]"
                  />
                  <span className="text-gray-700">{feature.name}</span>
                </div>
                <span className="text-sm text-[#999999]">
                  ({feature.count})
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        <button
          onClick={() => {
            onPriceRangeChange("all");
            onSearchChange("");
          }}
          className={`w-full mt-6 py-3 px-4 border-2 ${colors.border} ${colors.accent} rounded-xl font-semibold hover:${colors.primary} transition-all duration-200`}
        >
          Limpiar Filtros
        </button>
      </div>
    </div>
  );
}
