import { SectionHeader } from "@/components/common/SectionHeader";

export default function Page() {
  return (
    <section>
      <SectionHeader
        title="Productos"
        crumbs={[
          { label: "Inicio", href: "/" },
          { label: "Productos", href: "/productos" },
        ]}
      />
    </section>
  );
}
