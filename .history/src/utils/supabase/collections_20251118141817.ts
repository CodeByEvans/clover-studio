import { createClient } from "@/lib/supabase/server";

export const getCollections = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.from("collections").select(`*`);

  if (error) throw error;
  return data;
};
