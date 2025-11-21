import { envs } from "@/config/envs";
import { createBrowserClient } from "@supabase/ssr";

export const createClient = () =>
  createBrowserClient(envs.supabaseUrl!, envs.supabaseKey!);
