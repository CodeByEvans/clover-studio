import ColeccionesHeader from "./_components/ColeccionesHeader";
import ColeccionesContent from "./_components/ColeccionesContent";

export const metadata = {
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
