"use client";

import { useData } from "@/context/data-context";
import ProductNotFound from "../404";
import AddToCartSection from "./AddToCartSection";
import SwiperCarousel from "@/components/SwiperCarousel";

export const SectionProduct = ({ slug }: { slug: string }) => {
  const { products, fragrances } = useData();

  // Search product by slug
  const product = products.find((p) => p.slug === slug);
  if (!product) return <ProductNotFound />;

  const needsFragrance = product.collection.slug === "quemadores";

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <SwiperCarousel images={product.images} />
      </div>

      <div className="flex flex-col justify-start md:justify-center gap-4">
        <h1 className="text-4xl font-extrabold text-[#8B1E3F]">
          {product.title}
        </h1>
        <h2 className="text-2xl font-semibold mt-2">{product.price} €</h2>
        <p className="text-gray-700 mt-4 leading-relaxed">
          {product.description}
        </p>

        {needsFragrance && (
          <div className="mt-4">
            <label className="block mb-2 font-semibold text-gray-800">
              Elige tu fragancia
            </label>

            <select className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B1E3F]">
              <option value="">Selecciona un aroma</option>
              {fragrances.map((fragance) => (
                <option key={fragance.id} value={fragance.id}>
                  {fragance.name} · {fragance.intensity}
                </option>
              ))}
            </select>
          </div>
        )}

        <AddToCartSection product={product} />
      </div>
    </section>
  );
};

export default SectionProduct;
