import { getProduct } from "@/utils/supabase/api";
import { NextResponse } from "next/server";

export async function GET({ params }: { params: { slug: string } }) {
  try {
    const product = await getProduct(params.slug);
    return NextResponse.json(product, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error fetching product", error: error.message },
      { status: 500 }
    );
  }
}
