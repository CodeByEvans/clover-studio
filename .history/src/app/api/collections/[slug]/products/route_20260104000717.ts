import { getProductsByCollection } from "@/utils/supabase/api";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    console.log("Fetching products for collection slug:", slug);
    const products = await getProductsByCollection(slug);
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching products by collection", error },
      { status: 500 }
    );
  }
}
