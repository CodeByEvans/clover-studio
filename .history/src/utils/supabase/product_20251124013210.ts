import { createClient } from "@/lib/supabase/server";

const supabase = await createClient();

export const getProducts = async () => {
  const { data, error } = await supabase
    .from("products")
    .select(`*, collection:collections(id,title, slug)`);

  if (error) throw error;
  return data;
};

export const getCollections = async () => {
  const { data, error } = await supabase.from("collections").select(`*`);

  if (error) throw error;
  return data;
};
