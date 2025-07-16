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
