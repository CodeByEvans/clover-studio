import { createClient } from "@/lib/supabase/server";

export const getProducts = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("products")
    .select(`*, collection:collections(id,title, slug)`);

  if (error) throw error;
  return data;
};
