import { getFeaturedProducts } from "@/utils/supabase/api";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await getFeaturedProducts();
    return NextResponse.json(products, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error fetching featured products", error: error.message },
      { status: 500 }
    );
  }
}
