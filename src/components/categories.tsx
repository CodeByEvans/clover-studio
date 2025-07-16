"use client";
import Link from "next/link";
import { Flame, Palette, Droplets, Coffee, Heart, Gift } from "lucide-react";
import { useCategories } from "@/lib/queries/useCategories";
import { CategoryType } from "@/lib/types/Category.type";

const iconMap = {
  Flame,
  Palette,
  Droplets,
  Coffee,
  Heart,
  Gift,
};

export default function Categories() {
  const { data: categories, isLoading, error } = useCategories();
  if (isLoading) return <div>Cargando categorías...</div>;
  if (error) return <div>Error al cargar categorías</div>;
  if (!categories) return <div>No hay categorías</div>;
  return (
    <section id="categorias" className="py-20 bg-[#F9F7F3]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestras Categorías
          </h2>
          <p className="text-xl text-[#999999] max-w-2xl mx-auto">
            Explora nuestra amplia gama de productos aromáticos, desde velas
            clásicas hasta creaciones únicas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category: CategoryType) => {
            // Aseguramos que category.icon sea una clave válida de iconMap
            const IconComponent =
              iconMap[category.icon as keyof typeof iconMap] || Flame;
            return (
              <Link
                key={category.id}
                href={`/catalogo?categoria=${category.slug}`}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className={`w-8 h-8 ${category.textColor}`} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#8B1E3F] transition-colors">
                  {category.name}
                </h3>

                <p className="text-[#999999] leading-relaxed">
                  {category.description}
                </p>

                <div className="mt-6 flex items-center text-[#8B1E3F] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Ver productos
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
