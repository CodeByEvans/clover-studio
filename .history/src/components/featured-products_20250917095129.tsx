import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Sparkles, Heart, Zap, ArrowRight } from "lucide-react";

// Datos de productos de ejemplo simplificados
const featuredProducts = [
  {
    id: 1,
    name: "Vela Jardín de Lavanda",
    image: { large: "/images/vela-lavanda.jpg" }, // Usa la misma estructura de datos que tienes
    badge: "Bestseller",
    category: { name: "Velas Artesanales" },
    slug: "vela-jardin-de-lavanda",
    type: "sober", // Ejemplo de tipo de producto
  },
  {
    id: 2,
    name: "Wax Melts Bosque Encantado",
    image: { large: "/images/wax-melts-bosque.jpg" },
    badge: "Nuevo",
    category: { name: "Productos Aromáticos" },
    slug: "wax-melts-bosque-encantado",
    type: "aromatico",
  },
  {
    id: 3,
    name: "Vela Mañana de Cítricos",
    image: { large: "/images/vela-citricos.jpg" },
    badge: "Exclusivo",
    category: { name: "Velas Artesanales" },
    slug: "vela-manana-de-citricos",
    type: "sober",
  },
];

export default function FeaturedCollection() {
  return (
    <section
      id="coleccion"
      className="py-24 bg-gradient-to-br from-white via-[#FEFCF9] to-[#F9F7F3] relative overflow-hidden"
    >
      {/* Elementos de fondo y adornos se mantienen como están, son fantásticos */}
      <div className="absolute top-16 left-16 opacity-15 animate-float">
        <Sparkles className="w-12 h-12 text-[#F8C8DC]" />
      </div>
      <div
        className="absolute bottom-20 right-20 opacity-15 animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        <Heart className="w-8 h-8 text-[#D3B5E5]" />
      </div>
      <div
        className="absolute top-1/3 left-1/4 opacity-10 animate-soft-pulse"
        style={{ animationDelay: "0.8s" }}
      >
        <Star className="w-6 h-6 text-[#BEE8CC]" />
      </div>
      <div className="absolute bottom-1/3 left-1/3 opacity-10 animate-soft-pulse">
        <Zap className="w-4 h-4 text-[#FDE68A]" />
      </div>
      <div className="absolute top-20 right-1/5 w-40 h-40 bg-gradient-to-br from-[#F8C8DC]/10 to-[#D3B5E5]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-24 left-1/5 w-56 h-56 bg-gradient-to-br from-[#BEE8CC]/8 to-[#FDE68A]/8 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Encabezado de la sección simplificado */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Nuestros
            <span className="block text-transparent bg-gradient-to-r from-[#8B1E3F] to-[#F8C8DC] bg-clip-text">
              Productos
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-[#999999] max-w-3xl mx-auto leading-relaxed">
            Descubre nuestra colección de productos artesanales,
            <span className="text-[#8B1E3F] font-medium">
              {" "}
              cada pieza con una historia única.
            </span>
          </p>
        </div>

        {/* Cuadrícula de productos simplificada */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => {
            return (
              <div key={product.id} className="group relative">
                {/* El enlace ahora puede ser a una sección o una URL temporal */}
                <Link href="#coleccion-personalizada" className="block">
                  <div
                    className={`bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border relative cursor-pointer ${
                      product.type === "sober"
                        ? "border-[#EFE6DD]/60"
                        : "border-white/60"
                    }`}
                  >
                    {/* El resto de las decoraciones visuales de la tarjeta */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#F8C8DC]/10 to-[#D3B5E5]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-20 transition-all duration-500 z-20">
                      <div className="flex gap-1">
                        <div className="w-1 h-1 bg-[#F8C8DC] rounded-full"></div>
                        <div className="w-1 h-1 bg-[#D3B5E5] rounded-full"></div>
                        <div className="w-1 h-1 bg-[#BEE8CC] rounded-full"></div>
                      </div>
                    </div>

                    {/* Imagen del producto */}
                    <div className="relative overflow-hidden">
                      <Image
                        src={product.image.large}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 brightness-95"
                      />

                      {/* Insignia del producto */}
                      {product.badge && (
                        <div className="absolute top-6 left-6 z-10">
                          <div
                            className={`px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm transform group-hover:scale-105 transition-transform duration-300 ${
                              product.badge === "Bestseller"
                                ? "bg-[#8B1E3F]/90 text-white border border-[#8B1E3F]/20"
                                : product.badge === "Nuevo"
                                ? "bg-[#BEE8CC]/90 text-[#8B1E3F] border border-[#BEE8CC]/30"
                                : "bg-[#F8C8DC]/90 text-[#8B1E3F] border border-[#F8C8DC]/30"
                            }`}
                          >
                            {product.badge}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Información del producto (sin precio ni carrito) */}
                    <div className="p-8 relative z-10">
                      <div className="text-sm text-[#999999] mb-3 font-medium">
                        {product.category.name}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#8B1E3F] group-hover:to-[#F8C8DC] group-hover:bg-clip-text transition-all duration-300 leading-tight">
                        {product.name}
                      </h3>
                      {/* Las reseñas y el precio se quitan */}
                    </div>

                    {/* Decoración sutil de la esquina */}
                    <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                      <div className="w-8 h-8 border-l-2 border-b-2 border-[#F8C8DC] rounded-bl-xl"></div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA final para ver más */}
        <div className="text-center mt-16">
          <Link
            href="#formulario-contacto"
            className="group relative inline-flex"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#D6BA8A] to-[#c9a876] rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-[#D6BA8A] hover:bg-[#c9a876] text-[#8B1E3F] px-10 py-5 rounded-full font-semibold text-xl transition-all duration-300 shadow-xl transform group-hover:-translate-y-2 group-hover:scale-105 flex items-center gap-3">
              Únete a nuestra lista VIP
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
