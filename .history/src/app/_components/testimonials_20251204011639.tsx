"use client";
import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

// Datos de reseñas de ejemplo
const reviews = [
  {
    id: 1,
    name: "Dafne",
    productName: "Wax melts de éxtasis floral",
    rating: 5,
    text: "Absolutamente enamorada del aroma. Es mi nuevo ritual de calma por las noches. La calidad es increíble y el empaque, precioso.",
    productImage: "/images/dafne-testimonial.jpeg",
  },
  {
    id: 2,
    name: "Anónimo",
    productName: "Lirio",
    rating: 5,
    text: "Compré waxmelts y el de lirio fue mi favorito de todas las variedad que había, yo lo tengo en el cuarto colocado y está genial el aroma que da incluso cuando después de apagarse sigue el aroma.",
    productImage: "/images/anonymous-testimonial.jpg",
  },
  {
    id: 3,
    name: "Evans",
    productName: "Rosa Personalizada",
    rating: 5,
    text: "Una rosa que le regalé a mi novia en San Valentín. Quedó fascinada con el detalle y el aroma. ¡Definitivamente volveré a comprar!",
    productImage: "/images/evans-testimonial.jpeg",
  },
];

export default function Testimonials() {
  const [activeImage, setActiveImage] = React.useState<string | null>(null);

  // Variants para el contenedor y las tarjetas
  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = (i: number) => ({
    hidden: { opacity: 0, y: 50, x: i % 2 === 0 ? -30 : 30 },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      },
    },
  });

  return (
    <section
      id="reseñas"
      className="py-24 bg-gradient-to-br from-[#FEFCF9] via-white to-[#F9F7F3] relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Lo que dicen{" "}
            <span className=" text-[#ae0006]">nuestros clientes</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            La mejor prueba de nuestro trabajo es la felicidad que llevamos a
            cada hogar.
          </p>
        </div>

        {/* Desktop */}
        <motion.div
          className="hidden md:grid md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 cursor-pointer"
              variants={itemVariants(i)}
              onClick={() => setActiveImage(review.productImage)}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className={`w-5 h-5 ${
                        j < review.rating
                          ? "text-[#FDE68A] fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <div className="w-16 h-16 relative rounded-full overflow-hidden shadow-md">
                  <Image
                    src={review.productImage || "/placeholder.svg"}
                    alt={review.productName}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="text-sm text-gray-500 mb-4">
                {review.productName}
              </div>
              <p className="text-gray-800 text-lg italic mb-6">
                &quot;{review.text}&quot;
              </p>
              <div className="font-semibold text-gray-900">{review.name}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile */}
        <div className="md:hidden grid grid-cols-1 gap-12">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 cursor-pointer"
              onClick={() => setActiveImage(review.productImage)}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className={`w-5 h-5 ${
                        j < review.rating
                          ? "text-[#FDE68A] fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <div className="w-16 h-16 relative rounded-full overflow-hidden shadow-md">
                  <Image
                    src={review.productImage || "/placeholder.svg"}
                    alt={review.productName}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
              </div>
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

      {/* Modal Imagen */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-lg w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-4 -right-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:scale-110 transition"
              aria-label="Cerrar"
            >
              ✕
            </button>
            <Image
              src={activeImage}
              alt="Imagen ampliada"
              width={600}
              height={600}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      )}
    </section>
  );
}
