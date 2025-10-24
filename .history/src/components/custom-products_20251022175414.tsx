import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageSquare, Paintbrush, Package } from "lucide-react";

// Datos de proyectos personalizados de ejemplo
const customProjects = [
  {
    id: 1,
    name: 'Vela de Boda "Nuestra Historia"',
    description: "Velas personalizadas para eventos especiales.",
    image: "/images/custom-vela-boda.jpg", // Reemplaza con una imagen real
  },
  {
    id: 2,
    name: "Pack Corporativo Exclusivo",
    description: "Regalos corporativos con la esencia de tu marca.",
    image: "/images/custom-pack-corporativo.jpg", // Reemplaza con una imagen real
  },
];

export default function CustomProducts() {
  return (
    <section
      id="productos-personalizados"
      className="py-24 bg-gradient-to-br from-white via-[#FEFCF9] to-[#F9F7F3] relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Crea tu
            <span className="block text-[#ae0006]">magia a medida</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Haz realidad tus ideas con creaciones personalizadas para eventos,
            regalos o tu hogar.
          </p>
        </div>

        {/* Galería de proyectos personalizados */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {customProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.name}
                width={800}
                height={500}
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">{project.name}</h3>
                  <p className="text-lg">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pasos del proceso */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-10">
            ¿Cómo funciona?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Paso 1 */}
            <div className="bg-[#BEE8CC]/20 p-8 rounded-2xl shadow-md">
              <div className="flex justify-center mb-4">
                <MessageSquare className="w-10 h-10 text-[#309551]" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900">
                1. Hablemos de tu idea
              </h4>
              <p className="text-gray-600">
                Cuéntanos qué tienes en mente, el estilo, los aromas y la
                ocasión.
              </p>
            </div>

            {/* Paso 2 */}
            <div className="bg-[#FDE68A]/20 p-8 rounded-2xl shadow-md">
              <div className="flex justify-center mb-4">
                <Paintbrush className="w-10 h-10 text-[#D97706]" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900">
                2. Diseño y aprobación
              </h4>
              <p className="text-gray-600">
                Trabajaremos en un diseño único y te enviaremos una propuesta
                para que la apruebes.
              </p>
            </div>

            {/* Paso 3 */}
            <div className="bg-[#ae0006]/10 p-8 rounded-2xl shadow-md">
              <div className="flex justify-center mb-4">
                <Package className="w-10 h-10 text-[#ae0006]" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900">
                3. Creación y envío
              </h4>
              <p className="text-gray-600">
                Una vez aprobado, creamos tu producto con esmero y lo enviamos
                directamente a ti.
              </p>
            </div>
          </div>
        </div>

        {/* Botón de llamada a la acción actualizado */}
        <div className="text-center mt-16">
          <Link href="#contacto" className="group relative inline-flex">
            <div className="absolute inset-0 bg-[#39a459] rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-[#39a459] hover:bg-[#2d8446] text-white px-10 py-5 rounded-full font-semibold text-xl transition-all duration-300 shadow-xl transform group-hover:-translate-y-2 group-hover:scale-105 flex items-center gap-3">
              Empezar mi proyecto personalizado
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
