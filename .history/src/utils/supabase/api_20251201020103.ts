import { createClient } from "@/lib/supabase/server";
import { Collection, Collections } from "@/types/collection.type";
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
  const collectionsWithCount = data.map((collection) => ({
    ...collection,
    productCount: collection.products.count,
  }));
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
