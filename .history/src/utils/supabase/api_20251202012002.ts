import { createClient } from "@/lib/supabase/server";
import { Collection, Collections } from "@/types/collection.type";
import {
  Fragrance,
  FragranceCategories,
  FragranceCategory,
  Fragrances,
} from "@/types/fragances.type";
import {
  HeaderHighlight,
  HeaderHighlights,
} from "@/types/header_hightlights.type";
import { Navigation, NavigationItem } from "@/types/navigation.type";
import { Product, Products } from "@/types/product.type";

export const getProducts = async (): Promise<Products> => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from<"products", Product>("products")
    .select(`*, collection:collections(id,title, slug)`);

  if (error) throw error;
  return data;
};

export const getCollections = async (): Promise<Collections> => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from<"collections", Collection>("collections")
    .select(`*, products:products(count)`);

  if (error) throw error;
  const collectionsWithCount = data.map((collection) => {
    const { products, ...rest } = collection;
    return {
      ...rest,
      productCount: products[0]?.count ?? 0,
    };
  });
  return collectionsWithCount;
};

export const getNavigation = async (): Promise<Navigation> => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from<"navigation", NavigationItem>("navigation")
    .select(`*`)
    .filter("active", "eq", true);

  if (error) throw error;
  return data;
};

export const getHeaderHighlights = async (): Promise<HeaderHighlights> => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from<"header_highlights", HeaderHighlight>("header_highlights")
    .select(`*`)
    .filter("active", "eq", true);

  if (error) throw error;
  return data;
};

export const getFragances = async (): Promise<Fragrances> => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from<"fragrances", Fragrance>("fragrances")
    .select(
      `id, name, intensity, category:fragrance_categories(id, name), created_at, updated_at`
    );

  if (error) throw error;

  const formatted = data.map((f) => ({
    ...f,
    category: f.category_id[0], // toma el primer elemento del array
  }));

  return formatted;
};

export const getFraganceCategories = async (): Promise<FragranceCategories> => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from<"fragrance_categories", FragranceCategory>("fragrance_categories")
    .select(`*`);

  if (error) throw error;
  return data;
};
