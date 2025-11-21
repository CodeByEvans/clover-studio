import { getProducts } from "@/utils/supabase/product";
import { NextRequest } from "next/server";

export default async function GET(req: NextRequest) {
  const products = await getProducts();
  return new Response(JSON.stringify(products), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
