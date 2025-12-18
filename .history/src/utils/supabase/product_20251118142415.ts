import { createClient } from "@/lib/supabase/server";

export const getProducts = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("products")
    .select(`*, category:collections(title)`);

  if (error) throw error;
  return data;
};
