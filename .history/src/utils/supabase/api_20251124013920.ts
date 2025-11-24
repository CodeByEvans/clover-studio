import { createClient } from "@/lib/supabase/server";
import { Collection, Collections } from "@/types/collection.type";
import { Product, Products } from "@/types/product.type";

const supabase = await createClient();

export const getProducts = async (): Promise<Products> => {
  const { data, error } = await supabase
    .from<"products", Product>("products")
    .select(`*, collection:collections(id,title, slug)`);

  if (error) throw error;
  return data;
};

export const getCollections = async (): Promise<Collections> => {
  const { data, error } = await supabase
    .from<"collections", Collection>("collections")
    .select(`*`);

  if (error) throw error;
  return data;
};

export const getNavigation = async () => {
  const { data, error } = await supabase.from("navigation").select(`*`);

  if (error) throw error;
  return data;
};
