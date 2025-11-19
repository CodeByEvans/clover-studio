import { SectionHeader } from "@/components/common/section/SectionHeader";
import SectionProducts from "@/components/common/section/SectionProducts";
import { getProducts } from "@/utils/supabase/product";

export default async function Page() {
  const products = await getProducts();
  return (
    <section>
      <SectionHeader
        title="Nuestro Catalogo"
        crumbs={[
          { label: "Inicio", href: "/" },
          { label: "Productos", href: "/catalogo" },
        ]}
      />
      <SectionProducts products={products} />
    </section>
  );
}
