"use client";

import {
  Flame,
  Palette,
  Droplets,
  Coffee,
  Heart,
  Gift,
  Filter,
} from "lucide-react";
import { CategoryType } from "@/lib/types/Category.type";
import { ProductType } from "@/lib/types/Product.type";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

interface CategoryWithCount extends CategoryType {
  count: number;
}

interface FeatureWithCount {
  id: string;
  name: string;
  slug: string;
  count: number;
}

const iconMap = {
  Flame,
  Palette,
  Droplets,
  Coffee,
  Heart,
  Gift,
};

const priceRanges = [
  { id: "all", name: "Todos los precios" },
  { id: "0-10", name: "Hasta 10€" },
  { id: "10-20", name: "10€ - 20€" },
  { id: "20-30", name: "20€ - 30€" },
  { id: "30+", name: "Más de 30€" },
];

const features = [
  { id: "Bestseller", name: "Más Vendidos", slug: "bestseller" },
  { id: "Nuevo", name: "Nuevos", slug: "nuevo" },
  { id: "Exclusivo", name: "Exclusivos", slug: "exclusivo" },
  { id: "Customizable", name: "Personalizables", slug: "personalizable" },
  { id: "Gift-ready", name: "Listos para Regalo", slug: "gift-ready" },
];

interface CatalogFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedPriceRange: string;
  onPriceRangeChange: (range: string) => void;
  selectedFeatures: string[];
  onFeaturesChange: (feature: string) => void;
  totalProducts: number;
  categories: CategoryType[];
  products: ProductType[];
}

export default function CatalogFilters({
  selectedCategory,
  onCategoryChange,
  selectedPriceRange,
  onPriceRangeChange,
  selectedFeatures,
  onFeaturesChange,
  totalProducts,
  products,
  categories,
}: CatalogFiltersProps) {
  const categoriesWithAll: CategoryWithCount[] = [
    {
      id: "all",
      name: "Todas las Categorías",
      color: "",
      textColor: "",
      description: "",
      slug: "all",
      count: products.length,
    },
    ...categories.map((category) => ({
      ...category,
      count: products.filter((product) => product.category === category.id)
        .length,
    })),
  ];

  const featuresWithCount: FeatureWithCount[] = features.map((feature) => ({
    ...feature,
    count: products.filter((product) => product.badge === feature.id).length,
  }));

  const router = useRouter();
  const searchParams = useSearchParams();

  const priceRangesWithCount = priceRanges.map((range) => {
    let count = 0;
    if (range.id === "all") {
      count = products.length;
    } else if (range.id === "0-10") {
      count = products.filter((product) => product.price <= 10).length;
    } else if (range.id === "10-20") {
      count = products.filter(
        (product) => product.price > 10 && product.price <= 20
      ).length;
    } else if (range.id === "20-30") {
      count = products.filter(
        (product) => product.price > 20 && product.price <= 30
      ).length;
    } else if (range.id === "30+") {
      count = products.filter((product) => product.price > 30).length;
    }
    return {
      ...range,
      count,
    };
  });

  function updateQueryParam(key: string, value: string) {
    const currentParams = new URLSearchParams(searchParams.toString());
    if (value === "all") {
      currentParams.delete(key);
    } else {
      currentParams.set(key, value);
    }

    router.replace(`/catalogo?${currentParams.toString()}`, { scroll: false });
  }

  function updateMultiValueParam(key: string, values: string[]) {
    const currentParams = new URLSearchParams(searchParams.toString());
    if (values.length === 0) {
      currentParams.delete(key);
    } else {
      currentParams.set(key, values.join(","));
    }

    router.replace(`/catalogo?${currentParams.toString()}`);
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 sticky top-24">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2">Filtros</h3>
        <p className="text-sm text-[#999999]">
          {totalProducts} productos encontrados
        </p>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h4 className="font-semibold text-gray-900 mb-4">Categorías</h4>
        <div className="space-y-2">
          {categoriesWithAll.map((category) => {
            const IconComponent = category.icon
              ? iconMap[category.icon]
              : Filter;
            return (
              <button
                key={category.id}
                onClick={() => {
                  onCategoryChange(category.id);
                  updateQueryParam("categoria", category.slug);
                }}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                  selectedCategory === category.id
                    ? "bg-[#F8C8DC] text-[#8B1E3F] shadow-md"
                    : "hover:bg-gray-50 text-gray-700"
                }`}
              >
                <div className="flex items-center gap-3">
                  <IconComponent className="w-5 h-5" />
                  <span className="font-medium">{category.name}</span>
                </div>
                <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <h4 className="font-semibold text-gray-900 mb-4">Rango de Precio</h4>
        <div className="space-y-2">
          {priceRangesWithCount.map((range) => (
            <button
              key={range.id}
              onClick={() => {
                onPriceRangeChange(range.id);
                updateQueryParam("precio", range.id);
              }}
              className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                selectedPriceRange === range.id
                  ? "bg-[#D6BA8A] text-[#8B1E3F] shadow-md"
                  : "hover:bg-gray-50 text-gray-700"
              }`}
            >
              <span className="font-medium">{range.name}</span>
              <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">
                {range.count}
              </span>
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
                  className="w-4 h-4 text-[#8B1E3F] border-gray-300 rounded focus:ring-[#F8C8DC]"
                  checked={selectedFeatures.includes(feature.slug)}
                  onChange={(e) => {
                    const updatedFeatures = e.target.checked
                      ? [...selectedFeatures, feature.slug]
                      : selectedFeatures.filter((f) => f !== feature.slug);
                    onFeaturesChange(feature.slug);
                    updateMultiValueParam("caracteristicas", updatedFeatures);
                  }}
                />
                <span className="text-gray-700">{feature.name}</span>
              </div>
              <span className="text-sm text-[#999999]">({feature.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      <button
        onClick={() => {
          onCategoryChange("all");
          onPriceRangeChange("all");
        }}
        className="w-full py-3 px-4 border-2 border-[#8B1E3F] text-[#8B1E3F] rounded-xl font-semibold hover:bg-[#8B1E3F] hover:text-white transition-all duration-200"
      >
        Limpiar Filtros
      </button>
    </div>
  );
}
