import SectionHeader from "@/components/SectionHeader";
import SectionProducts from "@/app/productos/_components/SectionProducts";

export default async function Page() {
  return (
    <section>
      <SectionHeader
        title="Nuestro Catálogo"
        crumbs={[
          { label: "Inicio", href: "/" },
          { label: "Productos", href: "/productos" },
        ]}
      />
      <SectionProducts />
    </section>
  );
}
