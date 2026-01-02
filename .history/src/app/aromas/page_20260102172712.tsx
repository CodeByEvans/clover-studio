"use client";

import { useState } from "react";

import { useData } from "@/context/data-context";
import AromasHeader from "./_components/AromasHeader";
import AromasContent from "./_components/AtomasContent";

export default function AromasPage() {
  return (
    <>
      <AromasHeader />
      <AromasContent />
    </>
  );
}
