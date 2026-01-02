import { Metadata } from "next";
import AromasHeader from "./_components/AromasHeader";
import AromasContent from "./_components/AtomasContent";

export const metadata: Metadata = {
  title: "Clover Studio: Nuestra Colección de Aromas",
  description:
    "Explora nuestra colección de aromas de Clover Studio. Cada aroma está cuidadosamente seleccionado para crear experiencias únicas.",
  openGraph: {
    title: "Clover Studio: Nuestros Aromas",
    description:
      "Explora nuestra colección de aromas de Clover Studio. Cada aroma está cuidadosamente seleccionado para crear experiencias únicas.",
    url: "https://cloverstudio.es/aromas",
    siteName: "Clover Studio",
    images: [
      {
        url: "/logo.svg",
        width: 800,
        height: 600,
        alt: "Clover Studio Aromas",
      },
    ],
    type: "website",
  },
};

export default function AromasPage() {
  return (
    <>
      <AromasHeader />
      <AromasContent />
    </>
  );
}
