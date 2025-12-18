import SectionHeader from "@/components/SectionHeader";
import SectionProducts from "@/components/SectionProducts";
import { getProducts } from "@/utils/supabase/product";

export default async function Page() {
  const products = await getProducts();
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
