import ProductsContent from "@/components/products/products-content";

export const metadata = {
  title: "Productos - Clover Resin Studio",
  description:
    "Explora nuestra colección completa de velas artesanales, wax melts y productos aromáticos únicos.",
};

export default function ProductosPage() {
  return (
    <main className="min-h-screen bg-[#F9F7F3]">
      <ProductsContent />
    </main>
  );
}
