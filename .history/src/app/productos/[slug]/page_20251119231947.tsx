import { getProducts } from "@/utils/supabase/product";
import ProductNotFound from "./404";
import Image from "next/image";
import { Products } from "@/types/product.type";
import { Swiper, SwiperSlide } from "swiper/react";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // Obtener todos los productos
  const products: Products = await getProducts();

  // Buscar el producto por slug
  const product = products.find((p) => p.slug === slug);

  if (!product) return <ProductNotFound />;
  return (
    <section>
      <section>
        <div>
          <Swiper>
            {product.images.map((image) => (
              <SwiperSlide key={image}>
                <Image
                  src={image}
                  alt={product.title}
                  width={600}
                  height={600}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div></div>
      </section>
    </section>
  );
}
