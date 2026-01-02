"use client";

import { useData } from "@/context/data-context";
import Link from "next/link";
import ColeccionesHeader from "./_components/ColeccionesHeader";
import ColeccionesContent from "./_components/ColeccionesContent";

export default function ColeccionesPage() {
  return (
    <>
      <ColeccionesHeader />
      <ColeccionesContent />
    </>
  );
}
