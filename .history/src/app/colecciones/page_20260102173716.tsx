import ColeccionesHeader from "./_components/ColeccionesHeader";
import ColeccionesContent from "./_components/ColeccionesContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clover Studio: Nuestras Colecciones",
  description: "Colecciones",
};

export default function ColeccionesPage() {
  return (
    <>
      <ColeccionesHeader />
      <ColeccionesContent />
    </>
  );
}
