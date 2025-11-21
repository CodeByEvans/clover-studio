// components/data-boundary.tsx
"use client";
import LoadingLayout from "@/app/loading";
import { useData } from "@/context/data-context";
import { ReactNode } from "react";

type DataBoundaryProps = {
  children: ReactNode;
  fallback?: ReactNode;
};

export const DataBoundary = ({ children, fallback }: DataBoundaryProps) => {
  const { isLoading, productsError, categoriesError } = useData();

  if (isLoading) {
    return fallback ?? <LoadingLayout />;
  }

  if (productsError || categoriesError) {
    return (
      <div className="p-4 text-red-600">
        <p>Error al cargar datos:</p>
        {productsError && <p>Productos: {productsError.message}</p>}
        {categoriesError && <p>Categorías: {categoriesError.message}</p>}
      </div>
    );
  }

  return <>{children}</>;
};
