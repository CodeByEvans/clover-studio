// Categories.tsx - Redesigned
"use client";
import Link from "next/link";
import {
  Flame,
  Palette,
  Droplets,
  Coffee,
  Heart,
  Gift,
  Sparkles,
  Star,
  Zap,
  ArrowRight,
} from "lucide-react";
import { useCategories } from "@/lib/hooks/useCategories";
import { CategoryType } from "@/lib/types/Category.type";

export const iconMap = {
  Flame,
  Palette,
  Droplets,
  Coffee,
  Heart,
  Gift,
};

export default function Categories() {
  const { data: categories, isLoading, error } = useCategories();

  if (isLoading) {
    return (
      <div className="py-20 bg-gradient-to-br from-[#F9F7F3] to-[#EFE6DD] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-[#F8C8DC] to-[#D3B5E5] rounded-full animate-pulse mx-auto mb-4"></div>
          <p className="text-[#999999] font-medium">
            Cargando categorías mágicas...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 bg-gradient-to-br from-[#F9F7F3] to-[#EFE6DD] flex items-center justify-center">
        <div className="text-center text-[#8B1E3F]">
          Error al cargar categorías
        </div>
      </div>
    );
  }

  if (!categories) {
    return (
      <div className="py-20 bg-gradient-to-br from-[#F9F7F3] to-[#EFE6DD] flex items-center justify-center">
        <div className="text-center text-[#999999]">
          No hay categorías disponibles
        </div>
      </div>
    );
  }

  return (
    <section
      id="categorias"
      className="py-24 bg-gradient-to-br from-[#F9F7F3] via-[#EFE6DD] to-[#E5D7CE] relative overflow-hidden"
    >
      {/* Enhanced floating elements */}
      <div className="absolute top-20 left-12 opacity-15 animate-float">
        <Sparkles className="w-10 h-10 text-[#F8C8DC]" />
      </div>
      <div
        className="absolute bottom-24 right-16 opacity-15 animate-float"
        style={{ animationDelay: "1s" }}
      >
        <Heart className="w-8 h-8 text-[#D3B5E5]" />
      </div>
      <div
        className="absolute top-1/3 right-24 opacity-10 animate-soft-pulse"
        style={{ animationDelay: "2s" }}
      >
        <Star className="w-6 h-6 text-[#BEE8CC]" />
      </div>
      <div className="absolute top-1/4 left-1/3 opacity-10 animate-soft-pulse">
        <Zap className="w-4 h-4 text-[#FDE68A]" />
      </div>

      {/* Gradient orbs for depth */}
      <div className="absolute top-16 right-1/4 w-48 h-48 bg-gradient-to-br from-[#F8C8DC]/8 to-[#D3B5E5]/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-16 left-1/6 w-64 h-64 bg-gradient-to-br from-[#BEE8CC]/8 to-[#FDE68A]/8 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced section header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Sparkles className="w-5 h-5 text-[#F8C8DC]" />
            <div className="h-px bg-gradient-to-r from-[#F8C8DC] via-[#D3B5E5] to-[#BEE8CC] w-24"></div>
            <Star className="w-4 h-4 text-[#D3B5E5]" />
            <div className="h-px bg-gradient-to-r from-[#BEE8CC] via-[#D3B5E5] to-[#F8C8DC] w-24"></div>
            <Heart className="w-5 h-5 text-[#BEE8CC]" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Nuestras
            <span className="block text-transparent bg-gradient-to-r from-[#8B1E3F] to-[#F8C8DC] bg-clip-text">
              Categorías Especiales
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-[#999999] max-w-3xl mx-auto leading-relaxed">
            Explora nuestra amplia gama de productos aromáticos artesanales,
            desde velas
            <span className="text-[#8B1E3F] font-medium">
              {" "}
              clásicas hasta creaciones únicas
            </span>
          </p>

          {/* Enhanced stats mini-section */}
          <div className="flex justify-center gap-8 mt-12 flex-wrap">
            {[
              {
                number: "6",
                label: "Categorías Únicas",
                color: "from-[#F8C8DC] to-[#f5b8d1]",
              },
              {
                number: "150+",
                label: "Productos Artesanales",
                color: "from-[#BEE8CC] to-[#a8d4b8]",
              },
              {
                number: "25+",
                label: "Aromas Exclusivos",
                color: "from-[#D3B5E5] to-[#c19ed6]",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div
                    className={`w-3 h-3 bg-gradient-to-r ${stat.color} rounded-full mx-auto mb-2 group-hover:scale-125 transition-transform duration-300`}
                  ></div>
                  <div className="text-2xl font-bold text-[#8B1E3F] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-[#999999] font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category: CategoryType) => {
            const IconComponent =
              iconMap[category.icon as keyof typeof iconMap] || Flame;
            return (
              <Link
                key={category.id}
                href={`/categorias/${category.slug}`}
                className="group relative"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-white/60 relative overflow-hidden">
                  {/* Enhanced background decoration */}
                  <div
                    className={`absolute -top-6 -right-6 w-32 h-32 ${category.color} opacity-8 rounded-full transform scale-75 group-hover:scale-100 transition-transform duration-500`}
                  ></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-30 transition-all duration-500">
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-[#F8C8DC] rounded-full"></div>
                      <div className="w-1 h-1 bg-[#D3B5E5] rounded-full"></div>
                      <div className="w-1 h-1 bg-[#BEE8CC] rounded-full"></div>
                    </div>
                  </div>

                  <div className="relative z-10">
                    {/* Enhanced icon with subtle effects */}
                    <div className="relative mb-6">
                      <div
                        className={`w-20 h-20 ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-md border border-white/50`}
                      >
                        <IconComponent
                          className={`w-10 h-10 ${category.textColor} group-hover:scale-110 transition-transform duration-300`}
                        />
                      </div>
                      <div
                        className={`absolute -inset-1 ${category.color} opacity-20 rounded-2xl scale-95 group-hover:scale-110 transition-all duration-500 -z-10 blur-sm`}
                      ></div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#8B1E3F] group-hover:to-[#F8C8DC] group-hover:bg-clip-text transition-all duration-300">
                      {category.name}
                    </h3>

                    <p className="text-[#999999] leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                      {category.description}
                    </p>

                    {/* Enhanced CTA with subtle animations */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-[#8B1E3F] font-semibold group-hover:text-[#F8C8DC] transition-all duration-300">
                        <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                          Ver productos
                        </span>
                        <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
                      </div>
                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-1 h-1 bg-[#F8C8DC] rounded-full"></div>
                        <div className="w-1 h-1 bg-[#D3B5E5] rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Subtle corner accent */}
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <div className="w-6 h-6 border-l-2 border-b-2 border-[#F8C8DC] rounded-bl-lg"></div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Enhanced View All Button */}
        <div className="text-center mt-16">
          <Link href="/categorias" className="group relative inline-flex">
            <div className="absolute inset-0 bg-gradient-to-r from-[#D6BA8A] to-[#c9a876] rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-[#D6BA8A] hover:bg-[#c9a876] text-[#8B1E3F] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl transform group-hover:-translate-y-1 group-hover:scale-105 flex items-center gap-2">
              Explorar Todas las Categorías
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
