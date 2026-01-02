import ColeccionesHeader from "./_components/ColeccionesHeader";
import ColeccionesContent from "./_components/ColeccionesContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clover Studio: Nuestras Colecciones",
  description:
    "Descubre las colecciones de Clover Studio: velas, rosas y aromatizantes personalizados, hechos con cuidado y dedicación.",
  openGraph: {
    title: "Clover Studio: Nuestras Colecciones",
    description:
      "Descubre las colecciones de Clover Studio: velas, rosas y aromatizantes personalizados, hechos con cuidado y dedicación.",
    url: "https://cloverstudio.es/colecciones",
    siteName: "Clover Studio",
    images: [
      {
        url: "/logo.svg",
        width: 800,
        height: 600,
        alt: "Clover Studio Colecciones",
      },
    ],
    type: "website",
  },
};

export default function ColeccionesPage() {
  return (
    <>
      <ColeccionesHeader />
      <ColeccionesContent />
    </>
  );
}
