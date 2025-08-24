import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { CategoryType } from "@/lib/types/Category.type";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCategoryName(
  categoryId: string,
  categories: CategoryType[]
): string {
  const category = categories.find((cat) => cat.id === categoryId);
  return category ? category.name : "Sin categoría";
}

export async function shareContent({
  title,
  text,
  url,
}: {
  title: string;
  text: string;
  url: string;
}) {
  if (navigator.share) {
    try {
      await navigator.share({ title, text, url });
      console.log("Compartido con éxito");
    } catch (error) {
      console.error("Error al compartir:", error);
      throw error; // opcional, para manejarlo fuera
    }
  } else {
    alert("Tu navegador no soporta la función de compartir");
  }
}
