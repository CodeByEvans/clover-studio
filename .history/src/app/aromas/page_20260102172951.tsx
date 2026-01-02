import { Metadata } from "next";
import AromasHeader from "./_components/AromasHeader";
import AromasContent from "./_components/AtomasContent";

export const metadata: Metadata = {
  title: "Clover Studio: Nuestros Aromas",
  description:
    "Explora nuestra colección de aromas de Clover Studio. Cada aroma está cuidadosamente seleccionado para crear experiencias únicas.",
  openGraph: {
    title: "Nuestros Aromas - Clover Studio",
    description:
      "Explora nuestra colección de velas y aromatizantes de Clover Studio. Cada aroma está cuidadosamente seleccionado para crear experiencias únicas.",
    url: "https://cloverstudio.es/aromas",
    siteName: "Clover Studio",
    images: [
      {
        url: "/aromas/og-image.png", // asegúrate de tener esta imagen en public/aromas
        width: 1200,
        height: 630,
        alt: "Colección de Aromas Clover Studio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuestros Aromas - Clover Studio",
    description:
      "Explora nuestra colección de velas y aromatizantes de Clover Studio. Cada aroma está cuidadosamente seleccionado para crear experiencias únicas.",
    images: ["/aromas/og-image.png"],
    creator: "@cloverstudio", // si tienes cuenta de Twitter
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
