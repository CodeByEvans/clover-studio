import SectionHeader from "@/components/SectionHeader";
import SectionProducts from "@/components/SectionProducts";
import { useProducts } from "@/hooks/use-products";
import LoadingLayout from "../loading";

export default async function Page() {
  const { data: products, error, status } = useProducts();

  if (status === "pending") {
    return <LoadingLayout />;
  }

  if (status === "error") {
    return <p>Error al cargar los productos: {(error as Error).message}</p>;
  }
  return (
    <section>
      <SectionHeader
        title="Nuestro Catálogo"
        crumbs={[
          { label: "Inicio", href: "/" },
          { label: "Productos", href: "/productos" },
        ]}
      />
      <SectionProducts products={products} />
    </section>
  );
}
