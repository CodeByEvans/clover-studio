import { getCollection, getProductsByCollection } from "@/utils/supabase/api";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const collection = await getCollection(slug);

    if (!collection) {
      return NextResponse.json(
        { message: "Collection not found" },
        { status: 404 }
      );
    }
    const products = await getProductsByCollection(collection.id);
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching products by collection", error },
      { status: 500 }
    );
  }
}
