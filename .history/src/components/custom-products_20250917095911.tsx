import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Heart,
  Zap,
  MessageSquare,
  Paintbrush,
  Package,
  Star,
} from "lucide-react";

// Datos de proyectos personalizados de ejemplo
const customProjects = [
  {
    id: 1,
    name: "Vela de Boda",
    description: "Velas personalizadas para eventos especiales.",
    image: "/images/custom-vela-boda.jpg", // Reemplaza con una imagen real
    link: "#", // Enlaza a la página de contacto o formulario
  },
  {
    id: 2,
    name: "Pack Corporativo",
    description: "Regalos corporativos con la esencia de tu marca.",
    image: "/images/custom-pack-corporativo.jpg", // Reemplaza con una imagen real
    link: "#",
  },
  {
    id: 3,
    name: "Regalo Personalizado",
    description: "Un detalle único para esa persona especial.",
    image: "/images/custom-regalo-especial.jpg", // Reemplaza con una imagen real
    link: "#",
  },
];

export default function CustomProducts() {
  return (
    <section
      id="productos-personalizados"
      className="py-24 bg-gradient-to-br from-[#FEFCF9] via-[#F9F7F3] to-white relative overflow-hidden"
    >
      {/* Elementos de fondo y adornos */}
      <div className="absolute top-16 right-16 opacity-15 animate-float">
        <Sparkles className="w-12 h-12 text-[#BEE8CC]" />
      </div>
      <div
        className="absolute bottom-20 left-20 opacity-15 animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        <Heart className="w-8 h-8 text-[#D3B5E5]" />
      </div>
      <div
        className="absolute top-1/3 right-1/4 opacity-10 animate-soft-pulse"
        style={{ animationDelay: "0.8s" }}
      >
        <Zap className="w-6 h-6 text-[#FDE68A]" />
      </div>
      <div className="absolute bottom-1/3 right-1/3 opacity-10 animate-soft-pulse">
        <Star className="w-4 h-4 text-[#F8C8DC]" />
      </div>

      <div className="absolute top-20 left-1/5 w-40 h-40 bg-gradient-to-br from-[#BEE8CC]/10 to-[#FDE68A]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-24 right-1/5 w-56 h-56 bg-gradient-to-br from-[#D3B5E5]/8 to-[#F8C8DC]/8 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Encabezado de la sección, usando la misma estética del título degradado */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Crea tu magia
            <span className="block text-transparent bg-gradient-to-r from-[#8B1E3F] to-[#F8C8DC] bg-clip-text">
              a medida
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-[#999999] max-w-3xl mx-auto leading-relaxed">
            Haz realidad tus ideas con
            <span className="text-[#8B1E3F] font-medium">
              {" "}
              creaciones únicas
            </span>{" "}
            para eventos, regalos o tu hogar.
          </p>
        </div>

        {/* Galería de productos personalizada */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customProjects.map((project) => (
            <Link
              key={project.id}
              href={project.link}
              className="group relative"
            >
              <div
                className={`bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border relative cursor-pointer border-white/60`}
              >
                {/* Decoración de fondo */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#BEE8CC]/10 to-[#FDE68A]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-20 transition-all duration-500 z-20">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-[#F8C8DC] rounded-full"></div>
                    <div className="w-1 h-1 bg-[#D3B5E5] rounded-full"></div>
                    <div className="w-1 h-1 bg-[#BEE8CC] rounded-full"></div>
                  </div>
                </div>

                {/* Imagen del proyecto */}
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Información del proyecto */}
                <div className="p-8 relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                    {project.name}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA final para empezar el proyecto */}
        <div className="text-center mt-16">
          <Link href="#contacto" className="group relative inline-flex">
            <div className="absolute inset-0 bg-gradient-to-r from-[#D6BA8A] to-[#c9a876] rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-[#D6BA8A] hover:bg-[#c9a876] text-[#8B1E3F] px-10 py-5 rounded-full font-semibold text-xl transition-all duration-300 shadow-xl transform group-hover:-translate-y-2 group-hover:scale-105 flex items-center gap-3">
              Empezar mi proyecto
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
