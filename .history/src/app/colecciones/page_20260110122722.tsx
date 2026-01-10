import ColeccionesHeader from "./_components/ColeccionesHeader";
import ColeccionesContent from "./_components/ColeccionesContent";
import { Metadata } from "next";
import { collectionsAPI } from "@/services/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

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

async function getDehydratedState() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["collections"],
    queryFn: collectionsAPI.getAll,
  });

  return {
    dehydratedState: dehydrate(queryClient),
  };
}

export default async function ColeccionesPage() {
  const { dehydratedState } = await getDehydratedState();
  return (
    <>
      <HydrationBoundary state={dehydratedState}>
        <ColeccionesHeader />
        <ColeccionesContent />
      </HydrationBoundary>
    </>
  );
}
