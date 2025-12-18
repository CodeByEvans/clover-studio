import { SectionHeader } from "@/components/common/section/SectionHeader";

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
