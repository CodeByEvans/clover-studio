import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Datos de productos de ejemplo
const featuredProducts = [
  {
    id: 1,
    name: 'Vela "Jardín de Lavanda"',
    description: "Aroma relajante a lavanda con un toque de manzanilla.",
    image: "/images/vela-lavanda.jpg", // Reemplaza con la ruta real de tu imagen
    link: "#", // Enlaza a la página del producto
  },
  {
    id: 2,
    name: 'Wax Melts "Bosque Encantado"',
    description: "Notas de pino, sándalo y un toque de incienso.",
    image: "/images/wax-melts-bosque.jpg", // Reemplaza con la ruta real de tu imagen
    link: "#",
  },
  {
    id: 3,
    name: 'Vela "Mañana de Cítricos"',
    description: "Aroma fresco y vibrante a limón, bergamota y naranja.",
    image: "/images/vela-citricos.jpg", // Reemplaza con la ruta real de tu imagen
    link: "#",
  },
];

export default function FeaturedCollection() {
  return (
    <section
      id="coleccion-destacada"
      className="py-20 lg:py-32 bg-white relative"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Nuestra
            <span className="block text-[#ae0006]">Colección Destacada</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre una selección especial de nuestros productos artesanales,
            hechos a mano con amor y dedicación.
          </p>
        </div>

        {/* Galería de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <a
                  href={product.link}
                  className="inline-flex items-center gap-2 text-lg font-medium text-[#ae0006] hover:text-[#8B1E3F] transition-colors duration-300"
                >
                  Ver producto
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
