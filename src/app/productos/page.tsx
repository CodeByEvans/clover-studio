import ProductsContent from "@/components/products/products-content";
import { Suspense } from "react";

export const metadata = {
  title: "Productos - Clover Studio",
  description:
    "Explora nuestra colección completa de velas artesanales, wax melts y productos aromáticos únicos.",
};

export default function ProductosPage() {
  return (
    <main className="min-h-screen bg-[#F9F7F3]">
      <Suspense fallback={<div>Cargando...</div>}>
        <ProductsContent />
      </Suspense>
    </main>
  );
}
