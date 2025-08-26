import CategoriesOverview from "@/components/categories/categories-overview";

export const metadata = {
  title: "Categorías - Clover Studio",
  description:
    "Explora todas nuestras categorías de productos aromáticos artesanales: velas, wax melts, quemadores y más.",
};

export default function CategoriasPage() {
  return (
    <main className="min-h-screen bg-[#F9F7F3]">
      <CategoriesOverview />
    </main>
  );
}
