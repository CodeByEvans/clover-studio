import React from "react";
import Image from "next/image";
import Link from "next/link";

// Datos de productos de ejemplo
const featuredProducts = [
  {
    id: 1,
    name: "Pumpkin Glow",
    description:
      "Pequeña vela artesanal con forma de calabaza, aroma a canela y manzana caramelizada, perfecta para llenar tu hogar de calidez otoñal.",
    image: "/images/pumpkin-glow.webp", // solo una imagen
    link: "#",
  },
  {
    id: 2,
    name: "Gnome Haven",
    description:
      "Vela artesanal con forma de gnomo, aroma a pino y vainilla, perfecta para crear un rincón mágico en tu hogar.",
    image: "/images/gnome-haven.webp",
    link: "#",
  },
  {
    id: 3,
    name: "Little Boo",
    description:
      "Vela artesanal en forma de fantasma, aroma a vainilla y coco, perfecta para añadir un toque divertido y mágico a tu hogar.",
    image: "/images/little-boo.webp",
    link: "#",
  },
  {
    id: 4,
    name: "Calavera Alegre",
    description:
      "Vela calavera con colores vibrantes y aroma a canela y naranja, perfecta para celebrar la vida y la tradición.",
    image: "/images/calavera-alegre.webp",
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
            La magia de los
            <span className="block text-[#ae0006]">pequeños momentos</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre una selección especial de nuestros productos artesanales,
            hechos a mano con amor y dedicación.
          </p>
        </div>

        {/* Galería de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              href={product.link}
              className="group relative bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 block"
            >
              <div className="relative aspect-square w-full rounded-2xl mb-4 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={800}
                  height={800}
                  className="object-cover w-full h-full rounded-2xl"
                />
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
