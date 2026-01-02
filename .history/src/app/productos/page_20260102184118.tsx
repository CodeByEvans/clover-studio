import SectionHeader from "@/components/SectionHeader";
import SectionProducts from "@/app/productos/_components/SectionProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clover Studio: Nuestro Catálogo de Productos",
  description:
    "Explora el catálogo de Clover Studio: velas, rosas y aromatizantes personalizados, elaborados con cuidado y dedicación para momentos especiales.",
  openGraph: {
    title: "Clover Studio: Nuestro Catálogo",
    description:
      "Explora el catálogo de Clover Studio: velas, rosas y aromatizantes personalizados, elaborados con cuidado y dedicación para momentos especiales.",
    url: "https://cloverstudio.es/productos",
    siteName: "Clover Studio",
    images: [
      {
        url: "/logo.svg", // Cambia por una imagen representativa del catálogo si quieres
        width: 800,
        height: 600,
        alt: "Clover Studio Catálogo de Productos",
      },
    ],
    type: "website",
  },
};

export default async function Page() {
  return (
    <section className="container mx-auto px-4 py-12 min-h-screen">
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
