"use client";
import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

// Datos de reseñas de ejemplo
const reviews = [
  {
    id: 1,
    name: "Dafne",
    productName: "Wax melts de éxtasis floral",
    rating: 5,
    text: "Absolutamente enamorada del aroma. Es mi nuevo ritual de calma por las noches. La calidad es increíble y el empaque, precioso.",
    productImage: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Anónimo",
    productName: "Velas personaliadas",
    rating: 5,
    text: "Trato atento y cercano desde el primer momento. Me gustaron las vela personalizadas.",
    productImage: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Evans",
    productName: "Rosa Personalizada",
    rating: 5,
    text: "Una rosa que le regalé a mi novia en San Valentín. Quedó fascinada con el detalle y el aroma. ¡Definitivamente volveré a comprar!",
    productImage: "/placeholder.svg",
  },
];

export default function Testimonials() {
  return (
    <section
      id="reseñas"
      className="py-24 bg-gradient-to-br from-[#FEFCF9] via-white to-[#F9F7F3] relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <h2 className="">
            Lo que dicen
            <span className="block text-[#ae0006]">nuestros clientes</span>
          </h2>
          <h3 className="">
            La mejor prueba de nuestro trabajo es la felicidad que llevamos a
            cada hogar.
          </h3>
        </div>

        {/* Cuadrícula de reseñas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating
                          ? "text-[#FDE68A] fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                {/* Imagen del producto relacionado con la reseña */}
                <div className="w-16 h-16 relative rounded-full overflow-hidden shadow-md">
                  <Image
                    src={review.productImage}
                    alt={review.productName}
                    width={64}
                    height={64}
                    className="object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                </div>
              </div>

              {/* Nombre del producto */}
              <div className="text-sm text-gray-500 mb-4">
                {review.productName}
              </div>

              <p className="text-gray-800 text-lg italic mb-6">
                &quot;{review.text}&quot;
              </p>
              <div className="font-semibold text-gray-900">{review.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
