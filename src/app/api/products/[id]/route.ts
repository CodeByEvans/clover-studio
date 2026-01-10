import { getProductById } from "@/utils/supabase/api";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const product = await getProductById(id);
    return NextResponse.json(product, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error fetching product", error: error.message },
      { status: 500 }
    );
  }
}
