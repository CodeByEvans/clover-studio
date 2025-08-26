"use client";

// CategoriesOverview.tsx
import Link from "next/link";
import { Flame, Sparkles, ArrowRight, Heart, Star, Zap } from "lucide-react";
import { useCategories } from "@/lib/hooks/useCategories";
import LoadingLayout from "../common/LoadingLayout";
import { CategoryType } from "@/lib/types/Category.type";
import { iconMap } from "../categories";

export default function CategoriesOverview() {
  const { data: categoriesData, isLoading, isError } = useCategories();

  if (isLoading) {
    return <LoadingLayout message="Cargando categorías..." />;
  }
  if (isError) {
    return <div>Error al cargar categorías</div>;
  }
  if (!categoriesData) {
    return <div>No se encontraron categorías</div>;
  }

  return (
    <div>
      {/* Enhanced Hero Section */}
      <section className="bg-gradient-to-br from-white via-[#FEFCF9] to-[#F9F7F3] py-24 relative overflow-hidden">
        {/* Floating decorative elements with more detail */}
        <div className="absolute top-20 left-10 opacity-20 animate-float">
          <Sparkles className="w-8 h-8 text-[#F8C8DC]" />
        </div>
        <div
          className="absolute bottom-32 right-16 opacity-20 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <Sparkles className="w-6 h-6 text-[#D3B5E5]" />
        </div>
        <div
          className="absolute top-1/3 right-20 opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <Sparkles className="w-10 h-10 text-[#BEE8CC]" />
        </div>

        {/* Additional subtle floating elements */}
        <div className="absolute top-1/4 left-1/3 opacity-10 animate-soft-pulse">
          <Star className="w-4 h-4 text-[#D6BA8A]" />
        </div>
        <div
          className="absolute bottom-1/4 right-1/3 opacity-10 animate-soft-pulse"
          style={{ animationDelay: "1.5s" }}
        >
          <Heart className="w-5 h-5 text-[#F8C8DC]" />
        </div>

        {/* Subtle gradient orbs */}
        <div className="absolute top-16 right-1/4 w-32 h-32 bg-gradient-to-br from-[#F8C8DC]/10 to-[#D3B5E5]/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-[#BEE8CC]/10 to-[#FDE68A]/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto">
            {/* Enhanced title with subtle decorations */}
            <div className="mb-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-[#F8C8DC] to-transparent w-16"></div>
                <div className="w-2 h-2 bg-[#F8C8DC] rounded-full"></div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#D3B5E5] to-transparent w-16"></div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Explora todas nuestras
                <span className="block text-transparent bg-gradient-to-r from-[#F8C8DC] to-[#D3B5E5] bg-clip-text">
                  Categorías
                </span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-[#999999] mb-12 max-w-3xl mx-auto leading-relaxed">
              Descubre nuestra amplia gama de productos aromáticos artesanales,
              cada uno diseñado para
              <span className="text-[#8B1E3F] font-medium">
                {" "}
                crear momentos especiales
              </span>{" "}
              en tu hogar.
            </p>

            {/* Enhanced Stats with cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                {
                  number: "6",
                  label: "Categorías",
                  color: "from-[#F8C8DC] to-[#f5b8d1]",
                },
                {
                  number: "150+",
                  label: "Productos",
                  color: "from-[#D3B5E5] to-[#c19ed6]",
                },
                {
                  number: "25+",
                  label: "Aromas",
                  color: "from-[#BEE8CC] to-[#a8d4b8]",
                },
                {
                  number: "100%",
                  label: "Artesanal",
                  color: "from-[#FDE68A] to-[#fcd34d]",
                },
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-white/60">
                    <div
                      className={`w-3 h-3 bg-gradient-to-r ${stat.color} rounded-full mx-auto mb-3`}
                    ></div>
                    <div className="text-3xl font-bold text-[#8B1E3F] mb-2">
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
        </div>
      </section>

      {/* Enhanced Categories Grid */}
      <section className="py-24 bg-white relative">
        {/* Subtle section background texture */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50/30"></div>

        <div className="container mx-auto px-4 relative">
          {/* Section header with decorative elements */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Zap className="w-5 h-5 text-[#F8C8DC]" />
              <div className="h-px bg-gradient-to-r from-[#F8C8DC] via-[#D3B5E5] to-[#BEE8CC] w-24"></div>
              <Star className="w-4 h-4 text-[#D3B5E5]" />
              <div className="h-px bg-gradient-to-r from-[#BEE8CC] via-[#D3B5E5] to-[#F8C8DC] w-24"></div>
              <Heart className="w-5 h-5 text-[#BEE8CC]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestras Colecciones Especiales
            </h2>
            <p className="text-lg text-[#999999] max-w-2xl mx-auto">
              Cada categoría ha sido cuidadosamente curada para ofrecerte
              experiencias sensoriales únicas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoriesData.map((category: CategoryType) => {
              const IconComponent =
                iconMap[category.icon as keyof typeof iconMap] || Flame;
              return (
                <Link
                  key={category.id}
                  href={`/categorias/${category.slug}`}
                  className="group relative"
                >
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-gray-100 relative overflow-hidden">
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
                            Explorar
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
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#8B1E3F] via-[#7a1a37] to-[#6b1830] relative overflow-hidden">
        {/* Enhanced floating elements */}
        <div className="absolute top-10 left-10 opacity-15 animate-float">
          <Sparkles className="w-12 h-12 text-[#F8C8DC]" />
        </div>
        <div
          className="absolute bottom-16 right-12 opacity-15 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <Heart className="w-8 h-8 text-[#F8C8DC]" />
        </div>
        <div className="absolute top-1/2 left-1/4 opacity-10 animate-soft-pulse">
          <Star className="w-6 h-6 text-[#D3B5E5]" />
        </div>

        {/* Gradient orbs for depth */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#F8C8DC] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#D3B5E5] opacity-5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Enhanced title with decorative elements */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#F8C8DC] to-[#f5b8d1] rounded-full mb-6 shadow-xl">
                <Heart className="w-8 h-8 text-[#8B1E3F]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                ¿No encuentras lo que buscas?
              </h2>
            </div>

            <p className="text-xl text-pink-100 mb-10 leading-relaxed">
              Creamos productos personalizados según tus necesidades. Cuéntanos
              tu idea y
              <span className="text-[#F8C8DC] font-semibold">
                {" "}
                la haremos realidad
              </span>{" "}
              con el mismo cariño artesanal de siempre.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                href="https://wa.me/573001234567?text=Hola! Me interesa un producto personalizado"
                target="_blank"
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#F8C8DC] to-[#f5b8d1] rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-[#F8C8DC] hover:bg-[#f5b8d1] text-[#8B1E3F] px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-xl transform group-hover:-translate-y-1 group-hover:scale-105">
                  Solicitar Producto Personalizado
                </div>
              </Link>

              <Link
                href="/productos"
                className="group border-2 border-[#F8C8DC] text-[#F8C8DC] hover:bg-[#F8C8DC] hover:text-[#8B1E3F] px-8 py-4 rounded-full font-semibold transition-all duration-300 transform group-hover:-translate-y-1 backdrop-blur-sm bg-white/5"
              >
                Ver Todos los Productos
              </Link>
            </div>

            {/* Enhanced features section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="relative mb-4">
                  <div className="w-14 h-14 bg-[#F8C8DC] rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-7 h-7 text-[#8B1E3F]" />
                  </div>
                  <div className="absolute inset-0 w-14 h-14 bg-[#F8C8DC] rounded-full mx-auto opacity-30 scale-0 group-hover:scale-125 transition-transform duration-500 blur-sm"></div>
                </div>
                <h3 className="font-bold text-white mb-2">Hecho con Amor</h3>
                <p className="text-pink-100 text-sm leading-relaxed">
                  Cada producto es único y creado artesanalmente
                </p>
              </div>

              <div className="text-center group">
                <div className="relative mb-4">
                  <div className="w-14 h-14 bg-[#BEE8CC] rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-7 h-7 text-[#8B1E3F]" />
                  </div>
                  <div className="absolute inset-0 w-14 h-14 bg-[#BEE8CC] rounded-full mx-auto opacity-30 scale-0 group-hover:scale-125 transition-transform duration-500 blur-sm"></div>
                </div>
                <h3 className="font-bold text-white mb-2">Calidad Premium</h3>
                <p className="text-pink-100 text-sm leading-relaxed">
                  Ingredientes naturales selectos y técnicas tradicionales
                </p>
              </div>

              <div className="text-center group">
                <div className="relative mb-4">
                  <div className="w-14 h-14 bg-[#FDE68A] rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Star className="w-7 h-7 text-[#8B1E3F]" />
                  </div>
                  <div className="absolute inset-0 w-14 h-14 bg-[#FDE68A] rounded-full mx-auto opacity-30 scale-0 group-hover:scale-125 transition-transform duration-500 blur-sm"></div>
                </div>
                <h3 className="font-bold text-white mb-2">
                  100% Personalizable
                </h3>
                <p className="text-pink-100 text-sm leading-relaxed">
                  Adaptamos cada detalle exactamente a tu gusto
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
