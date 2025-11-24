import { createClient } from "@/lib/supabase/server";
import { Collection, Collections } from "@/types/collection.type";
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
    .select(`*`);

  if (error) throw error;
  return data;
};

export const getNavigation = async (): Promise<Navigation> => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from<"navigation", NavigationItem>("navigation")
    .select(`*`);

  if (error) throw error;
  return data;
};
